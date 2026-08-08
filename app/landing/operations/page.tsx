"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ClipboardList, Handshake, Layers, ListChecks, RadioTower, Zap } from "lucide-react"
import { AuditForm } from "@/components/audit-form"
import { WHATSAPP_URL } from "@/lib/site"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I'd like a free operations & automation audit for my business."
)}`

const PAIN_POINTS = [
  "Sales, marketing, and operations teams working off different systems, with leads slipping between them",
  "Six-figure monthly spend on overlapping CRM, booking, and marketing subscriptions doing the same job",
  "Follow-ups and reminders that depend on someone remembering to send them",
  "No real-time view of which bookings actually came from which channel or campaign",
]

const AUDIT_DELIVERS = [
  { icon: Layers, title: "Stack & handoff audit", desc: "Where your CRM, booking, and marketing tools overlap or break down between departments" },
  { icon: RadioTower, title: "Synchronization plan", desc: "How to get sales, marketing, and operations teams on one shared, real-time view" },
  { icon: Zap, title: "30-day action plan", desc: "3 specific fixes your team can execute in the next month, no new headcount required" },
]

const JOURNEY = [
  { icon: ClipboardList, title: "Tell us your stack", desc: "A 2-minute form on what CRM, booking, and marketing tools you're running today" },
  { icon: Layers, title: "We map the breakdown", desc: "Within 48 hours we trace exactly where handoffs fail between sales, marketing, and operations teams" },
  { icon: ListChecks, title: "You get a consolidation plan", desc: "A prioritised roadmap: what to merge, what to cut, and the projected savings" },
  { icon: Handshake, title: "You decide what's next", desc: "No pressure. Keep the roadmap and run it yourself, or bring us in to execute it" },
]

const PROOF = [
  {
    name: "ClearSK Aesthetic Clinic",
    location: "Singapore",
    quote:
      "CloudLine rebuilt how our marketing and sales actually run. They consolidated our CRM and sales stack, automated lead follow-up with AI, and gave every team one source of truth. We cut over S$100K a month in redundant subscriptions and grew bookings and revenue 40% in a single quarter.",
    stat: "S$100K/month saved · +40% bookings & revenue in 3 months",
  },
  {
    name: "Lasus Plastic Surgery Clinic",
    location: "Malaysia",
    quote:
      "Our front desk, marketing, and surgical teams worked in silos. CloudLine consolidated everything onto one CRM, synced our departments in real time, and automated lead routing and reminders. We cut redundant subscriptions and lifted bookings and revenue 35% in under four months.",
    stat: "Departments synced in real time · +35% bookings & revenue in <4 months",
  },
]

export default function OperationsLP() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                Is your business losing revenue to disconnected systems?
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                Most businesses run sales, marketing, and operations teams on tools that don't talk to each other. We'll audit your CRM, booking, and marketing stack in 48 hours and show you exactly where revenue is falling through the cracks, for free.
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
                Operations that feel chaotic usually are
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

        {/* Proof */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                This is what the audit leads to
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {PROOF.map((p) => (
                <motion.div key={p.name} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <p className="text-sm text-foreground/80 leading-relaxed mb-5">&ldquo;{p.quote}&rdquo;</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display text-base font-semibold">{p.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{p.location}</p>
                    <p className="text-xs font-medium text-primary">{p.stat}</p>
                  </div>
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
              <AuditForm niche="business" interest="operations" />
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
