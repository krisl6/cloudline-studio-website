import { cn } from "@/lib/utils"

/** Replaces the decorative doodle icons on service/outcome/process cards
 * with a plain numeral, matching the reference sites' text-first restraint
 * (no illustrative iconography, only functional UI icons remain). */
export function NumberedIndex({
  index,
  variant = "default",
  className = "",
}: {
  index: number
  variant?: "default" | "outline-circle"
  className?: string
}) {
  const label = String(index + 1).padStart(2, "0")

  if (variant === "outline-circle") {
    return (
      <span
        className={cn(
          "relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-sm font-semibold text-primary md:mb-5",
          className,
        )}
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 font-display text-lg font-semibold tabular-nums text-primary",
        className,
      )}
    >
      {label}
    </span>
  )
}
