import { NextResponse } from "next/server"
import { createBill } from "@/lib/billplz"
import { SITE_URL } from "@/lib/site"

// Ticket tiers for /events/second-brain-ai. Kept in sync by hand with the
// TICKET_TIERS prices on that page — Billplz needs the amount in "sen"
// (RM x 100), same smallest-unit convention as Stripe's cents.
const TIERS: Record<string, { amountCents: number; label: string }> = {
  "early-bird": { amountCents: 35900, label: "Early Bird — Build Your Second Brain with Agentic AI" },
  "standard": { amountCents: 49900, label: "Standard — Build Your Second Brain with Agentic AI" },
  "virtual-pass": { amountCents: 19900, label: "Virtual Pass — Build Your Second Brain with Agentic AI" },
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const tierKey = String(body.tier || "")
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const phone = String(body.phone || "").trim()

    const tier = TIERS[tierKey]
    if (!tier) {
      return NextResponse.json({ ok: false, error: "Unknown ticket tier." }, { status: 400 })
    }
    if (!name || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "A name and valid email are required." }, { status: 400 })
    }

    const result = await createBill({
      amountCents: tier.amountCents,
      name,
      email,
      mobile: phone || undefined,
      description: tier.label,
      callbackUrl: `${SITE_URL}/api/webhooks/billplz`,
      redirectUrl: `${SITE_URL}/events/second-brain-ai?payment=success`,
      reference1Label: "Ticket Tier",
      reference1: tierKey,
    })

    if (!result.ok) {
      console.error("[billplz-create-bill] failed", result.error)
      return NextResponse.json({ ok: false, error: result.error }, { status: 502 })
    }

    return NextResponse.json({ ok: true, url: result.url })
  } catch (err) {
    console.error("[billplz-create-bill] unexpected error", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
