// Shared Lark Base (Bitable) helpers for serverless routes.
export const LARK_DOMAIN = "https://open.larksuite.com" // Feishu (China): https://open.feishu.cn

export function larkEnv() {
  const appId = process.env.LARK_APP_ID
  const appSecret = process.env.LARK_APP_SECRET
  // Tolerate a pasted URL fragment — keep only the token before any "?" or "&".
  const baseToken = process.env.LARK_BASE_APP_TOKEN?.trim().split(/[?&]/)[0]
  return { appId, appSecret, baseToken }
}

export async function getTenantToken(appId: string, appSecret: string): Promise<string> {
  const res = await fetch(`${LARK_DOMAIN}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  })
  const data = await res.json().catch(() => ({}))
  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`Lark auth failed: ${data.msg || res.status}`)
  }
  return data.tenant_access_token as string
}

async function getFieldNames(baseToken: string, tableId: string, token: string): Promise<string[] | null> {
  const res = await fetch(
    `${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables/${tableId}/fields?page_size=200`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  const data = await res.json().catch(() => ({}))
  if (data.code !== 0) return null
  return (data.data?.items || []).map((f: any) => f.field_name as string)
}

// Creates a record, matching keys to the table's real columns case-insensitively
// and skipping columns that don't exist. Returns true on success.
export async function createRecord(
  baseToken: string,
  tableId: string,
  token: string,
  desired: Record<string, string>,
): Promise<boolean> {
  const columns = await getFieldNames(baseToken, tableId, token)
  let fields = desired
  if (columns) {
    const byLower = new Map(columns.map((c) => [c.toLowerCase(), c]))
    fields = {}
    for (const [key, value] of Object.entries(desired)) {
      const actual = byLower.get(key.toLowerCase())
      if (actual) fields[actual] = value
    }
    if (Object.keys(fields).length === 0) {
      console.error("[lark] no matching columns", { expected: Object.keys(desired), columns })
      return false
    }
  }

  const res = await fetch(`${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables/${tableId}/records`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ fields }),
  })
  const data = await res.json().catch(() => ({}))
  if (data.code !== 0) {
    console.error("[lark] write failed", res.status, data)
    return false
  }
  return true
}
