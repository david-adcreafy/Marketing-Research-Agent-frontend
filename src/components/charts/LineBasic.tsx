// filename: components/charts/LineBasic.tsx
"use client"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

export default function LineBasic({ data, x = "t", y = "v" }: { data: any[]; x?: string; y?: string }) {
  return (
    <div className="h-44 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey={x} hide />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey={y} stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}