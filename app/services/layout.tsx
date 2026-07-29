import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqJsonLd } from "@/lib/json-ld"
import { translations } from "./translations"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five services that move the business forward: consultation, marketing & sales digital transformation, interdepartmental synchronization, digital marketing & branding, and SEO & AI search (AEO).",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services | CloudLine Studio",
    description:
      "Consultation, marketing & sales digital transformation, interdepartmental synchronization, digital marketing & branding, and SEO & AI search (AEO).",
    url: "/services/",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={buildFaqJsonLd(translations.en.faqs)} />
    </>
  )
}
