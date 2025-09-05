// filename: components/cards/ReviewInsightCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BarMini from "@/components/charts/BarMini"
import { ReviewAgg } from "@/lib/type"

export default function ReviewInsightCard({ agg }: { agg: ReviewAgg }) {
  const emotion = [
    { name: "正面", value: agg.positive },
    { name: "中立", value: agg.neutral },
    { name: "负面", value: agg.negative },
  ]
  return (
    <Card>
      <CardHeader><CardTitle>评论情绪 & 痛点/卖点</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <BarMini data={emotion}/>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium mb-1">Top 痛点</div>
            <ul className="list-disc pl-5 space-y-1">
              {agg.topPainPoints.map((t,i)=>(<li key={i}>{t}</li>))}
            </ul>
          </div>
          <div>
            <div className="font-medium mb-1">Top 卖点</div>
            <ul className="list-disc pl-5 space-y-1">
              {agg.topSellingPoints.map((t,i)=>(<li key={i}>{t}</li>))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}