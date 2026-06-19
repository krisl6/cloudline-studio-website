"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleSearch, DoodleTransform, DoodleGear, DoodleMegaphone } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

export default function CaseStudiesPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  type ServiceKey = keyof typeof tt.serviceLabels

  const platforms = [
    {
      name: "Consultation",
      icon: <DoodleSearch className="size-5" />,
      description:
        "We diagnose your funnel, tooling, and operations, then advise on the highest-impact moves and coach your team so the gains keep compounding.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      name: "Marketing & Sales Digital Transformation",
      icon: <DoodleTransform className="size-5" />,
      description:
        "We digitise and automate your marketing and sales, consolidating tools, unifying data, and adding AI so the whole revenue engine runs faster.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      name: "Interdepartmental Synchronization",
      icon: <DoodleGear className="size-5" />,
      description:
        "We connect siloed teams onto shared systems and real-time dashboards so marketing, sales, and operations finally move as one.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      name: "Digital Marketing & Branding",
      icon: <DoodleMegaphone className="size-5" />,
      description:
        "We build distinctive brands and performance-driven campaigns across search, social, and content that turn attention into revenue.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
  ]

  const caseStudies = [
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
  ]

  const filteredStudies =
    selectedPlatform === "all" ? caseStudies : caseStudies.filter((study) => study.platforms.includes(selectedPlatform))

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        <section className="relative overflow-hidden" aria-label="Case studies overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-20 2xl:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl 2xl:max-w-4xl mx-auto"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {tt.hero.eyebrow}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
                id="case-studies-main-heading"
              >
                {tt.hero.title}
              </h1>
              <p
                className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
                aria-describedby="case-studies-main-heading"
              >
                {tt.hero.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.hero.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/services">{tt.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Platform specialists">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.services.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {tt.services.title}
              </h2>
              <p className="text-muted-foreground md:text-lg">{tt.services.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {platforms.map((platform, i) => (
                <motion.button
                  key={platform.name}
                  type="button"
                  onClick={() => setSelectedPlatform(platform.name)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group flex h-full flex-col rounded-2xl border bg-card p-6 text-left transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)] ${
                    selectedPlatform === platform.name ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
                  }`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    {platform.icon}
                  </span>
                  <h3 className="font-display text-base md:text-lg font-semibold mt-5 mb-2">
                    {tt.serviceLabels[platform.name as ServiceKey]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tt.serviceDescriptions[platform.name as ServiceKey]}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedPlatform === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform("all")}
                className={`rounded-full font-medium ${
                  selectedPlatform === "all" ? "" : "border-border bg-transparent hover:bg-muted"
                }`}
              >
                {tt.services.all}
              </Button>
              {platforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant={selectedPlatform === platform.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={`rounded-full font-medium ${
                    selectedPlatform === platform.name ? "" : "border-border bg-transparent hover:bg-muted"
                  }`}
                >
                  {tt.serviceLabels[platform.name as ServiceKey]}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Case study results">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-10">
              {filteredStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-52 md:h-72 lg:h-auto lg:min-h-full">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {study.industry}
                        </span>
                        {study.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tt.serviceLabels[platform as ServiceKey]}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-5">{study.title}</h3>

                      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 rounded-2xl border border-border bg-muted/40 p-4">
                        {study.metrics.map((metric, j) => (
                          <div key={j} className="text-center">
                            <div className="font-display text-lg md:text-2xl font-semibold text-primary">{metric.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.challenge}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.solution}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.results}
                          </h4>
                          <p className="text-sm font-medium text-primary leading-relaxed">{study.results}</p>
                        </div>
                      </div>
                      <Button className="mt-6 w-fit rounded-full font-medium" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank">
                          {tt.study.cta}
                          <ArrowRight className="ml-1.5 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 border-t border-border bg-muted/50" aria-label="Contact">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-5">
                {tt.contact.title}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">{tt.contact.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.contact.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/services">{tt.contact.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
