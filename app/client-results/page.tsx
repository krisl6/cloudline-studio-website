"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { DoodleGrowth, DoodleCoins, DoodleHeart, DoodleTarget } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"
import { WHATSAPP_URL } from "@/lib/site"
import { hoverLift } from "@/components/motion"
import { AnimatedStatValue } from "@/components/animated-stat"

export default function ClientResultsPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]

  const testimonials = [
    {
      name: "ClearSK Aesthetic Clinic",
      company: "Singapore",
      role: "Operations Director",
      rating: 5,
      quote: "CloudLine rebuilt how our marketing and sales actually run. They consolidated our CRM and sales stack, automated lead follow-up with AI, and gave every team one source of truth. We cut over S$100K a month in redundant subscriptions and grew bookings and revenue 40% in a single quarter.",
      results: "S$100K/month saved, +40% bookings & revenue in 3 months, unified CRM & sales pipeline",
      challenge: "Disconnected CRM, booking and sales tools, duplicated data entry, and bloated overlapping subscriptions",
      solution: "AI-enabled marketing & sales transformation, consolidated stack, automated lead scoring and follow-up, single source of truth",
      timeline: "3 months",
      metrics: {
        before: "Fragmented tools, 6-figure monthly subscription waste, slow manual follow-up",
        after: "One unified CRM & sales platform, automated follow-up, real-time reporting",
        improvement: "S$100K/month saved, +40% bookings & revenue"
      }
    },
    {
      name: "Lasus Plastic Surgery Clinic",
      company: "Malaysia",
      role: "Clinic Manager",
      rating: 5,
      quote: "Our front desk, marketing, and surgical teams worked in silos. CloudLine consolidated everything onto one CRM, synced our departments in real time, and automated lead routing and reminders. We cut redundant subscriptions and lifted bookings and revenue 35% in under four months.",
      results: "Departments synced in real time, redundant subscriptions cut, +35% bookings & revenue",
      challenge: "Siloed front-desk, marketing and surgical teams with leads slipping between platforms",
      solution: "Interdepartmental synchronization on one unified CRM with automated routing and shared dashboards",
      timeline: "Under 4 months",
      metrics: {
        before: "Siloed teams, leads lost between tools, overlapping subscriptions",
        after: "One shared pipeline, automated routing, real-time cross-team visibility",
        improvement: "~RM250K/month saved, +35% bookings & revenue"
      }
    },
    {
      name: "Kak Tasha",
      company: "Warung Ambo",
      role: "Pemilik",
      rating: 5,
      quote: "Jujur saya cakap, mengurus warung ni memang kerja tak habis-habis. Dari pagi sampai malam saya sibuk di dapur, jadi hal sistem dan teknologi memang saya tak sempat nak fikir. Waktu puncak, barisan pelanggan panjang, ada je pesanan yang tertinggal, dan operasi dapur dengan depan kaunter selalu tak sekata. CloudLine datang dan terus selesaikan masalah tu. Mereka selaraskan operasi kaunter depan dengan dapur secara terus melalui peranti, pastikan tiada lagi pesanan tercicir walaupun waktu paling sibuk. Hasilnya nampak serta-merta, kelajuan barisan laju 30%, pelanggan tak payah tunggu lama, dan jualan pun terus naik. Sekarang saya boleh fokus pada masakan, bukan kelam-kabut nak urus pesanan. Terima kasih CloudLine!",
      results: "Kelajuan barisan meningkat 30%, sifar pesanan tercicir, operasi dapur & kaunter diselaraskan, jualan meningkat",
      challenge: "Operasi tidak teratur waktu puncak, pesanan tercicir, kaunter dan dapur tidak sekata",
      solution: "Penyelarasan antara jabatan — operasi kaunter depan dan dapur diselaraskan secara langsung melalui peranti, memastikan tiada pesanan tercicir",
      timeline: "Kesan serta-merta selepas pelaksanaan",
      metrics: {
        before: "Barisan panjang, pesanan tercicir, dapur & kaunter tak selaras",
        after: "Barisan 30% lebih laju, sifar pesanan tercicir, operasi diselaraskan",
        improvement: "Kelajuan perkhidmatan +30%, jualan meningkat"
      }
    }
  ]

  const overallStats = [
    { number: "3.5x", label: tt.stats.items.brandSolutions, icon: <DoodleGrowth className="size-6" /> },
    { number: "4.9x", label: tt.stats.items.averageGrowth, icon: <DoodleCoins className="size-6" /> },
    { number: "25+", label: tt.stats.items.happyClients, icon: <DoodleHeart className="size-6" /> },
    { number: "95%", label: tt.stats.items.successRate, icon: <DoodleTarget className="size-6" /> }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 2xl:py-36" aria-label="Client results hero">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl 2xl:max-w-4xl text-center">
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-balance leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {tt.hero.title}
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl 2xl:max-w-3xl text-base sm:text-lg 2xl:text-xl text-muted-foreground leading-relaxed mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {tt.hero.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
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
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{tt.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Overall results">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.stats.title}
            </h2>
            <p className="text-muted-foreground md:text-lg">{tt.stats.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {overallStats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={hoverLift}
              >
                <div className="flex justify-center mb-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    {stat.icon}
                  </span>
                </div>
                <div className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
                  <AnimatedStatValue value={stat.number} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Client testimonials">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.testimonials.title}
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {tt.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={hoverLift}
              >
                <Card className="h-full rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]">
                  <CardContent className="p-8">
                    {/* Profile monogram */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex w-14 h-14 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-lg flex-shrink-0">
                        {testimonial.name
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-lg tracking-tight">{testimonial.name}</h4>
                        <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        <div className="flex items-center gap-0.5 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="size-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenge */}
                    {testimonial.challenge && (
                      <div className="mb-4 rounded-xl border border-border bg-muted/40 p-4">
                        <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                          {tt.testimonials.labels.challenge}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{testimonial.challenge}</p>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-1 size-7 text-primary/20" />
                      <p className="text-foreground/80 pl-6 text-base leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Solution & Timeline */}
                    {testimonial.solution && (
                      <div className="mb-4 rounded-xl border border-border bg-muted/40 p-4">
                        <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                          {tt.testimonials.labels.solution}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-2">{testimonial.solution}</p>
                        {testimonial.timeline && (
                          <p className="text-xs text-muted-foreground">{tt.testimonials.labels.timeline}: {testimonial.timeline}</p>
                        )}
                      </div>
                    )}

                    {/* Results */}
                    <div className="rounded-xl border border-primary/20 bg-primary/8 p-4">
                      <p className="text-xs font-medium tracking-[0.14em] uppercase text-primary mb-1.5">{tt.testimonials.labels.results}</p>
                      <p className="text-sm text-foreground/85 leading-relaxed">{testimonial.results}</p>
                    </div>

                    {/* Detailed Metrics */}
                    {testimonial.metrics && (
                      <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
                        <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-3">
                          {tt.testimonials.labels.detailedMetrics}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-foreground/70">{tt.testimonials.labels.before}</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.before}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground/70">{tt.testimonials.labels.after}</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.after}</span>
                          </div>
                          <div>
                            <span className="font-medium text-primary">{tt.testimonials.labels.improvement}</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.improvement}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Verified results">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.socialProof.title}
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {tt.socialProof.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: DoodleGrowth,
                title: tt.socialProof.cards.analytics.title,
                body: tt.socialProof.cards.analytics.body,
              },
              {
                Icon: DoodleCoins,
                title: tt.socialProof.cards.sales.title,
                body: tt.socialProof.cards.sales.body,
              },
              {
                Icon: DoodleTarget,
                title: tt.socialProof.cards.tracking.title,
                body: tt.socialProof.cards.tracking.body,
              },
            ].map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                whileHover={hoverLift}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]"
              >
                <div className="flex justify-center mb-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-6" />
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Contact">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-5">
              {tt.cta.title}
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed mb-9">
              {tt.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-7 text-base font-medium" asChild>
                <Link href="/contact">
                  {tt.cta.primary}
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 text-base font-medium border-border bg-transparent hover:bg-muted"
                asChild
              >
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{tt.cta.secondary}</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-5">{tt.cta.note}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
