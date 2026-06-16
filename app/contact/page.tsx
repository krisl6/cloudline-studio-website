"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleMegaphone, DoodleBolt, DoodleTarget } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { LeadForm } from "@/components/lead-form"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export default function ContactPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const contactInfo = [
    {
      Icon: DoodleMegaphone,
      key: "email" as const,
      title: tt.connect.labels.email,
      value: "hello@cloudline-studio.com",
      link: "mailto:hello@cloudline-studio.com"
    },
    {
      Icon: DoodleBolt,
      key: "phone" as const,
      title: tt.connect.labels.phone,
      value: "+01127755215",
      link: "https://wa.me/60112775215"
    },
    {
      Icon: DoodleTarget,
      key: "office" as const,
      title: tt.connect.labels.office,
      value: "Pavilion Bukit Jalil",
      link: "https://maps.google.com/?q=Pavilion+Bukit+Jalil"
    }
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
    { name: "Tanium", logo: "/tanium-logo.png" }
  ]

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
                {tt.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
              >
                {tt.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
              >
                {tt.hero.subcopy}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 2xl:h-14 px-7 2xl:px-9 text-base 2xl:text-lg font-medium"
                  onClick={() => {
                    const formSection = document.getElementById('contact-form')
                    formSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {tt.hero.cta}
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Contact options">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.connect.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {tt.connect.headline}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {tt.connect.intro}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-3"
            >
              {contactInfo.map((info) => {
                const Icon = info.Icon
                return (
                  <motion.div
                    key={info.key}
                    variants={fadeUp}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-8 text-center transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                  >
                    <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="font-display text-xl font-semibold mt-6 mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{info.value}</p>
                    <Button
                      variant="outline"
                      className="mt-auto rounded-full font-medium border-border bg-transparent hover:bg-muted"
                      asChild
                    >
                      <Link href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined}>
                        {tt.connect.contactVia} {info.title}
                      </Link>
                    </Button>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section id="contact-form" className="w-full py-20 md:py-28 border-t border-border" aria-label="Contact form">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.form.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{tt.form.headline}</h2>
                <p className="text-muted-foreground md:text-lg">{tt.form.intro}</p>
              </div>

              <LeadForm />
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Social proof">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.social.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {tt.social.headline}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {tt.social.intro}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center">
                  <div className="w-full h-20 bg-card rounded-xl border border-border flex items-center justify-center p-4 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-[70%] max-h-[55%] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Location">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.map.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {tt.map.headline}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {tt.map.intro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-[0_24px_70px_-30px_rgba(20,30,55,0.35)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5234567890123!2d101.6789012345678!3d3.0123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c123456789a%3A0x123456789abcdef0!2sPavilion%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CloudLine Studio Office Location - Pavilion Bukit Jalil"
                ></iframe>
              </div>

              <div className="mt-10 text-center">
                <div className="inline-block rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <DoodleTarget className="size-6 text-primary" />
                    <h3 className="font-display text-lg font-semibold">{tt.map.addressTitle}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pavilion Bukit Jalil<br />
                    Kuala Lumpur, Malaysia
                  </p>
                  <Button
                    className="mt-6 rounded-full font-medium"
                    asChild
                  >
                    <Link href="https://maps.google.com/?q=Pavilion+Bukit+Jalil" target="_blank">
                      {tt.map.getDirections}
                      <ArrowRight className="ml-1.5 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
