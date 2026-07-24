// Billplz API v4 helpers. Docs: https://www.billplz.com/api
// Auth is HTTP Basic with the API Secret Key as username, no password.
import crypto from "crypto"

function billplzBaseUrl(): string {
  // Point BILLPLZ_API_BASE_URL at https://www.billplz-sandbox.com while testing;
  // defaults to production.
  return process.env.BILLPLZ_API_BASE_URL || "https://www.billplz.com"
}

export type CreateBillParams = {
  amountCents: number // e.g. RM359.00 -> 35900
  name: string
  email: string
  mobile?: string
  description: string
  callbackUrl: string
  redirectUrl?: string
  reference1Label?: string
  reference1?: string
}

export type CreateBillResult =
  | { ok: true; billId: string; url: string }
  | { ok: false; error: string }

export async function createBill(params: CreateBillParams): Promise<CreateBillResult> {
  const apiKey = process.env.BILLPLZ_API_KEY
  const collectionId = process.env.BILLPLZ_COLLECTION_ID
  if (!apiKey || !collectionId) {
    return { ok: false, error: "Billplz is not configured (missing API key or collection ID)." }
  }

  const body: Record<string, string> = {
    collection_id: collectionId,
    email: params.email,
    name: params.name,
    amount: String(params.amountCents),
    description: params.description.slice(0, 200),
    callback_url: params.callbackUrl,
  }
  if (params.mobile) body.mobile = params.mobile
  if (params.redirectUrl) body.redirect_url = params.redirectUrl
  if (params.reference1Label) body.reference_1_label = params.reference1Label
  if (params.reference1) body.reference_1 = params.reference1

  const res = await fetch(`${billplzBaseUrl()}/api/v4/bills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
    },
    body: new URLSearchParams(body).toString(),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.id || !data?.url) {
    return { ok: false, error: data?.error?.message?.[0] || `Billplz bill creation failed (${res.status})` }
  }
  return { ok: true, billId: data.id, url: data.url }
}

// Verifies the X-Signature Billplz sends on the callback (doPost-equivalent)
// and on the browser redirect_url query string. Algorithm per Billplz docs:
// sort all non-signature params alphabetically by key (case-insensitive),
// join as "key<value>" pairs with "|", HMAC-SHA256 with the X Signature Key.
export function verifyBillplzSignature(params: Record<string, string>, receivedSignature: string): boolean {
  const xSignatureKey = process.env.BILLPLZ_X_SIGNATURE_KEY
  if (!xSignatureKey) return false

  const keys = Object.keys(params)
    .filter((k) => k.toLowerCase() !== "x_signature")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  const source = keys.map((k) => `${k}${params[k]}`).join("|")
  const computed = crypto.createHmac("sha256", xSignatureKey).update(source).digest("hex")

  return computed === receivedSignature
}
