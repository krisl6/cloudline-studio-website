"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Status = "idle" | "submitting" | "success" | "error"

export function EventSignupForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setError("")
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch("/api/event-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.")
      setStatus("success")
      form.reset()
    } catch (submitError) {
      setStatus("error")
      setError(submitError instanceof Error ? submitError.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-8 text-center sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">You’re on the list</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">We’ll send you the next event details.</h3>
        <p className="mt-3 text-muted-foreground">Keep an eye on your inbox for the date, venue, and what to bring.</p>
      </div>
    )
  }

  const inputClass = "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">Name *<input required name="name" className={inputClass} placeholder="Your name" /></label>
        <label className="text-sm font-medium">Work email *<input required type="email" name="email" className={inputClass} placeholder="you@company.com" /></label>
        <label className="text-sm font-medium">Phone / WhatsApp<input name="phone" className={inputClass} placeholder="12 345 6789" /></label>
        <label className="text-sm font-medium">Company or business<input name="company" className={inputClass} placeholder="Your company" /></label>
        <label className="text-sm font-medium">Your role<select name="role" className={inputClass} defaultValue=""><option value="" disabled>Select one</option><option>Founder / business owner</option><option>Corporate manager</option><option>Entrepreneur</option><option>Other</option></select></label>
        <label className="text-sm font-medium">AI experience<select name="experience" className={inputClass} defaultValue=""><option value="" disabled>Select one</option><option>New to AI</option><option>Some experience</option><option>Regular user</option></select></label>
      </div>
      <label className="mt-5 block text-sm font-medium">What would you like to build? *<textarea required name="idea" rows={4} className={`${inputClass} resize-y`} placeholder="Tell us about the product, workflow, or business idea you want to explore." /></label>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground"><input required type="checkbox" name="consent" value="yes" className="mt-1 size-4 accent-[hsl(var(--navy))]" /> <span>I’d like to receive event updates and practical AI workshop information from CloudLine Studio.</span></label>
      {status === "error" && <p role="alert" className="mt-4 text-sm font-medium text-destructive">{error}</p>}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-6 w-full rounded-full font-medium sm:w-auto">{status === "submitting" ? "Sending…" : "Sign me up"}<ArrowRight className="ml-2 size-4" /></Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">No payment is required to join the interest list. We’ll share event details when the next session is confirmed.</p>
    </form>
  )
}
