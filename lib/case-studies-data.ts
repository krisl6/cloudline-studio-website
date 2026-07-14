// Slugs match the serviceIds used on /services (app/services/page.tsx) so a
// service's id can be used directly to link to its case-studies subpage.
export const SERVICE_SLUGS = {
  consultation: "Consultation",
  transformation: "Marketing & Sales Digital Transformation",
  synchronization: "Interdepartmental Synchronization",
  branding: "Digital Marketing & Branding",
  seo: "SEO",
} as const

export type ServiceSlug = keyof typeof SERVICE_SLUGS
export type PlatformName = (typeof SERVICE_SLUGS)[ServiceSlug]

export function slugToPlatform(slug: string): PlatformName | null {
  return slug in SERVICE_SLUGS ? SERVICE_SLUGS[slug as ServiceSlug] : null
}

export type CaseStudy = {
  title: string
  industry: string
  platforms: PlatformName[]
  challenge: string
  solution: string
  results: string
  image: string
  metrics: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    title: "AI Operations Overhaul & Revenue Growth, ClearSK Aesthetic Clinic, Singapore",
    industry: "Aesthetics · Singapore",
    platforms: ["Marketing & Sales Digital Transformation", "Interdepartmental Synchronization"],
    challenge:
      "ClearSK was running on a patchwork of disconnected platforms: separate CRM, booking, marketing, and sales tools that didn't talk to each other. Departments worked in silos with no shared visibility, the same data was entered multiple times, and a stack of overlapping subscriptions was quietly draining six figures every month.",
    solution:
      "Our team consolidated their fragmented stack into a single AI-powered operations layer. We unified CRM, sales, and booking data into one source of truth, automated cross-department handoffs, and built live transparency dashboards so marketing, sales, and clinical teams could finally see the same numbers in real time. AI-driven lead scoring and automated follow-ups replaced manual chasing and a pile of redundant tooling.",
    results:
      "Interdepartmental transparency improved dramatically, the clinic cut over S$100K per month in excess platform, CRM, and sales subscriptions, and appointment bookings and sales revenue grew 40% within 3 months.",
    image: "/aesthetic-clinic-marketing-dashboard-with-patient-.jpg",
    metrics: [
      { label: "Monthly Savings", value: "S$100K" },
      { label: "Bookings & Revenue", value: "+40%" },
      { label: "Timeframe", value: "3 Months" },
    ],
  },
  {
    title: "AI CRM Consolidation & Booking Growth, Lasus Plastic Surgery Clinic, Malaysia",
    industry: "Aesthetics · Malaysia",
    platforms: ["Interdepartmental Synchronization", "Marketing & Sales Digital Transformation"],
    challenge:
      "Lasus was juggling multiple overlapping marketing, CRM, and sales subscriptions with little visibility between the front desk, marketing, and surgical teams. Leads slipped through the cracks between platforms, and no one had a clear picture of what was actually driving bookings.",
    solution:
      "We deployed the same AI operations playbook, localized for the Malaysian market, consolidating their tooling onto one unified CRM and sales platform, automating lead routing and appointment reminders, and giving every department a shared, real-time view of the pipeline. AI handled the repetitive follow-ups so the team could focus on patient care.",
    results:
      "The clinic eliminated redundant subscriptions to save roughly RM 250K per month, unified previously siloed departments under one transparent dashboard, and lifted appointment bookings and sales revenue by 35% in under 4 months.",
    image: "/digital-marketing-dashboard-with-analytics-charts-.jpg",
    metrics: [
      { label: "Monthly Savings", value: "RM 250K" },
      { label: "Bookings & Revenue", value: "+35%" },
      { label: "Timeframe", value: "<4 Months" },
    ],
  },
  {
    title: "End-to-End Marketing & Sales Digitalisation, ConnectDR",
    industry: "Healthcare Platform",
    platforms: ["Marketing & Sales Digital Transformation"],
    challenge:
      "ConnectDR's patient-acquisition process was spread across disconnected tools with no visibility from first touch to booking. Marketing and clinic-partner handoffs were manual, and the team spent hours on data entry instead of growth.",
    solution:
      "We mapped the full acquisition funnel and digitised it end to end, automating lead capture, partner handoffs, and follow-up. A unified pipeline gave the team a single, real-time view from lead to booking, with AI handling repetitive routing.",
    results:
      "An automated lead-to-booking funnel, faster partner onboarding, materially higher conversion, and the elimination of manual data entry across the team.",
    image: "/analytics-dashboard.png",
    metrics: [
      { label: "Funnel", value: "Automated" },
      { label: "Manual Entry", value: "Eliminated" },
      { label: "Conversion", value: "Higher" },
    ],
  },
  {
    title: "Unified Analytics & Attributable Growth, CircleDNA",
    industry: "Consumer Genomics",
    platforms: ["Marketing & Sales Digital Transformation", "Digital Marketing & Branding"],
    challenge:
      "CircleDNA had a complex, data-heavy product but fragmented analytics and unclear marketing ROI, making it hard to know which spend actually drove revenue.",
    solution:
      "We turned a complex product into a clean digital sales journey, unifying analytics, automating campaigns, and tightening the loop between marketing spend and revenue so every dollar was attributable.",
    results:
      "Unified analytics across channels, automated and attributable campaigns, and a clear line of sight from marketing spend to revenue.",
    image: "/ai-seo-platform-dashboard-with-global-user-analyti.jpg",
    metrics: [
      { label: "Analytics", value: "Unified" },
      { label: "Campaigns", value: "Automated" },
      { label: "Attribution", value: "Clear" },
    ],
  },
  {
    title: "International Market-Entry Strategy & Growth, Wellnite",
    industry: "Mental Health SaaS",
    platforms: ["Consultation"],
    challenge:
      "Wellnite makes mental health accessible anywhere. Based in the US and expanding internationally, they faced complex regulatory requirements and cultural sensitivities in each new market.",
    solution:
      "We consulted on market-entry and growth strategy, then built compliant, culturally-sensitive campaigns and guided the team market by market, balancing speed with regulatory care.",
    results:
      "Expansion into 5 international markets, a 400% increase in platform registrations, an 85% improvement in retention, and trusted healthcare partnerships in new territories.",
    image: "/mental-health-app-interface-with-global-reach-anal.jpg",
    metrics: [
      { label: "Market Expansion", value: "5 Countries" },
      { label: "Registrations", value: "+400%" },
      { label: "Retention", value: "+85%" },
    ],
  },
  {
    title: "Growth Strategy Consultation & Channel Prioritisation, Prenetics",
    industry: "Health & Genomics",
    platforms: ["Consultation"],
    challenge:
      "Prenetics was spread thin across too many channels with unclear priorities, making it hard to focus budget on what actually moved the needle.",
    solution:
      "We audited the funnel, prioritised the highest-impact channels, and coached the internal team on execution so gains kept compounding after the engagement ended.",
    results:
      "A sharper channel strategy, a prioritised growth roadmap, and an upskilled internal team able to execute independently.",
    image: "/digital-marketing-dashboard-with-analytics-charts-.jpg",
    metrics: [
      { label: "Strategy", value: "Focused" },
      { label: "Roadmap", value: "Prioritised" },
      { label: "Team", value: "Upskilled" },
    ],
  },
  {
    title: "Early-Stage Positioning & Go-to-Market Consultation, Fokuslah",
    industry: "Startup · Malaysia",
    platforms: ["Consultation"],
    challenge:
      "As an early-stage Malaysian startup with a limited budget, Fokuslah needed clear direction more than vanity metrics, and a way to measure what was working.",
    solution:
      "We ran founder-level consultation to sharpen positioning, choose the right channels, and stand up a simple measurement system the team could actually understand and run.",
    results:
      "Clear positioning, a focused channel strategy, and a lightweight measurement framework the founders use to make decisions.",
    image: "/interior-design-website-analytics-dashboard-showin.jpg",
    metrics: [
      { label: "Positioning", value: "Clear" },
      { label: "Channels", value: "Focused" },
      { label: "Measurement", value: "In place" },
    ],
  },
  {
    title: "F&B Operations Sync & POS Optimisation, Warung Ambo",
    industry: "F&B · Malaysia",
    platforms: ["Interdepartmental Synchronization"],
    challenge:
      "At peak hours Warung Ambo had long queues, orders slipping through the cracks, and front-of-house and kitchen operations that were constantly out of step.",
    solution:
      "We optimised the POS specifically for F&B, ensured no orders were missed, and synced front-of-house and kitchen operations in real time through their devices.",
    results:
      "Queue speed improved 30% almost immediately, zero missed orders, synced kitchen and counter operations, and a direct lift in sales.",
    image: "/digital-marketing-dashboard-with-analytics-charts-.jpg",
    metrics: [
      { label: "Queue Speed", value: "+30%" },
      { label: "Missed Orders", value: "Zero" },
      { label: "Sales", value: "Up" },
    ],
  },
  {
    title: "Brand Refresh & Performance Campaigns, Oxwhite",
    industry: "D2C Apparel",
    platforms: ["Digital Marketing & Branding"],
    challenge:
      "Oxwhite had an inconsistent brand presence and rising customer acquisition costs that were squeezing margins as they scaled.",
    solution:
      "We refreshed their digital brand identity and built performance-driven campaigns whose content finally looked and sounded like them, focused on conversion, not just reach.",
    results:
      "A refreshed brand identity, higher-converting campaigns, lower customer acquisition cost, and growing order volume.",
    image: "/ai-seo-platform-dashboard-with-global-user-analyti.jpg",
    metrics: [
      { label: "Brand", value: "Refreshed" },
      { label: "Acquisition Cost", value: "Lower" },
      { label: "Orders", value: "Up" },
    ],
  },
  {
    title: "Digital Identity & Local Demand Funnel, Woodfire Gourmet Burger",
    industry: "F&B",
    platforms: ["Digital Marketing & Branding"],
    challenge:
      "Woodfire had great food but a weak, inconsistent online brand presence that didn't bring people through the door.",
    solution:
      "We gave the brand a proper digital identity: photography, social content, and a local demand funnel that turns online attention into covers.",
    results:
      "A distinctive digital brand, a stronger social presence, more weekend covers, and a steadily growing base of regulars.",
    image: "/aesthetic-clinic-marketing-dashboard-with-patient-.jpg",
    metrics: [
      { label: "Brand", value: "Distinctive" },
      { label: "Social", value: "Stronger" },
      { label: "Covers", value: "Up" },
    ],
  },
  {
    title: "Engagement-Led Creative & Team Enablement, Celcom",
    industry: "Telecommunications",
    platforms: ["Digital Marketing & Branding"],
    challenge:
      "Celcom's campaigns performed decently, but there was a gap between awareness and real engagement, and the in-house team wanted to learn what worked and why.",
    solution:
      "We tested new visual formats, shortened load times, and built mini-landing experiences that kept users interacting longer, while upskilling the in-house team along the way.",
    results:
      "Reduced churn, improved user retention, longer engagement, and a more capable in-house marketing team.",
    image: "/analytics-dashboard.png",
    metrics: [
      { label: "Churn", value: "Reduced" },
      { label: "Retention", value: "Improved" },
      { label: "Team", value: "Upskilled" },
    ],
  },
  {
    title: "SEO & AI Citation Growth, CircleDNA",
    industry: "Consumer Genomics · SEO/AEO",
    platforms: ["SEO"],
    challenge:
      "50,000 organic sessions a month, with only 1 of 10 target keywords ranking in the top 10, and no tracking of AI citations yet.",
    solution:
      "We started AEO citation tracking and a schema audit, shipped FAQ and product schema, and rewrote key pages answer-first, given the health-claims context needs YMYL-grade E-E-A-T.",
    results:
      "Traffic hit 150,000 sessions a month, 3x the baseline, with 7 of 10 target keywords now ranking page one, and AI citations landing alongside the ranking gains.",
    image: "/case-studies-seo/circledna-snapshot.png",
    metrics: [
      { label: "Organic Traffic", value: "+200%" },
      { label: "Keywords Page One", value: "7 of 10" },
      { label: "Timeframe", value: "6 Months" },
    ],
  },
  {
    title: "Ongoing SEO Growth, Mil Design",
    industry: "Interior Design · SEO",
    platforms: ["SEO"],
    challenge:
      "1.73K search impressions and 78 clicks a month, converting almost entirely on brand-name searches with little non-brand visibility.",
    solution:
      "We ran continuous on-page and content optimisation, expanding coverage from brand terms into the non-brand interior-design category.",
    results:
      "Impressions climbed 195% to 5.11K on an ongoing engagement (91 clicks, 1.8% CTR, average position 50.9), with new non-brand terms now showing up in search and conversion work continuing into the next phase.",
    image: "/case-studies-seo/mil-design-gsc.png",
    metrics: [
      { label: "Search Impressions", value: "+195%" },
      { label: "Engagement", value: "Ongoing" },
      { label: "Since", value: "Mar 2025" },
    ],
  },
  {
    title: "Continuous SEO vs. Pausing, TigerCampus",
    industry: "EdTech · SEO",
    platforms: ["SEO"],
    challenge:
      "848K search impressions a year with continuous SEO running, at an average position of 7.1, raising the question of whether those gains would hold without ongoing work.",
    solution:
      "We ran continuous SEO for a year, then compared the same 28-day window after a pause, as a real-world test of whether the visibility was durable or dependent on active work.",
    results:
      "Impressions fell 83% within weeks of the pause, from 848K to 143K (1.11K clicks to 920), and average position slipped from 7.1 to 21.2, real-world proof that SEO visibility erodes fast once the work stops.",
    image: "/case-studies-seo/tigercampus-gsc.png",
    metrics: [
      { label: "Impressions/Yr", value: "848K" },
      { label: "Drop After Pause", value: "-83%" },
      { label: "Position Change", value: "7.1→21.2" },
    ],
  },
  {
    title: "Cited by AI Overviews & Search Growth, MonstarX",
    industry: "AI App Builder · SEO/AEO",
    platforms: ["SEO"],
    challenge:
      "An enterprise AI app-builder platform with a steady but modest footprint: ~355 clicks and 1.78K impressions a month, holding a page-one average position around 6.3, with almost no presence in AI-generated answers when buyers compared MonstarX against competitors like Lovable and Bolt.",
    solution:
      "We automated MonstarX's blog publishing pipeline, rebuilt their landing page structure, and rewrote it to focus on driving sign-ups instead of just describing the product.",
    results:
      "Clicks grew 24% (355 to 441) and impressions grew 51% (1.78K to 2.69K) quarter over quarter, holding a strong page-one average position. MonstarX now shows up by name in real Google AI Overviews for exactly the comparison questions buyers ask, e.g. \"MonstarX or Lovable, which is better?\"",
    image: "/case-studies-seo/monstarx-gsc.png",
    metrics: [
      { label: "Clicks (QoQ)", value: "+24%" },
      { label: "Impressions (QoQ)", value: "+51%" },
      { label: "AI Overviews", value: "Cited by name" },
    ],
  },
  {
    title: "Core Web Vitals & Technical SEO Reset, Darlie",
    industry: "CPG Oral Care · SEO",
    platforms: ["SEO"],
    challenge:
      "Roughly 6.2K monthly visits, just as Core Web Vitals launched as a Google ranking signal and mobile page experience rolled out industry-wide, with the site's technical foundation not ready for either.",
    solution:
      "We built the technical SEO foundation: Core Web Vitals fixes, mobile optimisation, indexation cleanup, and brand-term coverage.",
    results:
      "Traffic broke out to 9.6K visits, +55% versus baseline, as the speed and indexation work compounded. The foundation is still paying off years later: current Search Console tracking shows 2.18K clicks and 139K impressions in the last 28 days, up from 1.97K clicks and 121K impressions, with average position improving from 11.3 to 10.",
    image: "/case-studies-seo/darlie-gsc.png",
    metrics: [
      { label: "Traffic (2020-22)", value: "+55%" },
      { label: "Clicks (Current 28d)", value: "2.18K" },
      { label: "Avg. Position", value: "11.3→10" },
    ],
  },
]
