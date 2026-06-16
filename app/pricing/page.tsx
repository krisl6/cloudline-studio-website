"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck, DoodleGrowth, DoodleHeart, DoodleTrophy } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export default function PricingPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const planMeta = [
    { price: "Starts From RM 1,200", period: "/month", link: "https://wa.link/fwi8af", popular: false },
    { price: "Starts From RM 2,560", period: "", link: "https://wa.link/fwi8af", popular: false },
    { price: "Starts From RM 2,080", period: "/month", link: "https://wa.link/fwi8af", popular: true },
    { price: "Starts From RM 6,000", period: "/month", link: "https://wa.link/fwi8af", popular: false },
  ]

  const pricingPlans = tt.plans.items.map((plan, i) => ({
    name: plan.name,
    description: plan.description,
    features: plan.features,
    cta: plan.cta,
    price: planMeta[i].price,
    period: planMeta[i].period,
    link: planMeta[i].link,
    popular: planMeta[i].popular,
  }))

  const benefitIcons = [DoodleGrowth, DoodleHeart, DoodleTrophy]
  const benefits = tt.benefitsSection.items.map((benefit, i) => ({
    icon: benefitIcons[i],
    title: benefit.title,
    description: benefit.description,
  }))

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden" aria-label="Pricing overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-20 2xl:pt-36">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-3xl 2xl:max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6"
              >
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
                id="pricing-main-heading"
              >
                {tt.hero.heading}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-2xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
                aria-describedby="pricing-main-heading"
              >
                {tt.hero.intro}
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Button size="lg" className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.hero.primaryCta}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/case-studies">{tt.hero.secondaryCta}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing plans */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Pricing plans">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`group relative flex h-full flex-col rounded-2xl border bg-card p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)] ${
                    plan.popular ? "border-primary ring-1 ring-primary/20" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {tt.plans.mostPopular}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display text-2xl font-semibold tracking-tight text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{plan.description}</p>
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-auto w-full rounded-full font-medium"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={plan.popular ? "" : "border-border bg-transparent hover:bg-muted"}
                    >
                      {plan.cta}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-14"
            >
              <p className="text-sm text-muted-foreground mb-6">
                {tt.plans.note}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.plans.customCta}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/services">{tt.plans.servicesCta}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Package benefits */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Package benefits">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.benefitsSection.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.benefitsSection.heading}
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-3"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    variants={fadeUp}
                    className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-5 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
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
                {tt.contact.heading}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">
                {tt.contact.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.contact.primaryCta}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/contact">{tt.contact.secondaryCta}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
