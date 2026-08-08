"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ClipboardList, Handshake, ListChecks, Megaphone, Palette, Target } from "lucide-react"
import { AuditForm } from "@/components/audit-form"
import { WHATSAPP_URL } from "@/lib/site"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I'd like a free branding & marketing audit for my business."
)}`

const PAIN_POINTS = [
  "Messaging that sounds like every other business in your space",
  "Running ads with no clear brand story behind them",
  "Prospective customers forget you before they ever reach out",
  "Content that only goes out when someone on the team has spare time",
]

const AUDIT_DELIVERS = [
  { icon: Palette, title: "Brand & positioning audit", desc: "Whether your identity and messaging actually attract the customers you want" },
  { icon: Target, title: "Campaign performance review", desc: "What your search and social spend is really returning, and where it's wasted" },
  { icon: Megaphone, title: "30-day content plan", desc: "3 specific creative and channel shifts your team can act on next month" },
]

const JOURNEY = [
  { icon: ClipboardList, title: "Tell us your campaigns", desc: "Share what channels and creative you're currently running" },
  { icon: Target, title: "We audit positioning & spend", desc: "Within 48 hours we review your brand story and where your campaign spend is actually going" },
  { icon: ListChecks, title: "You get a 30-day content plan", desc: "Specific creative and channel shifts, ranked by impact" },
  { icon: Handshake, title: "You decide what's next", desc: "No pressure, no lock-in" },
]

const STATS = [
  { number: "3.5x", label: "ROAS" },
  { number: "4.9x", label: "Average Growth" },
  { number: "25+", label: "Happy Clients" },
  { number: "95%", label: "Project Success Rate" },
]

export default function BrandingLP() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                Is your brand recognised, or just another option on Google Maps?
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                Most businesses run campaigns without a brand behind them. We'll audit your positioning, creative, and campaigns in 48 hours and show you exactly what's holding recognition back, for free.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#audit-form"
                  onClick={(e) => { e.preventDefault(); document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" }) }}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-12 px-8 text-base font-medium hover:bg-primary/90 transition-colors"
                >
                  Get my free audit
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent h-12 px-8 text-base font-medium hover:bg-muted transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Good work. Forgettable brand.
              </h2>
            </motion.div>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mx-auto space-y-4">
              {PAIN_POINTS.map((p) => (
                <motion.li key={p} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                A straight-talking audit. No fluff.
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {AUDIT_DELIVERS.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="mx-auto mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                From form to fix, here's what happens
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
              {JOURNEY.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-medium tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats — aggregate, site-wide numbers. No niche-specific branding
            case study exists yet, so this stays honestly framed as an
            average across all client campaigns rather than a fabricated claim. */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                Average results across all our client campaigns
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {STATS.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-primary mb-1">{s.number}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section id="audit-form" className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">Request your audit</h2>
                <p className="text-muted-foreground">We review every submission and reply within 1 business day.</p>
              </div>
              <AuditForm niche="business" interest="branding" />
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
