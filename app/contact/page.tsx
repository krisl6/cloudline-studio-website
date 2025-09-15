"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, MessageSquare, Clock, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const contactMethods = [
    {
      title: "WhatsApp Chat",
      description: "Get instant responses to your questions and start your project discussion.",
      icon: <MessageSquare className="size-8" />,
      action: "Chat Now",
      link: "https://wa.link/fwi8af",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      title: "Project Consultation",
      description: "Schedule a detailed consultation to discuss your specific business needs.",
      icon: <Users className="size-8" />,
      action: "Schedule Call",
      link: "https://wa.link/fwi8af",
      color: "bg-blue-100 text-blue-800 border-blue-200",
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
            <Link href="/services" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-black">
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
                Let's Start Your
                <span className="text-orange-500"> Digital Growth Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with strategic digital marketing? Get in touch with our team and let's
                discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-olive-100 text-olive-800 border-olive-200 mb-4">
                    Get In Touch
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                    Choose Your Preferred Contact Method
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to help you succeed. Choose the contact method that works best for you and let's start
                    the conversation.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {contactMethods.map((method, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`size-12 rounded-full flex items-center justify-center ${method.color}`}>
                              {method.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-black mb-2">{method.title}</h3>
                              <p className="text-gray-600 mb-4">{method.description}</p>
                              <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white group-hover:scale-105 transition-transform"
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

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border-gray-200 bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="size-6 text-olive-600" />
                        <h3 className="text-xl font-bold text-black">Working Hours</h3>
                      </div>
                      <div className="space-y-3">
                        {workingHours.map((schedule, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">{schedule.day}</span>
                            <span className="text-gray-600">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                        <p className="text-sm text-orange-800">
                          <strong>Note:</strong> For urgent inquiries outside business hours, WhatsApp messages will be
                          responded to within 12 hours.
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
                  <Card className="border-gray-200 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="size-6 text-olive-600" />
                        <h3 className="text-xl font-bold text-black">Services We Offer</h3>
                      </div>
                      <ul className="space-y-2">
                        {services.map((service, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <div className="size-2 rounded-full bg-orange-500"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
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
                Why Choose CloudLine Studio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">What Makes Us Different</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "7+ Years Experience",
                  description:
                    "Proven track record with 120+ successful projects across various industries and international markets.",
                },
                {
                  title: "Transparent Approach",
                  description:
                    "All dashboards, data, and performance metrics belong to you. Complete transparency in every campaign.",
                },
                {
                  title: "Multi-Platform Expertise",
                  description:
                    "Specialists in Google, META, TikTok, and XHS (Xiaohongshu) with deep understanding of each platform's unique requirements.",
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Don't wait to start your digital growth journey. Contact us today and let's discuss how we can help you
                achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Conversation Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/services">Explore Our Services</Link>
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
