// Shared Resend helpers for serverless routes. Requires RESEND_API_KEY and a
// domain verified in the Resend dashboard for cloudline-studio.com before any
// send will actually succeed (unverified domains are rejected by Resend).
import { Resend } from "resend"

export const EMAIL_FROM = "CloudLine Studio <hello@cloudline-studio.com>"
// Every confirmation email is BCC'd here so Kristine has a running contact
// record and is notified the moment someone submits a form.
export const OWNER_BCC = "hello@cloudline-studio.com"

let client: Resend | null = null
function getClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  if (!client) client = new Resend(apiKey)
  return client
}

export async function sendEmail(opts: { to: string; subject: string; html: string }): Promise<boolean> {
  const resend = getClient()
  if (!resend) {
    console.error("[email] RESEND_API_KEY is not configured")
    return false
  }
  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: opts.to,
      bcc: OWNER_BCC,
      subject: opts.subject,
      html: opts.html,
    })
    if (error) {
      console.error("[email] send failed", error)
      return false
    }
    return true
  } catch (err) {
    console.error("[email] unexpected error", err)
    return false
  }
}

const SIGNATURE = `
  <p style="font-size: 15px; line-height: 1.6;">
    Warmest regards,<br/>
    Cloudline Studio Team<br/>
    P: +60 11 2775 5215
  </p>
`

function wrapper(bodyHtml: string): string {
  return `
    <div style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1d29;">
      <div style="padding: 24px 0; border-bottom: 2px solid #2f4d73;">
        <span style="font-size: 18px; font-weight: 700; color: #2f4d73;">CloudLine Studio</span>
      </div>
      <div style="padding: 32px 0;">
        ${bodyHtml}
      </div>
      <div style="padding: 20px 0; border-top: 1px solid #e5e0d5; color: #8a8578; font-size: 12px;">
        CloudLine Studio &middot; Singapore &amp; Malaysia &middot; hello@cloudline-studio.com
      </div>
    </div>
  `
}

export function contactConfirmationEmail(name: string) {
  return {
    subject: "We've got your message — CloudLine Studio",
    html: wrapper(`
      <p style="font-size: 15px; line-height: 1.6;">Hi ${escapeHtml(name) || "there"},</p>
      <p style="font-size: 15px; line-height: 1.6;">Thanks for reaching out to CloudLine Studio. We've received your message and will get back to you shortly.</p>
      ${SIGNATURE}
    `),
  }
}

export function waitlistConfirmationEmail(name: string) {
  return {
    subject: "You're on the SEO/AEO waitlist — CloudLine Studio",
    html: wrapper(`
      <p style="font-size: 15px; line-height: 1.6;">Hi ${escapeHtml(name) || "there"},</p>
      <p style="font-size: 15px; line-height: 1.6;">You're on the waitlist for CloudLine's AEO/SEO Automation. We'll email you as soon as a spot opens up.</p>
      ${SIGNATURE}
    `),
  }
}

const CONTACT_WHATSAPP_URL = "https://wa.me/601127755215"

export function ticketConfirmationEmail(name: string, tier: string, eventName: string = "Marketing MasterClass") {
  const firstName = name.trim().split(/\s+/)[0] || "there"
  return {
    subject: `You're registered — ${eventName}, 12 August 2026`,
    html: wrapper(`
      <p style="font-size: 15px; line-height: 1.6;">Thank you for registering, ${escapeHtml(firstName)}!</p>
      <p style="font-size: 15px; line-height: 1.6;">You're confirmed for ${escapeHtml(eventName)} (${escapeHtml(tier)} ticket) on <strong>12 August 2026, 12:30 PM &ndash; 5:00 PM</strong> at Infinity8, Sunway Square.</p>
      <p style="font-size: 15px; line-height: 1.6;">Contact us at <a href="${CONTACT_WHATSAPP_URL}" style="color: #2f4d73;">${CONTACT_WHATSAPP_URL.replace("https://", "")}</a> for more information.</p>
      ${SIGNATURE}
    `),
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string))
}
