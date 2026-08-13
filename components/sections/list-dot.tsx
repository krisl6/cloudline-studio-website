/** Replaces DoodleCheck as a checklist bullet. A plain dot avoids implying
 * a verification claim ("check" reads as "verified"), which this site's
 * proof policy (requirement.md §4) is specifically careful about. */
export function ListDot({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`size-1.5 shrink-0 rounded-full bg-primary ${className}`} />
}
