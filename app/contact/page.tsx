"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageSquare, Clock, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Add Tally script to body as per their documentation
    const script = document.createElement('script')
    // @ts-ignore - We're using Tally's exact script
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){
        if(typeof Tally!=='undefined'){
          // @ts-ignore - Tally is loaded from the script
          Tally.loadEmbeds()
        }else{
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
            e.src=e.dataset.tallySrc
          })
        }
      };
      if(typeof Tally!=='undefined'){
        v();
      }else if(!d.querySelector('script[src="'+w+'"]')){
        var s=d.createElement("script");
        s.src=w;
        s.onload=v;
        s.onerror=v;
        d.body.appendChild(s);
      }
    `
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

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
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <Link href="https://wa.link/fwi8af" target="_blank">
              Chat with us now
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1" role="main">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-muted" aria-label="Contact overview">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground" id="contact-main-heading">
                Let's Start Your
                <span className="text-primary"> Digital Growth Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" aria-describedby="contact-main-heading">
                Ready to transform your business with strategic digital marketing? Get in touch with our team and let's
                discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
                  <Link href="/services">
                    View Services
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Send Us a Message</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  data-tally-src="https://tally.so/embed/wbagA7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height={807}
                  frameBorder="0" 
                  marginHeight={0}
                  marginWidth={0}
                  title="Let's Talk"
                  className="w-full border-0"
                ></iframe>
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
                  <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-4">
                    Get In Touch
                  </Badge>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
                    Choose Your Preferred Contact Method
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                    We're here to help you succeed. Choose the contact method that works best for you and let's start
                    the conversation.
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
                      <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm text-primary">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to grow your business?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital marketing goals and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link href="https://wa.link/fwi8af" target="_blank">
                    Start Your Journey
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10" asChild>
                  <Link href="/services">
                    Explore Services
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
