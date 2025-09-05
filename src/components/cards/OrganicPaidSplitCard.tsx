// filename: components/cards/OrganicPaidSplitCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BarMini from "@/components/charts/BarMini"
import { LandingPage } from "@/lib/types"

export default function OrganicPaidSplitCard({
  split,
  topLanding,
}: {
  split: Array<{ name: string; value: number }>
  topLanding: LandingPage[]
}) {
  return (
    <Card>
      <CardHeader><CardTitle>自然 vs 广告占比 & 热门落地页</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <BarMini data={split}/>
        <div>
          <div className="text-sm font-medium mb-2">Top 落地页</div>
          <ul className="space-y-1 text-sm">
            {topLanding.map((p, i)=>(
              <li key={i} className="flex items-center justify-between">
                <a className="truncate text-primary underline" href={p.url}>{p.url}</a>
                <span className="text-muted-foreground">{p.share}%</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}