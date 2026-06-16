import { NextResponse } from "next/server"
import { randomUUID } from "crypto"

const AIRTABLE_BASE = "appn3WINxgoyhCYl6"
const AIRTABLE_TABLE = "tblczKI0sIUpJrdsw"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, niche, challenge, ab_variant, website_url, instagram_handle, course_url } = body

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 })
    }

    const apiKey = process.env.AIRTABLE_API_KEY
    if (!apiKey) {
      console.error("[audit-request] AIRTABLE_API_KEY not configured")
      return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
    }

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

    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error("[audit-request] Airtable error:", err)
      return NextResponse.json({ ok: false, error: "Failed to save submission." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[audit-request] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
