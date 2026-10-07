"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EventSignupForm } from "@/components/event-signup-form"
import { ListDot } from "@/components/sections/list-dot"
import { NumberedIndex } from "@/components/sections/numbered-index"

const outcomes = [
  { title: "Choose the right idea", body: "Use a simple framework to turn a business problem into an application worth building." },
  { title: "Build it live", body: "Go from a plain-language idea to a working product with Claude Code and Codex." },
  { title: "Get it in front of people", body: "Set up the marketing and sales workflows that help a small team launch with momentum." },
]

const buildList = [
  "Frontend, backend, and third-party connectors",
  "Free tools for databases, authentication, and cybersecurity",
  "Marketing workflows for content, landing pages, and campaign assets",
  "A practical way to reduce the cost of starting from scratch",
]

export default function BuildYourBusinessPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,hsl(var(--sky)/0.2),transparent_34%),linear-gradient(120deg,hsl(var(--background)),hsl(var(--muted)/0.72))]" aria-hidden="true" />
        <div className="container relative grid gap-12 px-4 py-14 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">Build your business with AI.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">A hands-on, build-from-scratch session for founders, business owners, corporate managers, and entrepreneurs who want to move faster without a dev team.</p>
            <p className="mt-4 text-sm font-medium text-primary">With marketing partner Build Club · Lunch and refreshments available to participants</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-7 font-medium" asChild><Link href="#signup">Join the interest list<ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full px-7 font-medium" asChild><Link href="#what-youll-build">See what you’ll build</Link></Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Bring your laptop, your idea, and a quiet space to work.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-primary/10">
            <Image src="/vibe-coding-workshop.webp" alt="CloudLine Studio vibe coding workshop" width={1600} height={1600} priority className="h-auto w-full" />
          </motion.div>
        </div>
      </section>

      <section id="what-youll-build" className="border-b border-border py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Start with an idea. Leave with something real.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">You’ll build from scratch, understand what the tools can do, and create a launch system that keeps working after the session.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{outcomes.map(({ title, body }, index) => <motion.article key={title} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-border bg-card p-6"><NumberedIndex index={index} className="mb-8" /><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/50 py-20 md:py-28">
        <div className="container grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div><h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">What you’ll build and learn</h2><p className="mt-5 leading-relaxed text-muted-foreground">This is a working session. Every block is designed to get you closer to a product or workflow you can actually use.</p></div>
          <ul className="grid gap-4 sm:grid-cols-2">{buildList.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4 text-sm leading-relaxed"><ListDot className="mt-2 shrink-0" />{item}</li>)}</ul>
        </div>
      </section>

      <section id="signup" className="py-20 md:py-28">
        <div className="container grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <div><h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Get the next session details</h2><p className="mt-5 leading-relaxed text-muted-foreground">Tell us a little about yourself and what you want to build. We’ll let you know when the date and venue are confirmed.</p></div>
          <EventSignupForm />
        </div>
      </section>
    </main>
  )
}
