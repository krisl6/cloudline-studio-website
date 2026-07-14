"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleSearch, DoodleTransform, DoodleGear, DoodleMegaphone, DoodleGrowth } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/app/case-studies/translations"
import { SERVICE_SLUGS, caseStudies, type PlatformName, type ServiceSlug } from "@/lib/case-studies-data"

const PLATFORM_ICONS: Record<PlatformName, React.ComponentType<{ className?: string }>> = {
  Consultation: DoodleSearch,
  "Marketing & Sales Digital Transformation": DoodleTransform,
  "Interdepartmental Synchronization": DoodleGear,
  "Digital Marketing & Branding": DoodleMegaphone,
  SEO: DoodleGrowth,
}

const PLATFORM_SLUGS: Record<PlatformName, ServiceSlug> = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([slug, name]) => [name, slug]),
) as Record<PlatformName, ServiceSlug>

export function CaseStudiesContent({ platformFilter = "all" }: { platformFilter?: PlatformName | "all" }) {
  const { lang } = useLanguage()
  const tt = translations[lang]

  type ServiceKey = keyof typeof tt.serviceLabels

  const platforms = (Object.keys(SERVICE_SLUGS) as ServiceSlug[]).map((slug) => {
    const name = SERVICE_SLUGS[slug]
    return { slug, name, icon: PLATFORM_ICONS[name] }
  })

  const filteredStudies =
    platformFilter === "all" ? caseStudies : caseStudies.filter((study) => study.platforms.includes(platformFilter))

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        <section className="relative overflow-hidden" aria-label="Case studies overview">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-20 2xl:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl 2xl:max-w-4xl mx-auto"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6">
                {platformFilter === "all" ? tt.hero.eyebrow : tt.serviceLabels[platformFilter as ServiceKey]}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
                id="case-studies-main-heading"
              >
                {tt.hero.title}
              </h1>
              <p
                className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
                aria-describedby="case-studies-main-heading"
              >
                {platformFilter === "all" ? tt.hero.intro : tt.serviceDescriptions[platformFilter as ServiceKey]}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
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
                  <Link href="/services">{tt.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Platform specialists">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {tt.services.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {tt.services.title}
              </h2>
              <p className="text-muted-foreground md:text-lg">{tt.services.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {platforms.map((platform, i) => {
                const Icon = platform.icon
                const isActive = platformFilter === platform.name
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/case-studies/${platform.slug}`}
                      className={`group flex h-full flex-col rounded-2xl border bg-card p-6 text-left transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)] ${
                        isActive ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
                      }`}
                    >
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-display text-base md:text-lg font-semibold mt-5 mb-2">
                        {tt.serviceLabels[platform.name as ServiceKey]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tt.serviceDescriptions[platform.name as ServiceKey]}
                      </p>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={platformFilter === "all" ? "default" : "outline"}
                size="sm"
                className={`rounded-full font-medium ${
                  platformFilter === "all" ? "" : "border-border bg-transparent hover:bg-muted"
                }`}
                asChild
              >
                <Link href="/case-studies">{tt.services.all}</Link>
              </Button>
              {platforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant={platformFilter === platform.name ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full font-medium ${
                    platformFilter === platform.name ? "" : "border-border bg-transparent hover:bg-muted"
                  }`}
                  asChild
                >
                  <Link href={`/case-studies/${platform.slug}`}>{tt.serviceLabels[platform.name as ServiceKey]}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Case study results">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-10">
              {filteredStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-52 md:h-72 lg:h-auto lg:min-h-full">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {study.industry}
                        </span>
                        {study.platforms.map((platform) => (
                          <Link
                            key={platform}
                            href={`/case-studies/${PLATFORM_SLUGS[platform]}`}
                            className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted/70"
                          >
                            {tt.serviceLabels[platform as ServiceKey]}
                          </Link>
                        ))}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-5">{study.title}</h3>

                      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 rounded-2xl border border-border bg-muted/40 p-4">
                        {study.metrics.map((metric, j) => (
                          <div key={j} className="text-center">
                            <div className="font-display text-lg md:text-2xl font-semibold text-primary">{metric.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.challenge}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.solution}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            {tt.study.results}
                          </h4>
                          <p className="text-sm font-medium text-primary leading-relaxed">{study.results}</p>
                        </div>
                      </div>
                      <Button className="mt-6 w-fit rounded-full font-medium" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank">
                          {tt.study.cta}
                          <ArrowRight className="ml-1.5 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 border-t border-border bg-muted/50" aria-label="Contact">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-5">
                {tt.contact.title}
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">{tt.contact.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank" rel="noopener noreferrer">
                    {tt.contact.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href="/services">{tt.contact.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
