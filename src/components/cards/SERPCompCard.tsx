// filename: components/cards/SERPCompCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle, CardSub } from "@/components/ui/card"
import BarMini from "@/components/charts/BarMini"
import LineBasic from "@/components/charts/LineBasic"

export default function SERPCompCard({
  keyword,
  region,
  serpShare,
  trend,
}: {
  keyword: string
  region: string
  serpShare: Array<{ name: string; value: number }>
  trend: any[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SERP 竞争格局</CardTitle>
        <CardSub>{keyword} · {region}</CardSub>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="text-sm font-medium mb-1">竞品可见度（占比）</div>
          <BarMini data={serpShare} />
        </div>
        <div>
          <div className="text-sm font-medium mb-1">热度趋势</div>
          <LineBasic data={trend} />
        </div>
      </CardContent>
    </Card>
  )
}