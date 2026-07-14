"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Status = "idle" | "submitting" | "success" | "error"

const WAITLIST_INTERESTS = [
  "SEO Blog Automation",
  "Content Refresher",
  "User Feedback",
  "Overall SEO Analysis (video, social & more)",
] as const

export function SeoWaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    )
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")
    setStatus("submitting")

    try {
      const res = await fetch("/api/seo-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interests }),
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
        <h3 className="font-display text-2xl font-semibold mb-2">You&apos;re on the list.</h3>
        <p className="text-muted-foreground">We&apos;ll email you as soon as it&apos;s ready.</p>
      </div>
    )
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

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
          <span className="text-sm font-medium">Email <span className="text-primary">*</span></span>
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

      <fieldset>
        <legend className="text-sm font-medium">What are you interested in?</legend>
        <div className="mt-2 grid gap-x-4 gap-y-2 sm:grid-cols-2">
          {WAITLIST_INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="size-4 rounded border-border text-primary focus:ring-ring/30"
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && <p className="text-sm text-destructive">{errorMsg}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-full h-12 text-base font-medium"
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
