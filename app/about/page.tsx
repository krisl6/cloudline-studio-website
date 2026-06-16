"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import {
  DoodleTrophy,
  DoodlePen,
  DoodleSparkle,
  DoodleHeart,
  DoodleSearch,
  DoodleRocket,
  DoodleGrowth,
  DoodleTarget,
  DoodleGear,
  DoodleCheck,
  DoodleTransform,
} from "@/components/doodles"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const founder = {
  name: "Kristine Ling",
  website: "https://kristinelingg.com",
  photoUrl: "https://kristinelingg.com/_next/image?url=%2Fdisplay-picture.png&w=3840&q=75",
}

const founderInitials = founder.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase()

const hasFounderPhoto = typeof founder.photoUrl === "string" && /^https?:\/\//.test(founder.photoUrl)

const statIcons = [DoodleTrophy, DoodlePen, DoodleSparkle, DoodleHeart]
const howWeWorkIcons = [DoodleSearch, DoodlePen, DoodleRocket, DoodleGrowth]
const outcomeIcons = [DoodleTarget, DoodleSparkle, DoodleGrowth, DoodleGear, DoodlePen]

export default function AboutPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-3xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4"
              >
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
              >
                {tt.hero.heading}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9"
              >
                {tt.hero.subcopy}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="/contact">
                    {tt.hero.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/client-results">{tt.hero.ctaSecondary}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Founder">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.founder.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.founder.heading}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_1.4fr] gap-12 lg:gap-16 items-start">
              {/* Photo / monogram */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-28"
              >
                {hasFounderPhoto ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
                    <Image
                      src={founder.photoUrl}
                      alt={`${tt.founder.name}, ${tt.founder.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-border bg-primary/10">
                    <span className="font-display text-6xl font-semibold tracking-tight text-primary">
                      {founderInitials}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Bio + highlights */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-1.5">
                  {tt.founder.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-6">{tt.founder.title}</p>
                <p className="text-muted-foreground md:text-lg leading-relaxed mb-8">{tt.founder.bio}</p>

                <ul className="space-y-3.5 mb-9">
                  {tt.founder.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-foreground/85">
                      <DoodleCheck className="mt-1 size-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="rounded-full font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href={founder.website} target="_blank" rel="noopener noreferrer">
                    {tt.founder.linkLabel}
                    <ExternalLink className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="By the numbers">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {tt.stats.items.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="rounded-2xl border border-border bg-card p-7 text-center"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary mb-5">
                      <Icon className="size-6" />
                    </span>
                    <div className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Why we exist */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Why CloudLine exists">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.whyExist.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.whyExist.heading}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-display text-xl font-semibold mb-5">{tt.whyExist.problemTitle}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">{tt.whyExist.problem.p1Strong}</strong>
                    {tt.whyExist.problem.p1}
                  </p>
                  <p>
                    <strong className="text-foreground">{tt.whyExist.problem.p2Strong}</strong>
                    {tt.whyExist.problem.p2}
                  </p>
                  <p>
                    <strong className="text-foreground">{tt.whyExist.problem.p3Strong}</strong>
                    {tt.whyExist.problem.p3}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-display text-xl font-semibold mb-5">{tt.whyExist.solutionTitle}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">{tt.whyExist.solution.p1Strong}</strong>
                    {tt.whyExist.solution.p1}
                  </p>
                  <p>
                    <strong className="text-foreground">{tt.whyExist.solution.p2Strong}</strong>
                    {tt.whyExist.solution.p2}
                  </p>
                  <p>
                    <strong className="text-foreground">{tt.whyExist.solution.p3Strong}</strong>
                    {tt.whyExist.solution.p3}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="What we do">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.whatWeDo.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.whatWeDo.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.whatWeDo.subcopy}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {tt.whatWeDo.services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                >
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <DoodleCheck className="size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
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
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.howWeWork.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.howWeWork.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.howWeWork.subcopy}</p>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {tt.howWeWork.steps.map((step, i) => {
                const Icon = howWeWorkIcons[i]
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border text-primary">
                        <Icon className="size-7" />
                      </span>
                      <span className="font-display text-sm font-medium tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Customer journey */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Customer journey">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.journey.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.journey.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.journey.subcopy}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 lg:grid-cols-4"
            >
              {tt.journey.phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                >
                  <span className="font-display text-sm font-medium tracking-widest text-muted-foreground mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 mb-4">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{phase.description}</p>
                  <ul className="mt-auto space-y-2.5">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center mt-14 rounded-2xl border border-border bg-card p-8"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary mb-5">
                <DoodleTransform className="size-6" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {tt.journey.resultTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{tt.journey.resultBody}</p>
            </motion.div>
          </div>
        </section>

        {/* Core values */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Our values">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.values.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.values.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.values.subcopy}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-3"
            >
              {tt.values.items.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                >
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* First consultation */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Your first consultation">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.consultation.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.consultation.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.consultation.subcopy}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight mb-8">
                  {tt.consultation.coverTitle}
                </h3>
                <div className="space-y-6">
                  {tt.consultation.cover.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/8 text-primary shrink-0 mt-0.5">
                        <DoodleCheck className="size-4" />
                      </span>
                      <div>
                        <h4 className="font-display font-semibold mb-1.5">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight mb-8">
                  {tt.consultation.outcomesTitle}
                </h3>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="space-y-6">
                    {tt.consultation.outcomes.map((outcome, i) => {
                      const Icon = outcomeIcons[i]
                      return (
                        <div key={outcome.title} className="flex gap-4 items-start">
                          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/8 text-primary shrink-0">
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <h4 className="font-display font-semibold mb-1">{outcome.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/8 p-6">
                  <h4 className="font-display font-semibold text-primary mb-2">{tt.consultation.promiseTitle}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tt.consultation.promiseBody}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                {tt.cta.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">{tt.cta.subcopy}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="/contact">
                    {tt.cta.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/client-results">{tt.cta.ctaSecondary}</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-5">{tt.cta.footnote}</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
