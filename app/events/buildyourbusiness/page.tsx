"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Users, Laptop, Zap, TrendingUp, Megaphone, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"

const LUMA_URL = "https://luma.com/i2ew5rl8"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const AGENDA = [
  {
    icon: Zap,
    step: "01",
    title: "Vibe-code your product from scratch",
    desc: "Refine your business idea, run quick market research, and use Claude Code or Codex to turn plain-language concepts into a working prototype — no syntax required.",
  },
  {
    icon: Laptop,
    step: "02",
    title: "Build frontend & backend",
    desc: "Spin up databases, authentication, and security layers using free tools. You leave with a live, deployable product — not just a mockup.",
  },
  {
    icon: Megaphone,
    step: "03",
    title: "Set up your marketing stack",
    desc: "Auto-generate content, landing pages, and ad copy. Build workflows that run while you sleep — so your marketing is on from day one.",
  },
  {
    icon: ShoppingCart,
    step: "04",
    title: "Distribution & first revenue",
    desc: "Activate lead generation, personalised outreach, and multi-channel distribution. Walk away with a clear path to your first paying customers.",
  },
]

const INCLUDED = [
  "One-week complimentary Infinity8 Reserve Sunway Square access",
  "Refreshments throughout the day",
  "Live build + marketing demos",
  "First-revenue action plan tailored to your product",
]

const REQUIREMENTS = [
  "Fully charged laptop + charger",
  "Active Claude or Codex subscription",
  "A business idea you want to bring to life",
  "Willingness to ship something real",
]

export default function BuildYourBusinessPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Event overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-4xl">
              <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
                Upcoming Workshop · Subang Jaya, Selangor
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                Build &amp; Launch Your Business with Zero Coding Skills
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                A full-day hands-on workshop. Arrive with an idea and a laptop — leave with a completed, deployed product, a working marketing stack, and a clear plan for your first revenue.
              </motion.p>
              <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                Powered by AI tools like Claude Code and Codex, this session teaches "vibe-coding" — converting plain-language thinking into real, functional applications. No developer background required.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-10 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" />
                  Infinity8 Reserve, Sunway Square, Subang Jaya
                </span>
                <span className="hidden sm:block text-border">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-4 text-primary" />
                  Founders, business owners &amp; executives
                </span>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer">
                    Register Now <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hero image */}
        <section aria-hidden="true" className="w-full bg-muted/40 border-b border-border">
          <div className="container px-4 md:px-6 py-10 md:py-14">
            <div className="relative mx-auto max-w-4xl aspect-[16/7] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/vibe-coding-workshop.webp"
                alt="Participants vibe-coding at a CloudLine workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="w-full py-20 md:py-28 border-b border-border" aria-label="Workshop agenda">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">What you'll build</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                From idea to live product — in one day
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Each session builds on the last. By the end of the day you'll have a product, a marketing engine, and a distribution plan working together.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              {AGENDA.map((item) => {
                const Icon = item.icon
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
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">What's included</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">Everything you need to ship</h2>
                <div className="space-y-3">
                  {INCLUDED.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
                      <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">What to bring</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">Come ready to build</h2>
                <div className="space-y-3">
                  {REQUIREMENTS.map((item) => (
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
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-4">Event Space Partner</p>
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
                    Infinity8 Reserve
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium">Sunway Square, Subang Jaya</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    We're proud to host this workshop at Infinity8 Reserve — one of Subang Jaya's most premium co-working and event spaces, designed for people who take their work seriously.
                  </p>
                  <p>
                    The space is striking without being distracting: high ceilings, thoughtful lighting, and a boardroom-grade setup that keeps you in the right headspace to build. It's the kind of environment that quietly raises the quality of your thinking.
                  </p>
                  <p>
                    All registered attendees receive one week of complimentary access to Infinity8 Reserve after the workshop — so you can keep the momentum going.
                  </p>
                </div>
                <Button variant="outline" size="lg" className="rounded-full h-11 px-6 text-sm font-medium" asChild>
                  <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer">
                    Secure your spot <ArrowRight className="ml-1.5 size-4" />
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
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">Your hosts</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Built by founders, for founders
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
              {[
                {
                  name: "Kristine Ling",
                  role: "Co-founder, CloudLine Studio",
                  bio: "Growth strategist and AI-tools practitioner who has helped brands across Malaysia and Singapore scale with lean, high-output digital systems.",
                  image: "/team-kristine.jpg",
                },
                {
                  name: "Brendan Beh",
                  role: "Co-host",
                  bio: "Product builder and vibe-coding practitioner — turning complex ideas into working software with nothing but plain language and the right AI toolchain.",
                  image: "/team-euvin.jpg",
                },
              ].map((host) => (
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
                      src={host.image}
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
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">Limited spots</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-5">
                Ready to build something real?
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">
                Spots are limited to keep the workshop hands-on and focused. Register now to secure your place.
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" asChild>
                <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer">
                  Register on Luma <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
