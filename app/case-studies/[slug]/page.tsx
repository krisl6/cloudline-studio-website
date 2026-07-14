import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudiesContent } from "@/components/case-studies-content"
import { SERVICE_SLUGS, slugToPlatform } from "@/lib/case-studies-data"

export function generateStaticParams() {
  return Object.keys(SERVICE_SLUGS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const platform = slugToPlatform(params.slug)
  if (!platform) return {}

  return {
    title: `${platform} Case Studies`,
    description: `Real ${platform} results and case studies from CloudLine Studio.`,
    alternates: { canonical: `/case-studies/${params.slug}/` },
    openGraph: {
      title: `${platform} Case Studies | CloudLine Studio`,
      description: `Real ${platform} results and case studies from CloudLine Studio.`,
      url: `/case-studies/${params.slug}/`,
    },
  }
}

export default function CaseStudySlugPage({ params }: { params: { slug: string } }) {
  const platform = slugToPlatform(params.slug)
  if (!platform) notFound()

  return <CaseStudiesContent platformFilter={platform} />
}
