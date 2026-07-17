import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CloudLine AEO/SEO Automation — AI Automation for AI Search Visibility",
  description:
    "AI-powered automation for SEO and AEO: blog posts written and published by CloudLine AI, automatic content refreshes, citation tracking across AI engines, and more. Join the waitlist for early access.",
  alternates: { canonical: "/ai-aeo/" },
  openGraph: {
    title: "CloudLine AEO/SEO Automation | CloudLine Studio",
    description:
      "Get cited in AI answers from your own blog posts, written by CloudLine AI. Automated content refreshes, citation tracking, and more. Join the waitlist for early access.",
    url: "/ai-aeo/",
  },
}

export default function CloudlineAeoAiLayout({ children }: { children: React.ReactNode }) {
  return children
}
