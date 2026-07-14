import { NextResponse } from "next/server"

// Posts to the same Google Sheets Apps Script webhook already used for the
// OnlyRank contact form (see onlyrank 2.0's GOOGLE_SHEETS_SETUP.md). It only
// recognizes 8 fixed columns, so waitlist signups reuse that shape: "How Did
// You Find Us" carries the "Cloudline SEO Waitlist" marker so these rows are
// easy to filter apart from real contact leads, and "Additional Comments"
// carries the selected interests.
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, interests } = body as { name?: string; email?: string; interests?: string[] }

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 })
    }
    if (!Array.isArray(interests) || interests.length === 0) {
      return NextResponse.json({ ok: false, error: "Pick at least one thing you're interested in." }, { status: 400 })
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("[seo-waitlist] GOOGLE_SHEETS_WEBHOOK_URL is not configured")
      return NextResponse.json({ ok: false, error: "Service temporarily unavailable." }, { status: 503 })
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: name,
        Email: email,
        "Company Name": "",
        "Contact Number": "",
        "How Did You Find Us": "Cloudline SEO Waitlist",
        "Project Budget": "",
        "Additional Comments": `Interested in: ${interests.join(", ")}`,
        "Submitted At": new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      // Matches onlyrank's own webhook quirk: a non-2xx here has historically
      // still appended the row, so this is logged, not treated as a hard failure.
      console.warn(`[seo-waitlist] Google Sheets webhook returned ${res.status}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[seo-waitlist] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 })
  }
}
