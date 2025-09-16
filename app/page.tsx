"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const services = [
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns across Google, Meta, TikTok, and LinkedIn platforms",
      icon: "📊",
      features: [
        "Multi-platform campaign management",
        "ROI tracking & optimization",
        "Sales funnel enhancement",
        "Lead qualification systems",
      ],
    },
    {
      title: "Website Creation & SEO",
      description: "Professional websites with conversion-focused design and SEO optimization",
      icon: "🌐",
      features: ["Mobile-responsive design", "SEO-optimized content", "Speed optimization", "14-day completion"],
    },
    {
      title: "Influencer Collaboration",
      description: "End-to-end campaign management with KOL partnerships and content creation",
      icon: "👥",
      features: [
        "Strategic influencer pairing",
        "Content creation & scripting",
        "Campaign coordination",
        "Performance monitoring",
      ],
    },
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
    { name: "Tanium", logo: "/tanium-logo.png" },
    { name: "Bateriku.com", logo: "/bateriku-logo.png" },
    { name: "The Flour Whisperer", logo: "/flour-whisperer-logo.png" },
    { name: "MIL Design & Construction", logo: "/mil-logo.png" },
    { name: "Mukarami Coffee", logo: "/mukarami-logo.png" },
    { name: "eSIMM Roam", logo: "/esimm-logo.png" },
    { name: "Cigna Healthcare", logo: "/cigna-logo.png" },
    { name: "Manulife", logo: "/manulife-logo.png" },
    { name: "Darlie", logo: "/darlie-logo.png" },
    { name: "Premier Clinic", logo: "/premier-clinic-logo.png" },
    { name: "SmartCity Kitchens", logo: "/smartcity-kitchens-logo.png" },
    { name: "Vyne", logo: "/vyne-logo.png" },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <WhatsAppFloat />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-background/90 shadow-sm border-b border-border' : 'bg-transparent'}`} role="banner"
      >
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="flex-1 flex items-center justify-center">
            <nav className="flex gap-4 sm:gap-8" role="navigation" aria-label="Main navigation">
              <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Services
              </Link>
              <Link href="/case-studies" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Case Studies
              </Link>
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
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <div className="p-1 rounded-lg border border-border bg-card shadow-sm">
              <ThemeToggle />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2" asChild>
              <Link href="https://wa.link/fwi8af" target="_blank">
                Let's Chat →
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <div className="p-1 rounded-lg border border-border bg-card shadow-sm">
              <ThemeToggle />
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✕" : "☰"}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="/services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/case-studies" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link href="/pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Chat With Us →
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50" aria-label="Hero section">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container relative z-10 py-20 md:py-28 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 mb-6 shadow-sm"
                >
                  🚀 300% ROI or Money Back
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Outperform Competitors.
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Convert More Today.
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-foreground/80 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  3-5x revenue growth through data-driven marketing. 
                  Pay only for results.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
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
                    <Link href="#faq">
                      Any Questions?
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>300% ROI</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>8+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>No Lock-in</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <Image
                    src="/aesthetic-clinic-marketing-dashboard-with-patient-.jpg"
                    alt="Marketing dashboard showing growth metrics"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-2xl font-bold text-primary">87%</div>
                  <div className="text-xs text-muted-foreground">Client Retention</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-2xl font-bold text-secondary">5x</div>
                  <div className="text-xs text-muted-foreground">ROI Average</div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" aria-describedby="clients-heading">
                Your customers are searching for your products right now. But they're buying from competitors who show up first. 
                We've helped 50+ businesses increase their revenue by 3-5x through strategic digital marketing that actually converts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> Average 300% ROI in 90 days
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> 7+ years proven results
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> No long-term contracts
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Book a Call Now - 15% Off First Month →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-border text-foreground hover:bg-muted bg-transparent"
                  asChild
                >
                  <Link href="/case-studies">
                    See Client Results
                  </Link>
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-5xl mt-16"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/analytics-dashboard.png"
                  width={1280}
                  height={720}
                  alt="Analytics Dashboard"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>


        <section className="w-full py-16 md:py-24 bg-background" aria-label="Our services">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20">
                Revenue Growth Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Stop Wasting Money on Marketing That Doesn't Convert
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every day you delay is revenue lost to competitors. Our proven system turns your marketing spend into predictable profit.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3"
            >
              {services.map((service, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-2xl">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 flex-grow">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center text-sm text-muted-foreground">
                            <span className="mr-2 text-accent">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank">
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted" aria-label="Client testimonials">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20">
                Trusted Partners
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Previous Clients We've Worked With
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Trusted by leading brands across various industries to drive their digital growth.
              </p>
            </motion.div>

            <div className="relative overflow-hidden space-y-6">
              {/* First Row - Left to Right */}
              <motion.div
                className="flex gap-8 items-center"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[...clients.slice(0, 12), ...clients.slice(0, 12)].map((client, i) => (
                  <motion.div
                    key={`row1-${i}`}
                    className="flex-shrink-0 w-40 h-20 bg-card rounded-lg border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Second Row - Right to Left */}
              <motion.div
                className="flex gap-8 items-center"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[...clients.slice(12, 24), ...clients.slice(12, 24)].map((client, i) => (
                  <motion.div
                    key={`row2-${i}`}
                    className="flex-shrink-0 w-40 h-20 bg-card rounded-lg border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border shadow-sm">
                <span className="text-primary">★</span>
                <span className="text-sm font-medium text-foreground">4.9/5 Client Satisfaction</span>
                <span className="text-sm text-muted-foreground">• 120+ Projects Completed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background text-foreground relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Your Competitors Are Getting Ahead While You Wait
              </h2>
              <p className="mx-auto max-w-[700px] text-foreground/90 md:text-xl" aria-describedby="main-heading">
                Every month you delay costs you thousands in lost revenue. Our clients see results in 30 days or less. 
                Stop losing customers to competitors who invested in growth.
              </p>
              
              <div className="bg-foreground/5 border border-border rounded-lg p-6 mb-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Limited Time Offer</div>
                  <div className="text-sm text-foreground/90">15% Off Your First Month</div>
                  <div className="text-xs text-foreground/80 mt-2">Only 3 spots left this month</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Book a Call - 15% Off First Month →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
Schedule a Free Strategy Call
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-foreground/80 mt-4">
                Join 120+ successful businesses that trust CloudLine Studio for their digital growth.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-background" role="contentinfo">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs">
          <p className="text-foreground/90">&copy; {new Date().getFullYear()} CloudLine Studio. All rights reserved.</p>
          <p className="text-foreground/90">SSM: KT0595857-A</p>
        </div>
        <div className="flex gap-4">
          <p className="text-xs text-foreground/90" role="text">Connecting the right people to the right products</p>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  )
}
