/**
 * Design tokens — JavaScript/TypeScript mirror.
 *
 * globals.css is the source of truth for anything Tailwind can consume
 * directly (colors, type scale, radius, shadows, breakpoints, containers).
 * This file exists ONLY for the subset of tokens that non-CSS libraries
 * need as real JS values rather than CSS custom properties:
 *
 *  - GSAP timelines/tweens take numeric durations and easing functions,
 *    not `var(--duration-base)` strings.
 *  - Framer Motion `transition` objects take numbers/arrays, not CSS vars.
 *  - React Three Fiber / custom cursor / portals need numeric z-index
 *    ordering to coordinate with the DOM stacking context.
 *  - Responsive JS logic (media query hooks, canvas resize thresholds)
 *    needs breakpoint values as numbers, not `theme('screens.lg')`.
 *
 * Keep every value here in sync with app/globals.css. Nothing in this file
 * renders UI — it is pure data.
 */

/** Motion durations, in seconds (Framer Motion) and ms (GSAP/setTimeout).
 *  Mirrors --duration-* in globals.css. */
export const duration = {
  instant: 0.1,
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  slower: 0.6,
  slowest: 0.9,
} as const;

export const durationMs = {
  instant: 100,
  fast: 150,
  base: 250,
  slow: 400,
  slower: 600,
  slowest: 900,
} as const;

/** Easing curves as cubic-bezier arrays — the exact numeric form of the
 *  --ease-* custom properties in globals.css. Usable directly by both
 *  Framer Motion (`ease: easing.outExpo`) and GSAP
 *  (`ease: "cubic-bezier(0.16, 1, 0.3, 1)"` — use `easingCss` for that). */
export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutQuart: [0.77, 0, 0.175, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
};

/** Same curves as CSS strings, for GSAP (which wants a string/CSS
 *  cubic-bezier or its own named eases, not an array). */
export const easingCss = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  outQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
  inOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

/** Semantic z-index scale. Mirrors --z-* in globals.css. Import this
 *  wherever a stacking decision is made in JS (inline styles, R3F canvas
 *  wrapper, custom cursor, portaled overlays) so DOM and JS layers can
 *  never silently drift out of sync. */
export const zIndex = {
  behind: -1,
  base: 0,
  content: 10,
  sticky: 20,
  header: 30,
  overlay: 40,
  drawer: 50,
  modal: 60,
  popover: 70,
  tooltip: 80,
  toast: 90,
  cursor: 100,
  loader: 110,
} as const;

/** Breakpoints in px. Mirrors Tailwind's defaults plus the custom 3xl
 *  step defined via --breakpoint-3xl in globals.css. For use in JS-side
 *  media query hooks (e.g. useMediaQuery) or R3F/canvas resize logic —
 *  never hardcode a breakpoint number outside this object. */
export const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;

/** Named container max-widths in px. Mirrors --container-* in
 *  globals.css. Useful when a JS-measured layout calculation (e.g. a
 *  canvas or SVG viewBox) needs to match a content column's CSS width. */
export const container = {
  narrow: 768,
  content: 1200,
  wide: 1440,
  fullBleed: 1920,
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;
export type ZIndexToken = keyof typeof zIndex;
export type BreakpointToken = keyof typeof breakpoint;
export type ContainerToken = keyof typeof container;