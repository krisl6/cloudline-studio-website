"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Mail className="size-6" />,
      title: "Email",
      value: "hello@cloudline-studio.com",
      link: "mailto:hello@cloudline-studio.com"
    },
    {
      icon: <Phone className="size-6" />,
      title: "Phone / WhatsApp",
      value: "+60 11-2775 5215",
      link: "https://wa.me/60112775215"
    },
    {
      icon: <MapPin className="size-6" />,
      title: "Office",
      value: "Pavilion Bukit Jalil",
      link: "https://maps.google.com/?q=Pavilion+Bukit+Jalil"
    }
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
    { name: "Tanium", logo: "/tanium-logo.png" }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50 py-20 md:py-28 lg:py-36" aria-label="Hero section">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Let's Build Something Great Together
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                We help brands scale with creative marketing, data-driven campaigns, and strategies that actually work.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 font-semibold px-8 py-4"
                  onClick={() => {
                    const formSection = document.getElementById('contact-form')
                    formSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="w-full py-16 md:py-24 bg-muted" aria-label="Contact Options">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to start your project? We'd love to hear from you. Choose your preferred way to connect.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground mb-4">{info.value}</p>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <Link href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined}>
                          Contact via {info.title}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="contact-form" className="w-full py-16 md:py-24 bg-background" aria-label="Contact Form">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tell Us About Your Project</h2>
                <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <Card className="border-border bg-card shadow-lg">
                <CardContent className="p-1">
                  <iframe 
                    data-tally-src="https://tally.so/embed/wbagA7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form - Tell Us About Your Project"
                    className="rounded-lg"
                  ></iframe>
                  <script dangerouslySetInnerHTML={{
                    __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}`
                  }} />
                </CardContent>
              </Card>
              
              {/* Fallback CTA button for mobile or if form doesn't load */}
              <div className="text-center mt-8 lg:hidden">
                <Button 
                  data-tally-open="wbagA7"
                  data-tally-emoji-text="📝"
                  data-tally-emoji-animation="bounce"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xl font-bold transition-colors shadow-lg"
                >
                  📝 Open Contact Form
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-16 md:py-24 bg-muted" aria-label="Social Proof">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Trusted by Leading Brands
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by startups and growing businesses across Malaysia and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
              {clients.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-full h-20 bg-card rounded-lg border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow p-4">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-16 md:py-24 bg-background" aria-label="Location">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Kuala Lumpur at Pavilion Bukit Jalil
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5234567890123!2d101.6789012345678!3d3.0123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c123456789a%3A0x123456789abcdef0!2sPavilion%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CloudLine Studio Office Location - Pavilion Bukit Jalil"
                ></iframe>
              </div>
              
              <div className="mt-8 text-center">
                <Card className="inline-block border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="size-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">Office Address</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Pavilion Bukit Jalil<br />
                      Kuala Lumpur, Malaysia
                    </p>
                    <Button
                      className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link href="https://maps.google.com/?q=Pavilion+Bukit+Jalil" target="_blank">
                        Get Directions
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
