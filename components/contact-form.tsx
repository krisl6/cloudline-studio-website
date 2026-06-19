"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const INTERESTS = [
  { value: "brand_building",      en: "Brand Building",          ms: "Pembinaan Jenama",        zh: "品牌建设" },
  { value: "social_media",        en: "Social Media",            ms: "Media Sosial",             zh: "社交媒体" },
  { value: "marketing_campaign",  en: "Marketing Campaign",      ms: "Kempen Pemasaran",         zh: "营销活动" },
  { value: "advertising",         en: "Advertising",             ms: "Pengiklanan",              zh: "广告" },
  { value: "website_seo",         en: "Website & SEO",           ms: "Laman Web & SEO",          zh: "网站与 SEO" },
  { value: "workshops",           en: "Workshops and Trainings", ms: "Bengkel dan Latihan",      zh: "工作坊与培训" },
  { value: "brand_events",        en: "Brand Events",            ms: "Acara Jenama",             zh: "品牌活动" },
] as const

const BUDGETS = {
  en: [
    { value: "0",        label: "0 – sorry, we don't do charity" },
    { value: "<10k",     label: "< 10,000" },
    { value: "10k-50k",  label: "10,000 – 50,000" },
    { value: "50k-100k", label: "50,000 – 100,000" },
    { value: "100k-500k",label: "100,000 – 500,000" },
    { value: ">500k",    label: "> 500,000" },
  ],
  ms: [
    { value: "0",        label: "0 – maaf, kami tidak berbuat amal" },
    { value: "<10k",     label: "< 10,000" },
    { value: "10k-50k",  label: "10,000 – 50,000" },
    { value: "50k-100k", label: "50,000 – 100,000" },
    { value: "100k-500k",label: "100,000 – 500,000" },
    { value: ">500k",    label: "> 500,000" },
  ],
  zh: [
    { value: "0",        label: "0 – 抱歉，我们不做慈善" },
    { value: "<10k",     label: "< 10,000" },
    { value: "10k-50k",  label: "10,000 – 50,000" },
    { value: "50k-100k", label: "50,000 – 100,000" },
    { value: "100k-500k",label: "100,000 – 500,000" },
    { value: ">500k",    label: "> 500,000" },
  ],
} as const

const T = {
  en: {
    name: "Name:", email: "E-mail address:", phone: "Mobile Number:", website: "Website:",
    namePh: "Your name", emailPh: "you@company.com", phonePh: "+60…", websitePh: "yourwebsite.com",
    interestedIn: "I'm interested in:",
    budget: "My Estimated Budget:",
    budgetPh: "Select a budget range",
    send: "Submit", sending: "Sending…",
    successTitle: "Thank you, we've got it.", successBody: "Our team will get back to you within 24 hours.",
    errEmail: "Please enter a valid email.", errGeneric: "Something went wrong. Please try again.",
  },
  ms: {
    name: "Nama:", email: "Alamat e-mel:", phone: "Nombor Telefon:", website: "Laman Web:",
    namePh: "Nama anda", emailPh: "anda@syarikat.com", phonePh: "+60…", websitePh: "lamanweb.com",
    interestedIn: "Saya berminat dengan:",
    budget: "Anggaran Bajet Saya:",
    budgetPh: "Pilih julat bajet",
    send: "Hantar", sending: "Menghantar…",
    successTitle: "Terima kasih, kami telah menerimanya.", successBody: "Pasukan kami akan menghubungi anda dalam masa 24 jam.",
    errEmail: "Sila masukkan e-mel yang sah.", errGeneric: "Ada masalah. Sila cuba lagi.",
  },
  zh: {
    name: "姓名：", email: "邮箱地址：", phone: "手机号码：", website: "网站：",
    namePh: "您的姓名", emailPh: "you@company.com", phonePh: "+60…", websitePh: "yourwebsite.com",
    interestedIn: "我感兴趣的是：",
    budget: "我的预估预算：",
    budgetPh: "选择预算范围",
    send: "提交", sending: "提交中…",
    successTitle: "谢谢，我们已收到。", successBody: "我们的团队将在 24 小时内与您联系。",
    errEmail: "请输入有效的邮箱。", errGeneric: "出了点问题，请重试。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const budgets = BUDGETS[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [budget, setBudget] = useState("")

  const toggle = (val: string) =>
    setChecked(prev => {
      const next = new Set(prev)
      next.has(val) ? next.delete(val) : next.add(val)
      return next
    })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()
    const email = get("email")
    if (!email.includes("@")) { setError(tt.errEmail); return }
    setStatus("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email,
          phone: get("phone"),
          website: get("website"),
          interests: Array.from(checked).join(", "),
          budget,
          message: "",
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || tt.errGeneric)
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : tt.errGeneric)
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <DoodleCheck className="size-7" />
        </span>
        <h3 className="font-display text-2xl font-semibold mb-2">{tt.successTitle}</h3>
        <p className="text-muted-foreground">{tt.successBody}</p>
      </div>
    )
  }

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
  const labelCls = "block text-sm font-medium text-center mb-0.5"

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">

      {/* Row 1: Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>{tt.name}</label>
          <input type="text" name="name" autoComplete="name" className={inputCls} placeholder={tt.namePh} />
        </div>
        <div>
          <label className={labelCls}>{tt.email} <span className="text-red-500">*</span></label>
          <input type="email" name="email" required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
        </div>
      </div>

      {/* Row 2: Mobile + Website */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>{tt.phone}</label>
          <input type="tel" name="phone" autoComplete="tel" className={inputCls} placeholder={tt.phonePh} />
        </div>
        <div>
          <label className={labelCls}>{tt.website}</label>
          <input type="url" name="website" autoComplete="url" className={inputCls} placeholder={tt.websitePh} />
        </div>
      </div>

      {/* Checkboxes */}
      <div>
        <p className="text-sm font-medium text-center mb-3">{tt.interestedIn}</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5">
          {INTERESTS.map(item => (
            <label key={item.value} className="flex items-center gap-1.5 cursor-pointer select-none text-sm">
              <input
                type="checkbox"
                checked={checked.has(item.value)}
                onChange={() => toggle(item.value)}
                className="size-3.5 rounded border-border accent-primary"
              />
              {item[lang]}
            </label>
          ))}
        </div>
      </div>

      {/* Budget dropdown */}
      <div>
        <p className="text-sm font-medium text-center mb-1.5">{tt.budget}</p>
        <div className="relative">
          <select
            value={budget}
            onChange={e => setBudget(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 pr-10"
          >
            <option value="" disabled>{tt.budgetPh}</option>
            {budgets.map(b => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      {error && <p className="text-sm text-destructive text-center">{error}</p>}

      <div className="flex justify-center pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="rounded-full h-12 px-10 text-base font-medium">
          {status === "submitting" ? tt.sending : tt.send}
          {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
        </Button>
      </div>
    </form>
  )
}
