import type { Metadata } from "next"

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
  return children
}
