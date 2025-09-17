import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-lg" role="contentinfo">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CloudLine Studio
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Data-driven marketing solutions that deliver measurable results and drive business growth.
            </p>
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
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#performance-marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services#website-creation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Website Creation</Link></li>
              <li><Link href="/services#seo" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services#influencer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Influencer Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@cloudlinestudio.com</li>
              <li className="text-sm text-muted-foreground">+60 12-345 6789</li>
              <li className="text-sm text-muted-foreground">Kuala Lumpur, Malaysia</li>
              <li className="pt-2">
                <Button size="sm" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} CloudLine Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
