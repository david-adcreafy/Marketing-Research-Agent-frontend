// filename: components/ui/badge.tsx
import { clsx } from "clsx"

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}