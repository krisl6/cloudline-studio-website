"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BarChart, Users, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function CaseStudiesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const platforms = [
    {
      name: "Google",
      icon: <BarChart className="size-5" />,
      description:
        "Our Google specialists track search performance, keyword rankings, and PPC campaigns with precision analytics to ensure maximum ROI and visibility.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "META",
      icon: <Users className="size-5" />,
      description:
        "Our META team monitors social engagement, ad performance, and audience insights across Facebook and Instagram to optimize reach and conversions.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "TikTok",
      icon: <TrendingUp className="size-5" />,
      description:
        "Our TikTok specialists analyze viral trends, engagement rates, and content performance to maximize brand visibility and user interaction.",
      color: "bg-pink-100 text-pink-800 border-pink-200",
    },
    {
      name: "XHS",
      icon: <Globe className="size-5" />,
      description:
        "Our XHS team specializes in carousel posts, static images, KOL collaborations, and long-form copywriting that drives user sharing and highlights unique selling propositions.",
      color: "bg-red-100 text-red-800 border-red-200",
    },
  ]

  const caseStudies = [
    {
      title: "Interior Design SEO, Website Revamp & Performance Malaysia",
      industry: "Interior Design",
      platforms: ["Google", "META"],
      challenge:
        "Interior Design firms require many ongoing projects, as their sales cycle is exceptionally long. New users, although interested, are often not ready to purchase or begin their projects, and the firm only gets paid when the job is done.",
      solution:
        "Our Google specialists implemented comprehensive SEO strategies and Performance marketing campaigns to guarantee a steady flow of high-quality leads. Our META team developed targeted social campaigns to nurture prospects through the long sales cycle. Our team tracked performance across search campaigns and organic rankings, ensuring continuous optimization for maximum ROI.",
      results:
        ">6000% increase in relevant traffic and keyword queries, significant improvement in keyword rankings, 300% increase in qualified leads, and 45% reduction in cost per acquisition.",
      image: "/analytics-dashboard.png",
      metrics: [
        { label: "Traffic Increase", value: "6000%" },
        { label: "Lead Quality", value: "+300%" },
        { label: "Cost Reduction", value: "45%" },
      ],
    },
    {
      title: "Aesthetic Clinic SEO, SEM, Performance & EDM",
      industry: "Healthcare/Aesthetics",
      platforms: ["Google", "META", "TikTok"],
      challenge:
        "Aesthetic Clinics depend mostly on personal branding, which brings two problems: 1) Time - Word of mouth is slow, 2) Personal branding strategies require significant energy and time that healthcare workers don't have.",
      solution:
        "Our Google specialists developed comprehensive SEM strategies for immediate visibility while building long-term SEO authority. Our META team created corporate AND personal branding strategies that automated social presence. Our TikTok specialists leveraged trending content to showcase treatments and build trust. Our team managed multi-platform campaigns, tracking performance across paid social and PPC to ensure optimal budget allocation and maximum patient acquisition.",
      results:
        "250% increase in new patient bookings, 180% improvement in gross profit margins, successful scaling of paid social campaigns with 4.2x ROAS, and 90% reduction in personal branding time investment.",
      image: "/aesthetic-clinic-marketing-dashboard-with-patient-.jpg",
      metrics: [
        { label: "New Patients", value: "+250%" },
        { label: "Profit Margins", value: "+180%" },
        { label: "ROAS", value: "4.2x" },
      ],
    },
    {
      title: "Mental Health SaaS Platform Strategy & Consultation",
      industry: "Healthcare SaaS",
      platforms: ["Google", "META"],
      challenge:
        "Wellnite is a virtual platform with the vision of making mental health accessible whenever, and wherever you are. Based in US, now expanding internationally with complex regulatory requirements and cultural sensitivities.",
      solution:
        "Our Google Marketing specialists developed comprehensive international SEO and PPC strategies tailored to different markets and regulations. Our META team created culturally-sensitive social campaigns that addressed mental health stigma in various regions. Our team monitored performance across multiple markets, ensuring successful platform growth and user acquisition while maintaining compliance with healthcare regulations in each territory.",
      results:
        "Successful expansion to 5 international markets, 400% increase in platform registrations, 85% improvement in user retention rates, and establishment of trusted healthcare partnerships in new territories.",
      image: "/mental-health-app-interface-with-global-reach-anal.jpg",
      metrics: [
        { label: "Market Expansion", value: "5 Countries" },
        { label: "Registrations", value: "+400%" },
        { label: "Retention", value: "+85%" },
      ],
    },
    {
      title: "AI SEO Content Writing Platform Growth Marketing",
      industry: "AI/SaaS",
      platforms: ["Google", "META", "XHS"],
      challenge:
        "Based in Malaysia, with the majority of their traffic and clients from US and AU, they are keen on making SEO AI-enabled, with minimal human efforts. The challenge was competing with established SEO tools while demonstrating AI superiority.",
      solution:
        "Our growth marketing team executed comprehensive strategies across email marketing, community building, and Google marketing. Our Google specialists focused on high-intent keywords and competitor analysis. Our META team built engaged communities around AI and SEO topics. Our XHS specialists created detailed long-form content showcasing AI capabilities and user success stories, driving organic sharing and establishing thought leadership in the AI-SEO space.",
      results:
        "Successful market penetration in US and AU markets with 500% increase in trial signups, 320% improvement in user adoption of AI-enabled SEO tools, and establishment as a leading voice in AI-powered content creation.",
      image: "/ai-seo-platform-dashboard-with-global-user-analyti.jpg",
      metrics: [
        { label: "Trial Signups", value: "+500%" },
        { label: "Tool Adoption", value: "+320%" },
        { label: "Market Position", value: "Top 3" },
      ],
    },
  ]

  const filteredStudies =
    selectedPlatform === "all" ? caseStudies : caseStudies.filter((study) => study.platforms.includes(selectedPlatform))

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
            <Link href="/case-studies" className="text-sm font-medium text-foreground">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="https://wa.link/fwi8af" target="_blank">
              Let's Chat
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1" role="main">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-muted" aria-label="Case studies overview">
          <div className="container px-4 md:px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground" id="case-studies-main-heading">
                Proven Results Across
                <span className="text-primary"> Industries & Platforms</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" aria-describedby="case-studies-main-heading">
                Real success stories from clients who have transformed their businesses with our strategic digital
                marketing approach across Google, META, TikTok, and XHS platforms.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 border-y border-border bg-muted" aria-label="Platform specialists">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Our Platform Specialists</h2>
              <p className="text-muted-foreground text-center max-w-2xl">
                Each platform requires unique expertise. Our specialized teams track performance and ensure success
                across all channels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      onClick={() => setSelectedPlatform(platform.name)}
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <div className={`size-8 md:size-10 rounded-full flex items-center justify-center ${platform.color}`}>
                            {platform.icon}
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-foreground">{platform.name}</h3>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground">{platform.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <Button
                  variant={selectedPlatform === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPlatform("all")}
                  className={selectedPlatform === "all" ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
                >
                  All Platforms
                </Button>
                {platforms.map((platform) => (
                  <Button
                    key={platform.name}
                    variant={selectedPlatform === platform.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={selectedPlatform === platform.name ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
                  >
                    {platform.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Case study results">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {filteredStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-48 md:h-64 lg:h-auto">
                          <Image
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-accent/10 text-accent border-accent/20">{study.industry}</Badge>
                            {study.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">{study.title}</h3>

                          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                            {study.metrics.map((metric, j) => (
                              <div key={j} className="text-center">
                                <div className="text-lg md:text-2xl font-bold text-primary">{metric.value}</div>
                                <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-3 md:space-y-4">
                            <div>
                              <h4 className="font-semibold text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                                Challenge
                              </h4>
                              <p className="text-xs md:text-sm text-foreground/80">{study.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                                Our Solution
                              </h4>
                              <p className="text-xs md:text-sm text-foreground/80">{study.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                                Results Achieved
                              </h4>
                              <p className="text-xs md:text-sm font-medium text-accent">{study.results}</p>
                            </div>
                          </div>
                          <Button className="mt-4 md:mt-6 w-fit bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                            <Link href="https://wa.link/fwi8af" target="_blank">
                              Discuss Your Project
                              <ArrowRight className="ml-2 size-4" />
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

        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-lg md:text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
                Join the growing list of businesses that have transformed their digital presence with CloudLine Studio's
                proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Your Success Story
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
                  asChild
                >
                  <Link href="/services">Explore Our Services</Link>
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
