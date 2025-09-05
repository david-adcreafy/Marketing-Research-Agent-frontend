// filename: components/cards/HashtagTrendCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle, CardSub } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Sparkline from "@/components/charts/Sparkline"
import { HashtagBlock } from "@/lib/types"

export default function HashtagTrendCard({ block }: { block: HashtagBlock }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>热门 Hashtag 趋势</CardTitle>
        <CardSub>{block.tag} · {block.region} · {block.window}</CardSub>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-sm font-medium mb-1">趋势曲线</div>
          <Sparkline data={block.trend} />
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Top 视频</div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {block.videos.slice(0,5).map(v => (
              <li key={v.id} className="flex gap-3 items-center">
                <img src={v.thumb} alt={v.title} className="h-14 w-24 rounded-lg object-cover" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{v.title}</div>
                  <div className="text-xs text-muted-foreground">{v.author} · ❤ {v.likes} · 💬 {v.comments} · ↗ {v.shares}</div>
                </div>
                {typeof v.ctr === "number" && <Badge>{v.ctr}% CTR</Badge>}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}