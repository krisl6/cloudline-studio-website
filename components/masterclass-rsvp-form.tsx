"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    name: "Name", email: "Email", phone: "Phone / WhatsApp", attendees: "Number of attendees",
    ticketInterest: "Which ticket are you interested in?", message: "Questions or anything else we should know?",
    namePh: "Your name", emailPh: "you@company.com", phonePh: "12 345 6789", attendeesPh: "e.g. 1",
    ticketPh: "Select a ticket", standard: "Early Bird — RM 359", premium: "Standard — RM 499", unsure: "Not sure yet",
    messagePh: "Anything you'd like to ask before the masterclass?",
    send: "RSVP My Interest", sending: "Sending…",
    successTitle: "Thanks, we've got your RSVP.", successBody: "We'll follow up with you shortly. See you on 12 August!",
    errEmail: "Please enter a valid email.", errGeneric: "Something went wrong. Please try again.",
  },
  ms: {
    name: "Nama", email: "E-mel", phone: "Telefon / WhatsApp", attendees: "Bilangan peserta",
    ticketInterest: "Tiket mana yang anda minati?", message: "Sebarang soalan atau perkara lain yang perlu kami tahu?",
    namePh: "Nama anda", emailPh: "anda@syarikat.com", phonePh: "12 345 6789", attendeesPh: "cth. 1",
    ticketPh: "Pilih tiket", standard: "Early Bird — RM 359", premium: "Standard — RM 499", unsure: "Belum pasti",
    messagePh: "Ada soalan sebelum masterclass?",
    send: "RSVP Minat Saya", sending: "Menghantar…",
    successTitle: "Terima kasih, RSVP anda telah diterima.", successBody: "Kami akan menghubungi anda tidak lama lagi. Jumpa pada 12 Ogos!",
    errEmail: "Sila masukkan e-mel yang sah.", errGeneric: "Ada masalah. Sila cuba lagi.",
  },
  zh: {
    name: "姓名", email: "邮箱", phone: "电话 / WhatsApp", attendees: "参加人数",
    ticketInterest: "您对哪种门票感兴趣？", message: "有任何问题或想让我们知道的事情吗？",
    namePh: "您的姓名", emailPh: "you@company.com", phonePh: "12 345 6789", attendeesPh: "例如：1",
    ticketPh: "选择门票", standard: "早鸟票 — RM 359", premium: "标准票 — RM 499", unsure: "还不确定",
    messagePh: "在大师课之前有任何问题吗？",
    send: "提交 RSVP", sending: "发送中…",
    successTitle: "谢谢，我们已收到您的 RSVP。", successBody: "我们会尽快与您联系。8 月 12 日见！",
    errEmail: "请输入有效的邮箱。", errGeneric: "出了点问题，请重试。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

export function MasterclassRsvpForm() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [ticketInterest, setTicketInterest] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()

    const email = get("email")
    if (!email.includes("@")) { setError(tt.errEmail); return }

    setStatus("submitting")
    try {
      const res = await fetch("/api/masterclass-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email,
          phone: [get("countryCode"), get("phone")].filter(Boolean).join(" "),
          attendees: get("attendees"),
          ticket_interest: ticketInterest,
          message: get("message"),
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

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{tt.name}</span>
          <input type="text" name="name" autoComplete="name" className={inputCls} placeholder={tt.namePh} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{tt.email} <span className="text-red-500">*</span></span>
          <input type="email" name="email" required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{tt.phone}</span>
          <div className="mt-1.5 flex">
            <select
              name="countryCode"
              defaultValue="+60"
              className="rounded-l-xl rounded-r-none border border-r-0 border-border bg-muted px-2 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            >
              <option value="+60">+60</option>
              <option value="+65">+65</option>
              <option value="+62">+62</option>
              <option value="+63">+63</option>
              <option value="+66">+66</option>
              <option value="+84">+84</option>
              <option value="+852">+852</option>
              <option value="+886">+886</option>
              <option value="+61">+61</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+86">+86</option>
            </select>
            <input
              type="tel"
              name="phone"
              autoComplete="tel-national"
              className="w-full rounded-r-xl rounded-l-none border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              placeholder={tt.phonePh}
            />
          </div>
        </label>
        <label className="block">
          <span className="text-sm font-medium">{tt.attendees}</span>
          <input type="number" name="attendees" min={1} autoComplete="off" className={inputCls} placeholder={tt.attendeesPh} />
        </label>
      </div>

      <div>
        <span className="text-sm font-medium">{tt.ticketInterest}</span>
        <div className="relative mt-1.5">
          <select
            value={ticketInterest}
            onChange={(e) => setTicketInterest(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 pr-10"
          >
            <option value="" disabled>{tt.ticketPh}</option>
            <option value="early_bird">{tt.standard}</option>
            <option value="standard">{tt.premium}</option>
            <option value="unsure">{tt.unsure}</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-medium">{tt.message}</span>
        <textarea name="message" rows={3} autoComplete="off" className={inputCls} placeholder={tt.messagePh} />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full rounded-full h-12 text-base font-medium sm:w-auto">
        {status === "submitting" ? tt.sending : tt.send}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
