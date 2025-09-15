"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BarChart, Users, Globe, Check, TrendingUp, Target, Zap, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("performance")

  const services = [
    {
      id: "performance",
      title: "Performance Marketing",
      subtitle: "Data-driven campaigns across Google, Meta, TikTok, and XHS",
      icon: <BarChart className="size-8" />,
      description:
        "Maximize your marketing ROI with our comprehensive performance marketing strategies. We create, manage, and optimize campaigns across all major platforms to drive qualified leads and conversions.",
      features: [
        "Data-driven ad campaigns across Google, Meta, and TikTok",
        "Transparent ROI tracking with clear performance reports",
        "Sales funnel optimization to increase conversions",
        "Lead qualification systems to filter high-quality prospects",
        "Expertise in both B2B and e-commerce growth strategies",
        "Campaigns designed to maximize your marketing budget",
      ],
      pricing: "Starts From RM 1,200/month",
      deliverables: [
        "Campaign setup and optimization",
        "Weekly performance reports",
        "A/B testing and creative optimization",
        "Landing page recommendations",
        "Conversion tracking setup",
        "Monthly strategy consultations",
      ],
      timeline: "Results visible within 2-4 weeks",
      platforms: ["Google Ads", "Meta Ads", "TikTok Ads", "XHS Advertising"],
    },
    {
      id: "website",
      title: "Website Creation & SEO",
      subtitle: "Professional websites with conversion-focused design",
      icon: <Globe className="size-8" />,
      description:
        "Build a powerful online presence with our custom website creation and SEO optimization services. We create websites that not only look great but also drive business results.",
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
      pricing: "Starts From RM 2,560",
      deliverables: [
        "Custom website design and development",
        "Mobile-responsive implementation",
        "SEO optimization and content creation",
        "Brand kit development",
        "Hosting setup and configuration",
        "Performance optimization",
        "User journey testing",
        "Training and handover",
      ],
      timeline: "14 days from project start",
      platforms: ["WordPress", "Custom Development", "SEO Tools", "Analytics"],
    },
    {
      id: "influencer",
      title: "Influencer Collaboration",
      subtitle: "End-to-end campaign management with KOL partnerships",
      icon: <Users className="size-8" />,
      description:
        "Leverage the power of influencer marketing with our comprehensive collaboration management. We handle everything from influencer selection to campaign execution and performance tracking.",
      features: [
        "End-to-end campaign management, from outreach to execution",
        "Strategic influencer pairing to align with your brand values",
        "Scriptwriting and caption creation for authentic storytelling",
        "Scheduling and coordination to keep campaigns on track",
        "Performance monitoring to ensure impact and ROI",
        "Partnerships that deliver trust, visibility, and sales growth",
        "5 reels and 10 stories per month included",
      ],
      pricing: "Starts From RM 6,000/month",
      deliverables: [
        "Influencer research and outreach",
        "Campaign strategy development",
        "Content creation and scripting",
        "Campaign coordination and management",
        "Performance tracking and reporting",
        "5 reels and 10 stories monthly",
        "ROI analysis and optimization",
      ],
      timeline: "Campaign launch within 1-2 weeks",
      platforms: ["Instagram", "TikTok", "XHS", "YouTube"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and target audience to develop a customized strategy.",
      icon: <Search className="size-6" />,
    },
    {
      step: "02",
      title: "Implementation & Launch",
      description:
        "Our specialists execute the strategy across chosen platforms with precision and attention to detail.",
      icon: <Zap className="size-6" />,
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization to ensure maximum performance and ROI.",
      icon: <TrendingUp className="size-6" />,
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Scale successful campaigns and strategies to drive sustained business growth.",
      icon: <Target className="size-6" />,
    },
  ]

  const faqs = [
    {
      question: "How do you determine which platforms are best for my business?",
      answer:
        "We conduct thorough market research and competitor analysis to identify where your target audience is most active. Our team evaluates factors like demographics, behavior patterns, and industry trends to recommend the optimal platform mix for your specific business goals.",
    },
    {
      question: "What makes your XHS (Xiaohongshu) strategy different?",
      answer:
        "Our XHS specialists focus on carousel posts, static images, KOL collaborations, and long-form copywriting that drives user sharing. We understand the platform's unique culture and create content that highlights your USPs while encouraging organic sharing and engagement.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Performance marketing typically shows initial results within 2-4 weeks, with significant improvements by month 2-3. Website projects are completed within 14 days. Influencer campaigns can launch within 1-2 weeks depending on influencer availability and content requirements.",
    },
    {
      question: "Do you provide transparent reporting?",
      answer:
        "Absolutely. All dashboards, data, and performance metrics belong to you. We provide detailed weekly and monthly reports with clear insights, recommendations, and next steps. You'll always know exactly how your campaigns are performing.",
    },
    {
      question: "Can you work with businesses outside Malaysia?",
      answer:
        "Yes, we work with clients globally. We have experience with businesses in the US, Australia, and other international markets. Our strategies are adapted to local market conditions, cultural nuances, and regulatory requirements.",
    },
  ]

  const currentService = services.find((service) => service.id === activeService) || services[0]

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
            <Link href="/services" className="text-sm font-medium text-black">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
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
                Comprehensive Digital Marketing
                <span className="text-orange-500"> Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From performance marketing to influencer collaboration, we provide end-to-end digital marketing
                solutions that drive measurable results for your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 border-y border-gray-200 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-bold text-black mb-6">Our Services</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        activeService === service.id
                          ? "border-orange-500 bg-orange-50 shadow-md"
                          : "border-gray-200 bg-white hover:shadow-md"
                      }`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-12 rounded-full flex items-center justify-center ${
                              activeService === service.id ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-black">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-gray-200 bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="size-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                          {currentService.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-black">{currentService.title}</h3>
                          <p className="text-gray-600">{currentService.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{currentService.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-bold text-black mb-4">What's Included:</h4>
                          <ul className="space-y-2">
                            {currentService.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="size-4 text-olive-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-black mb-4">Deliverables:</h4>
                          <ul className="space-y-2">
                            {currentService.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-500">{currentService.pricing}</div>
                          <div className="text-sm text-gray-600">Investment</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-olive-600">{currentService.timeline}</div>
                          <div className="text-sm text-gray-600">Timeline</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-black">{currentService.platforms.length}+</div>
                          <div className="text-sm text-gray-600">Platforms</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-black mb-3">Platforms We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentService.platforms.map((platform, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank">
                          Get Started with {currentService.title}
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-olive-100 text-olive-800 border-olive-200 mb-4">
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">How We Deliver Results</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven 4-step process ensures transparent communication, measurable results, and sustained growth
                for every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="size-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <div className="size-12 rounded-full bg-olive-100 flex items-center justify-center text-olive-600 mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-orange-100 text-orange-800 border-orange-200 mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about our services and approach to digital marketing.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-gray-200 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-black">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Choose the service that fits your business needs and start your journey to digital success with
                CloudLine Studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Discuss Your Project
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/case-studies">View Our Results</Link>
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
