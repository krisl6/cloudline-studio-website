"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

// Language-neutral data (platform names are proper nouns, kept in English across locales).
const STAGES = [
  { key: "awareness", tools: ["Meta Ads", "TikTok", "Google", "XHS", "Influencers"] },
  { key: "consideration", tools: ["Retargeting", "EDM", "UGC & reviews", "Landing pages"] },
  { key: "conversion", tools: ["Shopify", "WhatsApp", "Stripe", "Pixel tracking"] },
  { key: "loyalty", tools: ["CRM email/SMS", "Loyalty program", "Referrals", "Community"] },
] as const

const T = {
  en: {
    eyebrow: "How our funnels work",
    heading: "A defined workflow for every customer journey",
    subcopy:
      "Whether you sell to businesses or consumers, we engineer a specific, measurable path from first touch to revenue, and beyond.",
    platforms: "Platforms & tools",
    stages: {
      awareness: { title: "Awareness", subtitle: "Get discovered", desc: "Reach the right audience with scroll-stopping creative and content across the channels they already use." },
      consideration: { title: "Consideration", subtitle: "Build trust", desc: "Nurture interest with retargeting, social proof, and content that answers real objections." },
      conversion: { title: "Conversion", subtitle: "Drive the sale", desc: "Frictionless paths to purchase, optimized pages, fast checkout, and instant WhatsApp follow-up." },
      loyalty: { title: "Loyalty", subtitle: "Keep them coming back", desc: "Turn buyers into repeat customers and advocates with lifecycle marketing and community." },
    },
  },
  ms: {
    eyebrow: "Cara saluran jualan kami berfungsi",
    heading: "Aliran kerja yang jelas untuk setiap perjalanan pelanggan",
    subcopy:
      "Sama ada anda menjual kepada perniagaan atau pengguna, kami merangka laluan yang khusus dan boleh diukur dari sentuhan pertama hingga hasil, dan seterusnya.",
    platforms: "Platform & alatan",
    stages: {
      awareness: { title: "Kesedaran", subtitle: "Ditemui", desc: "Capai audiens yang tepat dengan kreatif dan kandungan menarik di saluran yang mereka gunakan." },
      consideration: { title: "Pertimbangan", subtitle: "Bina kepercayaan", desc: "Pupuk minat dengan penyasaran semula, bukti sosial dan kandungan yang menjawab keraguan sebenar." },
      conversion: { title: "Penukaran", subtitle: "Dorong jualan", desc: "Laluan pembelian tanpa geseran, halaman dioptimumkan, pembayaran pantas dan susulan WhatsApp segera." },
      loyalty: { title: "Kesetiaan", subtitle: "Kekal kembali", desc: "Tukar pembeli menjadi pelanggan berulang dan penyokong melalui pemasaran kitaran hayat dan komuniti." },
    },
  },
  zh: {
    eyebrow: "我们的转化漏斗如何运作",
    heading: "为每一段客户旅程定义清晰的流程",
    subcopy:
      "无论您面向企业还是消费者，我们都会设计一条具体、可衡量的路径, 从首次接触到营收，乃至更远。",
    platforms: "平台与工具",
    stages: {
      awareness: { title: "认知", subtitle: "被发现", desc: "用吸睛的创意与内容，在受众常用的渠道触达对的人群。" },
      consideration: { title: "考虑", subtitle: "建立信任", desc: "通过再营销、社会证明和能回应真实顾虑的内容培育兴趣。" },
      conversion: { title: "转化", subtitle: "促成购买", desc: "顺畅的购买路径, 优化页面、快速结账、即时 WhatsApp 跟进。" },
      loyalty: { title: "忠诚", subtitle: "持续复购", desc: "通过生命周期营销与社群，把买家变成复购客户和拥护者。" },
    },
  },
} as const

export function FunnelTimeline() {
  const { lang } = useLanguage()
  const tt = T[lang]

  return (
    <section className="w-full py-20 md:py-28 border-t border-border" aria-label="Customer funnels">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl 2xl:text-5xl font-semibold tracking-tight text-balance mb-4">
            {tt.heading}
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.subcopy}</p>
        </motion.div>

        {/* Timeline, vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* connector line */}
          <div className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-sky lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-full" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6"
          >
            {STAGES.map((stage, i) => {
              const copy = tt.stages[stage.key]
              return (
                <motion.div
                  key={stage.key}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5 }}
                  className="relative flex gap-5 lg:flex-1 lg:flex-col lg:gap-5"
                >
                  <div className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-display text-xl font-semibold leading-tight">{copy.title}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary mb-3">{copy.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{copy.desc}</p>

                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">{tt.platforms}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground/80">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
