"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Performance Marketing",
      price: "Starts From RM 1,200",
      period: "/month",
      description: "Data-driven campaigns across Google, Meta, and TikTok.",
      features: [
        "Data-driven ad campaigns across Google, Meta, and TikTok",
        "Transparent ROI tracking with clear performance reports",
        "Sales funnel optimization to increase conversions",
        "Lead qualification systems to filter high-quality prospects",
        "Expertise in both B2B and e-commerce growth strategies",
        "Campaigns designed to maximize your marketing budget",
        "Weekly performance reports",
        "Monthly strategy consultations",
      ],
      cta: "Start Campaign",
      link: "https://wa.link/fwi8af",
      popular: false,
    },
    {
      name: "Website Design",
      price: "Starts From RM 2,560",
      period: "",
      description: "Professional websites designed for credibility and conversions.",
      features: [
        "Professional, mobile-friendly websites designed for credibility",
        "Conversion-focused layouts with persuasive CTAs",
        "SEO-optimized copywriting to attract and engage customers",
        "Custom brand kits (colors, fonts, visuals) for consistency",
        "Hosting setup & speed optimization for smooth performance",
        "Websites built to drive leads and measurable business growth",
        "14-day Completion deadline",
        "Customer Journey Testing included",
      ],
      cta: "Start Project",
      link: "https://wa.link/fwi8af",
      popular: false,
    },
    {
      name: "Social Media Marketing",
      price: "Starts From RM 2,080",
      period: "/month",
      description: "Complete social media management and performance marketing.",
      features: [
        "Content Strategy and production",
        "Performance Marketing on FB & IG",
        "Scheduling and posting on a consistent schedule",
        "Ebooks and Communication Template unlimited",
        "Data Reports monthly",
        "12-Hour Support System included",
        "Brand consistency across platforms",
        "Community management and engagement",
      ],
      cta: "Get Started",
      popular: true,
      link: "https://wa.link/fwi8af",
    },
    {
      name: "Influencer Collaboration",
      price: "Starts From RM 6,000",
      period: "/month",
      description: "End-to-end influencer campaign management for 5 reels and 10 stories.",
      features: [
        "End-to-end campaign management, from outreach to execution",
        "Strategic influencer pairing to align with your brand values",
        "Scriptwriting and caption creation for authentic storytelling",
        "Scheduling and coordination to keep campaigns on track",
        "Performance monitoring to ensure impact and ROI",
        "Partnerships that deliver trust, visibility, and sales growth",
        "5 reels and 10 stories per month included",
        "XHS (Xiaohongshu) KOL collaborations available",
      ],
      cta: "Launch Campaign",
      link: "https://wa.link/fwi8af",
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/90 shadow-sm border-b border-border" role="banner">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold" aria-label="CloudLine Studio - Home">
            <div className="size-8 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CloudLine%20Logo-16f6W22iHGRNtQ9Ahj0pSsWuwfWHiO.png"
                alt="CloudLine Studio"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-foreground">CloudLine Studio</span>
          </Link>
          <nav className="hidden md:flex gap-6 lg:gap-8" role="navigation" aria-label="Main navigation">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <Link href="https://wa.link/fwi8af" target="_blank">
              Chat with us now
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1" role="main">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-muted" aria-label="Pricing overview">
          <div className="container px-4 md:px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground" id="pricing-main-heading">
                Transparent Pricing for
                <span className="text-primary"> Real Results</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" aria-describedby="pricing-main-heading">
                Choose the service that fits your business needs. All packages include transparent reporting, dedicated
                support, and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-semibold"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Chat Now
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 hover:bg-muted/50 transition-all duration-300 font-medium"
                  asChild
                >
                  <Link href="/contact">
                    Any Questions?
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Pricing plans">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card
                    className={`relative overflow-hidden h-full ${
                      plan.popular
                        ? "border-primary shadow-lg ring-2 ring-primary/20"
                        : "border-border shadow-md hover:shadow-lg"
                    } bg-card transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-4 md:p-6 flex flex-col h-full">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl md:text-3xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{plan.description}</p>
                      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="mr-2 size-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-auto rounded-full ${
                          plan.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-accent hover:bg-accent/90 text-accent-foreground"
                        }`}
                        asChild
                      >
                        <Link href={plan.link} target="_blank">
                          {plan.cta}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-6">
                All prices are in Malaysian Ringgit (MYR). Custom packages available for enterprise clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Discuss Custom Package
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                  <Link href="/services">Learn More About Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted" aria-label="Package benefits">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                What's Included in Every Package
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Transparent Reporting",
                  description:
                    "All dashboards, data, and performance metrics belong to you. Complete transparency in every campaign.",
                },
                {
                  title: "Dedicated Support",
                  description:
                    "Direct access to our specialists with response times ranging from 12 hours to immediate support.",
                },
                {
                  title: "Proven Results",
                  description:
                    "7+ years of experience with 120+ successful projects across various industries and markets.",
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 md:p-6 text-center">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
                Choose your package and start transforming your digital presence today. All packages come with our
                satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Your Project Today
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
                  asChild
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-background" role="contentinfo">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CloudLine Studio. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
