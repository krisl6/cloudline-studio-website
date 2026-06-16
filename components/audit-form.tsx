"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Niche = "tech" | "aesthetic" | "education"
type Status = "idle" | "submitting" | "success" | "error"

interface AuditFormProps {
  niche: Niche
  abVariant?: "A" | "B"
}

const NICHE_LABELS: Record<Niche, { websiteLabel: string; websitePlaceholder: string; extraField: "website_url" | "instagram_handle" | "course_url" }> = {
  tech: {
    websiteLabel: "Your SaaS / product URL",
    websitePlaceholder: "https://yourapp.com",
    extraField: "website_url",
  },
  aesthetic: {
    websiteLabel: "Instagram handle",
    websitePlaceholder: "@yourbrand",
    extraField: "instagram_handle",
  },
  education: {
    websiteLabel: "Course or sales page URL",
    websitePlaceholder: "https://yourcourse.com",
    extraField: "course_url",
  },
}

export function AuditForm({ niche, abVariant = "A" }: AuditFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [challenge, setChallenge] = useState("")
  const [extra, setExtra] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const { websiteLabel, websitePlaceholder, extraField } = NICHE_LABELS[niche]

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")
    setStatus("submitting")

    const payload: Record<string, string> = {
      name,
      email,
      niche,
      challenge,
      ab_variant: abVariant,
      [extraField]: extra,
    }

    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.")
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="font-display text-2xl font-semibold mb-2">You're on the list.</h3>
        <p className="text-muted-foreground">We'll review your submission and reach out within 1 business day with your free audit.</p>
      </div>
    )
  }

  const inputClass = "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Your name <span className="text-primary">*</span></span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Kai Chen"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Work email <span className="text-primary">*</span></span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">{websiteLabel}</span>
        <input
          type={extraField === "instagram_handle" ? "text" : "url"}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          className={inputClass}
          placeholder={websitePlaceholder}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">What's your biggest marketing challenge right now?</span>
        <textarea
          rows={3}
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="e.g. Low trial-to-paid conversion, high CAC, not enough qualified leads…"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMsg}</p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-full h-12 text-base font-medium"
      >
        {status === "submitting" ? "Sending…" : "Request my free audit"}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. No hard sell. Just a straight-talking audit from a team that's run marketing for 50+ brands.
      </p>
    </form>
  )
}
