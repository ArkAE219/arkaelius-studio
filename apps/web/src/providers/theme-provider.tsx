"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Wraps next-themes' provider with the project's fixed configuration
 * rather than leaving these options to be re-decided at every call site.
 *
 * Configuration rationale:
 * - `attribute="class"` — globals.css defines dark-mode overrides via
 *   `@custom-variant dark (&:where(.dark, .dark *))`, i.e. it expects a
 *   literal `.dark` class on <html>, not a `data-theme` attribute.
 * - `defaultTheme="system"` + `enableSystem` — per the brief, light mode
 *   is primary, but a first-time visitor's OS preference should still be
 *   respected rather than forcing light on everyone.
 * - `disableTransitionOnChange` — without this, next-themes' class swap
 *   makes every CSS `transition` on the page (including ones unrelated to
 *   color) briefly fire, causing a visible flash/flicker across the UI at
 *   the moment the theme changes. Disabling it is the standard fix.
 * - `enableColorScheme` — sets the CSS `color-scheme` the browser uses for
 *   native form controls/scrollbars, matching what globals.css already
 *   sets manually on `html`/`html.dark` (belt-and-suspenders; next-themes
 *   applies this before hydration, closing any gap our own CSS can't).
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}