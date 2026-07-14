# Changelog

## 2026-07-14 — CRO pass: trust fixes, dead links, canonical service taxonomy

Full-site conversion-rate audit (every page, form, and translation file read and cross-checked
against current B2B agency conversion research), followed by an implementation pass:

**Trust fixes** (`/client-results`)
- Removed 8 of 11 testimonials that were code-flagged as unverified placeholders while the page
  claimed "every testimonial is verified." Kept the 3 real, named ones (ClearSK, Lasus, Warung
  Ambo).
- Removed the now-pointless category filter (too few real items left to filter meaningfully).
- Rewrote the "Social Proof" section's claims to only assert what's actually true (client-
  reported, analytics-backed, named — not "third-party verified").
- Moved the "Detailed Case Studies" section to the top of the page and added the "3.5x ROAS"
  stat tile (previously a non-numeric "Strategic" placeholder), per direct request.
- Made the testimonials grid collapsible (4 shown by default, "show more" toggle) — mostly moot
  now with only 3 real entries, but kept for when the roster grows.

**Dead links & CTA cleanup**
- Removed footer links to `/careers`, `/privacy`, `/terms` — none of those routes exist; no
  fabricated legal/careers content was added.
- Fixed the malformed phone number (`+01127755215` → `+60 11-2775 5215`) in the footer.
- Added Pricing and Case Studies to the primary header nav (previously unlinked despite the
  `nav.pricing` translation key existing unused); pointed the "Services" nav item at `/services`
  instead of a homepage anchor.
- Softened the 14 identical filled "Discuss Your Project" WhatsApp buttons on `/case-studies` to
  outline style and added one prominent CTA band above the results list instead.
- Collapsed two redundant closing WhatsApp CTAs on `/pricing` into one.

**Canonical service taxonomy**
- The site described its services five different ways across the homepage, `/services`,
  `/about`, `/client-results`, and the footer. Standardised everything on the 5-item `/services`
  list (Consultation, Marketing & Sales Digital Transformation, Interdepartmental
  Synchronization, Digital Marketing & Branding, SEO & AI Search (AEO)) — see `requirement.md`
  §2 for the full rationale and where it's enforced.
- Added real anchor IDs to each `/services` card so other pages can deep-link to
  `/services#<slug>`.
- Relabelled `/about`'s "What We Do" section ("How We Show Up") so it reads as CloudLine's own
  market-engagement activities rather than a sixth, conflicting service list; also fixed its
  pre-existing "Three ways" heading vs. 4 listed items mismatch.

**Other**
- Added a "See pricing" link from the homepage (previously no path to `/pricing` from the
  highest-traffic page).
- Extended the pricing page's MYR currency note to mention SGD/USD are available on request,
  given the site's stated Singapore/international audience.

Also (same session, prior commits): added the SEO service (5th canonical service) to
`/services` with an embedded waitlist, added 5 SEO case studies backed by real Google Search
Console/AI Overview screenshots to `/case-studies`, and split `/case-studies` into a filterable
index plus one real subpage per service.
