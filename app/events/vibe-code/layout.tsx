import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Build Your Application: Vibe Coding with Claude",
  description:
    "A hands-on, build-from-scratch session with Kristine Ling — go from idea to a real product using Claude Code and Codex, plus the marketing and sales workflows to launch it. 24 August 2026, INFINITY8 Reserve Sunway Square.",
  alternates: { canonical: "/events/vibe-code/" },
  openGraph: {
    title: "Build Your Application: Vibe Coding with Claude | CloudLine Studio",
    description:
      "A hands-on, build-from-scratch session with Kristine Ling — go from idea to a real product using Claude Code and Codex, plus the marketing and sales workflows to launch it. 24 August 2026, INFINITY8 Reserve Sunway Square.",
    url: "/events/vibe-code/",
    images: ["/vibe-coding-workshop.webp"],
  },
  robots: { index: false, follow: true },
}

export default function VibeCodingWithClaudeLayout({ children }: { children: React.ReactNode }) {
  return children
}
