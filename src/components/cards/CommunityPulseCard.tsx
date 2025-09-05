// filename: components/cards/CommunityPulseCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPulseCard({
  topic,
  posts,
}: {
  topic: string
  posts: Array<{ title: string; link: string; up: number; comments: number }>
}) {
  return (
    <Card>
      <CardHeader><CardTitle>社区讨论脉搏 · {topic}</CardTitle></CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {posts.map((p, i)=>(
            <li key={i} className="text-sm">
              <a href={p.link} className="text-primary underline">{p.title}</a>
              <div className="text-xs text-muted-foreground">👍 {p.up} · 💬 {p.comments}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}