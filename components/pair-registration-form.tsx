"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    attendee1: "Attendee 1 (You)",
    attendee2: "Attendee 2",
    name: "Full Name", email: "Email Address", phone: "Contact Number",
    namePh: "Full name", emailPh: "you@email.com", phonePh: "+60…",
    submit: "Confirm Registration", submitting: "Submitting…",
    successTitle: "You're both registered!",
    successBody: "We've sent a confirmation email to each attendee.",
    errRequired: "Please fill in name, email, and phone for both attendees.",
    errGeneric: "Something went wrong. Please try again, or WhatsApp us at +60 11-2775 5215.",
  },
  ms: {
    attendee1: "Peserta 1 (Anda)",
    attendee2: "Peserta 2",
    name: "Nama Penuh", email: "Alamat E-mel", phone: "Nombor Telefon",
    namePh: "Nama penuh", emailPh: "anda@emel.com", phonePh: "+60…",
    submit: "Sahkan Pendaftaran", submitting: "Menghantar…",
    successTitle: "Kedua-dua peserta telah didaftarkan!",
    successBody: "Kami telah menghantar e-mel pengesahan kepada setiap peserta.",
    errRequired: "Sila isikan nama, e-mel, dan nombor telefon untuk kedua-dua peserta.",
    errGeneric: "Ada masalah. Sila cuba lagi, atau WhatsApp kami di +60 11-2775 5215.",
  },
  zh: {
    attendee1: "参加者 1（您本人）",
    attendee2: "参加者 2",
    name: "全名", email: "电子邮箱", phone: "联络电话",
    namePh: "全名", emailPh: "you@email.com", phonePh: "+60…",
    submit: "确认注册", submitting: "提交中…",
    successTitle: "两位参加者均已注册成功！",
    successBody: "我们已向每位参加者发送确认邮件。",
    errRequired: "请填写两位参加者的姓名、电子邮箱与联络电话。",
    errGeneric: "出了点问题，请重试，或通过 WhatsApp 联系我们：+60 11-2775 5215。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

export function PairRegistrationForm({ sessionId }: { sessionId: string }) {
  const { lang } = useLanguage()
  const tt = T[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()

    const attendee1 = { name: get("name1"), email: get("email1"), phone: get("phone1") }
    const attendee2 = { name: get("name2"), email: get("email2"), phone: get("phone2") }

    const isComplete = (a: typeof attendee1) => a.name && a.email.includes("@") && a.phone
    if (!isComplete(attendee1) || !isComplete(attendee2)) {
      setError(tt.errRequired)
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch("/api/events/second-brain-ai/pair-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, attendee1, attendee2 }),
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
  const labelCls = "block text-sm font-medium mb-0.5"

  const attendeeFields = (suffix: "1" | "2", heading: string) => (
    <div className="rounded-xl border border-border p-4 sm:p-5 space-y-4">
      <h4 className="font-display text-base font-semibold">{heading}</h4>
      <div>
        <label className={labelCls}>{tt.name} <span className="text-red-500">*</span></label>
        <input type="text" name={`name${suffix}`} required autoComplete="name" className={inputCls} placeholder={tt.namePh} />
      </div>
      <div>
        <label className={labelCls}>{tt.email} <span className="text-red-500">*</span></label>
        <input type="email" name={`email${suffix}`} required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
      </div>
      <div>
        <label className={labelCls}>{tt.phone} <span className="text-red-500">*</span></label>
        <input type="tel" name={`phone${suffix}`} required autoComplete="tel" className={inputCls} placeholder={tt.phonePh} />
      </div>
    </div>
  )

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {attendeeFields("1", tt.attendee1)}
        {attendeeFields("2", tt.attendee2)}
      </div>

      {error && <p className="text-sm text-destructive text-center">{error}</p>}

      <div className="flex justify-center pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="rounded-full h-12 px-10 text-base font-medium">
          {status === "submitting" ? tt.submitting : tt.submit}
          {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
        </Button>
      </div>
    </form>
  )
}
