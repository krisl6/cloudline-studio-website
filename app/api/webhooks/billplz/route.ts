import { NextResponse } from "next/server"
import { verifyBillplzSignature } from "@/lib/billplz"
import { sendEmail, ticketConfirmationEmail } from "@/lib/email"

const TIER_LABELS: Record<string, string> = {
  "early-bird": "Early Bird",
  "standard": "Standard",
  "virtual-pass": "Virtual Pass",
}

export async function POST(request: Request) {
  // Billplz posts this as a standard HTML form submission (x-www-form-urlencoded),
  // not JSON — must read as form data, not request.json().
  const raw = await request.text()
  const payload = Object.fromEntries(new URLSearchParams(raw))

  const signature = payload["x_signature"]
  if (!signature || !verifyBillplzSignature(payload, signature)) {
    console.error("[billplz-webhook] signature verification failed")
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 })
  }

  if (payload["paid"] !== "true") {
    return NextResponse.json({ ok: true, skipped: "not paid" })
  }

  const name = payload["name"] || ""
  const email = payload["email"] || ""
  const mobile = payload["mobile"] || ""
  const amountSen = Number(payload["paid_amount"] || payload["amount"] || 0)
  const tierKey = payload["reference_1"] || ""
  const tierLabel = TIER_LABELS[tierKey] || tierKey || "Unknown"

  if (!email) {
    console.error("[billplz-webhook] paid bill with no customer email", payload["id"])
    return NextResponse.json({ ok: true })
  }

  const sheetsWebhookUrl = process.env.EVENT_SHEETS_WEBHOOK_URL
  if (sheetsWebhookUrl) {
    try {
      const res = await fetch(sheetsWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: mobile,
          "Ticket Tier": tierLabel,
          "Amount (MYR)": (amountSen / 100).toFixed(2),
          "Payment Reference": payload["id"] || "", // Billplz bill ID
          "Registered At": new Date().toISOString(),
        }),
      })
      if (!res.ok) console.warn(`[billplz-webhook] Google Sheets webhook returned ${res.status}`)
    } catch (err) {
      console.error("[billplz-webhook] Google Sheets webhook failed", err)
    }
  } else {
    console.error("[billplz-webhook] EVENT_SHEETS_WEBHOOK_URL not configured — registrant not recorded to Sheets")
  }

  const { subject, html } = ticketConfirmationEmail(name, tierLabel)
  sendEmail({ to: email, subject, html }).catch((err) => console.error("[billplz-webhook] email send threw", err))

  return NextResponse.json({ ok: true })
}
