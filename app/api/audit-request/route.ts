import { NextResponse } from "next/server"
import { randomUUID } from "crypto"
import { larkEnv, getTenantToken, createRecord } from "@/lib/lark"
import { sendEmail, auditRequestConfirmationEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, niche, challenge, ab_variant, website_url, instagram_handle, course_url, interest } = body

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 })
    }

    const { appId, appSecret, baseToken } = larkEnv()
    const tableId = process.env.LARK_TABLE_ID?.trim().split(/[?&]/)[0]
    if (!appId || !appSecret || !baseToken || !tableId) {
      console.error("[audit-request] Lark env vars not configured")
      return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
    }

    const token = await getTenantToken(appId, appSecret)

    const desired: Record<string, string> = {
      submission_id: randomUUID(),
      name,
      email,
      submitted_at: new Date().toISOString(),
    }
    if (niche) desired.niche = niche
    if (challenge) desired.challenge = challenge
    if (ab_variant) desired.ab_variant = ab_variant
    if (website_url) desired.website_url = website_url
    if (instagram_handle) desired.instagram_handle = instagram_handle
    if (course_url) desired.course_url = course_url
    if (interest) desired.interest = interest

    const ok = await createRecord(baseToken, tableId, token, desired)
    if (!ok) return NextResponse.json({ ok: false, error: "Failed to save submission." }, { status: 500 })

    // Best-effort: the Lark record above is the source of truth, so an email
    // failure here shouldn't fail the whole submission.
    const { subject, html } = auditRequestConfirmationEmail(name)
    sendEmail({ to: email, subject, html }).catch((err) => console.error("[audit-request] email send threw", err))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[audit-request] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
