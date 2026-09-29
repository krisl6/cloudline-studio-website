import { NextResponse } from "next/server"
import { randomUUID } from "crypto"
import { larkEnv, getTenantToken, createRecord } from "@/lib/lark"
import { sendEmail, eventSignupConfirmationEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const idea = String(body.idea || "").trim()
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !idea || body.consent !== "yes") {
      return NextResponse.json({ ok: false, error: "Please complete the required fields and consent checkbox." }, { status: 400 })
    }

    const { appId, appSecret, baseToken } = larkEnv()
    const tableId = process.env.LARK_EVENT_TABLE_ID?.trim().split(/[?&]/)[0]
    if (!appId || !appSecret || !baseToken || !tableId) {
      return NextResponse.json({ ok: false, error: "Signup is temporarily unavailable. Please try again shortly." }, { status: 503 })
    }

    const token = await getTenantToken(appId, appSecret)
    const saved = await createRecord(baseToken, tableId, token, {
      submission_id: randomUUID(),
      name,
      email,
      phone: String(body.phone || "").trim(),
      business: String(body.company || "").trim(),
      participants: "1",
      event_dates: "To be announced",
      date_type: "Signup interest",
      target_audience: String(body.role || "").trim(),
      goal: [
        "Event: Build Your Business with AI",
        `Idea: ${idea}`,
        `AI experience: ${String(body.experience || "").trim() || "Not specified"}`,
        "Event updates consent: yes",
      ].join("\n"),
      submitted_at: new Date().toISOString(),
    })
    if (!saved) return NextResponse.json({ ok: false, error: "We couldn’t save your signup. Please try again." }, { status: 500 })

    const { subject, html } = eventSignupConfirmationEmail(name)
    sendEmail({ to: email, subject, html }).catch((error) => console.error("[event-signup] email send threw", error))
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[event-signup] Unexpected error:", error)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
