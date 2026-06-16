import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Verified client outcomes and testimonials from CloudLine Studio engagements across marketing, transformation, sync, and branding.",
  alternates: { canonical: "/client-results/" },
  openGraph: {
    title: "Client Results | CloudLine Studio",
    description: "Verified client outcomes and testimonials from CloudLine Studio engagements.",
    url: "/client-results/",
  },
}

export default function ClientResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
