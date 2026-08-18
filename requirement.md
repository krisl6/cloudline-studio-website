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

---

## 8. Design System — Visual Identity

2026-08 pass: the site was deliberately restyled toward a cleaner, more restrained, "professional
agency" look (structural cues from monstar-lab.com, motion cues from igloo.inc, typographic
confidence from bikebear.com.my — without adopting bikebear's mascot/icon playfulness, which was
explicitly ruled out, see §9). This section documents the resulting system so new pages match it
without re-deriving it from scratch.

**Color** — five brand HSL tokens defined in `styles/globals.css`, drawn from the real logo
(cloud mark + horizon-line accent bar). Same absolute values in light and dark mode; only which
token maps to `--background`/`--foreground`/`--primary` etc. flips:

| Token | Value | Role |
|---|---|---|
| `--cream` | `42.9 41.2% 96.7%` | Light-mode canvas (`--background`), dark-mode text |
| `--cloud` | `37.5 23.5% 93.3%` | Light-mode surface (`--card`/`--muted`) |
| `--ink` | `220 47% 16.3%` | Light-mode text (`--foreground`), dark-mode canvas |
| `--navy` | `217.4 44.5% 30.4%` | The single accent (`--primary` in light mode) |
| `--sky` | `208.5 59.2% 59.6%` | Focus ring, timeline connector accent |

Don't introduce new brand colors — the palette is intentionally minimal (per the monstar-lab/
bikebear reference sites' restraint). If a new state color is needed (success/warning), derive it
from `--destructive`'s pattern (a new HSL pair, light+dark), don't reach for an arbitrary hex.

**Typography** — `font-sans`/`font-display` (Inter, via `--font-inter`) for all UI and most
headings; `font-serif` (Fraunces, via `--font-fraunces`) reserved for a few specific display
moments: the homepage hero `h1`, the client quote blockquote, and stat numerals — not general
heading use. Match this convention rather than defaulting every `h1`/`h2` to serif.

**Spacing/rhythm** — sections use `w-full py-20 md:py-28 border-t border-border`, alternating
plain (`bg-background`) and `bg-muted/50` tone between adjacent sections down the page. Container:
`tailwind.config.ts`'s `container` (`padding: 2rem`, `2xl: 1400px`).

## 9. Design System — No Decorative Icons

Decorative iconography is out, site-wide, for the 8 primary pages (home, about, services,
pricing, case-studies, client-results, contact, events). This replaced the old hand-drawn
"doodle" icon set (`components/doodles.tsx`) that illustrated every service/outcome/process card
and checklist item.

Replacements, both in `components/sections/`:
- **`numbered-index.tsx`** — a plain "01"/"02" numeral (`variant="default"` for card headers,
  `variant="outline-circle"` for the numeral-in-a-circle timeline/step pattern). Used for service
  pillars, outcome cards, process/how-we-work steps, platform-specialist cards, and similar
  card grids that previously had a per-item icon.
- **`list-dot.tsx`** — a plain filled dot, replacing the old checkmark (`DoodleCheck`) as a
  checklist bullet. Deliberately not a checkmark: "check" implies a verification claim, and this
  site's proof policy (§4) is specifically careful about not implying verification that hasn't
  happened. A neutral dot avoids that reading entirely.

Where a numbered card grid already displayed a number elsewhere (e.g. a "STEP 01" label next to
an icon), the separate label was removed once the numeral moved into the icon's old slot — don't
show the same index twice in one card.

**Functional UI icons are unaffected and still fine to use**: `lucide-react`'s `ArrowRight` on
CTA buttons, shadcn primitives' built-in chevrons/carets (`Select`, `Accordion`, `DropdownMenu`)
and close buttons (`Dialog`). Those are interactive affordances, not illustration — the no-icons
policy is about decoration, not standard UI conventions.

The remaining pages outside the original 8-page scope — `app/ai-aeo`, `app/services/website`,
`app/events/marketing-masterclass`, `app/events/second-brain-ai`, `app/events/vibe-code`,
`components/event-form.tsx` — have since been migrated too, so the no-icons policy now applies
site-wide. `components/doodles.tsx` had no remaining imports and was deleted.

## 10. Design System — Animation

Motion lives in three shared files, not redefined per page:
- **`components/motion.ts`** — `fadeUp`/`stagger` (0.12s stagger, primary marketing pages) and
  `staggerFast` (0.1s, event/PPC landing pages) framer-motion variants, plus `hoverLift` (a `y:
  -6` tactile hover applied to the shared card pattern site-wide).
- **`components/marquee.tsx`** — the infinite horizontal-scroll strip used for the homepage's
  client-logo rows (contained inside an `overflow-hidden` wrapper — this is a self-contained
  internal animation, not page-level horizontal scroll, and should stay that way).
- **`components/animated-stat.tsx`** — count-up-on-scroll-into-view for stat numbers (used on
  `/client-results`), decimal-aware, animates once.

The homepage hero photo (still present — kept, not removed, in the 2026-08 pass) has a subtle
scroll-linked scale (`useScroll`/`useTransform`, no new dependency) as its one igloo.inc-style
depth cue. Don't add parallax/scroll-linked effects to every section — this system uses them
sparingly, on one or two focal elements, not as a blanket treatment across the page. No
scroll-jacking, scroll-snap, or programmatic `scrollTo` tied to any of this.

`html, body { overflow-x: hidden }` is set in `styles/globals.css` as a defensive backstop against
page-level horizontal scroll — new full-bleed or animated elements should still be checked at
narrow viewports rather than relying on this alone.

## 11. Design System — No Eyebrow Kickers

Small uppercase "kicker" labels above `h1`/`h2` headings were deliberately removed site-wide
(2026-08). Bold headline-first typography, with no label above it, is the current convention —
don't reintroduce eyebrow text above headings on new pages. This does not apply to functional
labels that aren't decorative kickers (e.g. "Also Included," "Challenge/Solution/Results," a
platform-filter's active-service label) — those stay.
