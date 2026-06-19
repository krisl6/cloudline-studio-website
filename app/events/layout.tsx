import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Curated, all-inclusive events that let customers try your product and give instant feedback, tastings, workshops, and pop-ups designed and hosted end to end.",
  alternates: { canonical: "/events/" },
  openGraph: {
    title: "Events | CloudLine Studio",
    description:
      "Curated, all-inclusive events that put your product in people's hands, designed and hosted end to end.",
    url: "/events/",
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
