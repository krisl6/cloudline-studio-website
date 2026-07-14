"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import {
  DoodleMegaphone,
  DoodleTransform,
  DoodleGear,
  DoodleTarget,
  DoodleGrowth,
  DoodleCoins,
  DoodleBolt,
  DoodleTrophy,
  DoodleHeart,
  DoodleSearch,
  DoodlePen,
  DoodleRocket,
  DoodleCheck,
} from "@/components/doodles"

const pillarIcons = [DoodleSearch, DoodleTransform, DoodleGear, DoodleMegaphone, DoodleGrowth]
const outcomeIcons = [DoodleCoins, DoodleTarget, DoodleGrowth, DoodleBolt, DoodleTrophy, DoodleHeart]
const processIcons = [DoodleSearch, DoodlePen, DoodleRocket]

// Hero carousel, landscape images only.
const heroImages = [
  { src: "/pikom-iwd.webp", alt: "CloudLine Studio speaking at the PIKOM International Women's Day event" },
  { src: "/group-picture.jpg", alt: "The CloudLine Studio workshop group" },
  { src: "/vibe-coding-workshop.webp", alt: "CloudLine Studio running a vibe coding workshop" },
  { src: "/project6-group.png", alt: "The CloudLine Studio team" },
]

const clients = [
  { name: "Celcom", logo: "/celcom_logo.png" },
  { name: "Axiata", logo: "/axiata_logo.png" },
  { name: "ClearSK", logo: "/clearsk_logo.png" },
  { name: "Agroz", logo: "/agroz-logo.png" },
  { name: "Circle DNA", logo: "/circle-dna-logo.png" },
  { name: "Prenetics", logo: "/prenetics-logo.png" },
  { name: "Woodfire Gourmet Burger", logo: "/woodfire-logo.png" },
  { name: "Surge", logo: "/surge-logo.png" },
  { name: "Wellnite", logo: "/wellnite-logo.png" },
  { name: "ConnectDr", logo: "/connectdr-logo.png" },
  { name: "Hootsuite", logo: "/hootsuite-logo.png" },
  { name: "Tanium", logo: "/tanium-logo.png" },
  { name: "Bateriku.com", logo: "/bateriku-logo.png" },
  { name: "The Flour Whisperer", logo: "/flour-whisperer-logo.png" },
  { name: "MIL Design & Construction", logo: "/mil-logo.png" },
  { name: "Mukarami Coffee", logo: "/mukarami-logo.png" },
  { name: "eSIMM Roam", logo: "/esimm-logo.png" },
  { name: "Cigna Healthcare", logo: "/cigna-logo.png" },
  { name: "Manulife", logo: "/manulife-logo.png" },
  { name: "Darlie", logo: "/darlie-logo.png" },
  { name: "Premier Clinic", logo: "/premier-clinic-logo.png" },
  { name: "SmartCity Kitchens", logo: "/smartcity-kitchens-logo.png" },
  { name: "Vyne", logo: "/vyne-logo.png" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export default function HomePage() {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24 2xl:pt-36 2xl:pb-32">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-4xl 2xl:max-w-5xl text-center">
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm 2xl:text-base font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6"
              >
                {t.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
              >
                {t.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
              >
                {t.hero.subcopy}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/case-studies">{t.hero.ctaSecondary}</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature image */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto mt-16 max-w-5xl 2xl:max-w-6xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-[0_24px_70px_-30px_rgba(20,30,55,0.35)] bg-muted">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={heroIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[heroIndex].src}
                      alt={heroImages[heroIndex].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                      priority={heroIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Carousel dots */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {heroImages.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      aria-label={`Show slide ${i + 1}`}
                      onClick={() => setHeroIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === heroIndex ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services / pillars */}
        <section id="services" className="w-full py-20 md:py-28 border-t border-border" aria-label="Our services">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{t.services.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {t.services.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{t.services.subcopy}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {t.services.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i]
                return (
                  <motion.div
                    key={pillar.name}
                    variants={fadeUp}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="font-display text-xl font-semibold mt-6 mb-3">{pillar.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                    <ul className="mt-auto space-y-2.5">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                          <DoodleCheck className="size-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                See pricing
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Work / clients */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Our work">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{t.work.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.work.heading}</h2>
              <p className="text-muted-foreground md:text-lg">{t.work.subcopy}</p>
            </motion.div>

            <div className="relative overflow-hidden space-y-6">
              <motion.div
                className="flex gap-6 items-center"
                animate={{ x: [0, -1920] }}
                transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 30, ease: "linear" } }}
              >
                {[...clients.slice(0, 12), ...clients.slice(0, 12)].map((client, i) => (
                  <div
                    key={`row1-${i}`}
                    className="flex-shrink-0 w-36 h-20 bg-card rounded-xl border border-border flex items-center justify-center"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={110}
                      height={55}
                      className="max-w-[70%] max-h-[55%] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-6 items-center"
                animate={{ x: [-1920, 0] }}
                transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 30, ease: "linear" } }}
              >
                {[...clients.slice(11, 23), ...clients.slice(11, 23)].map((client, i) => (
                  <div
                    key={`row2-${i}`}
                    className="flex-shrink-0 w-36 h-20 bg-card rounded-xl border border-border flex items-center justify-center"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={110}
                      height={55}
                      className="max-w-[70%] max-h-[55%] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <span className="text-sm text-muted-foreground">{t.work.satisfaction}</span>
            </div>
          </div>
        </section>

        {/* About / why CloudLine */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="About CloudLine Studio">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{t.about.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-6">
                  {t.about.heading}
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">{t.about.body}</p>
                <ul className="space-y-3">
                  {t.about.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-foreground/85">
                      <DoodleCheck className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="grid grid-cols-2 gap-4 items-center"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                    <Image
                      src="/img-8536.jpg"
                      alt="CloudLine Studio presenting at a build-without-coding workshop"
                      width={480}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                    <Image
                      src="/project6-group.png"
                      alt="The CloudLine Studio team"
                      width={480}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                    <Image
                      src="/vibe-coding-workshop.webp"
                      alt="CloudLine Studio running a vibe coding workshop"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                    <Image
                      src="/f073afc2-2f13-4103-b13a-d1301de98a15.JPG"
                      alt="The CloudLine Studio team"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Outcomes">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{t.outcomes.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {t.outcomes.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{t.outcomes.subcopy}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {t.outcomes.items.map((outcome, i) => {
                const Icon = outcomeIcons[i]
                return (
                  <motion.div key={outcome.title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-7">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-5 mb-2">{outcome.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* How we work */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="How we work">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{t.process.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">{t.process.heading}</h2>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-3">
              {t.process.steps.map((stage, i) => {
                const Icon = processIcons[i]
                return (
                  <motion.div
                    key={stage.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border text-primary">
                        <Icon className="size-7" />
                      </span>
                      <span className="font-display text-sm font-medium tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{stage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Client quote">
          <div className="container px-4 md:px-6">
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-balance">
                {t.quote.text}
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">{t.quote.attribution}</figcaption>
            </motion.figure>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Contact">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-5">
                {t.cta.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">{t.cta.subcopy}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {t.cta.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/client-results">{t.cta.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
