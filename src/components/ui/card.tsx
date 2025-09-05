// filename: components/ui/card.tsx
import { clsx } from "clsx"

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx("rounded-2xl border border-border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("p-4 pb-2", className)}>{children}</div>
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={clsx("text-base font-semibold text-card-foreground", className)}>{children}</h3>
}

export function CardSub({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={clsx("text-xs text-muted-foreground", className)}>{children}</p>
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("p-4 pt-2", className)}>{children}</div>
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("p-4 pt-0", className)}>{children}</div>
}