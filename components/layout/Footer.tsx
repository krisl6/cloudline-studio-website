"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const serviceLinks = [
    "/services#consultation",
    "/services#transformation",
    "/services#synchronization",
    "/services#branding",
    "/services#seo",
  ]
  const companyLinks = ["/about", "/case-studies", "/pricing", "/blog"]

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-lg" role="contentinfo">
      <div className="container px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="space-y-1.5">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                CloudLine Studio
              </span>
            </Link>
            <p className="text-xs text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-2">{t.footer.servicesTitle}</h3>
            <ul className="space-y-1">
              {t.footer.services.map((label, i) => (
                <li key={label}>
                  <Link href={serviceLinks[i]} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-2">{t.footer.companyTitle}</h3>
            <ul className="space-y-1">
              {t.footer.company.map((label, i) => (
                <li key={label}>
                  <Link href={companyLinks[i]} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-2">{t.footer.contactTitle}</h3>
            <ul className="space-y-1">
              <li className="text-xs text-muted-foreground">hello@cloudline-studio.com</li>
              <li className="text-xs text-muted-foreground">+60 11-2775 5215</li>
              <li className="text-xs text-muted-foreground">{t.footer.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
