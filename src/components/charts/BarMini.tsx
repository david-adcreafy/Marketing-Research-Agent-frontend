// filename: components/charts/BarMini.tsx
"use client"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function BarMini({ data, x = "name", y = "value" }: { data: any[]; x?: string; y?: string }) {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey={x} hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey={y} fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}