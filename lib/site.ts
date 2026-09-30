// Central site config, used for SEO metadata, canonical URLs, sitemap, and robots.
export const SITE_URL = "https://cloudline-studio.com"

export const SITE_NAME = "CloudLine Studio"

export const WHATSAPP_URL = "https://wa.me/601127755215"

export const SITE_DESCRIPTION =
  "CloudLine Studio is a consultancy that helps businesses grow through digital marketing, AI-enabled business transformation, and operational excellence across Singapore and Malaysia."

// Real, already-published contact facts (match Footer.tsx) — centralized
// here so structured data (lib/json-ld.ts) has one source, not a 4th copy.
export const SITE_EMAIL = "hello@cloudline-studio.com"
export const SITE_PHONE = "+60 11-2775 5215"
export const SITE_LOCALITY = "Kuala Lumpur"
export const SITE_COUNTRY = "MY"

// Routes that exist in the site (used by sitemap). Keep in sync with app/ routes.
export const SITE_ROUTES = [
  "",
  "about",
  "services",
  "services/website",
  "ai-aeo",
  "events",
  "pricing",
  "contact",
  "case-studies",
  "client-results",
  "landing/saas-marketing",
  "landing/beauty-brand-marketing",
  "landing/online-course-marketing",
  "landing/operations",
  "landing/aeo",
  "landing/branding",
  "blog",
  "blog/startup-marketing-cost",
  "blog/how-market-online-course",
  "blog/saas-marketing-channels",
  "blog/how-to-market-beauty-brand",
  "blog/saas-gtm",
  "blog/startup-marketing-agency",
  "blog/how-to-price-an-online-course",
  "blog/beauty-brand-marketing-strategy",
  "tech",
] as const
