import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing MasterClass for Business Visibility with AI",
  description:
    "A hands-on masterclass on AI marketing automation, AEO, and SEO with CloudLine Studio's founder and industry experts Ken Ooi and Kenny Lee. 12 August 2026, Infinity8 Sunway Square.",
  alternates: { canonical: "/events/ai-automations-aeo-seo/" },
  openGraph: {
    title: "Marketing MasterClass for Business Visibility with AI | CloudLine Studio",
    description:
      "Be found by Google and ChatGPT. Automate the busywork. A hands-on session for marketers who want AI working for them, not against them. 12 August 2026, Infinity8 Sunway Square.",
    url: "/events/ai-automations-aeo-seo/",
    images: ["/ai-automations-aeo-seo-poster.png"],
  },
  robots: { index: false, follow: true },
}

export default function AiAutomationsAeoSeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
