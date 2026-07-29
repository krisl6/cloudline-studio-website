import { SITE_COUNTRY, SITE_DESCRIPTION, SITE_EMAIL, SITE_LOCALITY, SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/site"

export type FaqItem = { question: string; answer: string }

export function buildFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

// Organization, not LocalBusiness — CloudLine has no single real street
// address on file, and serves both Singapore and Malaysia, so a
// single-location schema would either fabricate an address or wrongly
// imply one country. No `sameAs` — no real social profile URLs exist in
// this codebase; omit rather than invent one.
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      addressCountry: SITE_COUNTRY,
    },
    areaServed: ["Singapore", "Malaysia"],
  }
}
