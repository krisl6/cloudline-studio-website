import { NextResponse } from "next/server"
import Stripe from "stripe"
import { sendEmail, ticketConfirmationEmail } from "@/lib/email"

// Distinguishes ticket tiers by amount charged (in sen, MYR's smallest unit)
// rather than looking up the Payment Link / line items — avoids an extra
// Stripe API call for a handful of low-volume ticket tiers. 19900 is shared
// by marketing-masterclass's "Early Bird" and "Virtual Pass" (both RM199) —
// a pre-existing ambiguity, not introduced here.
const TIER_BY_AMOUNT: Record<number, string> = {
  19900: "Early Bird",
  25900: "Standard",
  65900: "Early Bird Pair", // second-brain-ai's 2-ticket bundle
}

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secretKey || !webhookSecret) {
    console.error("[stripe-webhook] STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET not configured")
    return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
  }

  // Signature verification needs the raw, unparsed body — never call .json() first.
  const rawBody = await request.text()
  const signature = request.headers.get("stripe-signature")
  if (!signature) {
    return NextResponse.json({ ok: false, error: "Missing signature." }, { status: 400 })
  }

  const stripe = new Stripe(secretKey)
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err)
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 })
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ok: true, skipped: event.type })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const name = session.customer_details?.name?.trim() || ""
  const email = session.customer_details?.email?.trim() || ""
  const phone = session.customer_details?.phone?.trim() || ""
  const amount = session.amount_total ?? 0
  const tier = TIER_BY_AMOUNT[amount] || `Unknown (RM ${(amount / 100).toFixed(2)})`

  if (!email) {
    console.error("[stripe-webhook] checkout.session.completed with no customer email", session.id)
    return NextResponse.json({ ok: true }) // Nothing useful to record; ack so Stripe doesn't retry forever.
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
          Phone: phone,
          "Ticket Tier": tier,
          "Amount (MYR)": (amount / 100).toFixed(2),
          "Payment Reference": session.id,
          "Registered At": new Date().toISOString(),
        }),
      })
      if (!res.ok) console.warn(`[stripe-webhook] Google Sheets webhook returned ${res.status}`)
    } catch (err) {
      console.error("[stripe-webhook] Google Sheets webhook failed", err)
    }
  } else {
    console.error("[stripe-webhook] EVENT_SHEETS_WEBHOOK_URL not configured — registrant not recorded to Sheets")
  }

  // Known accepted limitation: no dedup store for Stripe's rare duplicate
  // webhook redelivery. Given the small (15-seat) one-time scale of this
  // event, an occasional duplicate row/email is an acceptable risk.
  const { subject, html } = ticketConfirmationEmail(name, tier)
  sendEmail({ to: email, subject, html }).catch((err) => console.error("[stripe-webhook] email send threw", err))

  return NextResponse.json({ ok: true })
}
