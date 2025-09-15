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
    <div className="flex min-h-[100dvh] flex-col bg-white text-black">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 shadow-sm border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CloudLine%20Logo-16f6W22iHGRNtQ9Ahj0pSsWuwfWHiO.png"
                alt="CloudLine Studio"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-black">CloudLine Studio</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-black">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link href="https://wa.link/fwi8af" target="_blank">
              Let's Chat
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black">
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black">
                Transparent Pricing for
                <span className="text-orange-500"> Real Results</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Choose the service that fits your business needs. All packages include transparent reporting, dedicated
                support, and measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
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
                        ? "border-orange-500 shadow-lg ring-2 ring-orange-500/20"
                        : "border-gray-200 shadow-md hover:shadow-lg"
                    } bg-white transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold text-black">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="mr-2 size-4 text-olive-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-auto rounded-full ${
                          plan.popular
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "bg-olive-600 hover:bg-olive-700 text-white"
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
              <p className="text-gray-600 mb-6">
                All prices are in Malaysian Ringgit (MYR). Custom packages available for enterprise clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
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

        <section className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-olive-100 text-olive-800 border-olive-200 mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                What's Included in Every Package
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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
                  <Card className="h-full border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-olive-600 to-olive-700 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Choose your package and start transforming your digital presence today. All packages come with our
                satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white"
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
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CloudLine%20Logo-16f6W22iHGRNtQ9Ahj0pSsWuwfWHiO.png"
                    alt="CloudLine Studio"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-black">CloudLine Studio</span>
              </div>
              <p className="text-sm text-gray-600">
                Digital marketing agency specializing in performance marketing, website creation, and influencer
                collaboration.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                    Website Creation & SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                    Influencer Collaboration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://wa.link/fwi8af"
                    target="_blank"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    WhatsApp Chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} CloudLine Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
