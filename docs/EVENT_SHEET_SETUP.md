# Event participant Google Sheet — setup

This gives the Stripe webhook a place to record ticket buyers.

**Uses your existing "Get a Quote" spreadsheet**, in a new tab of its own —
not a new spreadsheet file. The script below only ever touches that one named
tab (`Event Registrants`), so it never reads or writes whatever's already in
your other tab(s).

Sheet: https://docs.google.com/spreadsheets/d/1HJAKxWK7dV2LSjo7naNtMn9mriASNdr3pNQ3OQsuDW0/edit

## 1. Add a new tab

Open the sheet above. At the bottom, click **+** to add a new sheet/tab.
Rename it exactly **`Event Registrants`** (must match exactly — the script
below looks it up by this name). You don't need to add headers yourself —
the script adds them automatically on first run.

## 2. Add the Apps Script

Still in that spreadsheet: **Extensions → Apps Script**. Delete anything in
the editor and paste this in:

```javascript
// Paste into Extensions > Apps Script, opened from the "Get a Quote" spreadsheet.
var SHEET_NAME = "Event Registrants";
var HEADERS = ["Name", "Email", "Phone", "Ticket Tier", "Amount (MYR)", "Payment Reference", "Registered At"];

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  ensureHeaders(sheet);
  var data = JSON.parse(e.postData.contents);
  var row = HEADERS.map(function (h) { return data[h] || ""; });
  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaders(sheet) {
  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (firstRow.join("") === "") {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}
```

## 3. Deploy it as a web app

**Deploy → New deployment**:
- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Click **Deploy**, authorize the permissions it asks for, then copy the
resulting URL (ends in `/exec`).

## 4. Give me that URL

Send me the `/exec` URL and I'll set it as `EVENT_SHEETS_WEBHOOK_URL`.

## Whenever you edit the script later

Google Apps Script requires a **new deployment version** (Deploy → Manage
deployments → Edit → new version) for code changes to take effect — saving
alone isn't enough.

## Note on the existing "Get a Quote" tab

This spreadsheet's original tab (whatever it's named) is untouched by this
script — it only ever writes to the `Event Registrants` tab, looked up by
name. If you ever rename that tab, update `SHEET_NAME` in the script to match.
