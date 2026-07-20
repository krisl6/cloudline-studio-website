"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
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
  DoodleGrowth,
} from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { SeoWaitlistForm } from "@/components/seo-waitlist-form"
import { caseStudies } from "@/lib/case-studies-data"
import { translations } from "./translations"

const SEO_CASE_STUDIES = caseStudies.filter((study) => study.platforms.includes("SEO"))

// Real pixel dimensions of each screenshot, so the card shows the full image
// undistorted instead of cropping it to a fixed box.
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/case-studies-seo/mil-design-gsc.png": { width: 2080, height: 746 },
  "/case-studies-seo/tigercampus-gsc.png": { width: 2076, height: 860 },
  "/case-studies-seo/monstarx-gsc.png": { width: 2652, height: 1284 },
  "/case-studies-seo/darlie-gsc.png": { width: 1898, height: 910 },
}

const CAPABILITY_ICONS = [DoodlePen, DoodleSparkle, DoodleSearch, DoodleGear, DoodleTarget]
const STEP_ICONS = [DoodleSearch, DoodlePen, DoodleCheck, DoodleRocket]
const OUTCOME_ICONS = [DoodleSearch, DoodleTarget, DoodlePen, DoodleGear]

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

type AnswerPreviewCopy = {
  badge: string
  question: string
  answerPrefix: string
  answerHighlight: string
  answerSuffix: string
}

function AnswerPreviewCard({ copy }: { copy: AnswerPreviewCopy }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const fullAnswer = copy.answerPrefix + copy.answerHighlight + copy.answerSuffix
  const [charCount, setCharCount] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!inView) return
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCharCount((c) => {
          if (c >= fullAnswer.length) {
            clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, 18)
    }, 500)
    return () => clearTimeout(startDelay)
  }, [inView, fullAnswer.length])

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  const revealed = fullAnswer.slice(0, charCount)
  const highlightStart = copy.answerPrefix.length
  const highlightEnd = highlightStart + copy.answerHighlight.length
  const done = charCount >= fullAnswer.length

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-5 shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-amber-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">{copy.badge}</span>
      </div>
      <div className="flex justify-end mb-3">
        <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
          {copy.question}
        </p>
      </div>
      <div className="flex justify-start">
        <p className="max-w-[90%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-sm text-foreground/85 leading-relaxed min-h-[4.5rem]">
          {revealed.slice(0, Math.min(charCount, highlightStart))}
          <span className="font-semibold text-primary">
            {revealed.slice(Math.min(charCount, highlightStart), Math.min(charCount, highlightEnd))}
          </span>
          {revealed.slice(Math.min(charCount, highlightEnd))}
          {!done && showCursor && <span className="inline-block w-[2px] h-4 bg-primary align-middle ml-0.5" />}
        </p>
      </div>
    </div>
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

          <div className="container relative px-4 md:px-6 pt-14 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {tt.hero.tagline}
              </motion.p>

              <motion.div variants={fadeUp} className="mx-auto max-w-md mb-4">
                <AnswerPreviewCard copy={tt.hero.answerPreview} />
              </motion.div>
              <motion.div variants={fadeUp} className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-2 mb-10">
                {tt.hero.engines.map((engine) => (
                  <span key={engine} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                    {engine}
                  </span>
                ))}
              </motion.div>

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
        <section className="w-full py-14 md:py-20 lg:py-24 bg-muted/50 border-b border-border" aria-label="Why this matters">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl text-center mb-8">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.problem.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-6">
                {tt.problem.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.problem.body}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center mb-8"
            >
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary mb-2">
                <AnimatedStatValue value={tt.problem.stat.value} />
              </div>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto">{tt.problem.stat.label}</p>
              <p className="text-xs text-muted-foreground mt-3">{tt.problem.stat.source}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2"
            >
              <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-4">{tt.problem.oldLabel}</p>
                <ul className="space-y-2.5">
                  {tt.problem.oldItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/70">
                      <span className="size-1.5 rounded-full bg-muted-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-primary/30 ring-1 ring-primary/20 bg-card p-6">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-primary mb-4">{tt.problem.newLabel}</p>
                <ul className="space-y-2.5">
                  {tt.problem.newItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/90">
                      <DoodleCheck className="size-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="What you'll be able to do">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10">
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

        {/* Outcomes */}
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="What you gain">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10 mx-auto text-center">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.outcomes.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.outcomes.heading}
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {tt.outcomes.items.map((outcome, i) => {
                const Icon = OUTCOME_ICONS[i]
                return (
                  <motion.div key={outcome.label} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <span className="mx-auto mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-1.5">{outcome.tag}</p>
                    <h3 className="font-display text-lg font-semibold mb-2">{outcome.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{outcome.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-14 md:py-20 lg:py-24 bg-muted/50 border-b border-border" aria-label="How it works">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.howItWorks.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.howItWorks.heading}
              </h2>
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <DoodleGrowth className="size-4 text-primary/60" />
                {tt.howItWorks.engineNote}
              </p>
            </motion.div>

            <div className="relative">
              {/* Line endpoints use calc() to hit each badge's true center: badges sit
                  flush-left in their grid column (not centered), so the offset is
                  half a badge width (22px) from the left, and half a badge width plus
                  three-quarters of the column gap (22px + 24px = 46px) short of the
                  right edge — not a naive 12.5%/12.5% guess. */}
              <motion.div
                className="hidden lg:block absolute top-[22px] left-[22px] right-[calc(25%-46px)] h-px bg-border origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                        <span className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary font-display text-sm font-semibold">
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
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="Backed by real results">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10 text-center mx-auto">
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

        {/* Case Studies */}
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="Case studies">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10 mx-auto text-center">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.caseStudies.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.caseStudies.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.caseStudies.subcopy}</p>
            </motion.div>

            <div className="grid gap-6 md:gap-8 max-w-5xl mx-auto">
              {SEO_CASE_STUDIES.map((study, i) => {
                const hasRealImage = !study.image.includes("circledna-snapshot")
                return (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                  >
                    <div className={hasRealImage ? "grid lg:grid-cols-2 gap-0" : "grid"}>
                      {hasRealImage && (
                        <div className="flex items-center justify-center bg-muted p-4 lg:h-full">
                          <Image
                            src={study.image}
                            alt={study.title}
                            width={IMAGE_DIMENSIONS[study.image]?.width ?? 1600}
                            height={IMAGE_DIMENSIONS[study.image]?.height ?? 900}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        <span className="inline-flex items-center self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-5">
                          {study.industry}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-5">{study.title}</h3>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 rounded-2xl border border-border bg-muted/40 p-4">
                          {study.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <div className="font-display text-lg md:text-2xl font-semibold text-primary">{metric.value}</div>
                              <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                              {tt.caseStudies.challengeLabel}
                            </h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                              {tt.caseStudies.solutionLabel}
                            </h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                              {tt.caseStudies.resultsLabel}
                            </h4>
                            <p className="text-sm font-medium text-primary leading-relaxed">{study.results}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="rounded-full font-medium border-border bg-transparent hover:bg-muted" asChild>
                <Link href="/case-studies/seo">
                  {tt.caseStudies.viewAllCta}
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dark CTA band */}
        <section className="w-full bg-foreground py-16 md:py-20" aria-label="Get cited">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance text-background mb-4">
                {tt.ctaBand.heading}
              </h2>
              <p className="text-background/70 md:text-lg leading-relaxed mb-8">{tt.ctaBand.subcopy}</p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90" onClick={scrollToWaitlist}>
                {tt.ctaBand.cta} <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="relative w-full py-14 md:py-20 lg:py-24 bg-muted/50 border-b border-border overflow-hidden" aria-label="Join the waitlist">
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
        <section className="w-full py-14 md:py-20 lg:py-24" aria-label="Frequently asked questions">
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
