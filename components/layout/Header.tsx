"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import { QUOTE_FORM_URL } from "@/lib/site"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedHref, setMobileExpandedHref] = useState<string | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.caseStudies, href: "/case-studies" },
    {
      name: t.nav.events,
      href: "/events",
      dropdown: [
        { name: "All Events", href: "/events" },
        { name: "AI Automations, AEO & SEO: Masterclass", href: "/events/ai-automations-aeo-seo" },
      ],
    },
    { name: t.nav.clientResults, href: "/client-results" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-background/90 shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" aria-label="CloudLine Studio - Home">
          <div className="size-8 rounded-lg overflow-hidden">
            {/* Light mode: white-bg mark (bg blends with header) */}
            <Image
              src="/cloudline_logo.png"
              alt="CloudLine Studio"
              width={32}
              height={32}
              className="w-full h-full object-cover dark:hidden"
            />
            {/* Dark mode: navy icon (self-contained, readable on dark bg) */}
            <Image
              src="/cloudline_logo_navy.png"
              alt="CloudLine Studio"
              width={32}
              height={32}
              className="w-full h-full object-cover hidden dark:block"
            />
          </div>
          <span className="font-display font-semibold tracking-tight text-foreground">CloudLine Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="w-64 rounded-xl border border-border bg-card p-1.5 shadow-[0_20px_50px_-30px_rgba(20,30,55,0.4)]">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              asChild
            >
              <Link href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
                {t.nav.chat}
              </Link>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border-t border-border">
              <div className="container px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between py-3 px-4 text-base font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/50 rounded-lg border border-transparent hover:border-border"
                            onClick={() =>
                              setMobileExpandedHref((prev) => (prev === item.href ? null : item.href))
                            }
                            aria-expanded={mobileExpandedHref === item.href}
                          >
                            {item.name}
                            <ChevronDown
                              className={`size-4 transition-transform ${mobileExpandedHref === item.href ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpandedHref === item.href && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col space-y-1 py-1 pl-8 pr-4">
                                  {item.dropdown.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      className="block py-2 px-4 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/50 rounded-lg"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-base font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/50 rounded-lg border border-transparent hover:border-border"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <div className="pt-4 border-t border-border mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <LanguageToggle />
                      <ThemeToggle />
                    </div>
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
                      <Link href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
                        {t.nav.chat}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
