// filename: components/cards/TopVideosCTRCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VideoItem } from "@/lib/type"

export default function TopVideosCTRCard({ videos }: { videos: VideoItem[] }) {
  const getCTRBadge = (ctr: number) => {
    if (ctr >= 5) return <Badge className="border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">{ctr}% CTR</Badge>
    if (ctr >= 3) return <Badge className="border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">{ctr}% CTR</Badge>
    if (ctr >= 1) return <Badge className="border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">{ctr}% CTR</Badge>
    return <Badge className="border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">{ctr}% CTR</Badge>
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>热门视频 Top5 · 互动 & CTR 峰值</CardTitle>
        <Button variant="outline" size="sm">
          查看全部
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {videos.slice(0,5).map((v, i)=>(
          <div key={v.id} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
              {i+1}
            </div>
            <img 
              src={v.thumb} 
              className="h-16 w-28 rounded-lg object-cover shadow-sm" 
              alt={v.title}
            />
            <div className="min-w-0 flex-1 space-y-1">
              <div className="truncate text-sm font-medium">{v.title}</div>
              <div className="text-xs text-muted-foreground">{v.author}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>❤ {formatNumber(v.likes)}</span>
                <span>💬 {formatNumber(v.comments)}</span>
                <span>↗ {formatNumber(v.shares)}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {v.ctr && getCTRBadge(v.ctr)}
              {v.ctrPeakSec !== undefined && (
                <Badge className="border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  峰值 {v.ctrPeakSec}s
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}