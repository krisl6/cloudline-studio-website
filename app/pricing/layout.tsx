import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for CloudLine Studio's growth, transformation, and operations services. Find the engagement that fits your business.",
  alternates: { canonical: "/pricing/" },
  openGraph: {
    title: "Pricing | CloudLine Studio",
    description: "Transparent pricing for CloudLine Studio's growth, transformation, and operations services.",
    url: "/pricing/",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
