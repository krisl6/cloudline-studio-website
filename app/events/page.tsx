"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { EventForm } from "@/components/event-form"
import { DoodleCheck, DoodleSearch, DoodlePen, DoodleRocket } from "@/components/doodles"
import { AudioPlayer } from "@/components/audio-player"

const stepIcons = [DoodleSearch, DoodlePen, DoodleRocket]

// Language-neutral event data (names + specifics are real).
const EVENTS: { name: string; tag: string; desc: string; people: string; outcome: string; image: string; video?: string; image2?: string; images?: string[] }[] = [
  {
    name: "MonstarX",
    tag: "SaaS · AI App Builder",
    desc: "Hands-on AI app-building, the basics of prompting, creating, and third-party connectors.",
    people: "35",
    outcome: "Attendees built apps live",
    image: "/group-picture.jpg",
    images: ["/group-picture.jpg", "/monstarx-group-2.jpeg"],
  },
  {
    name: "LSIGraph / SurgeGraph",
    tag: "MarTech · SEO & AEO",
    desc: "SEO/AEO workshop, why traffic matters, reaching the right people, and ranking your site fast.",
    people: "50",
    outcome: "50 marketers learned to rank faster",
    image: "/surgegraph-agencies.jpeg",
  },
  {
    name: "Claude Workshops",
    tag: "Automation · Hands-on AI workshops",
    desc: "Hands-on AI workshops teaching teams to build with Claude, prompting, automations, and real workflows they ship the same day.",
    people: "150+",
    outcome: "Teams shipped live AI workflows",
    image: "/team-retreat.jpg",
    images: ["/team-retreat.jpg", "/vibe-coding-workshop.webp"],
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

// Crossfades through a set of images on an interval (e.g. Claude Workshops: team → workshop every 3s).
function RotatingImage({ images, alt, intervalMs = 3000 }: { images: string[]; alt: string; intervalMs?: number }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={idx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image src={images[idx]} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
      </motion.div>
    </AnimatePresence>
  )
}

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

        {/* AI Mission banner */}
        <section className="w-full border-t border-primary/20 bg-primary/[0.04]" aria-label="Our mission">
          <div className="container px-4 md:px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-4">{tt.mission.eyebrow}</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance mb-5 max-w-2xl">
                {tt.mission.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl mb-10">
                {tt.mission.body}
              </p>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[tt.mission.stat1, tt.mission.stat2, tt.mission.stat3].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
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

        {/* Roadmap timeline */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="How we start together">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-16">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.roadmap.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">{tt.roadmap.heading}</h2>
            </motion.div>

            <div className="relative">
              {/* Curved SVG connector, desktop only */}
              <div className="hidden lg:block absolute top-7 pointer-events-none" style={{ left: "12.5%", right: "12.5%" }}>
                <svg
                  className="w-full"
                  height="56"
                  viewBox="0 0 750 56"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Wave path threading through each circle centre (x=0, 250, 500, 750 at y=28) */}
                  <path
                    d="M 0,28 C 75,6 175,50 250,28 C 325,6 425,50 500,28 C 575,6 675,50 750,28"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                    strokeDasharray="6 5"
                    strokeLinecap="round"
                  />
                  {/* Terminal dot */}
                  <circle cx="750" cy="28" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
                </svg>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
              >
                {tt.roadmap.steps.map((step, i) => (
                  <motion.div key={step.num} variants={fadeUp} className="flex flex-col">
                    {/* Circle badge */}
                    <div className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-primary mb-5 self-start">
                      <span className="font-display text-sm font-semibold text-primary-foreground">{step.num}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Past events */}
        <section id="events" className="w-full py-20 md:py-28 border-t border-border" aria-label="Past events">
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
                    {ev.images ? (
                      <RotatingImage images={ev.images} alt={ev.name} />
                    ) : ev.video ? (
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
                    {ev.image2 && (
                      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-border">
                        <Image src={ev.image2} alt={`${ev.name} team`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What you'll need to book */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="What you'll need to book">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-10">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.requirements.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">{tt.requirements.heading}</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.requirements.subcopy}</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-3 sm:grid-cols-2 max-w-3xl">
              {tt.requirements.items.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
                  <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
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
      <AudioPlayer src="/background-music.mp3" />
    </div>
  )
}
