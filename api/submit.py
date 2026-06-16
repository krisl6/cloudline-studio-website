"""
CloudLine Studio — lead form handler (Vercel Python serverless function).

POST /api/submit  with JSON body:
  { "name", "email" (required), "phone", "aims": [...], "services": [...] }

Writes the lead to Supabase (REST, service_role key) and appends a row to a
Google Sheet (service account). Returns 200 if the Supabase write succeeds.

Required environment variables (set in Vercel → Settings → Environment Variables):
  SUPABASE_URL                 e.g. https://xxxx.supabase.co
  SUPABASE_SERVICE_KEY         service_role key (server-side only — keep secret)
  GOOGLE_SHEET_ID              the spreadsheet ID from its URL
  GOOGLE_SERVICE_ACCOUNT_JSON  the full service-account JSON (as a single string)
"""

from http.server import BaseHTTPRequestHandler
from datetime import datetime, timezone
import json
import os
import urllib.request


def _insert_supabase(record):
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_KEY")
    if not url or not key:
        raise RuntimeError("SUPABASE_URL / SUPABASE_SERVICE_KEY not configured")
    endpoint = url.rstrip("/") + "/rest/v1/leads"
    body = json.dumps(record).encode("utf-8")
    req = urllib.request.Request(endpoint, data=body, method="POST")
    req.add_header("apikey", key)
    req.add_header("Authorization", "Bearer " + key)
    req.add_header("Content-Type", "application/json")
    req.add_header("Prefer", "return=minimal")
    with urllib.request.urlopen(req, timeout=10) as resp:
        return resp.status


def _append_sheet(row):
    sheet_id = os.environ.get("GOOGLE_SHEET_ID")
    sa_json = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON")
    if not sheet_id or not sa_json:
        raise RuntimeError("GOOGLE_SHEET_ID / GOOGLE_SERVICE_ACCOUNT_JSON not configured")
    # Imported lazily so a Sheets misconfig never blocks the Supabase write.
    import gspread
    from google.oauth2.service_account import Credentials

    info = json.loads(sa_json)
    creds = Credentials.from_service_account_info(
        info, scopes=["https://www.googleapis.com/auth/spreadsheets"]
    )
    client = gspread.authorize(creds)
    client.open_by_key(sheet_id).sheet1.append_row(row, value_input_option="USER_ENTERED")


class handler(BaseHTTPRequestHandler):
    def _send(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode("utf-8"))

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0) or 0)
            raw = self.rfile.read(length) if length else b"{}"
            data = json.loads(raw or b"{}")
        except Exception:
            return self._send(400, {"ok": False, "error": "Invalid request body"})

        email = (data.get("email") or "").strip()
        if "@" not in email or "." not in email:
            return self._send(400, {"ok": False, "error": "A valid email is required"})

        aims = data.get("aims") or []
        services = data.get("services") or []
        aims = aims if isinstance(aims, list) else [str(aims)]
        services = services if isinstance(services, list) else [str(services)]

        record = {
            "name": (data.get("name") or "").strip(),
            "email": email,
            "phone": (data.get("phone") or "").strip(),
            "aims": aims,
            "services": services,
        }

        warnings = {}
        try:
            _insert_supabase(record)
        except Exception as exc:  # Supabase is the source of truth — fail if it fails.
            return self._send(500, {"ok": False, "error": "Could not save your submission. Please try again."})

        try:
            ts = datetime.now(timezone.utc).isoformat()
            _append_sheet([ts, record["name"], email, record["phone"], ", ".join(aims), ", ".join(services)])
        except Exception as exc:  # Sheet is a mirror — don't fail the request if it errors.
            warnings["sheet"] = str(exc)

        return self._send(200, {"ok": True, "warnings": warnings or None})

    def do_GET(self):
        self._send(405, {"ok": False, "error": "Method not allowed — POST only"})
