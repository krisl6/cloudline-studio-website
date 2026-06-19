"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

// Language-neutral data (platform/framework names are proper nouns, kept in English across locales).
const FUNNELS = {
  b2b: [
    { key: "mql", tools: ["LinkedIn Ads", "Google Ads", "HubSpot", "Apollo", "Webflow"], frameworks: ["ICP definition", "Lead scoring", "Content & SEO"] },
    { key: "sql", tools: ["HubSpot / Salesforce", "Clearbit", "Calendly", "Slack alerts"], frameworks: ["BANT", "MEDDIC", "Marketing↔Sales SLA"] },
    { key: "opportunity", tools: ["Salesforce Deals", "Gong", "DocuSign", "Looker dashboards"], frameworks: ["MEDDPICC", "Mutual action plan", "Pipeline review"] },
  ],
  b2c: [
    { key: "awareness", tools: ["Meta Ads", "TikTok", "Google", "XHS", "Influencers"], frameworks: [] },
    { key: "consideration", tools: ["Retargeting", "EDM", "UGC & reviews", "Landing pages"], frameworks: [] },
    { key: "conversion", tools: ["Shopify", "WhatsApp", "Stripe", "Pixel tracking"], frameworks: [] },
    { key: "loyalty", tools: ["CRM email/SMS", "Loyalty program", "Referrals", "Community"], frameworks: [] },
  ],
} as const

type Audience = keyof typeof FUNNELS

const T = {
  en: {
    eyebrow: "How our funnels work",
    heading: "A defined workflow for every customer journey",
    subcopy:
      "Whether you sell to businesses or consumers, we engineer a specific, measurable path from first touch to revenue, and beyond.",
    b2b: "B2B",
    b2c: "B2C",
    platforms: "Platforms & tools",
    frameworks: "Frameworks",
    roiTitle: "Up to 10× ROI",
    roiText:
      "Our AI-enabled B2B funnels turn marketing spend into predictable, compounding pipeline, clients have seen up to 10× return as qualified opportunities convert to revenue.",
    stages: {
      mql: { title: "MQL", subtitle: "Marketing Qualified Lead", desc: "We attract high-intent prospects and qualify them against fit and intent signals before sales ever gets involved." },
      sql: { title: "SQL", subtitle: "Sales Qualified Lead", desc: "Marketing hands off only leads that meet agreed criteria; automated routing and enrichment get sales to the right people fast." },
      opportunity: { title: "Opportunity", subtitle: "Active pipeline", desc: "Qualified deals enter the pipeline with clear owners, next steps, and forecast, tracked end to end so nothing stalls." },
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
    b2b: "B2B",
    b2c: "B2C",
    platforms: "Platform & alatan",
    frameworks: "Rangka kerja",
    roiTitle: "Sehingga 10× ROI",
    roiText:
      "Saluran B2B kami yang dipacu AI mengubah perbelanjaan pemasaran menjadi saluran jualan yang boleh diramal dan berganda, klien telah melihat pulangan sehingga 10× apabila peluang berkelayakan bertukar menjadi hasil.",
    stages: {
      mql: { title: "MQL", subtitle: "Prospek Layak Pemasaran", desc: "Kami menarik prospek berniat tinggi dan menilai mereka berdasarkan kesesuaian dan isyarat niat sebelum jualan terlibat." },
      sql: { title: "SQL", subtitle: "Prospek Layak Jualan", desc: "Pemasaran hanya menyerahkan prospek yang memenuhi kriteria; penghalaan automatik membawa jualan kepada orang yang tepat dengan pantas." },
      opportunity: { title: "Peluang", subtitle: "Saluran aktif", desc: "Tawaran berkelayakan memasuki saluran dengan pemilik, langkah seterusnya dan ramalan yang jelas, dijejak hujung ke hujung." },
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
    b2b: "B2B",
    b2c: "B2C",
    platforms: "平台与工具",
    frameworks: "方法框架",
    roiTitle: "最高 10× 投资回报",
    roiText:
      "我们由 AI 驱动的 B2B 漏斗将营销投入转化为可预测、可累积的销售管道, 随着合格商机转化为营收，客户已实现最高 10 倍的回报。",
    stages: {
      mql: { title: "MQL", subtitle: "营销合格线索", desc: "我们吸引高意向潜客，并在销售介入之前依据匹配度与意向信号进行筛选。" },
      sql: { title: "SQL", subtitle: "销售合格线索", desc: "营销只移交符合约定标准的线索；自动分配与信息补全让销售快速触达对的人。" },
      opportunity: { title: "商机", subtitle: "活跃管道", desc: "合格交易进入管道，拥有明确的负责人、下一步与预测, 全程跟踪，避免停滞。" },
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
  const [audience, setAudience] = useState<Audience>("b2b")
  const stages = FUNNELS[audience]

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
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">{tt.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl 2xl:text-5xl font-semibold tracking-tight text-balance mb-4">
            {tt.heading}
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.subcopy}</p>
        </motion.div>

        {/* Audience toggle */}
        <div className="mb-12 inline-flex items-center rounded-full border border-border bg-muted p-1 text-sm font-medium">
          {(["b2b", "b2c"] as Audience[]).map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAudience(a)}
              aria-pressed={audience === a}
              className={`rounded-full px-5 py-2 transition-colors duration-200 ${
                audience === a ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tt[a]}
            </button>
          ))}
        </div>

        {/* Timeline, vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* connector line */}
          <div className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-full" />

          <motion.div
            key={audience}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6"
          >
            {stages.map((stage, i) => {
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

                    {stage.frameworks.length > 0 && (
                      <>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mt-4 mb-2">{tt.frameworks}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.frameworks.map((fw) => (
                            <span key={fw} className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-xs text-primary">
                              {fw}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* 10x ROI callout, B2B only */}
        {audience === "b2b" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:flex-row sm:items-center"
          >
            <span className="font-display text-4xl font-semibold text-primary sm:text-5xl">{tt.roiTitle}</span>
            <p className="text-muted-foreground md:text-lg leading-relaxed">{tt.roiText}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
