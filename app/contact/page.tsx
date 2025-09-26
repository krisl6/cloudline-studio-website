"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageSquare, Clock, Globe, Users, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

export default function ContactPage() {
  // Tally form will be loaded via the script in layout.tsx

  const contactMethods = [
    {
      title: "💰 FREE Revenue Audit (WhatsApp)",
      description: "Get instant access to your $2,500 revenue audit. See exactly where you're losing money to competitors.",
      icon: <MessageSquare className="size-8" />,
      action: "Get FREE Audit Now",
      link: "https://wa.link/fwi8af",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      title: "🚀 Emergency Growth Call",
      description: "Book an urgent consultation if you're losing significant revenue to competitors. Same-day response guaranteed.",
      icon: <Users className="size-8" />,
      action: "Book Emergency Call",
      link: "https://wa.link/fwi8af",
      color: "bg-red-100 text-red-800 border-red-200",
    },
  ]

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM MYT" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM MYT" },
    { day: "Sunday", hours: "Closed" },
  ]

  const services = [
    "Performance Marketing Campaigns",
    "Website Creation & SEO Optimization",
    "Influencer Collaboration Management",
    "Social Media Marketing",
    "XHS (Xiaohongshu) Marketing",
    "Custom Digital Marketing Solutions",
  ]

  const clientReviews = [
    {
      name: "Nurul Aisyah",
      role: "People Manager",
      company: "CELCOM AXIATA",
      review: "CloudLine has been our partner for a few years, and they are excellent copywriters. She works remotely, and I like that she takes the initiative to proactively solve problems and communicate goals. Our contract writers work remotely, and she went ahead to proactively set deadlines and task lists. We still use her Excel template until today for our contract workers!",
      avatar: "👩🏻‍💼"
    },
    {
      name: "Sarah Khalil",
      role: "Managing Director (Co)",
      company: "MONSTAR LAB, INC.",
      review: "I worked with CloudLine on multiple projects over the years, and what struck me was her finished and alignment with the team goals. Her website designs are not just beautiful - they are effective. People driven and aligned with our company, she always asks the right questions. I never have to worry. I still feel her when I need my websites revamped!",
      avatar: "👩🏽‍💻"
    },
    {
      name: "Siti Aishah",
      role: "Founder (AU)",
      company: "FOREVERTOYS",
      review: "We had a complex issue and needed a 3rd party to see through our website flow and she did it. She directed us what to do, left what was right, we listened and we saw her point of view clearly. We were very happy with her work. Communication, meetings were all on point.",
      avatar: "👩🏻‍🚀"
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-muted" aria-label="Contact overview">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="mb-4">
                <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-red-100 text-red-800 border-red-200 mb-4">
                  🚨 Your Competitors Are Winning
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground" id="contact-main-heading">
                Stop Losing Customers to
                <span className="text-red-600"> Your Competitors</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto" aria-describedby="contact-main-heading">
                Every day you wait, your competitors steal more customers. Get your <strong>FREE Revenue Audit</strong> (worth $2,500) and discover exactly how to increase your sales by 300% in 90 days.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
                <p className="text-yellow-800 font-medium text-center">
                  ⚡ <strong>Limited Time:</strong> Only 3 FREE audits available this month
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-300 font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    💰 Claim My FREE $2,500 Audit
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                  asChild
                >
                  <Link href="/case-studies">
                    📈 See 300% Growth Results
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Contact Form">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-100 text-green-800 border-green-200 mb-4">
                  💎 Premium Revenue Audit
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get Your FREE $2,500 Revenue Audit</h2>
                <p className="text-muted-foreground mb-6">Discover the exact strategies your competitors are using to steal your customers</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left side - Value proposition */}
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">What You'll Get (FREE):</h3>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-center gap-3"><span className="text-green-600 text-lg">✓</span> Complete competitor analysis</li>
                      <li className="flex items-center gap-3"><span className="text-green-600 text-lg">✓</span> Revenue leak identification</li>
                      <li className="flex items-center gap-3"><span className="text-green-600 text-lg">✓</span> 90-day growth roadmap</li>
                      <li className="flex items-center gap-3"><span className="text-green-600 text-lg">✓</span> Conversion optimization plan</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Follow Us for Daily Growth Tips:</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://linkedin.com/company/cloudline-studio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Linkedin className="size-5" />
                        LinkedIn
                      </a>
                      <a 
                        href="https://instagram.com/cloudlinestudio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Instagram className="size-5" />
                        Instagram
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-center">Takes only 2 minutes. No obligations, no sales calls.</p>
                </div>
                
                {/* Right side - Embedded form */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-1">
                  <iframe 
                    data-tally-src="https://tally.so/embed/wbagA7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Get Your FREE $2,500 Revenue Audit"
                    className="rounded-lg"
                  ></iframe>
                  <script dangerouslySetInnerHTML={{
                    __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}`
                  }} />
                </div>
              </div>
              
              {/* Fallback CTA button for mobile or if form doesn't load */}
              <div className="text-center mt-8 lg:hidden">
                <Button 
                  data-tally-open="wbagA7"
                  data-tally-emoji-text="💰"
                  data-tally-emoji-animation="bounce"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl font-bold transition-colors shadow-lg"
                >
                  💰 Get My FREE Revenue Audit Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">⏰ Only 3 spots left this month</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted" aria-label="Contact methods">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-red-100 text-red-800 border-red-200 mb-4">
                    🚨 Urgent Response Needed
                  </Badge>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
                    Don't Let Another Day Pass
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                    Your competitors are gaining ground every hour you delay. Choose your preferred method to get immediate access to strategies that will <strong>stop the revenue bleeding</strong>.
                  </p>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                  {contactMethods.map((method, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className={`size-10 md:size-12 rounded-full flex items-center justify-center ${method.color}`}>
                              {method.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{method.title}</h3>
                              <p className="text-sm md:text-base text-muted-foreground mb-4">{method.description}</p>
                              <Button
                                className="bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-105 transition-transform"
                                asChild
                              >
                                <Link href={method.link} target="_blank">
                                  {method.action}
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

              <div className="space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border-border bg-muted">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="size-6 text-accent" />
                        <h3 className="text-lg md:text-xl font-bold text-foreground">Working Hours</h3>
                      </div>
                      <div className="space-y-3">
                        {workingHours.map((schedule, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-foreground/80 font-medium">{schedule.day}</span>
                            <span className="text-muted-foreground">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>🚨 URGENT:</strong> Revenue emergencies get priority response within 2 hours, even outside business hours.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="border-border bg-card">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="size-6 text-accent" />
                        <h3 className="text-lg md:text-xl font-bold text-foreground">Services We Offer</h3>
                      </div>
                      <ul className="space-y-2">
                        {services.map((service, i) => (
                          <li key={i} className="flex items-center gap-2 text-foreground/80">
                            <div className="size-2 rounded-full bg-primary"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Social Media Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="border-border bg-card">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary text-sm">📱</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">Follow Our Growth Tips</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">Get daily marketing insights and growth strategies</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="https://linkedin.com/company/cloudline-studio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                          <Linkedin className="size-5" />
                          LinkedIn
                        </a>
                        <a 
                          href="https://instagram.com/cloudlinestudio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                          <Instagram className="size-5" />
                          Instagram
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background" aria-label="Client reviews">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4">
                Client Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {clientReviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex-1">
                        <div className="text-4xl mb-4">{review.avatar}</div>
                        <p className="text-muted-foreground mb-6 italic">"{review.review}"</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                        <p className="text-sm font-medium text-primary">{review.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-20 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Competitors Won't Wait. Neither Should You.</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Every day you delay is revenue lost forever. Get your FREE $2,500 audit and start winning back customers today.
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6 max-w-lg mx-auto">
                <p className="text-sm font-medium">⏰ <strong>Limited Time:</strong> Only 3 FREE audits left this month</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    💰 Claim My FREE $2,500 Audit
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium" asChild>
                  <Link href="/case-studies">
                    📈 See 300% Growth Results
                  </Link>
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
