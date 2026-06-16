"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

const PHOTOS = [
  { src: "/group-picture.jpg", alt: "CloudLine Studio workshop group" },
  { src: "/team-retreat.jpg", alt: "CloudLine Studio team retreat" },
  { src: "/pikom-iwd.webp", alt: "Speaking at the PIKOM International Women's Day event" },
  { src: "/vibe-coding-workshop.webp", alt: "Running a vibe coding workshop" },
  { src: "/iwd-stage-portrait.webp", alt: "Presenting at a build-without-coding workshop" },
  { src: "/f073afc2-2f13-4103-b13a-d1301de98a15.JPG", alt: "The CloudLine Studio team" },
]

const T = {
  en: {
    eyebrow: "Life at CloudLine",
    heading: "Behind the work",
    subcopy: "Workshops, talks, and the occasional team escape — the people behind your growth.",
  },
  ms: {
    eyebrow: "Kehidupan di CloudLine",
    heading: "Di sebalik kerja kami",
    subcopy: "Bengkel, ceramah dan percutian pasukan — orang di sebalik pertumbuhan anda.",
  },
  zh: {
    eyebrow: "CloudLine 的日常",
    heading: "工作背后",
    subcopy: "工作坊、分享会，还有偶尔的团队出游——成就您增长的团队。",
  },
} as const

export function TeamGallery() {
  const { lang } = useLanguage()
  const tt = T[lang]

  return (
    <section className="w-full py-20 md:py-28 bg-muted/50 border-t border-border" aria-label="Life at CloudLine">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{tt.heading}</h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.subcopy}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
