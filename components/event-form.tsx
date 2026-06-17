"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    name: "Name", email: "Email", phone: "Phone / WhatsApp", business: "Business / product", goal: "What's your event goal?",
    namePh: "Your name", emailPh: "you@company.com", phonePh: "+60…", businessPh: "e.g. Vyne Wine — premium wines",
    goalPh: "e.g. Let 30 people taste our wines and drive same-day sales",
    send: "Request my event", sending: "Sending…",
    successTitle: "Thank you — we've got it.", successBody: "We'll be in touch within 24 hours to design your event.",
    errEmail: "Please enter a valid email.", errGeneric: "Something went wrong. Please try again.",
  },
  ms: {
    name: "Nama", email: "E-mel", phone: "Telefon / WhatsApp", business: "Perniagaan / produk", goal: "Apakah matlamat acara anda?",
    namePh: "Nama anda", emailPh: "anda@syarikat.com", phonePh: "+60…", businessPh: "cth. Vyne Wine — wain premium",
    goalPh: "cth. Biar 30 orang mencuba wain kami dan dorong jualan hari sama",
    send: "Mohon acara saya", sending: "Menghantar…",
    successTitle: "Terima kasih — kami telah menerimanya.", successBody: "Kami akan menghubungi anda dalam 24 jam untuk mereka acara anda.",
    errEmail: "Sila masukkan e-mel yang sah.", errGeneric: "Ada masalah. Sila cuba lagi.",
  },
  zh: {
    name: "姓名", email: "邮箱", phone: "电话 / WhatsApp", business: "企业 / 产品", goal: "您的活动目标是什么？",
    namePh: "您的姓名", emailPh: "you@company.com", phonePh: "+60…", businessPh: "例如：Vyne Wine — 高端葡萄酒",
    goalPh: "例如：让 30 位客人试饮我们的葡萄酒并带动当天销售",
    send: "申请活动", sending: "发送中…",
    successTitle: "谢谢 — 我们已收到。", successBody: "我们将在 24 小时内与您联系，为您策划活动。",
    errEmail: "请输入有效的邮箱。", errGeneric: "出了点问题，请重试。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

export function EventForm() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", goal: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!form.email.includes("@")) { setError(tt.errEmail); return }
    setStatus("submitting")
    try {
      const res = await fetch("/api/event-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{tt.name}</span>
          <input type="text" value={form.name} onChange={set("name")} className={inputCls} placeholder={tt.namePh} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{tt.phone}</span>
          <input type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder={tt.phonePh} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">{tt.email} <span className="text-primary">*</span></span>
        <input type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder={tt.emailPh} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{tt.business}</span>
        <input type="text" value={form.business} onChange={set("business")} className={inputCls} placeholder={tt.businessPh} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{tt.goal}</span>
        <textarea value={form.goal} onChange={set("goal")} rows={3} className={inputCls} placeholder={tt.goalPh} />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full rounded-full h-12 text-base font-medium sm:w-auto">
        {status === "submitting" ? tt.sending : tt.send}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
