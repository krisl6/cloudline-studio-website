import { NextResponse } from "next/server"
import { sendEmail, ticketConfirmationEmail } from "@/lib/email"

const EVENT_NAME = "Build Your Second Brain & Automate Your Marketing with Agentic AI"
const TIER = "Early Bird Buddy"
const AMOUNT_LABEL = "599.00 (pair — 2 tickets)"

type Attendee = { name: string; email: string; phone: string }

function isValidAttendee(a: unknown): a is Attendee {
  if (!a || typeof a !== "object") return false
  const { name, email, phone } = a as Record<string, unknown>
  return (
    typeof name === "string" && name.trim().length > 0 &&
    typeof email === "string" && email.includes("@") &&
    typeof phone === "string" && phone.trim().length > 0
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const sessionId = typeof body?.sessionId === "string" ? body.sessionId : ""
    const attendee1 = body?.attendee1
    const attendee2 = body?.attendee2

    if (!isValidAttendee(attendee1) || !isValidAttendee(attendee2)) {
      return NextResponse.json({ ok: false, error: "Please fill in name, email, and phone for both attendees." }, { status: 400 })
    }

    const attendees = [attendee1, attendee2]
    const sheetsWebhookUrl = process.env.EVENT_SHEETS_WEBHOOK_URL

    for (const attendee of attendees) {
      if (sheetsWebhookUrl) {
        try {
          const res = await fetch(sheetsWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Name: attendee.name.trim(),
              Email: attendee.email.trim(),
              Phone: attendee.phone.trim(),
              "Ticket Tier": TIER,
              "Amount (MYR)": AMOUNT_LABEL,
              "Payment Reference": sessionId || "(no session id)",
              "Registered At": new Date().toISOString(),
            }),
          })
          if (!res.ok) console.warn(`[pair-registration] Google Sheets webhook returned ${res.status}`)
        } catch (err) {
          console.error("[pair-registration] Google Sheets webhook failed", err)
        }
      } else {
        console.error("[pair-registration] EVENT_SHEETS_WEBHOOK_URL not configured — registrant not recorded to Sheets")
      }

      const { subject, html } = ticketConfirmationEmail(attendee.name, TIER, EVENT_NAME)
      sendEmail({ to: attendee.email, subject, html }).catch((err) =>
        console.error("[pair-registration] email send threw", err)
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[pair-registration] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
