"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { DoodleGrowth, DoodleCoins, DoodleHeart, DoodleTarget } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"
import { translations } from "./translations"

export default function ClientResultsPage() {
  const { lang } = useLanguage()
  const tt = translations[lang]
  const [testimonialsExpanded, setTestimonialsExpanded] = useState(false)

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
      quote: "Jujur saya cakap, mengurus warung ni memang kerja tak habis-habis. Dari pagi sampai malam saya sibuk di dapur, jadi hal sistem dan teknologi memang saya tak sempat nak fikir. Waktu puncak, barisan pelanggan panjang, ada je pesanan yang tertinggal, dan operasi dapur dengan depan kaunter selalu tak sekata. CloudLine datang dan terus selesaikan masalah tu. Mereka optimumkan sistem POS warung saya khas untuk F&B, pastikan tiada lagi pesanan tercicir, dan selaraskan operasi depan kaunter dengan dapur terus melalui peranti mereka. Hasilnya nampak serta-merta, kelajuan barisan laju 30%, pelanggan tak payah tunggu lama, dan jualan pun terus naik. Sekarang saya boleh fokus pada masakan, bukan kelam-kabut nak urus pesanan. Terima kasih CloudLine!",
      results: "Kelajuan barisan meningkat 30%, sifar pesanan tercicir, operasi dapur & kaunter diselaraskan, jualan meningkat",
      challenge: "Sistem POS tidak teratur, pesanan tercicir waktu puncak, operasi dapur dan kaunter tidak sekata",
      solution: "Penyelarasan antara jabatan, POS khas F&B dengan operasi depan kaunter dan dapur diselaraskan melalui peranti",
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

  const visibleTestimonials = testimonialsExpanded
    ? testimonials
    : testimonials.slice(0, 4)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 2xl:py-36" aria-label="Client results hero">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl 2xl:max-w-4xl text-center">
            <motion.p
              className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tt.hero.eyebrow}
            </motion.p>
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
                <Link href="/case-studies">{tt.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Detailed case studies">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              {tt.caseStudies.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.caseStudies.title}
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              {tt.caseStudies.subtitle}
            </p>
          </div>

          <div className="grid gap-8">
            {[
              {
                title: "How we helped a Malaysian interior design firm go from struggling to thriving",
                industry: "Interior Design",
                platforms: ["Google", "META"],
                challenge: "Like many interior design firms, our client was caught in a frustrating cycle. Their work was beautiful, but finding new projects was a constant struggle. The sales cycle was painfully long, people would browse, get excited, then disappear for months. And since they only got paid when projects were completed, cash flow was always tight.",
                solution: "We knew we had to play the long game here. Our Google team built a comprehensive SEO strategy that would capture people at every stage of their home renovation journey, from 'just browsing' to 'ready to hire.' Meanwhile, our META team created nurturing campaigns that stayed top-of-mind during those long decision periods. We tracked everything obsessively, constantly tweaking and optimizing to squeeze every bit of value from their budget.",
                results: "The transformation was incredible: over 6000% increase in relevant website traffic, 300% more qualified leads coming through the door, and they cut their cost per lead by nearly half. Most importantly? They finally had predictable growth.",
                image: "/analytics-dashboard.png",
                metrics: [
                  { label: "Traffic Increase", value: "6000%" },
                  { label: "Lead Quality", value: "+300%" },
                  { label: "Cost Reduction", value: "45%" },
                ],
              },
              {
                title: "From burnout to breakthrough: how we scaled an aesthetic clinic",
                industry: "Healthcare/Aesthetics",
                platforms: ["Google", "META", "TikTok"],
                challenge: "Our client was a talented aesthetic doctor, but she was exhausted. Building her practice meant being 'always on', constantly posting on social media, networking, and trying to build her personal brand. The problem? She became a doctor to help people, not to be a full-time content creator. Word of mouth was slow, and she was burning out fast.",
                solution: "We took the marketing burden off her shoulders completely. Our Google team got her clinic showing up when people searched for treatments. Our META team automated her social presence with engaging content that built trust without her having to be glued to her phone. And our TikTok specialists created educational content that showcased her expertise while she focused on what she loved, treating patients.",
                results: "Within months, she had 250% more new patients booking appointments, her profit margins jumped 180%, and best of all? She got her life back. She cut her personal branding time by 90% while achieving better results than ever.",
                image: "/aesthetic-clinic-marketing-dashboard-with-patient-.jpg",
                metrics: [
                  { label: "New Patients", value: "+250%" },
                  { label: "Profit Margins", value: "+180%" },
                  { label: "ROAS", value: "4.2x" },
                ],
              },
              {
                title: "Mental health SaaS platform strategy & consultation",
                industry: "Healthcare SaaS",
                platforms: ["Google", "META"],
                challenge: "Wellnite is a virtual platform with the vision of making mental health accessible whenever, and wherever you are. Based in US, now expanding internationally with complex regulatory requirements and cultural sensitivities.",
                solution: "Our Google Marketing specialists developed comprehensive international SEO and PPC strategies tailored to different markets and regulations. Our META team created culturally-sensitive social campaigns that addressed mental health stigma in various regions. Our team monitored performance across multiple markets, ensuring successful platform growth and user acquisition while maintaining compliance with healthcare regulations in each territory.",
                results: "Successful expansion to 5 international markets, 400% increase in platform registrations, 85% improvement in user retention rates, and establishment of trusted healthcare partnerships in new territories.",
                image: "/mental-health-app-interface-with-global-reach-anal.jpg",
                metrics: [
                  { label: "Market Expansion", value: "5 Countries" },
                  { label: "Registrations", value: "+400%" },
                  { label: "Retention", value: "+85%" },
                ],
              },
              {
                title: "AI SEO content writing platform growth marketing",
                industry: "AI/SaaS",
                platforms: ["Google", "META", "XHS"],
                challenge: "Based in Malaysia, with the majority of their traffic and clients from US and AU, they are keen on making SEO AI-enabled, with minimal human efforts. The challenge was competing with established SEO tools while demonstrating AI superiority.",
                solution: "Our growth marketing team executed comprehensive strategies across email marketing, community building, and Google marketing. Our Google specialists focused on high-intent keywords and competitor analysis. Our META team built engaged communities around AI and SEO topics. Our XHS specialists created detailed long-form content showcasing AI capabilities and user success stories, driving organic sharing and establishing thought leadership in the AI-SEO space.",
                results: "Successful market penetration in US and AU markets with 500% increase in trial signups, 320% improvement in user adoption of AI-enabled SEO tools, and establishment as a leading voice in AI-powered content creation.",
                image: "/ai-seo-platform-dashboard-with-global-user-analyti.jpg",
                metrics: [
                  { label: "Trial Signups", value: "+500%" },
                  { label: "Tool Adoption", value: "+320%" },
                  { label: "Market Position", value: "Top 3" },
                ],
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-48 md:h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-border">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
                            {study.industry}
                          </span>
                          {study.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-5">
                          {study.title}
                        </h3>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, j) => (
                            <div key={j} className="text-center">
                              <div className="font-display text-lg md:text-2xl font-semibold tracking-tight text-primary">
                                {metric.value}
                              </div>
                              <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <div className="rounded-xl border border-border bg-muted/40 p-4">
                            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                              {tt.caseStudies.labels.challenge}
                            </p>
                            <p className="text-sm text-foreground/80 leading-relaxed">{study.challenge}</p>
                          </div>
                          <div className="rounded-xl border border-border bg-muted/40 p-4">
                            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                              {tt.caseStudies.labels.howWeHelped}
                            </p>
                            <p className="text-sm text-foreground/80 leading-relaxed">{study.solution}</p>
                          </div>
                          <div className="rounded-xl border border-primary/20 bg-primary/8 p-4">
                            <p className="text-xs font-medium tracking-[0.14em] uppercase text-primary mb-1.5">
                              {tt.caseStudies.labels.results}
                            </p>
                            <p className="text-sm text-foreground/85 leading-relaxed">{study.results}</p>
                          </div>
                        </div>
                        <Button className="mt-6 w-fit rounded-full font-medium" asChild>
                          <Link href="/contact">
                            {tt.caseStudies.cta}
                            <ArrowRight className="ml-1.5 size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Overall results">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.stats.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.stats.title}
            </h2>
            <p className="text-muted-foreground md:text-lg">{tt.stats.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {overallStats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    {stat.icon}
                  </span>
                </div>
                <div className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
                  {stat.number}
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
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              {tt.testimonials.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              {tt.testimonials.title}
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {tt.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

          {testimonials.length > 4 && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full font-medium border-border bg-transparent hover:bg-muted"
                onClick={() => setTestimonialsExpanded((prev) => !prev)}
              >
                {testimonialsExpanded
                  ? tt.testimonials.showLess
                  : tt.testimonials.showMore.replace("{count}", String(testimonials.length))}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Verified results">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              {tt.socialProof.eyebrow}
            </p>
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
              <div key={title} className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="flex justify-center mb-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-6" />
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
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
                <Link href="/case-studies">{tt.cta.secondary}</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-5">{tt.cta.note}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
