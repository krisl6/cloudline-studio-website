"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Status = "idle" | "submitting" | "error"

const T = {
  en: {
    title: "Almost there",
    description: "A few details so we can send your ticket confirmation.",
    name: "Full name",
    namePh: "Your name",
    email: "Email address",
    emailPh: "you@company.com",
    phone: "Phone (optional)",
    phonePh: "+60…",
    continue: "Continue to payment",
    submitting: "Redirecting…",
    errGeneric: "Something went wrong. Please try again.",
    errEmail: "Please enter a valid email.",
  },
  ms: {
    title: "Hampir selesai",
    description: "Beberapa maklumat supaya kami boleh menghantar pengesahan tiket anda.",
    name: "Nama penuh",
    namePh: "Nama anda",
    email: "Alamat e-mel",
    emailPh: "anda@syarikat.com",
    phone: "Telefon (pilihan)",
    phonePh: "+60…",
    continue: "Teruskan ke pembayaran",
    submitting: "Mengalihkan…",
    errGeneric: "Ada masalah. Sila cuba lagi.",
    errEmail: "Sila masukkan e-mel yang sah.",
  },
  zh: {
    title: "只差一步",
    description: "请提供以下信息，以便我们发送门票确认。",
    name: "全名",
    namePh: "您的姓名",
    email: "邮箱地址",
    emailPh: "you@company.com",
    phone: "电话（可选）",
    phonePh: "+60…",
    continue: "继续付款",
    submitting: "跳转中…",
    errGeneric: "出了点问题，请重试。",
    errEmail: "请输入有效的邮箱。",
  },
} as const

export function TicketPurchaseDialog({
  tier,
  lang,
  children,
}: {
  tier: "early-bird" | "standard" | "virtual-pass"
  lang: "en" | "ms" | "zh"
  children: React.ReactNode
}) {
  const tt = T[lang]
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? "").trim()
    const email = get("email")
    if (!email.includes("@")) {
      setError(tt.errEmail)
      return
    }
    setStatus("submitting")
    try {
      const res = await fetch("/api/billplz/create-bill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, name: get("name"), email, phone: get("phone") }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok || !data.url) throw new Error(data.error || tt.errGeneric)
      window.location.href = data.url
    } catch (err) {
      setStatus("idle")
      setError(err instanceof Error ? err.message : tt.errGeneric)
    }
  }

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
  const labelCls = "block text-sm font-medium"

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{tt.title}</DialogTitle>
          <DialogDescription>{tt.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className={labelCls}>{tt.name}</label>
            <input type="text" name="name" required autoComplete="name" className={inputCls} placeholder={tt.namePh} />
          </div>
          <div>
            <label className={labelCls}>{tt.email}</label>
            <input type="email" name="email" required autoComplete="email" className={inputCls} placeholder={tt.emailPh} />
          </div>
          <div>
            <label className={labelCls}>{tt.phone}</label>
            <input type="tel" name="phone" autoComplete="tel" className={inputCls} placeholder={tt.phonePh} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={status === "submitting"} className="w-full rounded-full font-medium">
            {status === "submitting" ? (
              <>
                <Loader2 className="mr-1.5 size-4 animate-spin" />
                {tt.submitting}
              </>
            ) : (
              tt.continue
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
