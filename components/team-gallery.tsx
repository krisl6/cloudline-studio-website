"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

// AI workshop / event photos we've hosted for communities and companies.
const PHOTOS = [
  { src: "/pikom-iwd.webp", alt: "CloudLine Studio speaking at the PIKOM International Women's Day event" },
  { src: "/group-picture.jpg", alt: "Participants at a CloudLine Studio AI workshop" },
  { src: "/vibe-coding-workshop.webp", alt: "CloudLine Studio running a vibe coding workshop" },
  { src: "/iwd-stage-portrait.webp", alt: "CloudLine Studio presenting at a build-without-coding workshop" },
]

const T = {
  en: {
    eyebrow: "AI Workshops",
    heading: "AI workshops we've hosted for communities & companies",
    subcopy: "Hands-on AI and automation sessions we've run with communities and companies across Singapore and Malaysia.",
  },
  ms: {
    eyebrow: "Bengkel AI",
    heading: "Bengkel AI yang kami anjurkan untuk komuniti & syarikat",
    subcopy: "Sesi AI dan automasi secara praktikal yang kami jalankan bersama komuniti dan syarikat di Singapura dan Malaysia.",
  },
  zh: {
    eyebrow: "AI 工作坊",
    heading: "我们为社群与企业举办的 AI 工作坊",
    subcopy: "我们在新加坡和马来西亚为社群与企业举办的实战 AI 与自动化工作坊。",
  },
} as const

export function TeamGallery() {
  const { lang } = useLanguage()
  const tt = T[lang]

  return (
    <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="AI workshops">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-balance">{tt.heading}</h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.subcopy}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
