# CloudLine Studio — Website Requirements

Status: living spec. This document is the source of truth for anything that needs to stay
consistent across pages (service taxonomy, verified proof, pricing). When adding content,
check here first rather than copying whatever a nearby page happens to say — several past
inconsistencies (see §5) came from that exact drift.

---

## 1. Overview

CloudLine Studio is a marketing, digital-transformation, and operations consultancy based in
Kuala Lumpur, with clients across Singapore, Malaysia, and internationally. Next.js App Router
site, `en`/`ms`/`zh` locales via `lib/translations.ts` (global) plus per-route
`app/<route>/translations.ts` files. WhatsApp (`https://wa.link/fwi8af`) is the primary
conversion channel site-wide, appropriate for the Singapore/Malaysia SME market it targets.

## 2. Canonical Service Taxonomy — source of truth

CloudLine offers exactly **five services**. Any page listing "what we do" must use these five
names, in this order, verbatim:

1. **Consultation**
2. **Marketing & Sales Digital Transformation**
3. **Interdepartmental Synchronization**
4. **Digital Marketing & Branding**
5. **SEO & AI Search (AEO)**

The full definitions (description + included-features list) live in
`app/services/translations.ts` — that's the canonical detail source. Every other place that
references services should pull from or mirror this list exactly:

- `app/services/page.tsx` — the full detail page; each service card has `id={service.id}`
  (`consultation`/`transformation`/`synchronization`/`branding`/`seo`) so other pages can deep
  link to `/services#<slug>`.
- `lib/translations.ts` `services.pillars` (homepage) — condensed copy, same 5 names/order.
- `components/layout/Footer.tsx` `serviceLinks` + `lib/translations.ts` `footer.services` —
  same 5 names, linking to `/services#<slug>`.
- `lib/case-studies-data.ts` `SERVICE_SLUGS` + `components/case-studies-content.tsx` — same 5
  names, used for the case-studies filter/subpages (`/case-studies/<slug>`).
- `app/client-results/page.tsx` testimonials — no longer filterable by category (see §5); if a
  filter is reintroduced, it must use this same taxonomy, not an ad-hoc one.

**`app/about/translations.ts`'s `whatWeDo` section is intentionally NOT this taxonomy.** It
describes CloudLine's own market-engagement activities (events, workshops) — labelled "How We
Show Up" specifically so it doesn't read as a competing service list. Don't rewrite it to match
§2's five items; if that's ever wanted, treat it as a deliberate content decision, not a sync fix.

## 3. Site Map

| Route | Page | Primary nav? |
|---|---|---|
| `/` | Home | yes |
| `/about` | About | yes |
| `/services` | Services (5 canonical, incl. SEO waitlist) | yes |
| `/pricing` | Pricing | yes |
| `/case-studies` | Case studies (filterable) | yes |
| `/case-studies/[slug]` | Per-service case studies | — |
| `/events` | Events | yes |
| `/events/buildyourbusiness` | Campaign microsite | no |
| `/client-results` | Testimonials + proof | yes |
| `/contact` | Contact form | yes |
| `/blog`, `/blog/[slug]` | Blog | footer only |
| `/tech`, `/landing/*` | PPC/campaign landing pages (own `AuditForm`) | no |

Header nav (`components/layout/Header.tsx` `navItems`): About, Services, Pricing, Case Studies,
Events, Client Results, Contact. Footer (`components/layout/Footer.tsx`): Services (5 canonical,
linking to `/services#<slug>`), Company (About Us, Case Studies, Pricing, Blog), Contact
(email, phone, address).

No `/privacy`, `/terms`, or `/careers` routes exist. They are not linked anywhere — do not
re-add links to them without either real legal copy (get from the client/counsel, don't draft
it) or a real careers page to point to.

## 4. Proof & Testimonials Policy

**Only publish testimonials/case-study numbers that are real, named, and attributable.** No
composite examples, no anonymised "a client in X industry" stories presented as case studies,
no verification badges/claims ("Analytics verified," "Third-party tracking confirms...") unless
that's literally true for what's shown.

Currently-verified client stories (safe to reuse/extend): **ClearSK Aesthetic Clinic**
(Singapore), **Lasus Plastic Surgery Clinic** (Malaysia), **Warung Ambo** (Kak Tasha) — full
detail in `app/client-results/page.tsx`'s `testimonials` array. The site's SEO case studies
(CircleDNA, Mil Design, TigerCampus, MonstarX, Darlie) in `lib/case-studies-data.ts` are
separately sourced and real (GSC/SEMrush-backed).

**Do not re-add the four unnamed "Detailed Case Studies" entries** (a Malaysian interior design
firm / an aesthetic clinic / etc., claiming 6000% traffic, 4.2x ROAS, 500% signups) as verified
proof — they were previously live with no real client attribution and inflated, unbacked
numbers. If they're kept for illustrative purposes anywhere, they must be clearly labelled as
such, not presented as "proven results."

## 5. Known History (context for future changes)

- **2026-07 CRO pass**: the `/client-results` page previously had 11 testimonials but a code
  comment admitted 8 were "plausible placeholders," while the page copy claimed "every
  testimonial is verified" — removed the 8, kept the 3 real ones, and rewrote the Social Proof
  section's claims to only assert what's actually true (client-reported, analytics-backed,
  named). Same pass fixed dead footer links (`/careers`, `/privacy`, `/terms` all 404'd), a
  malformed phone number (`+01127755215` → `+60 11-2775 5215`), and unified five different
  service taxonomies that had drifted across the homepage/`/services`/`/about`/`/client-results`
  /footer into the single canonical list in §2.
- **Prior to that**: the SEO service (5th canonical service) was added to `/services` and
  `/case-studies`, sourced from real OnlyRank client data (see `lib/case-studies-data.ts`'s
  GSC-backed entries).

## 6. Pricing

Real, published pricing lives in `app/pricing/translations.ts` (MYR): Performance Marketing
from RM 1,200/mo, Website Design from RM 2,560 one-time, Social Media Marketing from RM
2,080/mo (most popular), Influencer Collaboration from RM 6,000/mo. The page states prices are
MYR and to contact for SGD/USD equivalents — there is no live currency conversion; don't add
one without a real FX data source.

## 7. Not Yet Done (flagged, needs client input — don't fabricate)

- `/privacy` and `/terms`: no real legal copy exists. Build the pages once supplied.
- A real third-party trust badge (Clutch fits a B2B agency better than G2) — needs the client
  to have/create a profile first.
- A calendar-booking CTA (Calendly-style) alongside WhatsApp — needs the client's scheduling
  account/link.
