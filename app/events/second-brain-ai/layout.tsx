import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Build Your Second Brain & Automate Your Marketing with Agentic AI (BONUS: AI Video Automation)",
  description:
    "A hands-on workshop on Agentic AI workflows with Claude, Hermes Agent & OpenClaw, plus a bonus Video Automation session, with Kristine Ling and Ken Ooi. 12 August 2026, Infinity8 Sunway Square.",
  alternates: { canonical: "/events/second-brain-ai/" },
  openGraph: {
    title: "Build Your Second Brain & Automate Your Marketing with Agentic AI (BONUS: AI Video Automation) | CloudLine Studio",
    description:
      "Learn how to set up and use Claude, Hermes Agent, and OpenClaw to create a more efficient AI-powered workday. Plus a BONUS Video Automation workshop. 12 August 2026, Infinity8 Sunway Square.",
    url: "/events/second-brain-ai/",
    images: ["/second-brain-ai-poster.png"],
  },
  robots: { index: false, follow: true },
}

export default function SecondBrainAgenticAiLayout({ children }: { children: React.ReactNode }) {
  return children
}
