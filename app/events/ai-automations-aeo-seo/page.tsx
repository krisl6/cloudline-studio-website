"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck, DoodleSearch, DoodleTarget, DoodlePen, DoodleBolt } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { MasterclassRsvpForm } from "@/components/masterclass-rsvp-form"
import { translations } from "./translations"

// ── EVENT DETAILS ──────────────────────────────────────────────────
const VENUE_MAPS_URL = "https://maps.google.com/?q=Infinity8+Sunway+Square"

// ── TICKETS ─────────────────────────────────────────────────────────
// Both tiers currently share one Stripe Payment Link. Swap in a distinct
// URL per tier if/when they need to charge different amounts.
const TICKET_EARLY_BIRD_URL = "https://buy.stripe.com/cNi9AS7qZb8nfrQdJ5bZe00"
const TICKET_STANDARD_URL = "https://buy.stripe.com/cNi9AS7qZb8nfrQdJ5bZe00"

const TICKET_TIERS = [
  {
    name: "Early Bird",
    price: "RM 359",
    popular: false,
    limited: true,
    link: TICKET_EARLY_BIRD_URL,
    features: [
      "Full masterclass access (1pm–5pm)",
      "Workshop materials & templates",
      "[PLACEHOLDER — confirm exact inclusions before launch]",
    ],
  },
  {
    name: "Standard",
    price: "RM 499",
    popular: true,
    limited: false,
    link: TICKET_STANDARD_URL,
    features: [
      "Everything in Early Bird",
      "[PLACEHOLDER — e.g. recording / 1:1 slot / bonus resource]",
      "[PLACEHOLDER — confirm exact inclusions before launch]",
    ],
  },
] as const

const AGENDA_ICONS = [DoodleSearch, DoodleTarget, DoodlePen, DoodleBolt]

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

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Event overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="mx-auto max-w-6xl grid items-center gap-10 lg:gap-14 lg:grid-cols-[1fr_minmax(0,440px)]">
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
                  {tt.hero.eyebrow}
                </motion.p>
                <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                  {tt.hero.headline}
                </motion.h1>
                <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                  {tt.hero.tagline}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-sm text-muted-foreground">
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
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" onClick={() => scrollTo("tickets")}>
                    {tt.hero.ctaTickets} <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted" asChild>
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
                className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square overflow-hidden rounded-2xl border border-border shadow-sm"
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

        {/* Agenda */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="What you'll learn">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.agenda.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.agenda.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.agenda.subcopy}</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              {tt.agenda.items.map((item, i) => {
                const Icon = AGENDA_ICONS[i]
                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-5 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="shrink-0">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border text-primary">
                        <Icon className="size-6" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-muted-foreground mb-2">{item.step}</p>
                      <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ticket pricing */}
        <section id="tickets" className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="Ticket pricing">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.tickets.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.tickets.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.tickets.subcopy}</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 max-w-3xl">
              {TICKET_TIERS.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  className={`relative flex h-full flex-col rounded-2xl border bg-card p-7 ${
                    tier.popular ? "border-primary ring-1 ring-primary/20" : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  {tier.limited && (
                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
                      Limited Availability
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-3">{tier.name}</h3>
                  <div className={`font-display text-2xl font-semibold tracking-tight text-foreground ${tier.limited ? "mb-2" : "mb-6"}`}>{tier.price}</div>
                  {tier.limited && (
                    <p className="text-xs font-medium text-amber-600 mb-4">Only a limited number of Early Bird tickets available</p>
                  )}
                  <ul className="space-y-2.5 mb-8 flex-grow">
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
          </div>
        </section>

        {/* Speakers */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Speakers">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.speakers.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.speakers.heading}
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tt.speakers.people.map((person) => (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {person.photo ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={person.photo} alt={person.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top" />
                    </div>
                  ) : (
                    <div className="flex justify-center pt-8">
                      <span className="flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-2xl">
                        {initials(person.name)}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{person.name}</h3>
                    <p className="text-xs font-medium text-primary mb-3">{person.role}</p>
                    {"tagline" in person && person.tagline && (
                      <p className="text-sm font-medium text-foreground/85 leading-relaxed mb-3">&ldquo;{person.tagline}&rdquo;</p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                    {"speakingStyle" in person && person.speakingStyle && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{person.speakingStyle}</p>
                    )}
                    {"topics" in person && person.topics && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {person.topics.map((topic) => (
                          <span key={topic} className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="RSVP">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.rsvp.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{tt.rsvp.heading}</h2>
                <p className="text-muted-foreground md:text-lg">{tt.rsvp.subcopy}</p>
              </div>
              <MasterclassRsvpForm />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 md:py-28" aria-label="Register">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">{tt.cta.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-5">
                {tt.cta.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">{tt.cta.subcopy}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" onClick={() => scrollTo("tickets")}>
                  {tt.cta.ticketsButton} <ArrowRight className="ml-1.5 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-medium border-border bg-transparent hover:bg-muted" onClick={() => scrollTo("rsvp")}>
                  {tt.cta.rsvpButton}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
