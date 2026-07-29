import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve conflicting Tailwind utility
 * classes (e.g. `cn("px-2", condition && "px-4")` correctly keeps only
 * `px-4`). This is the standard shadcn/ui utility — every shadcn component
 * imports this exact function from `@/lib/utils`, which is why it lives
 * here rather than in `src/utils/` (that folder is for app-specific helper
 * functions, this one is UI-framework plumbing that shadcn's CLI expects
 * to find at this path).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}