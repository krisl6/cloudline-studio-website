import { NextResponse } from "next/server"
import { randomUUID } from "crypto"

// Lark (international). For Feishu (China) use https://open.feishu.cn instead.
const LARK_DOMAIN = "https://open.larksuite.com"

async function getTenantToken(appId: string, appSecret: string): Promise<string> {
  const res = await fetch(`${LARK_DOMAIN}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`Lark auth failed: ${data.msg || res.status}`)
  }
  return data.tenant_access_token as string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, niche, challenge, ab_variant, website_url, instagram_handle, course_url } = body

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 })
    }

    const appId = process.env.LARK_APP_ID
    const appSecret = process.env.LARK_APP_SECRET
    const baseToken = process.env.LARK_BASE_APP_TOKEN
    const tableId = process.env.LARK_TABLE_ID
    if (!appId || !appSecret || !baseToken || !tableId) {
      console.error("[audit-request] Lark env vars not configured")
      return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
    }

    const token = await getTenantToken(appId, appSecret)

    // Field names must match the column names in your Lark Base table (Text columns).
    const fields: Record<string, string> = {
      submission_id: randomUUID(),
      name,
      email,
      submitted_at: new Date().toISOString(),
    }
    if (niche) fields.niche = niche
    if (challenge) fields.challenge = challenge
    if (ab_variant) fields.ab_variant = ab_variant
    if (website_url) fields.website_url = website_url
    if (instagram_handle) fields.instagram_handle = instagram_handle
    if (course_url) fields.course_url = course_url

    const res = await fetch(
      `${LARK_DOMAIN}/open-apis/bitable/v1/apps/${baseToken}/tables/${tableId}/records`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      },
    )

    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.code !== 0) {
      console.error("[audit-request] Lark error:", data)
      return NextResponse.json({ ok: false, error: "Failed to save submission." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[audit-request] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
