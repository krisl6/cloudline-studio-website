import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Build & Launch Your Business with Zero Coding Skills",
  description:
    "A hands-on workshop in Subang Jaya where you arrive with an idea and leave with a working product — using AI tools like Claude Code and Codex. No coding background needed.",
  alternates: { canonical: "/events/buildyourbusiness/" },
  openGraph: {
    title: "Build & Launch Your Business with Zero Coding Skills | CloudLine Studio",
    description:
      "Arrive with an idea. Leave with a product, a marketing stack, and your first revenue plan. Hosted by CloudLine Studio at Infinity8 Reserve Sunway Square.",
    url: "/events/buildyourbusiness/",
  },
  robots: { index: false, follow: true },
}

export default function BuildYourBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}
