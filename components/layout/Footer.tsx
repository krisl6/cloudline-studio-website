"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const currentYear = new Date().getFullYear()
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
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                CloudLine Studio
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="https://wa.link/fwi8af" target="_blank" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {t.footer.services.map((label, i) => (
                <li key={label}>
                  <Link href={serviceLinks[i]} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-2">
              {t.footer.company.map((label, i) => (
                <li key={label}>
                  <Link href={companyLinks[i]} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@cloudline-studio.com</li>
              <li className="text-sm text-muted-foreground">+60 11-2775 5215</li>
              <li className="text-sm text-muted-foreground">{t.footer.location}</li>
              <li className="pt-2">
                <Button size="sm" className="rounded-full" asChild>
                  <Link href="/contact">{t.footer.getInTouch}</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} CloudLine Studio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
