// filename: components/ui/scroll-area.tsx
export function ScrollArea({
    children,
    className,
    height = 120,
  }: {
    children: React.ReactNode
    className?: string
    height?: number
  }) {
    return (
      <div
        className={className}
        style={{
          maxHeight: height,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>
    )
  }