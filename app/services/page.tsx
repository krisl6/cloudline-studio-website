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
            <Link href="/services" className="text-sm font-medium text-foreground">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
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
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-muted" aria-label="Services overview">
          <div className="container px-4 md:px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Comprehensive Digital Marketing
                <span className="text-primary"> Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" aria-describedby="services-main-heading">
                From performance marketing to influencer collaboration, we provide end-to-end digital marketing
                solutions that drive measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-semibold"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Get My Free Revenue Audit
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 hover:bg-muted/50 transition-all duration-300 font-medium"
                  asChild
                >
                  <Link href="/case-studies">
                    See Client Results
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-6 md:py-10 border-y border-border bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Services</h2>
                <div className="space-y-3 md:space-y-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        activeService === service.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-card hover:shadow-md"
                      }`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <CardContent className="p-3 md:p-4">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div
                            className={`size-10 md:size-12 rounded-full flex items-center justify-center ${
                              activeService === service.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-foreground">{service.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">{service.subtitle}</p>
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
                  <Card className="border-border bg-card shadow-lg">
                    <CardContent className="p-4 md:p-6 lg:p-8">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="size-12 md:size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {currentService.icon}
                        </div>
                        <div>
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground" id="services-main-heading">{currentService.title}</h1>
                          <p className="text-muted-foreground">{currentService.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6">{currentService.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-foreground mb-3 md:mb-4">What's Included:</h4>
                          <ul className="space-y-2">
                            {currentService.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="size-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm md:text-base font-bold text-foreground mb-3 md:mb-4">Deliverables:</h4>
                          <ul className="space-y-2">
                            {currentService.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="size-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/80">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                        <div className="text-center p-2 md:p-4 bg-muted rounded-lg">
                          <div className="text-lg md:text-2xl font-bold text-primary">{currentService.pricing}</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Investment</div>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-muted rounded-lg">
                          <div className="text-base md:text-lg font-bold text-accent">{currentService.timeline}</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Timeline</div>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-muted rounded-lg">
                          <div className="text-base md:text-lg font-bold text-foreground">{currentService.platforms.length}+</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Platforms</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm md:text-base font-bold text-foreground mb-3">Platforms We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentService.platforms.map((platform, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button aria-pressed={activeService === currentService.id ? 'true' : 'false'} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
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

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Service selection">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-4">
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">How We Deliver Results</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven 4-step process ensures transparent communication, measurable results, and sustained growth
                for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="size-12 md:size-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <div className="size-10 md:size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3 md:mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                    <AccordionItem value={`item-${i}`} className="border-b border-border py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
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
              <p className="text-lg md:text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
                Choose the service that fits your business needs and start your journey to digital success with
                CloudLine Studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
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
                  className="rounded-full h-12 px-8 text-base bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
                  asChild
                >
                  <Link href="/case-studies">View Our Results</Link>
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
