"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Clock, MapPin, Timer, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

// ── EVENT DETAILS ──────────────────────────────────────────────────
const VENUE_MAPS_URL = "https://maps.google.com/?q=Infinity8+Sunway+Square"
const EVENT_START = "2026-08-12T12:30:00+08:00"

// ── SEATS ───────────────────────────────────────────────────────────
// Real capacity. Update SEATS_REMAINING by hand after checking Stripe — this
// number is displayed on the page as fact, so never estimate or fabricate it.
const TOTAL_SEATS = 15
const SEATS_REMAINING = 12

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
const TICKET_EARLY_BIRD_URL = "https://buy.stripe.com/7sY5kCfXv7Wb7Zo5czbZe03"
const TICKET_STANDARD_URL = "https://buy.stripe.com/6oU3cu7qZ90f4NcbAXbZe04"
const TICKET_VIRTUAL_PASS_URL = "https://buy.stripe.com/aFa6oG26FgsHfrQgVhbZe07"

const TICKET_INCLUSIONS = [
  "Full masterclass access (1pm–5pm): Video Automation + AEO tracks",
  "Live project demos from Ken & Kenny",
  "One FREE week of Pro for the first 5 sign-ups",
  "One FREE week of co-working access at INFINITY8",
  "Lattes, cappuccinos and refreshments",
  "Workshop materials & templates",
]

const TICKET_INCLUSIONS_STANDARD = [
  ...TICKET_INCLUSIONS,
  "A 30-minute business consultation with Kristine Ling, available to book once your payment is confirmed",
]

// Remote attendance — drops the in-person-only perks (co-working access,
// refreshments) that a virtual attendee can't use.
const TICKET_INCLUSIONS_VIRTUAL = [
  "Live-streamed access to the full masterclass (1pm–5pm): Video Automation + AEO tracks",
  "Recording available to rewatch afterward",
  "Workshop materials & templates",
]

const TICKET_TIERS = [
  {
    name: "Early Bird",
    price: "RM 199",
    originalPrice: "RM 359" as string | null,
    popular: false,
    limited: true,
    link: TICKET_EARLY_BIRD_URL,
    features: TICKET_INCLUSIONS,
  },
  {
    name: "Standard",
    price: "RM 259",
    originalPrice: "RM 499" as string | null,
    popular: true,
    limited: false,
    link: TICKET_STANDARD_URL,
    features: TICKET_INCLUSIONS_STANDARD,
  },
  {
    name: "Virtual Pass",
    price: "RM 199",
    originalPrice: null as string | null,
    popular: false,
    limited: false,
    link: TICKET_VIRTUAL_PASS_URL,
    features: TICKET_INCLUSIONS_VIRTUAL,
  },
] as const

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()
}

export default function AiAutomationsAeoSeoPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const AGENDA_TRACKS = [
    { key: "aeo", time: "1:00 PM", photo: "/speaker-kenny-lee.png", data: tt.agenda.aeo },
    { key: "claude", time: "2:00 PM", photo: "/team-kristine.jpg", data: tt.agenda.claude },
    { key: "automation", time: "3:30 PM", photo: "/speaker-ken-ooi.jpg", data: tt.agenda.automation },
  ] as const

  const timeLeft = useCountdown(EVENT_START)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Event overview">
          <div className="container px-4 md:px-6 pt-10 pb-8 md:pt-28 md:pb-24">
            <div className="mx-auto max-w-6xl grid items-center gap-6 lg:gap-14 lg:grid-cols-[1fr_minmax(0,440px)]">
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-5">
                  {tt.hero.eyebrow}
                </motion.p>
                <motion.h1 variants={fadeUp} className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-balance leading-[1.1] sm:leading-[1.05] mb-3 sm:mb-6">
                  {tt.hero.headline}
                </motion.h1>
                <motion.p variants={fadeUp} className="max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {tt.hero.tagline}
                </motion.p>
                <motion.div variants={fadeUp} className="hidden sm:block max-w-2xl space-y-3 mb-9">
                  {tt.hero.detailParagraphs.map((paragraph, i) => (
                    <p key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 sm:mb-10 text-xs sm:text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-4 text-primary" />
                    {tt.hero.datetime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-primary" />
                    {tt.hero.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" />
                    {tt.hero.location}
                  </span>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5 mb-6 sm:mb-8">
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
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Button size="lg" className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-medium" onClick={() => scrollTo("tickets")}>
                    {tt.hero.ctaTickets} <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-medium border-border bg-transparent hover:bg-muted" asChild>
                    <Link href={VENUE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                      {tt.hero.ctaDirections}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[220px] sm:max-w-md mx-auto lg:mx-0 aspect-square overflow-hidden rounded-2xl border border-border shadow-sm"
              >
                <Image
                  src="/ai-automations-aeo-seo-poster.png"
                  alt="AI Automations, AEO & SEO Masterclass poster — 12 August 2026, 1pm to 5pm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="w-full py-12 md:py-20 lg:py-28 border-b border-border" aria-label="Speakers">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-8 sm:mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.speakers.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.speakers.heading}
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tt.speakers.people.map((person) => {
                const photo: string | null = person.photo
                return (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
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
                    {"tagline" in person && person.tagline && (
                      <p className="text-sm font-medium text-foreground/85 leading-relaxed mb-2 sm:mb-3">&ldquo;{person.tagline}&rdquo;</p>
                    )}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">{person.bio}</p>
                    {"bioExtra" in person && person.bioExtra && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3 line-clamp-3 sm:line-clamp-none">{person.bioExtra}</p>
                    )}
                    {"speakingStyle" in person && person.speakingStyle && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3 line-clamp-3 sm:line-clamp-none">{person.speakingStyle}</p>
                    )}
                    {"topics" in person && person.topics && (
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
              )})}
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="w-full py-12 md:py-20 lg:py-28 border-b border-border" aria-label="What will I learn">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-2 sm:mb-3">
                {tt.agenda.heading}
              </h2>
              <p className="text-sm font-medium text-primary mb-4 sm:mb-6">{tt.agenda.subcopy}</p>
              <div className="space-y-3 sm:space-y-4">
                {tt.agenda.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="mt-10 sm:mt-16 max-w-6xl">
              {/* Desktop timeline strip: the three tracks are real back-to-back sessions
                  in one afternoon, so the connector reflects the actual schedule, not a
                  decorative 01/02/03 sequence. Dots sit centered in their grid column, so
                  the line's start/end can be plain thirds (16.6667%) instead of a pixel calc. */}
              <div className="relative hidden lg:grid grid-cols-3 gap-8 mb-6">
                <motion.div
                  className="absolute top-1/2 left-[16.6667%] right-[16.6667%] h-px -translate-y-1/2 bg-border origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                {AGENDA_TRACKS.map((track, i) => (
                  <motion.div
                    key={track.key}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.35, type: "spring" }}
                    className="flex justify-center"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
                      <span className="size-[7px] shrink-0 rounded-full bg-primary" />
                      <span className="text-xs font-semibold tracking-[0.08em] text-foreground/70">{track.time}</span>
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {AGENDA_TRACKS.map((track, i) => (
                  <motion.div
                    key={track.key}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-7 transition-colors duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary lg:hidden">
                        <Clock className="size-3.5" />
                        {track.time}
                      </span>
                      <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-background shadow-sm transition-transform duration-300 group-hover:scale-110 lg:ml-auto">
                        <Image src={track.photo} alt="" fill sizes="40px" className="object-cover" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{track.data.heading}</h3>
                    {"intro" in track.data && track.data.intro && (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{track.data.intro}</p>
                    )}
                    <ul className="space-y-2 sm:space-y-3 mt-1">
                      {track.data.items.map((item, itemIdx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 + itemIdx * 0.06 + 0.2 }}
                          className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                        >
                          <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 sm:mt-8 text-sm font-medium text-primary max-w-3xl"
            >
              {tt.agenda.bonus}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 sm:mt-14 max-w-3xl rounded-2xl border border-border bg-muted/30 p-5 sm:p-6 md:p-8"
            >
              <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight mb-2">
                {tt.aeoExpress.heading}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-3 sm:mb-4">{tt.aeoExpress.subheading}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tt.aeoExpress.intro}</p>

              <Accordion type="single" collapsible>
                <AccordionItem value="syllabus" className="border-none">
                  <AccordionTrigger className="text-sm font-medium text-primary hover:no-underline py-0 justify-start gap-1.5 [&>svg]:ml-1.5">
                    {tt.aeoExpress.toggleLabel}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 mt-5 sm:mt-6">
                      {tt.aeoExpress.chapters.map((chapter) => (
                        <div key={chapter.title}>
                          <h4 className="font-display text-sm font-semibold mb-2 sm:mb-3">{chapter.title}</h4>
                          <ul className="space-y-2">
                            {chapter.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                                <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Schedule */}
        <section className="w-full py-12 md:py-20 lg:py-28 bg-muted/50 border-b border-border" aria-label="Schedule">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-8 sm:mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.schedule.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.schedule.heading}
              </h2>
            </motion.div>

            <div className="relative max-w-2xl">
              <div className="absolute left-[3.75rem] sm:left-[4.5rem] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
              <div className="space-y-4 sm:space-y-6">
                {tt.schedule.items.map((item, i) => (
                  <motion.div
                    key={item.time + item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative flex items-center gap-4 sm:gap-6"
                  >
                    <span className="w-14 sm:w-16 shrink-0 text-right text-xs sm:text-sm font-medium text-muted-foreground">{item.time}</span>
                    <span className="relative z-10 size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
                    <span className="font-display text-sm sm:text-base font-semibold">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="w-full py-12 md:py-20 lg:py-28 border-b border-border" aria-label="Who this workshop is for">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4 sm:mb-6">
                {tt.audience.heading}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {tt.audience.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ticket pricing */}
        <section id="tickets" className="w-full py-12 md:py-20 lg:py-28 bg-muted/50 border-b border-border" aria-label="Ticket pricing">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-8 sm:mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 sm:mb-4">{tt.tickets.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-3 sm:mb-4">
                {tt.tickets.heading}
              </h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {TICKET_TIERS.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  className={`relative flex h-full flex-col rounded-2xl border bg-card p-5 sm:p-7 ${
                    tier.popular ? "border-primary ring-1 ring-primary/20" : "border-border"
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
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-2 sm:mb-3">{tier.name}</h3>
                  <div className={`flex items-baseline gap-2 font-display text-2xl font-semibold tracking-tight text-foreground ${tier.limited ? "mb-2" : "mb-4 sm:mb-6"}`}>
                    {tier.originalPrice && (
                      <span className="text-base font-normal text-muted-foreground line-through">{tier.originalPrice}</span>
                    )}
                    <span>{tier.price}</span>
                  </div>
                  {tier.limited && (
                    <p className="text-xs font-medium text-amber-600 mb-3 sm:mb-4">Only a limited number of Early Bird tickets available</p>
                  )}
                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto w-full rounded-full font-medium" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link href={tier.link} target="_blank" rel="noopener noreferrer" className={tier.popular ? "" : "border-border bg-transparent hover:bg-muted"}>
                      {tt.hero.ctaTickets}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-xs text-center text-muted-foreground leading-relaxed">{tt.tickets.disclaimer}</p>
          </div>
        </section>

        {/* Partners */}
        <section className="w-full py-12 md:py-20 lg:py-28 bg-muted/50 border-b border-border" aria-label="Partners">
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
        <section className="w-full py-12 md:py-20 lg:py-28" aria-label="Register">
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
