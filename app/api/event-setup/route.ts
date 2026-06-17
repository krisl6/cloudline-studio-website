import { NextResponse } from "next/server"
import { LARK_DOMAIN, larkEnv, getTenantToken } from "@/lib/lark"

// TEMPORARY: creates the "Event requests" table in the Lark Base and returns its table_id.
// Token-guarded; delete this route after running it once.
const SETUP_TOKEN = "clx-setup-7d2a9f"

export async function GET(request: Request) {
  if (new URL(request.url).searchParams.get("token") !== SETUP_TOKEN) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 })
  }
  const { appId, appSecret, baseToken } = larkEnv()
  if (!appId || !appSecret || !baseToken) {
    return NextResponse.json({ ok: false, error: "env missing" }, { status: 503 })
  }

  const token = await getTenantToken(appId, appSecret)
  const res = await fetch(`${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      table: {
        name: "Event requests",
        fields: [
          { field_name: "name", type: 1 },
          { field_name: "email", type: 1 },
          { field_name: "phone", type: 1 },
          { field_name: "business", type: 1 },
          { field_name: "goal", type: 1 },
          { field_name: "submitted_at", type: 1 },
          { field_name: "submission_id", type: 1 },
        ],
      },
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (data.code !== 0) {
    return NextResponse.json({ ok: false, error: data.msg, code: data.code }, { status: 500 })
  }
  return NextResponse.json({ ok: true, table_id: data.data?.table_id })
}
