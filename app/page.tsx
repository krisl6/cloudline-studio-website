"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"
import { posthog } from "posthog-js"
import { useRef } from "react"

export default function HomePage() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  })
  
  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  // Parallax transforms
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "-50%"])
  const heroScale = useTransform(heroProgress, [0, 0.5, 1], [1, 1.1, 1.2])
  const heroOpacity = useTransform(heroProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.6])
  
  const servicesY = useTransform(servicesProgress, [0, 1], ["100px", "-100px"])
  const servicesRotate = useTransform(servicesProgress, [0, 1], [5, -5])
  
  // Background elements
  const bgY1 = useTransform(smoothProgress, [0, 1], ["0%", "-100%"])
  const bgY2 = useTransform(smoothProgress, [0, 1], ["0%", "-150%"])
  const bgRotate = useTransform(smoothProgress, [0, 1], [0, 360])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const services = [
    {
      title: "Google/META Advertisements",
      description: "3x ROI across Google, Meta, TikTok & LinkedIn",
      icon: TrendingUp,
      features: [
        "Multi-platform campaigns across Asia",
        "ROI tracking & optimization",
        "Sales funnel enhancement",
        "Lead qualification & nurturing",
      ],
      bgGradient: "from-blue-400 to-cyan-400",
      results: "+347% average ROI",
    },
    {
      title: "Website & SEO",
      description: "Convert-focused websites in 14 days",
      icon: Zap,
      features: [
        "Mobile-responsive design",
        "SEO-optimized for Asian markets",
        "Speed optimized (Core Web Vitals)",
        "14-day delivery guarantee",
      ],
      bgGradient: "from-purple-400 to-pink-400",
      results: "92% faster load times",
    },
    {
      title: "Influencer Marketing",
      description: "KOL partnerships that convert",
      icon: Users,
      features: [
        "Strategic Asian KOL pairing",
        "Viral content creation",
        "Campaign coordination",
        "Performance tracking & ROI",
      ],
      bgGradient: "from-green-400 to-blue-400",
      results: "50M+ organic reach",
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
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground" ref={containerRef}>
      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50" aria-label="Hero section" ref={heroRef}>
          {/* Background elements */}
          <motion.div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]" style={{ y: bgY1, rotate: bgRotate }}></motion.div>
          <motion.div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{ y: bgY2 }}></motion.div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container relative z-10 py-20 md:py-28 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="show"
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
                  style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
                >
                  3x Your Revenue.
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Convert More.
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-foreground/80 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  300% ROI guaranteed or money back. 
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
                    className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-semibold"
                    asChild
                  >
                    <Link href="https://wa.link/fwi8af" target="_blank">
                      Chat with Us Now
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 hover:bg-muted/50 hover:scale-105 transition-all duration-300 font-medium"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Tally) {
                        (window as any).Tally.openPopup('wbagA7');
                        posthog?.capture('contact_form_opened', {
                          trigger: 'any_questions_button',
                          location: 'hero_section',
                          page: 'homepage'
                        })
                      }
                    }}
                  >
                    Any Questions?
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
                variants={slideInRight}
                initial="hidden"
                animate="show"
                className="relative"
                style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
              >
                {/* Floating natural elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 opacity-20"
                  style={{ 
                    y: useTransform(heroProgress, [0, 1], [0, -100]),
                    rotate: useTransform(heroProgress, [0, 1], [0, 180])
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-sm"></div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-5 -left-5 w-16 h-16 opacity-30"
                  style={{ 
                    y: useTransform(heroProgress, [0, 1], [0, 50]),
                    x: useTransform(heroProgress, [0, 1], [0, 30])
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-sm"></div>
                </motion.div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
                    style={{ 
                      scale: useTransform(heroProgress, [0, 1], [1, 1.1]),
                      opacity: useTransform(heroProgress, [0, 0.5, 1], [0, 0.3, 0.6])
                    }}
                  />
                  {/* Asian business team collaboration image */}
                  <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <TrendingUp className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">300% ROI Guaranteed</h3>
                        <p className="text-gray-600 dark:text-gray-400">Real results from real campaigns</p>
                      </div>
                    </div>
                    {/* Floating elements to simulate Asian business environment */}
                    <motion.div
                      className="absolute top-4 left-4 w-16 h-16 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Users className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Zap className="w-8 h-8 text-secondary" />
                    </motion.div>
                  </div>
                  
                  {/* Floating stats that appear on scroll */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-sm font-semibold text-green-600">+300% ROI</div>
                    <div className="text-xs text-gray-600">This Quarter</div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-sm font-semibold text-blue-600">1.2M Reach</div>
                    <div className="text-xs text-gray-600">Monthly</div>
                  </motion.div>
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
                Your customers are buying from competitors right now. 
                We've helped 150+ businesses 3x their revenue in 90 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> Average 150% ROI in 90 days
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> 7+ years proven results
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> Zero hassle, A-Z Service
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Chat with Us Now →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-border text-foreground hover:bg-muted hover:scale-105 bg-transparent transition-all duration-300"
                  asChild
                >
                  <Link href="/case-studies">
                    See Client Results
                  </Link>
                </Button>
              </div>
            </div>

            {/* USP-focused results section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-6xl mt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* E-commerce Results */}
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">E-commerce Growth</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">+450%</div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Average revenue increase for e-commerce clients</p>
                  </div>
                </motion.div>

                {/* B2B Lead Generation */}
                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">B2B Lead Gen</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Qualified lead conversion rate improvement</p>
                  </div>
                </motion.div>

                {/* Content Strategy */}
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl p-6 border border-green-200 dark:border-green-800"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Content Strategy</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">12x</div>
                    <p className="text-sm text-green-700 dark:text-green-300">Organic reach amplification through strategic content</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Asian Business Team Success Stories Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-4">
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Real Results from Real Asian Businesses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we've helped businesses across Asia achieve remarkable growth through strategic digital marketing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Asian business team visual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  {/* Simulated Asian business team collaboration scene */}
                  <div className="relative w-full h-[400px] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
                    <div className="absolute inset-0 p-8">
                      {/* Team collaboration elements */}
                      <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4">
                          <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 shadow-lg"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Revenue Growth</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Q4 2024</div>
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-blue-600">+347%</div>
                          </motion.div>
                          
                          <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 shadow-lg"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Lead Quality</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">This Month</div>
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-green-600">92%</div>
                          </motion.div>
                        </div>
                        
                        <div className="space-y-4">
                          <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 shadow-lg"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Conversion Rate</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Campaign Avg</div>
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-purple-600">8.4%</div>
                          </motion.div>
                          
                          <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-3 shadow-lg"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="text-center">
                              <div className="text-lg font-bold text-orange-600 mb-1">🎯</div>
                              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">Target Achieved</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Ahead of Schedule</div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Success metrics */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">E-commerce Domination</h3>
                      <p className="text-muted-foreground mb-3">
                        Helped 50+ Asian e-commerce brands scale from 6-figures to 7-figures through strategic paid advertising and conversion optimization.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">+450% Revenue</span>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">3.2x ROAS</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">B2B Lead Generation</h3>
                      <p className="text-muted-foreground mb-3">
                        Generated over 10,000 qualified leads for B2B companies across Singapore, Malaysia, and Hong Kong with 85% conversion rates.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">85% Conversion</span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">$2.1M Pipeline</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Content Strategy Excellence</h3>
                      <p className="text-muted-foreground mb-3">
                        Created viral content strategies that generated 50M+ organic impressions and built thought leadership for Asian brands.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">50M+ Reach</span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">12x Engagement</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Ready to Join Them?</div>
                    <p className="text-muted-foreground mb-4">Get your free strategy session and see how we can 3x your revenue in 90 days.</p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <Link href="https://wa.link/fwi8af" target="_blank">
                        Get Your Free Strategy Session →
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating background elements */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 opacity-10"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -200]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 right-20 w-24 h-24 opacity-15"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, 150]),
              x: useTransform(scrollYProgress, [0, 1], [0, -50])
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-1/3 w-40 h-40 opacity-8"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-2xl"></div>
          </motion.div>
          
          {/* Animated particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary/20 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 4) * 15}%`,
                y: useTransform(scrollYProgress, [0, 1], [0, -400 - i * 60]),
                opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </section>

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Our services" ref={servicesRef}>
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20">
                Revenue Growth Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Stop Wasting Money on Ads
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Turn ad spend into predictable profit. 150% ROI guaranteed.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3"
            >
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => {
                    posthog?.capture('service_card_clicked', {
                      service_name: service.title,
                      service_position: i + 1,
                      page: 'homepage'
                    })
                  }}
                  style={{ y: servicesY, rotate: servicesRotate }}
                >
                  <Card className="h-full overflow-hidden border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer relative">
                    {/* Enhanced background elements for each card */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 opacity-8"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-full h-full rounded-full blur-xl bg-gradient-to-br ${service.bgGradient}`}></div>
                    </motion.div>
                    
                    {/* Floating particles for each card */}
                    {[...Array(3)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                          left: `${20 + particleIndex * 25}%`,
                          top: `${15 + particleIndex * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: 3 + particleIndex * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3 + particleIndex * 0.2
                        }}
                      />
                    ))}
                    
                    <CardContent className="p-6 flex flex-col h-full relative z-10">
                      <motion.div 
                        className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300"
                        whileInView={{ 
                          rotate: [0, 360],
                          scale: [0.8, 1.1, 1]
                        }}
                        transition={{ 
                          delay: i * 0.1,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold mb-2 text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-muted-foreground mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.ul 
                        className="space-y-2 flex-grow mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {service.features.map((feature, j) => (
                          <motion.li 
                            key={j} 
                            className="flex items-center text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 + j * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <motion.span 
                              className="mr-2 text-accent"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                            >
                              ✓
                            </motion.span>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                      
                      {/* Results badge */}
                      <motion.div
                        className="mb-4 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.7, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-center">
                          <div className="text-sm font-bold text-primary">{service.results}</div>
                          <div className="text-xs text-muted-foreground">Average Client Result</div>
                        </div>
                      </motion.div>
                      
                      <Button className="mt-4 w-full bg-accent hover:bg-accent/90 hover:scale-105 text-accent-foreground transition-all duration-300 relative overflow-hidden group" asChild>
                        <Link href="https://wa.link/fwi8af" target="_blank">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10">Get Started Now</span>
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
                Trusted by 150+ Brands
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Leading brands trust us to 3x their revenue.
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
                <span className="text-sm text-muted-foreground">• 320+ Projects Completed</span>
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
                Ready to 3x Your Revenue?
              </h2>
              <p className="mx-auto max-w-[700px] text-foreground/90 md:text-xl" aria-describedby="main-heading">
                Results in 30 days or money back. 
                Stop losing to competitors.
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
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground border-0 transition-all duration-300"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Chat with Us Now →
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                  Chat with Us Now
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
    </div>
  )
}
