// filename: components/charts/Sparkline.tsx
"use client"
import { ResponsiveContainer, LineChart, Line } from "recharts"

export default function Sparkline({ data, dataKey = "v" }: { data: any[]; dataKey?: string }) {
  return (
    <div className="h-10 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey={dataKey} stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}