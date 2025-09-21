"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {

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
      title: "Revenue-Driven Ads",
      shortTitle: "💰 Profit Ads",
      description: "Stop burning money on ads that don't convert. Our performance marketing delivers 300% average ROI through data-driven campaigns.",
      shortDescription: "300% ROI guaranteed. Stop wasting ad spend.",
      icon: "🎯",
      features: [
        "300% average ROI guaranteed",
        "5x higher conversion rates",
        "Lead qualification systems",
        "Weekly performance reports",
      ],
      shortFeatures: ["300% ROI", "5x conversions", "Qualified leads", "Weekly reports"],
    },
    {
      title: "High-Converting Websites",
      shortTitle: "🚀 Sales Websites",
      description: "Transform your website into a sales machine. Our conversion-optimized designs turn visitors into paying customers.",
      shortDescription: "Turn visitors into customers. 14-day delivery.",
      icon: "🚀",
      features: ["Conversion-focused design", "Mobile-optimized layouts", "A/B tested elements", "14-day completion"],
      shortFeatures: ["Sales-focused", "Mobile-first", "A/B tested", "14-day delivery"],
    },
    {
      title: "Influencer Sales Campaigns",
      shortTitle: "👥 Influencer ROI",
      description: "Leverage trusted voices to drive sales. Our influencer partnerships deliver guaranteed engagement rates and measurable ROI.",
      shortDescription: "Guaranteed engagement. Measurable sales results.",
      icon: "👥",
      features: [
        "Guaranteed engagement rates",
        "ROI-focused partnerships",
        "End-to-end management",
        "Performance tracking",
      ],
      shortFeatures: ["Guaranteed engagement", "ROI-focused", "Full management", "Performance tracking"],
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
      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50 py-20 md:py-28 lg:py-36" aria-label="Hero section">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 mb-6 shadow-sm"
                >
                  🏆 7+ Years Proven Results
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="block sm:inline">Stop Losing Sales.</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Start Converting 3x More.
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="hidden sm:inline">Your competitors are stealing customers while you struggle with low conversions. We help businesses increase revenue by 3-5x through proven digital marketing strategies that actually work.</span>
                  <span className="sm:hidden">Turn your website into a sales machine. Get 300% more conversions in 90 days.</span>
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-semibold animate-pulse hover:animate-none"
                      asChild
                    >
                      <Link href="https://wa.link/fwi8af" target="_blank">
                        <span className="sm:hidden">💰 Get Free Audit</span>
                        <span className="hidden sm:inline">Get My Free Revenue Audit</span>
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 hover:bg-muted/50 transition-all duration-300 font-medium"
                      asChild
                    >
                      <Link href="/case-studies">
                        <span className="sm:hidden">📈 See Results</span>
                        <span className="hidden sm:inline">See Client Results</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-primary/10 px-3 py-2 rounded-full border border-green-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-medium">
                      <span className="sm:hidden">💰 300% ROI</span>
                      <span className="hidden sm:inline">300% ROI in 90 days</span>
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-secondary/10 px-3 py-2 rounded-full border border-blue-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="font-medium">
                      <span className="sm:hidden">🏆 7+ Years</span>
                      <span className="hidden sm:inline">7+ years proven results</span>
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-primary/10 px-3 py-2 rounded-full border border-purple-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="font-medium">
                      <span className="sm:hidden">✅ No Contracts</span>
                      <span className="hidden sm:inline">No long-term contracts</span>
                    </span>
                  </motion.div>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Digital marketing analytics dashboard showing business growth"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-2xl font-bold text-primary">300%</div>
                  <div className="text-xs text-muted-foreground">ROI Increase</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-2xl font-bold text-secondary">90</div>
                  <div className="text-xs text-muted-foreground">Days Results</div>
                </div>
              </motion.div>
            </div>
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
                Every day you delay is revenue lost to competitors. Our proven strategies help businesses increase conversions by 300% and turn marketing spend into predictable revenue growth.
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
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        <motion.div 
                          className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-2xl"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-foreground">
                          <span className="sm:hidden">{service.shortTitle}</span>
                          <span className="hidden sm:inline">{service.title}</span>
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                          <span className="sm:hidden">{service.shortDescription}</span>
                          <span className="hidden sm:inline">{service.description}</span>
                        </p>
                        <ul className="space-y-1 sm:space-y-2 flex-grow">
                          {/* Mobile features */}
                          <div className="sm:hidden">
                            {service.shortFeatures.map((feature, j) => (
                              <motion.li 
                                key={j} 
                                className="flex items-center text-xs text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1 }}
                              >
                                <span className="mr-2 text-accent">✓</span>
                                {feature}
                              </motion.li>
                            ))}
                          </div>
                          {/* Desktop features */}
                          <div className="hidden sm:block">
                            {service.features.map((feature, j) => (
                              <motion.li 
                                key={j} 
                                className="flex items-center text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1 }}
                              >
                                <span className="mr-2 text-accent">✓</span>
                                {feature}
                              </motion.li>
                            ))}
                          </div>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse hover:animate-none" asChild>
                            <Link href="https://wa.link/fwi8af" target="_blank">
                              <span className="sm:hidden">💬 Get Started</span>
                              <span className="hidden sm:inline">Learn More</span>
                            </Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
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

        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 text-foreground relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

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
              <p className="mx-auto max-w-[700px] text-foreground/90 md:text-xl">
                Every day you delay is revenue lost to competitors who are already using proven strategies to convert more customers. Don't let them steal your market share.
              </p>
              
              <div className="bg-card border-2 border-primary/20 rounded-xl p-6 mb-6 max-w-md mx-auto shadow-lg">
                <div className="text-center">
                  <div className="text-sm text-primary font-semibold mb-2">⚡ LIMITED TIME</div>
                  <div className="text-2xl font-bold text-foreground mb-1">Free Revenue Audit</div>
                  <div className="text-sm text-foreground/90 mb-2">Worth $2,500 - Completely Free</div>
                  <div className="text-xs text-red-600 font-medium bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full inline-block">
                    Only 3 spots left this month
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Claim My Free Audit Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <Link href="/case-studies">
                    See Client Results First
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-foreground/80 mt-4">
                Join 50+ businesses who've increased revenue by 300% in 90 days
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
    </div>
  )
}
