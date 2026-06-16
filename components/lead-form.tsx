"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoodleCheck } from "@/components/doodles"

const AIM_OPTIONS = [
  "Brand awareness",
  "More customers — B2C",
  "More customers — B2B",
  "More leads / pipeline",
  "Revenue growth",
  "Operational efficiency",
  "Other",
]

const SERVICE_OPTIONS = [
  "Consultation",
  "Marketing & Sales Digital Transformation",
  "Interdepartmental Synchronization",
  "Digital Marketing & Branding",
]

type Status = "idle" | "submitting" | "success" | "error"

export function LeadForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aims, setAims] = useState<string[]>([])
  const [services, setServices] = useState<string[]>([])
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email.includes("@")) {
      setError("Please enter a valid email.")
      return
    }
    setStatus("submitting")
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, aims, services }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.")
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <DoodleCheck className="size-7" />
        </span>
        <h3 className="font-display text-2xl font-semibold mb-2">Thank you — we've got it.</h3>
        <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
      </div>
    )
  }

  const fieldGroup = (
    label: string,
    options: string[],
    selected: string[],
    setSelected: (v: string[]) => void,
  ) => (
    <fieldset>
      <legend className="text-sm font-medium mb-3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt)
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(selected, setSelected, opt)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                active
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-transparent text-foreground/80 hover:bg-muted"
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </fieldset>
  )

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-7">
      {fieldGroup("What's your main aim? (select any)", AIM_OPTIONS, aims, setAims)}
      {fieldGroup("Which services do you need? (select any)", SERVICE_OPTIONS, services, setServices)}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Phone / WhatsApp</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="+60…"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">Email <span className="text-primary">*</span></span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          placeholder="you@company.com"
        />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-full h-12 text-base font-medium sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send"}
        {status !== "submitting" && <ArrowRight className="ml-1.5 size-4" />}
      </Button>
    </form>
  )
}
