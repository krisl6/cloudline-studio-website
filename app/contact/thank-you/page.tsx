"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"
import { useLanguage } from "@/components/language-provider"

const T = {
  en: {
    eyebrow: "Message sent",
    heading: "Thank you, we've got it.",
    body: "Our team will get back to you within 24 hours.",
    cta: "Back to Home",
  },
  ms: {
    eyebrow: "Mesej dihantar",
    heading: "Terima kasih, kami telah menerimanya.",
    body: "Pasukan kami akan menghubungi anda dalam masa 24 jam.",
    cta: "Kembali ke Laman Utama",
  },
  zh: {
    eyebrow: "消息已发送",
    heading: "谢谢，我们已收到。",
    body: "我们的团队将在 24 小时内与您联系。",
    cta: "返回首页",
  },
} as const

export default function ContactThankYouPage() {
  const { lang } = useLanguage()
  const tt = T[lang]

  return (
    <div className="w-full py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-lg text-center">
          <span className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <DoodleCheck className="size-8" />
          </span>
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">{tt.eyebrow}</p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3">{tt.heading}</h1>
          <p className="text-muted-foreground mb-8">{tt.body}</p>
          <Button className="rounded-full h-11 px-6 font-medium" asChild>
            <Link href="/">
              {tt.cta} <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
