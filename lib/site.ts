// Central site config — used for SEO metadata, canonical URLs, sitemap, and robots.
export const SITE_URL = "https://cloudline-studio.com"

export const SITE_NAME = "CloudLine Studio"

export const SITE_DESCRIPTION =
  "CloudLine Studio is a consultancy that helps businesses grow through digital marketing, AI-enabled business transformation, and operational excellence across Singapore and Malaysia."

// Routes that exist in the site (used by sitemap). Keep in sync with app/ routes.
export const SITE_ROUTES = [
  "",
  "about",
  "services",
  "pricing",
  "contact",
  "case-studies",
  "client-results",
] as const
