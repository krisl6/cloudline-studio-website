import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four services that move the business forward: consultation, marketing & sales digital transformation, interdepartmental synchronization, and digital marketing & branding.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services | CloudLine Studio",
    description:
      "Consultation, marketing & sales digital transformation, interdepartmental synchronization, and digital marketing & branding.",
    url: "/services/",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
