import { NextResponse } from "next/server"
import { LARK_DOMAIN, larkEnv, getTenantToken } from "@/lib/lark"

// TEMPORARY: add the new columns to the "Event requests" table. Token-guarded; delete after use.
const SETUP_TOKEN = "clx-setup-7d2a9f"
const NEW_COLUMNS = ["participants", "event_dates", "date_type", "target_audience"]

export async function GET(request: Request) {
  if (new URL(request.url).searchParams.get("token") !== SETUP_TOKEN) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 })
  }
  const { appId, appSecret, baseToken } = larkEnv()
  const tableId = process.env.LARK_EVENT_TABLE_ID?.trim().split(/[?&]/)[0]
  if (!appId || !appSecret || !baseToken || !tableId) {
    return NextResponse.json({ ok: false, error: "env missing" }, { status: 503 })
  }

  const token = await getTenantToken(appId, appSecret)
  const fr = await fetch(`${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables/${tableId}/fields?page_size=200`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const items = (await fr.json()).data?.items || []
  const have = new Set(items.map((f: any) => f.field_name.toLowerCase()))
  const log: string[] = []

  for (const col of NEW_COLUMNS) {
    if (have.has(col.toLowerCase())) { log.push(`exists: ${col}`); continue }
    const r = await fetch(`${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables/${tableId}/fields`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ field_name: col, type: 1 }),
    })
    const d = await r.json()
    log.push(`create ${col}: ${d.code === 0 ? "ok" : `ERR ${d.code} ${d.msg}`}`)
  }
  return NextResponse.json({ ok: true, log })
}
