import type { SVGProps } from "react"

/**
 * Hand-drawn, single-stroke doodle icons.
 * Elegant, slightly imperfect line work that uses `currentColor`,
 * so colour is controlled by the parent (e.g. text-primary).
 */

type DoodleProps = SVGProps<SVGSVGElement>

function Svg({ children, ...props }: DoodleProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

/* Digital Marketing — megaphone */
export function DoodleMegaphone(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 10.3c-.4.1-.5.5-.5.9v1.9c0 .4.2.8.6.9l1.9.5v2.3c0 .5.4.9.9.9h.6c.5 0 .9-.4.9-.9v-1.9l9 2.4c.5.1 1-.3 1-.8V8.1c0-.6-.6-1-1.1-.8L3.6 10.3Z" />
      <path d="M18.6 9.4c1.3.7 1.3 4.6 0 5.3" />
    </Svg>
  )
}

/* Business Transformation — circular transform arrows */
export function DoodleTransform(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M5 9.2A7.2 7.2 0 0 1 16.4 6.5" />
      <path d="M13.7 7.1l2.6-.4.2-2.6" />
      <path d="M19 14.8A7.2 7.2 0 0 1 7.6 17.5" />
      <path d="M10.3 16.9l-2.6.4-.2 2.6" />
    </Svg>
  )
}

/* Operations — gear / settings */
export function DoodleGear(props: DoodleProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.4v2.2M12 18.4v2.2M3.4 12h2.2M18.4 12h2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </Svg>
  )
}

/* Strategy / dream clients — bullseye */
export function DoodleTarget(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M20 12a8 8 0 1 1-5.4-7.6" />
      <path d="M16 8.3a4.4 4.4 0 1 0 1.1 2" />
      <circle cx="12" cy="12" r="1.1" />
    </Svg>
  )
}

/* Predictable growth — rising chart */
export function DoodleGrowth(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M4.2 4.5v15h15" />
      <path d="M7 15.5l3.2-3.6 3 2 4.6-6" />
      <path d="M16.1 7.7l1.7-.6.3 1.8" />
    </Svg>
  )
}

/* Premium pricing — stacked coins */
export function DoodleCoins(props: DoodleProps) {
  return (
    <Svg {...props}>
      <ellipse cx="9" cy="6.8" rx="4.8" ry="2.2" />
      <path d="M4.2 6.8v3.8c0 1.2 2.2 2.2 4.8 2.2s4.8-1 4.8-2.2V6.8" />
      <ellipse cx="15" cy="13.6" rx="4.8" ry="2.2" />
      <path d="M10.2 13.6v3.8c0 1.2 2.2 2.2 4.8 2.2s4.8-1 4.8-2.2v-3.8" />
    </Svg>
  )
}

/* Faster sales — lightning bolt */
export function DoodleBolt(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M12.8 3.4 6.2 13h4.6l-1 7.6L16.4 9.8H11.8l1-6.4Z" />
    </Svg>
  )
}

/* Recognition — trophy */
export function DoodleTrophy(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M8 4.2h8v3.1a4 4 0 0 1-8 0V4.2Z" />
      <path d="M8 5.3H5.4c0 2.1.6 3.3 2.9 3.9" />
      <path d="M16 5.3h2.6c0 2.1-.6 3.3-2.9 3.9" />
      <path d="M12 11.4v2.8" />
      <path d="M9.2 19.4h5.6" />
      <path d="M10 19.4c0-1.5.8-2.5 2-3 1.2.5 2 1.5 2 3" />
    </Svg>
  )
}

/* Referrals / loyalty — heart */
export function DoodleHeart(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M12 19.3s-6.6-4.2-8.3-8C2.4 8.5 4 5.6 6.8 5.6c1.7 0 2.8 1 3.4 1.9.6-.9 1.7-1.9 3.4-1.9 2.8 0 4.4 2.9 3.1 5.7-1.7 3.8-8.1 8-8.1 8Z" />
    </Svg>
  )
}

/* Diagnose — magnifier */
export function DoodleSearch(props: DoodleProps) {
  return (
    <Svg {...props}>
      <circle cx="10.6" cy="10.6" r="6" />
      <path d="M15.2 15.2 19.6 19.6" />
    </Svg>
  )
}

/* Design / craft — pen */
export function DoodlePen(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M5 19.2l1.1-3.6L16.1 5.4a1.8 1.8 0 0 1 2.6 2.6L8.6 18.1 5 19.2Z" />
      <path d="M14.3 7.3l2.6 2.6" />
    </Svg>
  )
}

/* Deliver / launch — rocket */
export function DoodleRocket(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.2c3 1.6 4.6 4.7 4.6 8.2L12 16.3l-4.6-4.9c0-3.5 1.6-6.6 4.6-8.2Z" />
      <circle cx="12" cy="9" r="1.3" />
      <path d="M7.5 11.2 5 12.3l1.6 3M16.5 11.2 19 12.3l-1.6 3" />
      <path d="M10 16.6c-.6 2 -.3 3.6 2 4.6 2.3-1 2.6-2.6 2-4.6" />
    </Svg>
  )
}

/* List checks — hand-drawn tick */
export function DoodleCheck(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M4.8 12.6l4 4.1 10-11" />
    </Svg>
  )
}

/* Quality / delight — sparkle */
export function DoodleSparkle(props: DoodleProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.8c.4 3.4 1.9 5.9 5.4 6.4-3.5.5-5 3-5.4 6.4-.4-3.4-1.9-5.9-5.4-6.4 3.5-.5 5-3 5.4-6.4Z" />
      <path d="M18.4 15.2c.2 1.4.8 2.3 2.2 2.6-1.4.3-2 1.2-2.2 2.6-.2-1.4-.8-2.3-2.2-2.6 1.4-.3 2-1.2 2.2-2.6Z" />
    </Svg>
  )
}
