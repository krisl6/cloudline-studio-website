"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { EventForm } from "@/components/event-form"
import { DoodleCheck, DoodleSearch, DoodlePen, DoodleRocket } from "@/components/doodles"

const stepIcons = [DoodleSearch, DoodlePen, DoodleRocket]

// Language-neutral event data (names + specifics are real).
const EVENTS: { name: string; tag: string; desc: string; people: string; outcome: string; image: string; video?: string }[] = [
  {
    name: "Vyne Wine",
    tag: "F&B · Wine tasting",
    desc: "Wine tasting at To-Go Café — 10 wines, from simple to premium aged, paired with food.",
    people: "30",
    outcome: "RM10,000 in sales in one day",
    image: "/vyne-wine.jpg",
  },
  {
    name: "MonstarX",
    tag: "SaaS · AI App Builder",
    desc: "Hands-on AI app-building — the basics of prompting, creating, and third-party connectors.",
    people: "35",
    outcome: "Attendees built apps live",
    image: "/group-picture.jpg",
  },
  {
    name: "LSIGraph / SurgeGraph",
    tag: "SaaS · SEO & AEO",
    desc: "SEO/AEO workshop — why traffic matters, reaching the right people, and ranking your site fast.",
    people: "50",
    outcome: "50 marketers learned to rank faster",
    image: "/team-retreat.jpg",
  },
  {
    name: "SheSeen",
    tag: "Fashion · Pop-up",
    desc: "Pre-loved premium designer fashion pop-up at Publika, for a specially curated audience.",
    people: "—",
    outcome: "High, well-matched foot traffic",
    image: "/sheseen-poster.jpg",
    video: "/sheseen.mp4",
  },
  {
    name: "Prouvers Sdn Bhd",
    tag: "B2B · Automation workshop",
    desc: "Prompt engineering & automation — content creation, 24/7 replies, auto-quotations, and live interdepartmental reports.",
    people: "—",
    outcome: "Teams automated content, replies & reporting",
    image: "/iwd-stage-portrait.webp",
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

export default function EventsPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden" aria-label="Events">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24 2xl:pt-36">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-4xl text-center">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm 2xl:text-base font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                {tt.hero.subcopy}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="#event-form">{tt.hero.cta}<ArrowRight className="ml-1.5 size-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="#events">{tt.hero.secondary}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What's included */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="What's included">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.included.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">{tt.included.heading}</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.included.subcopy}</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {tt.included.items.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <DoodleCheck className="size-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="How it works">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.how.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">{tt.how.heading}</h2>
            </motion.div>
            <div className="grid gap-10 md:grid-cols-3">
              {tt.how.steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <motion.div key={step.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border text-primary"><Icon className="size-7" /></span>
                      <span className="font-display text-sm font-medium tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Past events */}
        <section id="events" className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Past events">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.events.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">{tt.events.heading}</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.events.subcopy}</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {EVENTS.map((ev) => (
                <motion.div key={ev.name} variants={fadeUp} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {ev.video ? (
                      <video
                        src={ev.video}
                        poster={ev.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <Image src={ev.image} alt={ev.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-primary mb-1.5">{ev.tag}</p>
                    <h3 className="font-display text-xl font-semibold mb-2">{ev.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ev.desc}</p>
                    <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">{tt.events.peopleLabel}</p>
                        <p className="font-display font-semibold">{ev.people}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{tt.events.outcomeLabel}</p>
                        <p className="font-medium leading-snug">{ev.outcome}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Pricing">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.pricing.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">{tt.pricing.heading}</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">{tt.pricing.body}</p>
              <p className="font-display text-4xl sm:text-5xl font-semibold text-primary">{tt.pricing.price}</p>
              <p className="text-xs text-muted-foreground mt-2 mb-8">{tt.pricing.note}</p>
              <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                <Link href="#event-form">{tt.pricing.cta}<ArrowRight className="ml-1.5 size-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA + form */}
        <section id="event-form" className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Plan your event">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">{tt.cta.heading}</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.cta.subcopy}</p>
            </motion.div>
            <div className="mx-auto max-w-2xl">
              <EventForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
