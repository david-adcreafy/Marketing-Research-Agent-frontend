// filename: components/cards/CTRKeyframeCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoItem } from "@/lib/types"
import LineBasic from "@/components/charts/LineBasic"

export default function CTRKeyframeCard({ video, ctrSeries }: { video: VideoItem; ctrSeries: Array<{t:string; v:number}> }) {
  return (
    <Card>
      <CardHeader><CardTitle>CTR 峰值 & 关键帧</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={video.thumb} className="h-16 w-28 rounded-lg object-cover" alt={video.title}/>
          <div className="min-w-0">
            <div className="truncate text-sm font-medium">{video.title}</div>
            <div className="text-xs text-muted-foreground">{video.author}</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-1">CTR 走势（标注峰值秒点）</div>
          <LineBasic data={ctrSeries}/>
          {video.ctrPeakSec !== undefined && (
            <div className="text-xs text-muted-foreground mt-1">峰值出现在第 <b>{video.ctrPeakSec}s</b></div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}