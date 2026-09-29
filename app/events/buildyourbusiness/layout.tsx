import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Build Your Business with AI",
  description:
    "A hands-on session for business owners, corporate managers, founders, and entrepreneurs to build a real product with Claude Code and Codex, then create the marketing workflow to launch it.",
  alternates: { canonical: "/events/buildyourbusiness/" },
  openGraph: {
    title: "Build Your Business with AI | CloudLine Studio",
    description:
      "Build a real product from scratch with Claude Code and Codex, then learn the marketing workflows to get it in front of people.",
    url: "/events/buildyourbusiness/",
    images: ["/vibe-coding-claude-codex.png"],
  },
}

export default function BuildYourBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}
