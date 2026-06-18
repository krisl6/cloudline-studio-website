"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    name: "Name", email: "Email", phone: "Phone / WhatsApp", message: "Message",
    namePh: "Your name", emailPh: "you@company.com", phonePh: "+60…",
    messagePh: "Tell us a little about your project or goals…",
    send: "Send message", sending: "Sending…",
    successTitle: "Thank you — we've got it.", successBody: "Our team will get back to you within 24 hours.",
    errEmail: "Please enter a valid email.", errGeneric: "Something went wrong. Please try again.",
  },
  ms: {
    name: "Nama", email: "E-mel", phone: "Telefon / WhatsApp", message: "Mesej",
    namePh: "Nama anda", emailPh: "anda@syarikat.com", phonePh: "+60…",
    messagePh: "Ceritakan sedikit tentang projek atau matlamat anda…",
    send: "Hantar mesej", sending: "Menghantar…",
    successTitle: "Terima kasih — kami telah menerimanya.", successBody: "Pasukan kami akan menghubungi anda dalam masa 24 jam.",
    errEmail: "Sila masukkan e-mel yang sah.", errGeneric: "Ada masalah. Sila cuba lagi.",
  },
  zh: {
    name: "姓名", email: "邮箱", phone: "电话 / WhatsApp", message: "留言",
    namePh: "您的姓名", emailPh: "you@company.com", phonePh: "+60…",
    messagePh: "简单介绍一下您的项目或目标…",
    send: "发送消息", sending: "发送中…",
    successTitle: "谢谢 — 我们已收到。", successBody: "我们的团队将在 24 小时内与您联系。",
    errEmail: "请输入有效的邮箱。", errGeneric: "出了点问题，请重试。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    // Read from the DOM so browser autofill is captured accurately.
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()
    const email = get("email")
    if (!email.includes("@")) { setError(tt.errEmail); return }
    setStatus("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: get("name"), email, phone: get("phone"), message: get("message") }),
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
          <input type="text" name="name" autoComplete="name" className={inputCls} placeholder={tt.namePh} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{tt.phone}</span>
          <input type="tel" name="phone" autoComplete="tel" className={inputCls} placeholder={tt.phonePh} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">{tt.email} <span className="text-red-500">*</span></span>
        <input type="email" name="email" required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{tt.message}</span>
        <textarea name="message" rows={4} autoComplete="off" className={inputCls} placeholder={tt.messagePh} />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full rounded-full h-12 text-base font-medium sm:w-auto">
        {status === "submitting" ? tt.sending : tt.send}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
