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
      description: "Data-driven campaigns across Google, Meta, TikTok, and XHS (Xiaohongshu)",
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
    { name: "ClearSK", logo: "/clearsk-logo.jpg" },
    { name: "Celcom", logo: "/celcom-logo.jpg" },
    { name: "Prenetics", logo: "/prenetics-logo.jpg" },
    { name: "Monstarlab", logo: "/monstarlab-logo.jpg" },
    { name: "Mukarami Coffee", logo: "/mukarami-logo.jpg" },
    { name: "Easy Eats", logo: "/easy-eats-logo.jpg" },
    { name: "Wellnite", logo: "/wellnite-logo.jpg" },
    { name: "Circle DNA", logo: "/circle-dna-logo.jpg" },
    { name: "Stive", logo: "/stive-logo.jpg" },
    { name: "MIL.D", logo: "/mild-logo.jpg" },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/90 shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
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
            <span className="text-foreground">CloudLine Studio</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <ThemeToggle />
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="https://wa.link/fwi8af" target="_blank">
                Let's Chat →
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
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
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Let's Chat →
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-background to-muted">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Transform Your Business with
                <span className="text-primary"> Strategic Digital Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                CloudLine Studio specializes in performance marketing, website creation, and influencer collaboration
                across Google, META, TikTok, and XHS (Xiaohongshu). We connect the right people to your products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Your Growth Journey →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-border text-foreground hover:bg-muted bg-transparent"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="size-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                    120+
                  </div>
                  <span>Successful Projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-accent">✓</span>
                  <span>7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-primary">★</span>
                  <span>Proven Results</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
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

        <section className="w-full py-12 border-y border-border bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Platforms we specialize in</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[
                  { name: "Google", logo: "/google-logo.png" },
                  { name: "META", logo: "/meta-logo.png" },
                  { name: "TikTok", logo: "/tiktok-logo.png" },
                  { name: "XHS", logo: "/xhs-logo.png" },
                  { name: "LinkedIn", logo: "/linkedin-logo.png" }
                ].map((platform) => (
                  <motion.div
                    key={platform.name}
                    className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-medium text-foreground">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                <p>XHS specializes in carousel posts, static images, KOL collaborations, and long-form copywriting</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Comprehensive Digital Marketing Solutions
              </h2>
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

        <section className="w-full py-20 md:py-32 bg-muted">
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

            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8 items-center"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...clients, ...clients].map((client, i) => (
                  <motion.div
                    key={i}
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

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-accent-foreground">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="mx-auto max-w-[700px] text-accent-foreground/90 md:text-xl">
                Let's connect the right people to your products and services. Every interaction should drive growth, and
                we're here to make that happen for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Your Project Today →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-all"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Schedule a Free Consultation
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-accent-foreground/80 mt-4">
                Join 120+ successful businesses that trust CloudLine Studio for their digital growth.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border bg-background">
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
                <span className="text-foreground">CloudLine Studio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Digital marketing agency specializing in performance marketing, website creation, and influencer
                collaboration across Google, META, TikTok, and XHS platforms.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://wa.link/fwi8af"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  💬<span className="sr-only">WhatsApp</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/cloudlinestudio"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  💼<span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Website Creation & SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Influencer Collaboration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://wa.link/fwi8af"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/company/cloudlinestudio"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} CloudLine Studio. All rights reserved.</p>
              <p>SSM: KT0595857-A</p>
            </div>
            <div className="flex gap-4">
              <span className="text-xs text-muted-foreground">Connecting the right people to the right products</span>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  )
}
