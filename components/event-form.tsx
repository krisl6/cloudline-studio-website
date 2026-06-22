"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    name: "Name", email: "Email", phone: "Phone / WhatsApp", business: "Business / product",
    participants: "Number of participants", audience: "Target audience", date: "Date of event", goal: "What's your event goal?",
    single: "Single day", multi: "Multi-day", start: "Start date", end: "End date",
    namePh: "Your name", emailPh: "you@company.com", phonePh: "12 345 6789", businessPh: "e.g. Vyne Wine, premium wines",
    participantsPh: "e.g. 30", audiencePh: "e.g. Young professionals who enjoy wine",
    goalPh: "e.g. Let 30 people taste our wines and drive same-day sales",
    send: "Get Quote Now", sending: "Sending…",
    successTitle: "Thank you, we've got it.", successBody: "We'll be in touch within 24 hours with your quote.",
    errEmail: "Please enter a valid email.", errGeneric: "Something went wrong. Please try again.",
  },
  ms: {
    name: "Nama", email: "E-mel", phone: "Telefon / WhatsApp", business: "Perniagaan / produk",
    participants: "Bilangan peserta", audience: "Audiens sasaran", date: "Tarikh acara", goal: "Apakah matlamat acara anda?",
    single: "Satu hari", multi: "Berbilang hari", start: "Tarikh mula", end: "Tarikh tamat",
    namePh: "Nama anda", emailPh: "anda@syarikat.com", phonePh: "12 345 6789", businessPh: "cth. Vyne Wine, wain premium",
    participantsPh: "cth. 30", audiencePh: "cth. Profesional muda yang gemar wain",
    goalPh: "cth. Biar 30 orang mencuba wain kami dan dorong jualan hari sama",
    send: "Dapatkan Sebut Harga", sending: "Menghantar…",
    successTitle: "Terima kasih, kami telah menerimanya.", successBody: "Kami akan menghubungi anda dalam 24 jam dengan sebut harga.",
    errEmail: "Sila masukkan e-mel yang sah.", errGeneric: "Ada masalah. Sila cuba lagi.",
  },
  zh: {
    name: "姓名", email: "邮箱", phone: "电话 / WhatsApp", business: "企业 / 产品",
    participants: "参与人数", audience: "目标受众", date: "活动日期", goal: "您的活动目标是什么？",
    single: "单日", multi: "多日", start: "开始日期", end: "结束日期",
    namePh: "您的姓名", emailPh: "you@company.com", phonePh: "12 345 6789", businessPh: "例如：Vyne Wine, 高端葡萄酒",
    participantsPh: "例如：30", audiencePh: "例如：喜爱葡萄酒的年轻专业人士",
    goalPh: "例如：让 30 位客人试饮我们的葡萄酒并带动当天销售",
    send: "立即获取报价", sending: "发送中…",
    successTitle: "谢谢, 我们已收到。", successBody: "我们将在 24 小时内向您提供报价。",
    errEmail: "请输入有效的邮箱。", errGeneric: "出了点问题，请重试。",
  },
} as const

type Status = "idle" | "submitting" | "success" | "error"

const Req = () => <span className="text-red-500">*</span>

export function EventForm() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const [dateType, setDateType] = useState<"single" | "multi">("single")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    // Read straight from the DOM so browser autofill is captured accurately.
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()

    const email = get("email")
    if (!email.includes("@")) { setError(tt.errEmail); return }

    const event_dates = dateType === "single" ? get("date") : [get("startDate"), get("endDate")].filter(Boolean).join(" to ")

    setStatus("submitting")
    try {
      const res = await fetch("/api/event-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email,
          phone: [get("countryCode"), get("phone")].filter(Boolean).join(" "),
          business: get("business"),
          participants: get("participants"),
          target_audience: get("audience"),
          goal: get("goal"),
          date_type: dateType,
          event_dates,
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
      </div>
      <label className="block">
        <span className="text-sm font-medium">{tt.email} <Req /></span>
        <input type="email" name="email" required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{tt.business}</span>
        <input type="text" name="business" autoComplete="organization" className={inputCls} placeholder={tt.businessPh} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{tt.participants} <Req /></span>
          <input type="number" name="participants" min={1} required autoComplete="off" className={inputCls} placeholder={tt.participantsPh} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{tt.audience}</span>
          <input type="text" name="audience" autoComplete="off" className={inputCls} placeholder={tt.audiencePh} />
        </label>
      </div>

      {/* Date of event */}
      <div>
        <span className="text-sm font-medium">{tt.date} <Req /></span>
        <div className="mt-1.5 inline-flex items-center rounded-full border border-border bg-muted p-0.5 text-sm font-medium">
          {(["single", "multi"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDateType(d)}
              aria-pressed={dateType === d}
              className={`rounded-full px-4 py-1.5 transition-colors ${dateType === d ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              {d === "single" ? tt.single : tt.multi}
            </button>
          ))}
        </div>
        {dateType === "single" ? (
          <input type="date" name="date" required autoComplete="off" className={inputCls} />
        ) : (
          <div className="mt-1.5 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs text-muted-foreground">{tt.start}</span>
              <input type="date" name="startDate" required autoComplete="off" className={inputCls} />
            </label>
            <label className="block">
              <span className="text-xs text-muted-foreground">{tt.end}</span>
              <input type="date" name="endDate" required autoComplete="off" className={inputCls} />
            </label>
          </div>
        )}
      </div>

      <label className="block">
        <span className="text-sm font-medium">{tt.goal}</span>
        <textarea name="goal" rows={3} autoComplete="off" className={inputCls} placeholder={tt.goalPh} />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full rounded-full h-12 text-base font-medium sm:w-auto">
        {status === "submitting" ? tt.sending : tt.send}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
