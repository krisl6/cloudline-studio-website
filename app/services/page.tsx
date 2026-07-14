"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { FunnelTimeline } from "@/components/funnel-timeline"
import { SeoWaitlistForm } from "@/components/seo-waitlist-form"
import {
  DoodleSearch,
  DoodleTransform,
  DoodleGear,
  DoodleMegaphone,
  DoodleGrowth,
  DoodleCheck,
  DoodleRocket,
  DoodlePen,
} from "@/components/doodles"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const serviceIcons = [DoodleSearch, DoodleTransform, DoodleGear, DoodleMegaphone, DoodleGrowth]
const processIcons = [DoodleSearch, DoodlePen, DoodleRocket]

const serviceIds = ["consultation", "transformation", "synchronization", "branding", "seo"] as const

export default function ServicesPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]
  const [activeService, setActiveService] = useState<(typeof serviceIds)[number]>("consultation")

  const services = tt.services.map((service, i) => ({ id: serviceIds[i], ...service }))
  const processSteps = tt.processSteps
  const faqs = tt.faqs

  const currentService = services.find((service) => service.id === activeService) || services[0]
  const CurrentIcon = serviceIcons[services.findIndex((s) => s.id === currentService.id)] || DoodleSearch

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden" aria-label="Services overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24 2xl:pt-36 2xl:pb-32">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-3xl 2xl:max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm 2xl:text-base font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6"
              >
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
              >
                {tt.hero.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
              >
                {tt.hero.intro}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium" asChild>
                  <Link href="/contact">
                    {tt.hero.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/client-results">{tt.hero.ctaSecondary}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service overview grid */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Our services">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.overview.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.overview.title}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                {tt.overview.intro}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {services.map((service, i) => {
                const Icon = serviceIcons[i]
                return (
                  <motion.div key={service.id} id={service.id} variants={fadeUp} className="scroll-mt-24">
                    <Link
                      href={`/case-studies/${service.id}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <Icon className="size-7" />
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-6 mb-1">{service.title}</h3>
                      <p className="text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-2.5">
                        {service.included.map((point) => (
                          <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                            <DoodleCheck className="size-4 shrink-0 text-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        View case studies
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Deep dive, interactive selector */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Service details">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.deepDive.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.deepDive.title}
              </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="lg:w-1/3 space-y-3">
                {services.map((service, i) => {
                  const Icon = serviceIcons[i]
                  const isActive = activeService === service.id
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveService(service.id)}
                      aria-pressed={isActive}
                      className={`w-full text-left flex items-center gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                        isActive
                          ? "border-primary/30 bg-primary/8"
                          : "border-border bg-card hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${
                          isActive ? "bg-primary text-primary-foreground" : "bg-primary/8 text-primary"
                        }`}
                      >
                        <Icon className="size-6" />
                      </span>
                      <span>
                        <span className="block font-display text-sm font-semibold">{service.title}</span>
                        <span className="block text-xs text-muted-foreground">{service.subtitle}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="lg:w-2/3">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border bg-card p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex size-14 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <CurrentIcon className="size-8" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {currentService.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{currentService.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground md:text-lg leading-relaxed mb-8">{currentService.description}</p>

                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                    {tt.deepDive.included}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {currentService.included.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <DoodleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {currentService.id === "seo" ? (
                    <div className="mt-2">
                      <Button variant="outline" className="mb-6 rounded-full font-medium border-border bg-transparent hover:bg-muted" asChild>
                        <Link href={`/case-studies/${currentService.id}`}>
                          View case studies
                          <ArrowRight className="ml-1.5 size-4" />
                        </Link>
                      </Button>
                      <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                        Coming soon
                      </p>
                      <SeoWaitlistForm />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      <Button className="rounded-full font-medium" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                          {tt.deepDive.getStarted} {currentService.title}
                          <ArrowRight className="ml-1.5 size-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="rounded-full font-medium border-border bg-transparent hover:bg-muted" asChild>
                        <Link href={`/case-studies/${currentService.id}`}>View case studies</Link>
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
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
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.process.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {tt.process.title}
              </h2>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-3">
              {processSteps.map((stage, i) => {
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

        {/* Customer funnels, B2B / B2C timeline */}
        <FunnelTimeline />

        {/* FAQ */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Frequently asked questions">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.faqSection.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
                {tt.faqSection.title}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {tt.faqSection.intro}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
                {tt.cta.title}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">
                {tt.cta.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
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
                  <Link href="/case-studies">{tt.cta.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
