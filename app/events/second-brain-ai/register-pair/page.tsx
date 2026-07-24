"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { PairRegistrationForm } from "@/components/pair-registration-form"

const T = {
  en: {
    eyebrow: "Almost done",
    heading: "One more step — register both attendees",
    subcopy:
      "Your Early Bird Pair payment is confirmed. Since it covers 2 seats, we just need each attendee's name, email, and contact number to issue both tickets.",
  },
  ms: {
    eyebrow: "Hampir siap",
    heading: "Satu langkah lagi — daftarkan kedua-dua peserta",
    subcopy:
      "Pembayaran Early Bird Pair anda telah disahkan. Oleh kerana ia meliputi 2 tempat duduk, kami hanya perlukan nama, e-mel, dan nombor telefon setiap peserta untuk mengeluarkan kedua-dua tiket.",
  },
  zh: {
    eyebrow: "只差一步",
    heading: "还差一步 — 请为两位参加者完成注册",
    subcopy:
      "您的 Early Bird Pair 付款已确认。由于这份票包含 2 个名额，我们需要每位参加者的姓名、电子邮箱与联络电话，才能签发两张门票。",
  },
} as const

function RegisterPairContent() {
  const { lang } = useLanguage()
  const tt = T[lang]
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id") || ""

  return (
    <section className="w-full py-14 md:py-20" aria-label="Register both attendees">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3 text-center">{tt.eyebrow}</p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-balance mb-3 text-center">
            {tt.heading}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 text-center">{tt.subcopy}</p>
          <PairRegistrationForm sessionId={sessionId} />
        </div>
      </div>
    </section>
  )
}

export default function RegisterPairPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1" role="main">
        <Suspense fallback={null}>
          <RegisterPairContent />
        </Suspense>
      </main>
    </div>
  )
}
