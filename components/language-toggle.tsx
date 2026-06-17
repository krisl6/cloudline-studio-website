"use client"

import { LANGUAGES } from "@/lib/translations"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-muted p-0.5 text-xs font-medium"
      role="group"
      aria-label="Select language"
    >
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2.5 py-1 transition-colors duration-200 ${
            lang === l.code
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
