import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPost, BLOG_POSTS } from "@/lib/blog-posts"
import { SITE_URL } from "@/lib/site"
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer"
import { ArrowLeft, Clock, Tag } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <main className="flex-1">
      <article className="container px-4 md:px-6 pt-20 pb-24 md:pt-28">
        <div className="mx-auto max-w-2xl">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
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

          {/* Content */}
          <MarkdownRenderer content={post.content} />

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Cloudline Studio
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Ready to put this into practice?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              We work with founders in tech, education, and beauty to build marketing systems that compound.
            </p>
            <Link
              href={post.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-11 px-7 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {post.ctaLabel}
            </Link>
          </div>

        </div>
      </article>
    </main>
  )
}
