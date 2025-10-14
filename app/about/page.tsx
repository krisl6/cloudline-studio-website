"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, TrendingUp, Lightbulb, Heart, Zap, Shield, Palette, Eye, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "7+", label: "Years of Experience", icon: <Award className="size-6" /> },
    { number: "200+", label: "Brands Transformed", icon: <Palette className="size-6" /> },
    { number: "50+", label: "Awards & Recognition", icon: <Star className="size-6" /> },
    { number: "98%", label: "Client Retention Rate", icon: <Heart className="size-6" /> },
  ]

  const howWeWork = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your brand, market, and audience to uncover unique opportunities and develop a strategic foundation.",
      icon: <Eye className="size-8" />
    },
    {
      step: "02", 
      title: "Creative Development",
      description: "Our team crafts compelling visual identities and messaging that authentically represent your brand and resonate with your audience.",
      icon: <Palette className="size-8" />
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: "We bring your brand to life across all touchpoints, ensuring consistency and maximum impact in the market.",
      icon: <Zap className="size-8" />
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "We continuously monitor, analyze, and optimize your brand performance to drive sustainable growth and market success.",
      icon: <TrendingUp className="size-8" />
    }
  ]

  const customerJourney = [
    {
      phase: "Awareness",
      title: "Brand Discovery",
      description: "Your audience discovers your brand through strategic positioning and compelling visual identity that cuts through market noise.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      details: [
        "Strategic market positioning that differentiates you from competitors",
        "Compelling visual identity that captures attention instantly",
        "Consistent brand presence across all discovery channels",
        "Clear value proposition that resonates with target audience"
      ]
    },
    {
      phase: "Consideration", 
      title: "Brand Connection",
      description: "Prospects connect emotionally with your brand story, values, and authentic messaging that speaks to their needs.",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      details: [
        "Authentic brand storytelling that builds emotional connection",
        "Consistent messaging that reinforces your unique value",
        "Social proof and testimonials that build credibility",
        "Content that educates and demonstrates expertise"
      ]
    },
    {
      phase: "Decision",
      title: "Brand Trust",
      description: "Customers choose your brand confidently based on the trust, credibility, and professional image we've established.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      details: [
        "Professional brand presentation that instills confidence",
        "Clear communication of benefits and outcomes",
        "Seamless customer experience across all touchpoints",
        "Risk-reducing elements that make the decision easier"
      ]
    },
    {
      phase: "Advocacy",
      title: "Brand Loyalty",
      description: "Delighted customers become passionate brand advocates, driving organic growth through referrals and word-of-mouth.",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      details: [
        "Exceptional brand experience that exceeds expectations",
        "Memorable interactions that customers want to share",
        "Community building that fosters long-term relationships",
        "Referral systems that reward brand advocacy"
      ]
    }
  ]

  const whatWeDo = [
    {
      title: "Brand Strategy & Positioning",
      description: "Define your unique market position and competitive advantage",
      features: ["Market Research", "Competitive Analysis", "Brand Architecture", "Positioning Strategy"]
    },
    {
      title: "Visual Identity Design", 
      description: "Create memorable visual systems that communicate your brand essence",
      features: ["Logo Design", "Brand Guidelines", "Typography Systems", "Color Palettes"]
    },
    {
      title: "Digital Brand Experience",
      description: "Bring your brand to life across digital touchpoints",
      features: ["Website Design", "Social Media Assets", "Digital Campaigns", "User Experience"]
    },
    {
      title: "Brand Implementation",
      description: "Ensure consistent brand application across all channels",
      features: ["Marketing Materials", "Brand Training", "Guidelines Implementation", "Quality Control"]
    }
  ]

  const coreValues = [
    {
      title: "Authenticity Over Trends",
      description: "We believe in creating timeless brands that reflect genuine values rather than chasing fleeting trends."
    },
    {
      title: "Strategy-Led Creativity", 
      description: "Every creative decision is backed by strategic thinking and market insights to ensure business impact."
    },
    {
      title: "Partnership Mindset",
      description: "We become an extension of your team, invested in your long-term success and growth."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 dark:from-slate-950/20 dark:via-blue-950/20 dark:to-orange-950/20" />
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 px-4 py-2">
              ✨ Boutique Brand Agency
            </Badge>
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Don't Just Build Brands.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                We Build Legacies
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We started CloudLine Studio because we kept seeing the same heartbreaking story: amazing businesses with incredible products or services, 
              but nobody knew they existed. We're here to change that. We help you become <strong>memorable, meaningful, and profitable</strong> through 
              strategic brand development that actually works.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300" asChild>
                <Link href="/contact">🎨 Start Your Brand Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/client-results">📚 View Our Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">Why CloudLine Exists</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                We Saw a Problem. We Built the Solution.
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-red-600">The Problem We Witnessed</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Businesses were drowning in generic branding.</strong> Cookie-cutter logos, 
                    forgettable messaging, and visual identities that looked like everyone else's. Companies were spending thousands 
                    on "brand design" but getting templates with their name slapped on.
                  </p>
                  <p>
                    <strong className="text-foreground">Agencies were focused on quick deliverables, not lasting impact.</strong> 
                    They'd create a logo, build a website, and disappear—leaving businesses with pretty assets but no strategic 
                    foundation, no brand story, and no competitive differentiation.
                  </p>
                  <p>
                    <strong className="text-foreground">The result?</strong> Brands that blend into the background. Businesses 
                    competing solely on price. Marketing that feels hollow because there's no authentic brand foundation to build upon.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-green-600">Our Solution</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">We became the strategic partner businesses actually need.</strong> 
                    Not just designers or marketers, but brand architects who understand that great brands are built on strategy, 
                    authenticity, and deep market understanding.
                  </p>
                  <p>
                    <strong className="text-foreground">We dig deeper than surface-level aesthetics.</strong> Before we design 
                    anything, we uncover your unique value proposition, understand your audience's deepest motivations, and 
                    identify the emotional connections that drive purchase decisions.
                  </p>
                  <p>
                    <strong className="text-foreground">We build brands that don't just look different—they ARE different.</strong> 
                    Brands with clear positioning, compelling stories, and visual systems that communicate value at first glance. 
                    Brands that command premium pricing and inspire customer loyalty.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Meet Our Strategic Team</h3>
              <p className="text-muted-foreground mb-6">
                Our diverse, experienced team brings together strategic thinking from top consultancies, 
                creative excellence from award-winning agencies, and deep understanding of Asian markets.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Ex-McKinsey Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Award-Winning Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Asian Market Expertise</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Asian business professional"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
                      alt="Asian creative professional"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
                      alt="Asian strategy consultant"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100">
                    <Image
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
                      alt="Asian brand consultant"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">What We Do</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              We Help Brands Become Unforgettable
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we build comprehensive brand experiences that drive recognition, trust, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatWeDo.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="size-4 text-green-600" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">How We Work</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every successful brand follows the same journey. We've perfected the process to get you there faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="flex justify-center mb-4 text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">Customer Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Journey from Stranger to Brand Advocate
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Every interaction matters. We strategically design each touchpoint to move your audience through a carefully crafted journey 
              that builds trust, demonstrates value, and creates lasting emotional connections with your brand.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Journey Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                {customerJourney.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Journey Number */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    
                    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 text-center">
                        <Badge className={`mb-6 text-sm px-4 py-2 ${phase.color}`}>
                          {phase.phase}
                        </Badge>
                        <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                        
                        {/* Detailed Journey Points */}
                        <div className="space-y-3 text-left">
                          {phase.details?.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.2) + (detailIndex * 0.1) + 0.5 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Journey Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-primary/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">The Result: A Brand That Grows Itself</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When every touchpoint is strategically designed and emotionally resonant, your customers don't just buy from you—
                they become your most powerful marketing channel, driving organic growth through word-of-mouth and referrals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What Drives Everything We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision, every project, and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First Consultation Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Your First Consultation</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                What to Expect When We Meet
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Your first consultation isn't a sales pitch—it's a strategic discovery session where we uncover opportunities, 
                identify challenges, and map out a clear path to brand transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8">What We'll Cover Together</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Brand Health Assessment",
                      description: "We'll evaluate your current brand positioning, visual identity, and market perception to identify strengths and gaps."
                    },
                    {
                      title: "Competitive Landscape Analysis", 
                      description: "Together, we'll map your competitive environment and uncover opportunities for differentiation."
                    },
                    {
                      title: "Target Audience Deep Dive",
                      description: "We'll explore who your ideal customers really are, what motivates them, and how they make decisions."
                    },
                    {
                      title: "Growth Opportunity Mapping",
                      description: "We'll identify specific areas where strategic branding can drive measurable business growth."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8">What You'll Walk Away With</h3>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <div className="space-y-6">
                    {[
                      {
                        icon: "🎯",
                        title: "Clear Brand Strategy Roadmap",
                        description: "A detailed action plan outlining exactly what needs to be done to achieve your brand goals."
                      },
                      {
                        icon: "💡",
                        title: "Competitive Advantage Insights",
                        description: "Specific opportunities to differentiate your brand and capture market share."
                      },
                      {
                        icon: "📈",
                        title: "Growth Potential Assessment",
                        description: "Quantified projections of how strategic branding can impact your business metrics."
                      },
                      {
                        icon: "🛠️",
                        title: "Immediate Action Items",
                        description: "Quick wins you can implement right away to start improving your brand perception."
                      },
                      {
                        icon: "📋",
                        title: "Custom Brand Audit Report",
                        description: "A comprehensive document detailing our findings and recommendations (yours to keep)."
                      }
                    ].map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex gap-4 items-start"
                      >
                        <span className="text-2xl">{outcome.icon}</span>
                        <div>
                          <h4 className="font-bold mb-1">{outcome.title}</h4>
                          <p className="text-sm text-muted-foreground">{outcome.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">💯 Our Promise</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Even if we don't work together, you'll leave with valuable insights and actionable strategies 
                    that will help your business. That's our commitment to every consultation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Your Brand Legacy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a brand that doesn't just compete—it dominates. Your transformation starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/contact">🎨 Book Your Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/client-results">📚 View Our Portfolio</Link>
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">✨ Complimentary consultation • No obligations • Immediate value</p>
          </div>
        </div>
      </section>
    </div>
  )
}
