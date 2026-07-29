"use client";

import { ThemeProvider } from "./theme-provider";

/**
 * Single composition point for every app-wide provider. `layout.tsx`
 * mounts only this one component, rather than importing and nesting
 * providers directly — so that as the build grows (Lenis smooth-scroll
 * context, the animated-cursor context, a query client, etc.) each new
 * provider is added here, in one place, without ever touching
 * `layout.tsx` again.
 *
 * Deliberately a client component ("use client") since every provider it
 * composes needs client-side state/context; `layout.tsx` itself stays a
 * server component and just renders this boundary around `children`.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}