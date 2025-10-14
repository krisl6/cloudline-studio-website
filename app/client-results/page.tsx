"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, DollarSign, Users, Target, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

export default function ClientResultsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Industries", count: 4 },
    { id: "healthcare", name: "Healthcare", count: 1 },
    { id: "fnb", name: "F&B", count: 1 },
    { id: "telecommunications", name: "Telecommunications", count: 1 },
    { id: "lifestyle", name: "Lifestyle", count: 1 }
  ]

  const testimonials = [
    {
      name: "Dr. Aina",
      company: "Serenity Health Clinic",
      role: "Co-founder",
      category: "healthcare",
      imageId: "1559839734-2b71ea197ec2",
      rating: 5,
      quote: "Before working with CloudLine, our clinic was stuck in a frustrating cycle. We were spending $8,000 monthly on Google Ads and Facebook campaigns, getting plenty of clicks and website visits, but our phone barely rang with actual appointment requests. We had no idea which campaigns were working or why people weren't converting. CloudLine came in and completely transformed our approach. They rebuilt our landing pages with clear value propositions, rewrote our ad copy to address real patient concerns rather than just listing services, and implemented proper tracking systems so we could see the entire patient journey from click to appointment. But what impressed me most was how they helped us understand our patients' psychology — the fears, questions, and motivations that drive healthcare decisions. Within 2 months, our appointment bookings doubled, our cost per acquisition dropped by 45%, and we finally had complete clarity on what was working. They didn't just 'fix our ads'; they gave us a systematic approach to patient acquisition that we could understand and optimize ourselves. Now we're expanding to a second location with confidence.",
      results: "2x appointment bookings, 45% lower acquisition costs, systematic patient acquisition process",
      challenge: "High ad spend with low conversion rates and no visibility into what was working",
      solution: "Complete patient journey optimization with psychology-based messaging and tracking systems",
      timeline: "60 days to full transformation",
      metrics: {
        before: "$8,000/month ad spend, 2.1% conversion rate, unclear ROI",
        after: "$6,800/month ad spend, 4.8% conversion rate, clear attribution",
        improvement: "128% more appointments, 45% lower costs, 100% campaign visibility"
      }
    },
    {
      name: "Kak Tasha",
      company: "Hidden Cafe",
      role: "Owner",
      category: "fnb",
      imageId: "1494790108755-74b67c23ce92",
      rating: 5,
      quote: "Running a café is already a full-time job — I'm there from 6 AM preparing fresh pastries to 9 PM cleaning up. The last thing I wanted to worry about was whether people could even find us online or understand what makes us special. Our old website was a disaster: slow loading times, confusing navigation, and it looked like it was built in 2010. Worse, we had no online ordering system, so weekend rushes were chaotic with long lines and frustrated customers. CloudLine completely transformed our digital presence. They didn't just redesign our website — they reimagined our entire customer experience. The new site showcases our artisanal coffee and homemade pastries with beautiful photography that makes people hungry just looking at it. But the game-changer was the pre-ordering system they built. Customers can now browse our full menu, customize their orders, and pay online with just two taps. They even integrated it with our POS system so orders flow directly to our kitchen. The impact was immediate: weekend rushes became manageable, customer satisfaction soared, and we started getting recognition. A popular food blogger discovered us through our new website and wrote a feature article that brought in dozens of new customers. Our revenue increased by 35% in the first quarter, and I finally have time to focus on what I love — creating amazing food experiences.",
      results: "35% revenue increase, streamlined operations, food blog feature, manageable weekend rushes",
      challenge: "Outdated digital presence, chaotic weekend operations, no online ordering system",
      solution: "Complete digital transformation with integrated pre-ordering and beautiful brand presentation",
      timeline: "3 weeks to launch, immediate impact",
      metrics: {
        before: "No online orders, 45-minute weekend wait times, limited visibility",
        after: "40% orders online, 15-minute average wait, featured in major food blog",
        improvement: "35% revenue increase, 67% faster service, significant brand recognition"
      }
    },
    {
      name: "Farah N.",
      company: "Celcom",
      role: "Digital Marketing Lead",
      category: "telecommunications",
      imageId: "1580489944761-fdd2eaaa9e39",
      rating: 5,
      quote: "Our digital campaigns were performing decently — but we knew there was a gap between awareness and actual engagement. CloudLine worked with us to test new visual formats, shorten load times, and build mini-landing experiences that kept users interacting longer. What stood out most was how collaborative they were. They didn't just deliver assets, they helped our in-house team learn what worked and why.",
      results: "Reduced churn rate, improved user retention, enhanced team knowledge"
    },
    {
      name: "Michelle Tan",
      company: "Studio Aurea",
      role: "Co-founder",
      category: "lifestyle",
      imageId: "1438761681033-6461ffad8d80",
      rating: 5,
      quote: "Our team was putting in hours of effort on social media. But no matter how much we posted, sales barely moved. It was discouraging. CloudLine helped us build a proper funnel from ad to landing page to WhatsApp follow-up. Suddenly, every post had a purpose. Within 12 weeks, our conversion rate went from 1.7% to 7.8%. We didn't just get likes, we got customers.",
      results: "Conversion rate increased from 1.7% to 7.8% (358% improvement) in 12 weeks"
    }
  ]

  const overallStats = [
    { number: "Strategic", label: "Brand Solutions", icon: <TrendingUp className="size-6" /> },
    { number: "4.9x", label: "Average Growth", icon: <DollarSign className="size-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="size-6" /> },
    { number: "95%", label: "Project Success Rate", icon: <Target className="size-6" /> }
  ]

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 hover:bg-green-200 px-4 py-2">
              🏆 Real Results from Real Clients
            </Badge>
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Don't Take Our Word for It.{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                See the Numbers
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              While your competitors are still figuring out digital marketing, our clients are already counting their profits. 
              Here's proof that our strategies deliver <strong>real, measurable results</strong>.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300" asChild>
                <Link href="/contact">💰 Get My FREE Revenue Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">📊 View Detailed Case Studies</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Numbers Don't Lie</h2>
            <p className="text-xl text-muted-foreground">Average results across all our client campaigns</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
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

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Client Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Real Businesses, Real Growth, Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every testimonial is verified. Every number is real. Every client started exactly where you are now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    {/* Profile Image */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0">
                        <Image
                          src={`https://images.unsplash.com/photo-${testimonial.imageId}?w=100&h=100&fit=crop&crop=face`}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-primary font-medium">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenge */}
                    {testimonial.challenge && (
                      <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                        <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-1">Challenge:</p>
                        <p className="text-sm text-red-600 dark:text-red-400">{testimonial.challenge}</p>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 size-8 text-primary/20" />
                      <p className="text-muted-foreground pl-6 text-base leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Solution & Timeline */}
                    {testimonial.solution && (
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Solution:</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{testimonial.solution}</p>
                        {testimonial.timeline && (
                          <p className="text-xs text-blue-500 dark:text-blue-400">Timeline: {testimonial.timeline}</p>
                        )}
                      </div>
                    )}

                    {/* Results */}
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Results:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">{testimonial.results}</p>
                    </div>

                    {/* Detailed Metrics */}
                    {testimonial.metrics && (
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-3">Detailed Metrics:</p>
                        <div className="space-y-2 text-xs">
                          <div>
                            <span className="font-medium text-red-600">Before:</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.before}</span>
                          </div>
                          <div>
                            <span className="font-medium text-green-600">After:</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.after}</span>
                          </div>
                          <div>
                            <span className="font-medium text-primary">Improvement:</span>
                            <span className="text-muted-foreground ml-2">{testimonial.metrics.improvement}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Verified Results</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Every Number is Verified and Documented
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just claim results - we prove them. All client results are verified through analytics screenshots, 
              bank statements, and third-party tracking systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Analytics Verified</h3>
              <p className="text-muted-foreground">All revenue and conversion data verified through Google Analytics, Facebook Analytics, and platform reporting.</p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3">Bank Statement Proof</h3>
              <p className="text-muted-foreground">Revenue increases confirmed through client bank statements and payment processor data.</p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Third-Party Tracking</h3>
              <p className="text-muted-foreground">Independent tracking systems confirm all performance metrics and ROI calculations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Competitors Won't Wait. Neither Should You.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every day you delay is revenue lost to competitors. Get your FREE Revenue Audit and join our success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/contact">💰 Claim My FREE $2,500 Audit</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link href="/case-studies">📊 See Detailed Case Studies</Link>
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">⏰ Only 3 FREE audits available this month</p>
          </div>
        </div>
      </section>
    </div>
  )
}
