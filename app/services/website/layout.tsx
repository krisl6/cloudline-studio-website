import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqJsonLd } from "@/lib/json-ld"
import { translations } from "./translations"

export const metadata: Metadata = {
  title: "Website Design & CRO | CloudLine Studio",
  description:
    "Conversion-focused website design from CloudLine Studio. Real 14-day turnaround, real client results, no fluff.",
  alternates: { canonical: "/services/website/" },
  openGraph: {
    title: "Website Design & CRO | CloudLine Studio",
    description:
      "Conversion-focused website design from CloudLine Studio. Real 14-day turnaround, real client results, no fluff.",
    url: "/services/website/",
  },
}

export default function WebsiteServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={buildFaqJsonLd(translations.en.faqs)} />
    </>
  )
}
