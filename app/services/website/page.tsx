"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { translations as pricingTranslations } from "@/app/pricing/translations"
import { caseStudies } from "@/lib/case-studies-data"
import { WHATSAPP_URL } from "@/lib/site"

// Real clients only — same trust set used on /events/second-brain-ai, never
// a placeholder standing in for a trademark.
const TRUSTED_BY_LOGOS = [
  { name: "Petronas Lubricants", logo: "/petronas-logo.png" },
  { name: "Prenetics", logo: "/prenetics-logo.png" },
  { name: "CircleDNA", logo: "/circle-dna-logo.png" },
] as const

// Real Google Search Console screenshot's actual pixel dimensions (avoids
// Next/Image layout shift). This is an analytics dashboard, not a website
// mockup — presented honestly as that in the Proof section below.
const MONSTARX_IMAGE_DIMENSIONS = { width: 2652, height: 1284 }

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

function MarqueeStrip({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="w-full overflow-hidden border-y border-border bg-muted/40 py-3">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: [0, -1920] }}
        transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 22, ease: "linear" } }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="shrink-0 text-xs sm:text-sm font-bold tracking-wide text-primary">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {children}
    </span>
  )
}

export default function WebsiteServicePage() {
  const { lang } = useLanguage()
  const tt = translations[lang]
  // Index 1 is "Website Design" in every language — same parallel-array
  // order used throughout app/pricing/translations.ts.
  const pricingFeatures = pricingTranslations[lang].plans.items[1].features
  const monstarx = caseStudies.find((s) => s.title.includes("MonstarX"))!

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">

        {/* Hero — copy-driven, no fabricated screenshot */}
        <section className="relative overflow-hidden border-b border-border" aria-label="Overview">
          <div className="container px-4 md:px-6 pt-14 pb-12 md:pt-24 md:pb-16">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.div variants={fadeUp} className="mb-5 flex justify-center">
                <Eyebrow>{tt.hero.eyebrow}</Eyebrow>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.02] mb-6"
              >
                {tt.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                {tt.hero.subcopy}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="/contact">
                    {tt.hero.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted" asChild>
                  <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {tt.hero.ctaSecondary}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <MarqueeStrip items={tt.hero.marquee} />
        </section>

        {/* Trust bar — reused component, no new copy */}
        <section className="w-full py-10 md:py-14 bg-muted/50 border-b border-border" aria-label="Trusted by">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">{tt.trustedBy.label}</p>
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

        {/* Process — signature section: thin-rule stacked timeline */}
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="How it works">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10 md:mb-14">
              <div className="mb-4"><Eyebrow>{tt.process.eyebrow}</Eyebrow></div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance mb-3">
                {tt.process.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.process.subcopy}</p>
            </motion.div>

            <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
              {tt.process.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8 py-6 sm:py-8"
                >
                  <span className="shrink-0 w-full sm:w-28 font-display text-sm font-bold uppercase tracking-wide text-primary">
                    {step.label}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-1.5">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real proof — MonstarX case study, real numbers, real GSC chart
            (honestly labeled as analytics, not a website mockup) */}
        <section className="w-full py-14 md:py-20 lg:py-24 bg-muted/50 border-b border-border" aria-label="Real results">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10 md:mb-14 mx-auto text-center">
              <div className="mb-4 flex justify-center"><Eyebrow>{tt.proof.eyebrow}</Eyebrow></div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {tt.proof.heading}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="flex items-center justify-center bg-background p-4 lg:h-full">
                  <Image
                    src={monstarx.image}
                    alt={`${monstarx.title} — Google Search Console performance data`}
                    width={MONSTARX_IMAGE_DIMENSIONS.width}
                    height={MONSTARX_IMAGE_DIMENSIONS.height}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-5">
                    {monstarx.industry}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-5">{monstarx.title}</h3>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 rounded-2xl border border-border bg-muted/40 p-4">
                    {monstarx.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="font-display text-lg md:text-2xl font-semibold text-primary">{metric.value}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">{tt.proof.challengeLabel}</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{monstarx.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">{tt.proof.solutionLabel}</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{monstarx.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">{tt.proof.resultsLabel}</h4>
                      <p className="text-sm font-medium text-primary leading-relaxed">{monstarx.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What you get — pulled live from the real /pricing package, no
            duplicated/invented copy */}
        <section className="w-full py-14 md:py-20 lg:py-24 border-b border-border" aria-label="What you get">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-8 md:mb-10 mx-auto text-center">
              <div className="mb-4 flex justify-center"><Eyebrow>{tt.included.eyebrow}</Eyebrow></div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {tt.included.heading}
              </h2>
            </motion.div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-2"
            >
              {pricingFeatures.map((feature) => (
                <motion.li key={feature} variants={fadeUp} className="flex items-start gap-2.5 text-sm sm:text-base text-foreground/80 leading-relaxed">
                  <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Closing CTA band — signature moment #2, dark full-bleed */}
        <section className="w-full bg-foreground py-16 md:py-24" aria-label="Get started">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance text-background mb-5">
                {tt.closingCta.heading}
              </h2>
              <p className="text-background/70 md:text-lg leading-relaxed mb-9">{tt.closingCta.subcopy}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90" asChild>
                  <Link href="/contact">
                    {tt.closingCta.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-medium border-background/30 bg-transparent text-background hover:bg-background/10" asChild>
                  <Link href="/pricing">{tt.closingCta.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
