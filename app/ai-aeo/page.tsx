"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  DoodlePen,
  DoodleSparkle,
  DoodleSearch,
  DoodleGear,
  DoodleTarget,
  DoodleCheck,
  DoodleRocket,
} from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { SeoWaitlistForm } from "@/components/seo-waitlist-form"
import { translations } from "./translations"

const CAPABILITY_ICONS = [DoodlePen, DoodleSparkle, DoodleSearch, DoodleGear, DoodleTarget]
const STEP_ICONS = [DoodleSearch, DoodlePen, DoodleCheck, DoodleRocket]

const HERO_FLOATERS = [
  { Icon: DoodleSparkle, className: "top-4 left-[6%] size-10 sm:size-14", delay: 0 },
  { Icon: DoodleSearch, className: "top-20 right-[6%] size-12 sm:size-16", delay: 0.5 },
  { Icon: DoodlePen, className: "bottom-16 left-[9%] size-10 sm:size-12", delay: 1 },
  { Icon: DoodleTarget, className: "bottom-4 right-[11%] size-12 sm:size-14", delay: 1.5 },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

function AnimatedStatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ""
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || target === null) return
    const duration = 1200
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  if (target === null) {
    return <span ref={ref}>{value}</span>
  }
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

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
          <div
            className="absolute -top-24 -left-20 size-72 rounded-full bg-primary/10 blur-3xl [animation-duration:7s] animate-pulse -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-20 size-72 rounded-full bg-primary/10 blur-3xl [animation-duration:7s] animate-pulse -z-10"
            aria-hidden="true"
          />
          {HERO_FLOATERS.map(({ Icon, className, delay }, i) => (
            <motion.div
              key={i}
              className={`pointer-events-none absolute hidden sm:block text-primary/10 ${className}`}
              animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
              aria-hidden="true"
            >
              <Icon className="size-full" />
            </motion.div>
          ))}

          <div className="container relative px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                {tt.hero.tagline}
              </motion.p>

              <motion.p variants={fadeUp} className="font-display text-base sm:text-lg font-semibold text-foreground mb-5">
                {tt.hero.whatIsHeading}
              </motion.p>

              <motion.div variants={stagger} className="mx-auto grid max-w-xl gap-3 sm:grid-cols-2 mb-10 text-left">
                {tt.hero.listItems.map((item, i) => {
                  const Icon = CAPABILITY_ICONS[i]
                  return (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 rounded-xl px-3 py-2"
                    >
                      <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="text-sm sm:text-[0.95rem] font-medium text-foreground/90 leading-snug">{item}</span>
                    </motion.div>
                  )
                })}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" onClick={scrollToWaitlist}>
                  {tt.hero.ctaWaitlist} <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </motion.div>
              <motion.p variants={fadeUp} className="mt-4 text-xs sm:text-sm text-muted-foreground">
                {tt.hero.launchNote}
              </motion.p>
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
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative overflow-hidden flex flex-col rounded-2xl border border-border bg-card p-7 ${i === 0 ? "sm:col-span-2 lg:col-span-1 border-primary/30 ring-1 ring-primary/20" : ""}`}
                  >
                    <span aria-hidden="true" className="absolute top-3 right-5 font-display text-5xl font-bold text-foreground/[0.04] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
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

            <div className="relative">
              <motion.div
                className="hidden lg:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-border origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {tt.howItWorks.steps.map((step, i) => {
                  const Icon = STEP_ICONS[i]
                  return (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="relative inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary font-display text-sm font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon className="size-5 text-primary/60" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
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
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-card p-7 text-center"
                >
                  <div className="font-display text-3xl font-semibold tracking-tight text-primary mb-2">
                    <AnimatedStatValue value={stat.value} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="relative w-full py-20 md:py-28 bg-muted/50 border-b border-border overflow-hidden" aria-label="Join the waitlist">
          <motion.div
            className="pointer-events-none absolute top-10 right-[8%] hidden sm:block size-12 text-primary/10"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <DoodleSparkle className="size-full" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute bottom-10 left-[8%] hidden sm:block size-10 text-primary/10"
            animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            aria-hidden="true"
          >
            <DoodleTarget className="size-full" />
          </motion.div>
          <div className="container relative px-4 md:px-6">
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
