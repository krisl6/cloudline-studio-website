# OnlyRank.dev reference — for the AEO/SEO Automation waitlist page

Captured 2026-07-17 from the live site (onlyrank.dev) plus the existing internal
summary at `aeo-seo-service-summary.md` (which covers the service/business side
in much more depth — this file focuses on what that one doesn't: visual design,
copy voice, and interaction/animation patterns).

---

## 1. Design system

- **Headline font**: Fraunces (serif, weight 700) — a distinctive editorial/premium
  slab-serif, used for all H1/H2-level headlines. Not currently used anywhere on
  cloudline-studio.com (which uses a sans-serif `font-display`); this is OnlyRank's
  own brand differentiator and worth deciding deliberately whether to carry over
  or translate into CloudLine's existing type system.
- **Body font**: Public Sans (sans-serif).
- **Background**: near-white/cream (`rgb(253, 252, 250)`) for most sections,
  alternating with a warm beige/cream card-section background and a dark navy
  (`#0F1B2E`-ish) band for CTA banners — same alternating-section rhythm
  CloudLine already uses (`bg-background` / `bg-muted/50`), but OnlyRank goes
  one step further with a full dark-navy CTA band as a strong visual break.
- **Accent color**: a teal/green (~`#1F9D7C`) used for checkmarks, the eyebrow
  label ("5 YEARS IN SEO · NOW BUILT FOR AI SEARCH"), and the citation-share
  chart line/dot — CloudLine's own accent is a blue primary, so this would need
  translating to CloudLine's palette, not copied directly.
- **Cards**: rounded-2xl bordered cards, consistent with CloudLine's own card
  style already.

## 2. Page structure (homepage, top to bottom)

1. Header — logo, nav (Home / SEO / Google Ads / Pricing / Case Studies /
   Contact), primary CTA button "Get a Free Audit"
2. Hero — eyebrow, H1, subheadline, 4-item checklist, dual CTA buttons, a live
   "AI answer preview" widget (mocked chat-style card showing a buyer question
   + a highlighted `[Company]` answer with a blinking cursor) and an "AI
   Citation Share" mini line-chart card (labeled "Illustrative trend") side by
   side with the headline
3. Stat row — 120+ projects, 5 markets, 5 yrs SEO/AEO experience, 9 yrs studio
4. Client logo carousel (auto-scrolling)
5. Problem framing — "Search used to end with a click. Now it often ends with
   an answer."
6. Market stats — e.g. "50% of B2B buyers start in AI chatbots"
7. Three numbered pain points solved
8. "Why SEO alone isn't enough" — old scorecard vs. new scorecard contrast
9. Multi-engine tracking strip — ChatGPT / Gemini / Perplexity / Google AI /
   Copilot logos
10. Four-pillar service breakdown — **Get Seen → Get Trusted → Get Cited →
    Get Protected**
11. Case studies — 5 client result cards with specific metrics (not
    testimonial quotes, metric-first cards: "+200% sessions/mo," "848K search
    impressions yearly," etc.)
12. Two-discipline split — SEO & Google Ads
13. **AI Automation section** (see §3 below — this is the one being rebuilt)
14. Dark-navy footer CTA band — "Get your Free AI SEO Audit"

## 3. The "AI Automation" section — direct reference for the new page

**Section intro copy**: "We're rolling out a set of AI automation tools to
every client at no extra cost — built to keep your site, content, and
reputation working between our monthly check-ins. Expected by August 31,
2026."

**Layout**: cream-background section, 3+2 grid of 5 bordered cards, each with
a small pill badge reading "COMING SOON" (teal-on-cream), a bold headline, and
a one-sentence description:

| Tool | Description |
|---|---|
| Blog Automation | "Blog posts checked and published straight from your own system, with your approval on every piece, tailored to your business and voice." |
| Content Refresher | "Ageing pages get found and updated automatically, so your best-performing content keeps ranking instead of quietly decaying." |
| Social Listening Tool | "Tracks mentions and citations of your brand across the web and AI answer engines, so you always know where you're being talked about." |
| Website Improvement | "Automated redesign recommendations that improve user experience, based on how real visitors actually use your site." |
| UI/UX Feedback Report | "A recurring report on how real visitors experience your site, so you can improve usability yourself without waiting on a redesign." |

**Waitlist form**: confirmed **not currently live** on this section (clicking
a card does nothing; no modal, no inline form). The internal summary doc
claims one existed ("tagged by which of these a visitor wants") but that's
either stale or lives somewhere I didn't find — direct inspection just now
shows only static "Coming Soon" cards, with the section's only CTA being the
generic dark-navy "Get your Free AI SEO Audit" banner directly below it. **This
means CloudLine's new page is a genuine upgrade, not a port of an existing
working form.**

## 4. Copy voice

- Direct, confident, outcome-first. Leads with the payoff ("Be the business AI
  recommends"), not the mechanism.
- Uses second person consistently ("Your buyers ask AI before they ask
  Google").
- Every claim gets a number attached where possible: "within 60 days," "in
  your first 30 days," "+200% sessions/mo" — specificity as a credibility
  device, not vague superlatives.
- Contrast framing used repeatedly: old vs. new ("Search used to end with a
  click. Now it often ends with an answer"), traditional SEO vs. AEO scorecard.
- CTAs are short and literal: "Get a Free Audit," "Get your Free AI SEO
  Audit," "Get my free audit," "See how it works," "See our recent work →" —
  no cute/clever button copy.

## 5. Animation/interaction notes

- The "AI answer preview" card in the hero simulates a live-typing effect
  (blinking cursor after the highlighted company name) — reads as a small
  looping/one-shot type animation, not a static screenshot.
- The citation-share mini chart shows an upward trend line with a labeled
  end-point ("74%"), styled as a small embedded widget rather than a full
  chart component.
- Client logos auto-scroll horizontally (marquee), same technique CloudLine's
  own homepage already uses for its client-logo strip.
- No React DevTools / framer-motion signature detected in a quick runtime
  check — can't confirm their animation library, so don't assume 1:1 parity;
  CloudLine's own `framer-motion` `fadeUp`/`stagger` conventions (used
  throughout this codebase) are a perfectly good, already-proven substitute
  for scroll-reveal behavior on the new page.

## 6. Service/business context (see `aeo-seo-service-summary.md` for full detail)

- Positioning: "Be the business AI recommends" — AEO first, SEO included.
- The 5 AI Automation tools above will eventually be bundled free into every
  paid OnlyRank plan; the **public waitlist page CloudLine is building is a
  new, separate lead-gen surface** — capturing interest ahead of the August 31,
  2026 target ship date, open to the public (not gated behind being an
  existing client).
- OnlyRank is planned to eventually 301-redirect into cloudline-studio.com;
  this waitlist page is presumably one of the pieces of that migration,
  and per the user, a domain (rankpage.dev or onlyrank.dev) will be pointed at
  it once built.
