// Central site config, used for SEO metadata, canonical URLs, sitemap, and robots.
export const SITE_URL = "https://cloudline-studio.com"

export const SITE_NAME = "CloudLine Studio"

export const SITE_DESCRIPTION =
  "CloudLine Studio is a consultancy that helps businesses grow through digital marketing, AI-enabled business transformation, and operational excellence across Singapore and Malaysia."

// Routes that exist in the site (used by sitemap). Keep in sync with app/ routes.
export const SITE_ROUTES = [
  "",
  "about",
  "services",
  "events",
  "pricing",
  "contact",
  "case-studies",
  "client-results",
  "landing/saas-marketing",
  "landing/beauty-brand-marketing",
  "landing/online-course-marketing",
  "blog",
  "blog/startup-marketing-cost",
  "blog/how-market-online-course",
  "blog/saas-marketing-channels",
  "blog/how-to-market-beauty-brand",
  "blog/saas-gtm",
] as const
