import { NextResponse } from "next/server"
import { randomUUID } from "crypto"
import { larkEnv, getTenantToken, createRecord } from "@/lib/lark"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = (body.name || "").trim()
    const email = (body.email || "").trim()
    const phone = (body.phone || "").trim()
    const attendees = String(body.attendees ?? "").trim()
    const ticket_interest = (body.ticket_interest || "").trim()
    const message = (body.message || "").trim()

    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 })
    }

    const { appId, appSecret, baseToken } = larkEnv()
    const tableId = process.env.LARK_MASTERCLASS_RSVP_TABLE_ID?.trim().split(/[?&]/)[0]
    if (!appId || !appSecret || !baseToken || !tableId) {
      console.error("[masterclass-rsvp] Lark env vars not configured")
      return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
    }

    const token = await getTenantToken(appId, appSecret)
    const ok = await createRecord(baseToken, tableId, token, {
      submission_id: randomUUID(),
      name,
      email,
      phone,
      attendees,
      ticket_interest,
      message,
      submitted_at: new Date().toISOString(),
    })

    if (!ok) return NextResponse.json({ ok: false, error: "Failed to save your RSVP." }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[masterclass-rsvp] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
