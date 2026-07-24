"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Clock, Download, MapPin, Navigation, Timer, Users, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

// ── EVENT DETAILS ──────────────────────────────────────────────────
// Same real event as /events/marketing-masterclass (same date/time/venue) —
// this page is an A/B test of a different headline, framing, and design,
// not a different event.
const VENUE_MAPS_URL = "https://maps.google.com/?q=Infinity8+Sunway+Square"
const VENUE_WAZE_URL = "https://waze.com/ul?q=Infinity8%20Sunway%20Square&navigate=yes"
const LESSON_PLAN_URL = "/second-brain-ai-lesson-plan.pdf"
const EVENT_START = "2026-08-12T12:30:00+08:00"

// ── SEATS ───────────────────────────────────────────────────────────
// Real capacity, shared with the marketing-masterclass page. Update by hand
// after checking Stripe — this number is displayed as fact, never fabricate it.
const TOTAL_SEATS = 15
const SEATS_REMAINING = 12

// ── TRUSTED BY ──────────────────────────────────────────────────────
// Real clients named in Kristine's bio. Only listed here once a real logo
// asset exists locally — never a placeholder standing in for a trademark.
const TRUSTED_BY_LOGOS = [
  { name: "Petronas Lubricants", logo: "/petronas-logo.png" },
  { name: "Prenetics", logo: "/prenetics-logo.png" },
  { name: "CircleDNA", logo: "/circle-dna-logo.png" },
] as const

function useCountdown(targetIso: string) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number; done: boolean } | null>(null)

  useEffect(() => {
    const target = new Date(targetIso).getTime()
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1_000) % 60),
        done: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetIso])

  return timeLeft
}

// ── TICKETS ─────────────────────────────────────────────────────────
// All tiers checkout via Stripe Payment Links (see app/api/webhooks/stripe).
// The Early Bird Pair link's Stripe Dashboard "after payment" redirect must
// point at /events/second-brain-ai/register-pair?session_id={CHECKOUT_SESSION_ID}
// so both attendees' details get collected post-payment.

const TICKET_INCLUSIONS = [
  "Full workshop access (12:30pm–5pm): Agentic AI Workflows + BONUS Video Automation",
  "Live project demos from Kristine & Ken",
  "One FREE week of Pro for the first 5 sign-ups",
  "One FREE week of co-working access at INFINITY8",
  "Free-flow refreshments, coffee & tea",
  "Workshop materials & templates",
]

const TICKET_INCLUSIONS_PAIR = [
  "Full workshop access (12:30pm–5pm) for 2 attendees: Agentic AI Workflows + BONUS Video Automation",
  "Live project demos from Kristine & Ken",
  "One FREE week of Pro for the first 5 sign-ups",
  "One FREE week of co-working access at INFINITY8 (both attendees)",
  "Free-flow refreshments, coffee & tea for both attendees",
  "Workshop materials & templates",
]

const TICKET_INCLUSIONS_VIRTUAL = [
  "Live-streamed access to the full workshop (12:30pm–5pm): Agentic AI Workflows + BONUS Video Automation",
  "Recording available to rewatch afterward",
  "Workshop materials & templates",
]

const TICKET_TIERS = [
  {
    name: "Early Bird",
    price: "RM 359",
    originalPrice: "RM 499" as string | null,
    popular: false,
    limited: true,
    // Verified live via checkout: "Early Bird — Build Your Second Brain with
    // Agentic AI" for MYR 359.00.
    stripeUrl: "https://buy.stripe.com/5kQ5kC9z77Wb5Rg7kHbZe05" as string | undefined,
    features: TICKET_INCLUSIONS,
  },
  {
    name: "Early Bird Pair",
    price: "RM 659",
    originalPrice: null as string | null,
    popular: true,
    limited: false,
    twoTickets: true,
    // Verified live via checkout: "Early Bird PAIR TICKETS" for MYR 659.00.
    // After payment, Stripe redirects the buyer to /register-pair (set on the
    // Payment Link's confirmation-page setting) to collect both attendees'
    // details — Stripe's own checkout only captures the purchaser's info.
    stripeUrl: "https://buy.stripe.com/dRmcN4bHfa4jdjI6gDbZe08" as string | undefined,
    features: TICKET_INCLUSIONS_PAIR,
  },
  {
    name: "Virtual Pass",
    price: "RM 199",
    originalPrice: null as string | null,
    popular: false,
    limited: false,
    // Verified live via checkout: "Virtual Pass — Build Your Second Brain
    // with Agentic AI" for MYR 199.00.
    stripeUrl: "https://buy.stripe.com/aFa6oG26FgsHfrQgVhbZe07" as string | undefined,
    features: TICKET_INCLUSIONS_VIRTUAL,
  },
] as const

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()
}

type SpeakerPerson = {
  name: string
  role: string
  bioShort: string
  bio: string
  bioExtra?: string
  badge?: string
  topics?: readonly string[]
  photo: string | null
}

function SpeakerCard({
  person,
  index,
  readMoreLabel,
  readLessLabel,
}: {
  person: SpeakerPerson
  index: number
  readMoreLabel: string
  readLessLabel: string
}) {
  const [expanded, setExpanded] = useState(false)
  const photo = person.photo

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {person.badge && (
        <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-amber-500/12 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
          {person.badge}
        </span>
      )}
      <div className="flex justify-center pt-6 sm:pt-8">
        {photo ? (
          <div className="relative size-20 sm:size-24 overflow-hidden rounded-full">
            <Image src={photo} alt={person.name} fill sizes="96px" className="object-cover" />
          </div>
        ) : (
          <span className="flex size-20 sm:size-24 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-2xl">
            {initials(person.name)}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-lg font-semibold text-center">{person.name}</h3>
        <p className="text-xs font-medium text-primary mb-2 sm:mb-3 text-center">{person.role}</p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{person.bioShort}</p>
        {expanded && (
          <>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3">{person.bio}</p>
            {person.bioExtra && (
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3">{person.bioExtra}</p>
            )}
          </>
        )}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 sm:mt-3 text-xs font-semibold text-primary hover:underline"
        >
          {expanded ? readLessLabel : readMoreLabel}
        </button>
        {person.topics && (
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
            {person.topics.map((topic) => (
              <span key={topic} className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ChecklistItems({ items, delayBase = 0, twoCol = false }: { items: readonly string[]; delayBase?: number; twoCol?: boolean }) {
  return (
    <ul className={twoCol ? "grid gap-x-8 gap-y-2.5 sm:grid-cols-2" : "space-y-2 sm:space-y-2.5"}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delayBase + i * 0.05 }}
          className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
        >
          <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

export default function SecondBrainAgenticAiPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const timeLeft = useCountdown(EVENT_START)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Non-profit disclosure banner */}
        <div className="w-full bg-primary/8 border-b border-primary/15">
          <div className="container px-4 md:px-6 py-2">
            <p className="text-center text-xs sm:text-sm font-medium text-primary">{tt.nonProfitNote}</p>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Event overview">
          <div className="container px-4 md:px-6 pt-8 pb-6 md:pt-14 md:pb-14">
            <div className="mx-auto max-w-6xl grid items-center gap-6 lg:gap-14 lg:grid-cols-[1fr_minmax(0,440px)]">
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-5">
                  {tt.hero.eyebrow}
                </motion.p>
                <motion.h1 variants={fadeUp} className="font-display text-3xl sm:text-5xl lg:text-[3rem] font-semibold tracking-tight text-balance leading-[1.1] sm:leading-[1.05] mb-3 sm:mb-4">
                  {tt.hero.headline}
                </motion.h1>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 sm:mb-5 text-xs sm:text-sm font-medium text-foreground/80">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-4 text-primary" />
                    {tt.hero.datetime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-primary" />
                    {tt.hero.time}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center gap-1.5 underline decoration-dotted underline-offset-4 outline-none hover:text-primary transition-colors">
                      <MapPin className="size-4 text-primary" />
                      {tt.hero.location}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <Link href={VENUE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                          <MapPin className="mr-2 size-4" />{tt.hero.ctaDirections}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={VENUE_WAZE_URL} target="_blank" rel="noopener noreferrer">
                          <Navigation className="mr-2 size-4" />{tt.hero.ctaWaze}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
                <motion.div variants={fadeUp} className="mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/12 px-3 py-1 text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400">
                    <Sparkles className="size-3.5 shrink-0" />
                    {tt.hero.bonusBadge}
                  </span>
                </motion.div>
                <motion.p variants={fadeUp} className="max-w-2xl text-sm sm:text-lg font-medium text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                  {tt.hero.tagline}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {tt.hero.toolStack.map((tool) => (
                    <span key={tool.name} className="relative h-9 w-24 sm:h-10 sm:w-28 shrink-0 overflow-hidden rounded-lg border border-border bg-[#0d0d0d]">
                      <Image src={tool.logo} alt={tool.name} fill sizes="112px" className="object-contain p-1" />
                    </span>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} className="hidden sm:block max-w-2xl space-y-2 mb-5">
                  {tt.hero.detailParagraphs.map((paragraph, i) => (
                    <p key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs sm:text-sm font-medium tabular-nums">
                    <Timer className="size-4 text-primary shrink-0" />
                    {timeLeft && !timeLeft.done ? (
                      <span>
                        {tt.hero.startsIn}{" "}
                        {timeLeft.days > 0 && `${timeLeft.days}${tt.hero.seatsUnit.d} `}
                        {timeLeft.hours}{tt.hero.seatsUnit.h} {timeLeft.minutes}{tt.hero.seatsUnit.m} {timeLeft.seconds}{tt.hero.seatsUnit.s}
                      </span>
                    ) : timeLeft?.done ? (
                      <span>{tt.hero.eventStarted}</span>
                    ) : (
                      <span className="opacity-0">00d 00h 00m 00s</span>
                    )}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary">
                    <Users className="size-4 shrink-0" />
                    <span>{SEATS_REMAINING} {tt.hero.seatsLeft}</span>
                  </span>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-3">
                  <Button size="lg" className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-medium" onClick={() => scrollTo("tickets")}>
                    {tt.hero.ctaTickets} <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-medium border-border bg-transparent hover:bg-muted" asChild>
                    <Link href={LESSON_PLAN_URL} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-1.5 size-4" />{tt.hero.ctaLessonPlan}
                    </Link>
                  </Button>
                </motion.div>
                <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium text-primary">
                  {tt.hero.limitedSeatsNote}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[220px] sm:max-w-md mx-auto lg:mx-0 aspect-square overflow-hidden rounded-2xl border border-border shadow-sm"
              >
                <Image
                  src="/second-brain-ai-poster.png"
                  alt="Vibe Coding Workshop — Claude, OpenClaw, Hermes — 12 August 2026, no coding skills required"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline — the page's interactive spine. Each step is independently
            expandable (Accordion type="multiple") so visitors can open several
            at once rather than being forced to close one to read another.
            Ordered non-technical → more technical, per the workshop's real
            teaching order: Claude (chat) → safety checkpoint → Hermes Agent
            (moderate autonomy) → OpenClaw (fully self-hosted/autonomous). */}
        <section className="w-full py-8 md:py-12 lg:py-14 border-b border-border" aria-label="Workshop timeline">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-6 sm:mb-8">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.timeline.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-2 sm:mb-3">
                {tt.timeline.heading}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{tt.timeline.subcopy}</p>
            </motion.div>

            <div className="relative max-w-3xl">
              <div className="absolute left-[3.75rem] sm:left-[4.5rem] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
              <Accordion type="multiple" className="space-y-3 sm:space-y-4">
                {tt.timeline.steps.map((step, i) => (
                  <motion.div
                    key={step.time + step.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative"
                  >
                    {"expandable" in step && step.expandable ? (
                      <AccordionItem value={step.title} className="border-none">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span className="w-14 sm:w-16 shrink-0 text-right text-xs sm:text-sm font-medium text-muted-foreground">{step.time}</span>
                          <span className="relative z-10 size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
                          <AccordionTrigger className="flex-1 rounded-xl border border-border bg-card px-4 py-3 hover:no-underline hover:border-primary/40 [&>svg]:text-muted-foreground">
                            <div className="flex flex-1 flex-wrap items-center gap-x-2.5 gap-y-1 text-left">
                              <span className="font-display text-sm sm:text-base font-semibold">{step.title}</span>
                              {"badge" in step && step.badge && (
                                <span className="inline-flex items-center rounded-full bg-amber-500/12 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                                  {step.badge}
                                </span>
                              )}
                              {"level" in step && step.level && (
                                <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                                  {step.level}
                                </span>
                              )}
                            </div>
                          </AccordionTrigger>
                        </div>
                        <AccordionContent className="pl-[4.5rem] sm:pl-[5.5rem] pt-2">
                          <div className="rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
                            {"summary" in step && step.summary && (
                              <p className="text-sm font-medium text-foreground/85 leading-relaxed mb-3">{step.summary}</p>
                            )}
                            {"description" in step && step.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                            )}
                            {"intro" in step && step.intro && (
                              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                                <ShieldCheck className="size-3.5 shrink-0" />
                                {step.intro}
                              </p>
                            )}
                            <ChecklistItems items={step.items} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="w-14 sm:w-16 shrink-0 text-right text-xs sm:text-sm font-medium text-muted-foreground">{step.time}</span>
                        <span className="relative z-10 size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
                        <span className="font-display text-sm sm:text-base font-semibold text-muted-foreground">{step.title}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Trusted by — real clients named in Kristine's bio, only shown once
            a real logo asset exists locally (never a placeholder standing in
            for a trademark). */}
        <section className="w-full py-6 md:py-8 bg-muted/50 border-b border-border" aria-label="Trusted by">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-5 sm:gap-6 text-center"
            >
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground max-w-md">{tt.trustedBy.label}</p>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {TRUSTED_BY_LOGOS.map((client, i) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative h-10 w-28 sm:h-12 sm:w-32 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  >
                    <Image src={client.logo} alt={client.name} fill sizes="128px" className="object-contain" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Speakers */}
        <section className="w-full py-8 md:py-12 lg:py-14 border-b border-border" aria-label="Speakers">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-6 sm:mb-8">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.speakers.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.speakers.heading}
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {tt.speakers.people.map((person, i) => (
                <SpeakerCard
                  key={person.name}
                  person={person}
                  index={i}
                  readMoreLabel={tt.speakers.readMore}
                  readLessLabel={tt.speakers.readLess}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for + what to bring */}
        <section className="w-full py-8 md:py-12 lg:py-14 bg-muted/50 border-b border-border" aria-label="Who this workshop is for">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-5">{tt.whoFor.heading}</h2>
                <ChecklistItems items={tt.whoFor.items} />
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-5">{tt.whatToBring.heading}</h2>
                <ChecklistItems items={tt.whatToBring.items} delayBase={0.1} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Takeaways — value recap right before the ticket decision */}
        <section className="w-full py-8 md:py-12 lg:py-14 border-b border-border" aria-label="What you'll take away">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-8 sm:mb-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.takeaways.heading}
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-3 sm:grid-cols-2 max-w-3xl">
              {tt.takeaways.items.map((item) => (
                <motion.div key={item} variants={fadeUp} whileHover={{ y: -3 }} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-shadow hover:shadow-md">
                  <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ticket pricing */}
        <section id="tickets" className="w-full py-8 md:py-12 lg:py-14 bg-muted/50 border-b border-border" aria-label="Ticket pricing">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-6 sm:mb-8">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.tickets.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-3 sm:mb-4">
                {tt.tickets.heading}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl mb-6 sm:mb-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground w-full mb-1">{tt.included.heading}</p>
              {tt.included.items.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-foreground/70">
                  <DoodleCheck className="size-3.5 shrink-0 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {TICKET_TIERS.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={`relative flex h-full flex-col rounded-2xl border bg-card p-5 sm:p-7 transition-shadow duration-300 hover:shadow-lg ${
                    tier.popular ? "border-primary ring-1 ring-primary/20 hover:shadow-primary/10" : "border-border hover:shadow-primary/5"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-5 sm:left-7 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  {tier.limited && (
                    <span className="absolute -top-3 left-5 sm:left-7 inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
                      Limited Availability
                    </span>
                  )}
                  <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{tier.name}</h3>
                    {"twoTickets" in tier && tier.twoTickets && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        2 Tickets
                      </span>
                    )}
                  </div>
                  <div className={`flex items-baseline gap-2 font-display text-2xl font-semibold tracking-tight text-foreground ${tier.limited ? "mb-2" : "mb-4 sm:mb-6"}`}>
                    {tier.originalPrice && (
                      <span className="text-base font-normal text-muted-foreground line-through">{tier.originalPrice}</span>
                    )}
                    <span>{tier.price}</span>
                  </div>
                  {tier.limited && (
                    <p className="text-xs font-medium text-amber-600 mb-3 sm:mb-4">Only a limited number of Early Bird tickets available</p>
                  )}
                  {"twoTickets" in tier && tier.twoTickets && (
                    <p className="text-sm font-bold text-foreground mb-3 sm:mb-4">One payment, two seats — bring a friend or colleague.</p>
                  )}
                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={feature} className={`flex items-start gap-2.5 text-sm ${"twoTickets" in tier && tier.twoTickets && i === 0 ? "font-bold text-foreground" : "text-foreground/80"}`}>
                        <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.stripeUrl ? (
                    <Button className={`mt-auto w-full rounded-full font-medium ${tier.popular ? "" : "border-border bg-transparent hover:bg-muted"}`} variant={tier.popular ? "default" : "outline"} asChild>
                      <Link href={tier.stripeUrl} target="_blank" rel="noopener noreferrer">
                        {tt.hero.ctaTickets}
                      </Link>
                    </Button>
                  ) : (
                    <Button className="mt-auto w-full rounded-full font-medium" variant="outline" disabled>
                      Coming Soon
                    </Button>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-xs text-center text-muted-foreground leading-relaxed">{tt.tickets.disclaimer}</p>
          </div>
        </section>

        {/* Partners */}
        <section className="w-full py-8 md:py-12 lg:py-14 border-b border-border" aria-label="Partners">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3 sm:mb-4">{tt.partners.eyebrow}</p>
                <div className="mb-4 sm:mb-6">
                  <div className="mb-4 sm:mb-5">
                    <Image src="/infinity8-logo.png" alt="Infinity8 logo" width={160} height={48} className="object-contain" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-1">
                    {tt.partners.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">{tt.partners.subheading}</p>
                </div>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>{tt.partners.p1}</p>
                  <p>{tt.partners.p2}</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[4/3] max-h-64 sm:max-h-none overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src="/infinity8-venue-1.jpg"
                  alt="Infinity8 Reserve boardroom at Sunway Square"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-8 md:py-12 lg:py-14 bg-muted/50" aria-label="Register">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4 sm:mb-5">{tt.cta.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4 sm:mb-5">
                {tt.cta.heading}
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-9">{tt.cta.subcopy}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" className="rounded-full h-11 sm:h-12 px-8 text-sm sm:text-base font-medium" onClick={() => scrollTo("tickets")}>
                  {tt.cta.ticketsButton} <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
