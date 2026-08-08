"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, ClipboardList, Handshake, ListChecks, Search, ShieldCheck, Smartphone } from "lucide-react"
import { AuditForm } from "@/components/audit-form"
import { WHATSAPP_URL } from "@/lib/site"

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I'd like a free website & SEO/AEO audit for my business."
)}`

const PAIN_POINTS = [
  "A website that looks fine but isn't built to turn visitors into customers",
  "Not ranking on Google for the products and services people actually search",
  "Invisible when people ask ChatGPT or Gemini for a recommendation in your space",
  "Content that's a trust risk if the expertise and credibility behind it isn't handled correctly",
]

const AUDIT_DELIVERS = [
  { icon: Smartphone, title: "Conversion audit", desc: "Where your site's structure, speed, and conversion flow are losing customers" },
  { icon: Search, title: "Visibility check", desc: "Where you rank on Google and get cited by AI engines versus nearby competitors" },
  { icon: ShieldCheck, title: "30-day roadmap", desc: "3 prioritised fixes, including the E-E-A-T basics your content needs" },
]

const JOURNEY = [
  { icon: ClipboardList, title: "Tell us your site & goals", desc: "Share your website and the products or services you most want to rank for" },
  { icon: Search, title: "We audit conversion & visibility", desc: "Within 48 hours we check site structure, conversion flow, and where you rank on Google and AI engines" },
  { icon: ListChecks, title: "You get a prioritised fix list", desc: "Concrete, ranked fixes tied to revenue, not a generic SEO checklist" },
  { icon: Handshake, title: "You decide what's next", desc: "Run it yourself or bring us in to execute it, no pressure, no lock-in" },
]

const TRUSTED_BY_LOGOS = [
  { name: "Petronas Lubricants", logo: "/petronas-logo.png" },
  { name: "Prenetics", logo: "/prenetics-logo.png" },
  { name: "CircleDNA", logo: "/circle-dna-logo.png" },
] as const

export default function AeoLP() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
            <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] mb-6">
                Is your website winning customers, or losing them to Google?
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-9">
                Most websites weren't built to rank or convert. We'll audit your site and search visibility in 48 hours and show you exactly what's costing you customers, for free.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#audit-form"
                  onClick={(e) => { e.preventDefault(); document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" }) }}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-12 px-8 text-base font-medium hover:bg-primary/90 transition-colors"
                >
                  Get my free audit
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent h-12 px-8 text-base font-medium hover:bg-muted transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Invisible online is the same as closed
              </h2>
            </motion.div>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mx-auto space-y-4">
              {PAIN_POINTS.map((p) => (
                <motion.li key={p} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                A straight-talking audit. No fluff.
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {AUDIT_DELIVERS.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="mx-auto mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                From form to fix, here's what happens
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
              {JOURNEY.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-medium tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Proof */}
        <section className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                CircleDNA: 3x organic traffic, 7 of 10 keywords on page one
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 mb-14">
              <p className="text-sm text-foreground/80 leading-relaxed">
                CircleDNA came to us with 50,000 organic sessions a month, only 1 of 10 target keywords ranking in the top 10, and no tracking of AI citations. We ran a schema audit, shipped FAQ and product schema, and rewrote key pages answer-first, handled carefully given the YMYL-grade E-E-A-T that health-claims content needs. Traffic hit 150,000 sessions a month, 3x the baseline, with 7 of 10 target keywords now on page one and AI citations landing alongside the ranking gains.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {TRUSTED_BY_LOGOS.map((client) => (
                  <div key={client.name} className="relative h-10 w-28 sm:h-12 sm:w-32 grayscale opacity-70">
                    <Image src={client.logo} alt={client.name} fill sizes="128px" className="object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section id="audit-form" className="w-full py-16 md:py-24 border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">Request your audit</h2>
                <p className="text-muted-foreground">We review every submission and reply within 1 business day.</p>
              </div>
              <AuditForm niche="business" interest="website-seo" />
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
