"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin, Users, Laptop, Zap, Megaphone, ShoppingCart, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

const WHATSAPP_URL = "https://wa.me/60112775215"

const HERO_IMAGES = [
  { src: "/workshop-infinity8-1.jpg", alt: "Workshop participants building at Infinity8 Reserve" },
  { src: "/workshop-infinity8-2.jpg", alt: "Attendees coding live at Infinity8 Reserve workshop" },
]

const AGENDA_ICONS = [Zap, Laptop, Megaphone, ShoppingCart]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

function RotatingImages() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={idx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGES[idx].src}
          alt={HERO_IMAGES[idx].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
          priority={idx === 0}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default function BuildYourBusinessPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Event overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-4xl">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                {tt.hero.p1}
              </motion.p>
              <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                {tt.hero.p2}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-primary" />
                  {tt.hero.datetime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" />
                  {tt.hero.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-4 text-primary" />
                  {tt.hero.audience}
                </span>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {tt.hero.cta} <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hero image gallery */}
        <section aria-hidden="true" className="w-full bg-muted/40 border-b border-border">
          <div className="container px-4 md:px-6 py-10 md:py-14">
            <div className="relative mx-auto max-w-4xl aspect-[16/7] overflow-hidden rounded-2xl border border-border">
              <RotatingImages />
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Workshop agenda">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.agenda.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.agenda.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                {tt.agenda.subcopy}
              </p>
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

        {/* What's included + requirements */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="What's included">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.included.eyebrow}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">{tt.included.heading}</h2>
                <div className="space-y-3">
                  {tt.included.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
                      <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.bring.eyebrow}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">{tt.bring.heading}</h2>
                <div className="space-y-3">
                  {tt.bring.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
                      <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infinity8 venue partner */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Venue partner">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-4">{tt.venue.eyebrow}</p>
                <div className="mb-6">
                  <div className="mb-5">
                    <Image
                      src="/infinity8-logo.png"
                      alt="Infinity8 logo"
                      width={160}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-1">
                    {tt.venue.heading}
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium">{tt.venue.subheading}</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>{tt.venue.p1}</p>
                  <p>{tt.venue.p2}</p>
                  <p>{tt.venue.p3}</p>
                </div>
                <Button variant="outline" size="lg" className="rounded-full h-11 px-6 text-sm font-medium" asChild>
                  <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {tt.venue.cta} <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
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

        {/* Hosts */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-b border-border" aria-label="Your hosts">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.hosts.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.hosts.heading}
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
              {tt.hosts.people.map((host, i) => (
                <motion.div
                  key={host.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={i === 0 ? "/team-kristine.jpg" : "/team-euvin.jpg"}
                      alt={host.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{host.name}</h3>
                    <p className="text-xs font-medium text-primary mb-3">{host.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{host.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Register">
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
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">
                {tt.cta.subcopy}
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" asChild>
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {tt.cta.button} <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
