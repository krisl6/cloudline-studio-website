"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle2, Target, TrendingUp } from "lucide-react"
import { AuditForm } from "@/components/audit-form"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const PAIN_POINTS = [
  "You built the course. You launched. Crickets.",
  "Running ads but your cost-per-enrollment makes the numbers not work",
  "Email list exists but nobody buys when you send a campaign",
  "Unclear whether to focus on YouTube, Instagram, or paid ads",
]

const AUDIT_DELIVERS = [
  { icon: Target, title: "Messaging clarity check", desc: "Whether your offer communicates value to the right buyer" },
  { icon: BookOpen, title: "Funnel & channel audit", desc: "Where your enrollment funnel is leaking and how to plug it" },
  { icon: TrendingUp, title: "30-day action plan", desc: "The 3 highest-leverage moves to drive enrollment this month" },
]

export default function OnlineCourseMarketingLP() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                Free Online Course Marketing Audit
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                Stop sitting on a course nobody knows exists
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                Most course creators have a messaging problem, not an expertise problem. We'll audit your funnel and tell you exactly why enrollment is low. Free audit, in 48 hours..
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="#audit-form"
                  onClick={(e) => { e.preventDefault(); document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" }) }}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-12 px-8 text-base font-medium hover:bg-primary/90 transition-colors"
                >
                  Get my free audit
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">Sound familiar?</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Great knowledge. Marketing that isn't working.
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
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">What you get</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                A roadmap to consistent enrollments
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

        {/* Form */}
        <section id="audit-form" className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">Free, no commitment</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">Request your audit</h2>
                <p className="text-muted-foreground">We review every submission and reply within 1 business day.</p>
              </div>
              <AuditForm niche="education" />
            </motion.div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="w-full py-12 border-t border-border">
          <div className="container px-4 md:px-6 text-center">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">Trusted by course creators and educators</p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              CloudLine has helped educators, coaches, and course creators in SEA grow enrollment through targeted digital marketing.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
