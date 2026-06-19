import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results across consultation, transformation, interdepartmental sync, and branding, featuring ClearSK, Lasus, ConnectDR, Wellnite, and more.",
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    title: "Case Studies | CloudLine Studio",
    description:
      "Real results across consultation, transformation, interdepartmental sync, and branding for leading brands.",
    url: "/case-studies/",
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
