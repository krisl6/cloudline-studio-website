"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DoodlePen, DoodleSparkle, DoodleSearch, DoodleGear, DoodleTarget } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { SeoWaitlistForm } from "@/components/seo-waitlist-form"
import { translations } from "./translations"

const CAPABILITY_ICONS = [DoodlePen, DoodleSparkle, DoodleSearch, DoodleGear, DoodleTarget]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

export default function CloudlineAeoAiPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                {tt.hero.tagline}
              </motion.p>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary mb-9">
                <CalendarDays className="size-4" />
                {tt.hero.launchNote}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" onClick={scrollToWaitlist}>
                  {tt.hero.ctaWaitlist} <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="Why this matters">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.problem.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-6">
                {tt.problem.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.problem.body}</p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="What you'll be able to do">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.capabilities.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.capabilities.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.capabilities.subcopy}</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tt.capabilities.items.map((item, i) => {
                const Icon = CAPABILITY_ICONS[i]
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={`flex flex-col rounded-2xl border border-border bg-card p-7 ${i === 0 ? "sm:col-span-2 lg:col-span-1 border-primary/30 ring-1 ring-primary/20" : ""}`}
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-5 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="How it works">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.howItWorks.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.howItWorks.heading}
              </h2>
            </motion.div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {tt.howItWorks.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-primary font-display text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Backed by real results">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14 text-center mx-auto">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.proof.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.proof.heading}
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {tt.proof.stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="rounded-2xl border border-border bg-card p-7 text-center">
                  <div className="font-display text-3xl font-semibold tracking-tight text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="Join the waitlist">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.waitlist.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{tt.waitlist.heading}</h2>
                <p className="text-muted-foreground md:text-lg">{tt.waitlist.subcopy}</p>
              </div>
              <SeoWaitlistForm />
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-20 md:py-28" aria-label="Frequently asked questions">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-10 text-center">
                {tt.faq.heading}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {tt.faq.items.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
