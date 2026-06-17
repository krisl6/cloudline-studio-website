import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { SITE_URL } from "@/lib/site"
import { ArrowRight, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Marketing Insights for Founders",
  description: "Practical guides on startup marketing, SaaS growth, online course marketing, and beauty brand strategy from the Cloudline Studio team.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    title: "Blog — Cloudline Studio",
    description: "Practical marketing guides for founders in tech, education, and beauty.",
    url: `${SITE_URL}/blog/`,
    type: "website",
  },
}

export default function BlogIndexPage() {
  return (
    <main className="flex-1">
      <section className="container px-4 md:px-6 pt-20 pb-8 md:pt-28 md:pb-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Cloudline Studio — Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance leading-tight mb-4">
            Marketing guides that actually move the needle
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Practical, no-fluff frameworks for founders navigating startup growth, SaaS channels, online course launches, and beauty brand marketing.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
