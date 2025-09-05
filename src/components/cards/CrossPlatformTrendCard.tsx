// filename: components/cards/CrossPlatformTrendCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LineBasic from "@/components/charts/LineBasic"

export default function CrossPlatformTrendCard({
  topic,
  tiktok,
  instagram,
}: {
  topic: string
  tiktok: any[]
  instagram: any[]
}) {
  return (
    <Card>
      <CardHeader><CardTitle>跨平台趋势对比 · {topic}</CardTitle></CardHeader>
      <CardContent className="grid gap-3">
        <div>
          <div className="text-sm font-medium mb-1 text-[#111]">TikTok</div>
          <LineBasic data={tiktok}/>
        </div>
        <div>
          <div className="text-sm font-medium mb-1 text-[#111]">Instagram</div>
          <LineBasic data={instagram}/>
        </div>
      </CardContent>
    </Card>
  )
}