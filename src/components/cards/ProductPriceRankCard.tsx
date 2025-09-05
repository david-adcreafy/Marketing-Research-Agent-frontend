// filename: components/cards/ProductPriceRankCard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ProductItem } from "@/lib/type"

export default function ProductPriceRankCard({ items }: { items: ProductItem[] }) {
  const getRankBadge = (rank: number | null) => {
    if (!rank) return <Badge className="border-gray-500/20 bg-gray-500/10 text-gray-600 dark:text-gray-400">-</Badge>
    if (rank <= 3) return <Badge className="border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">#{rank}</Badge>
    if (rank <= 10) return <Badge className="border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">#{rank}</Badge>
    return <Badge className="border-gray-500/20 bg-gray-500/10 text-gray-600 dark:text-gray-400">#{rank}</Badge>
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) return <Badge className="border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">{rating} ⭐</Badge>
    if (rating >= 4.0) return <Badge className="border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">{rating} ⭐</Badge>
    if (rating >= 3.5) return <Badge className="border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">{rating} ⭐</Badge>
    return <Badge className="border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">{rating} ⭐</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>产品列表 · 价格区间 · 排名变化</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>产品</TableHead>
              <TableHead>价格</TableHead>
              <TableHead>评分</TableHead>
              <TableHead className="text-right">排名</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(p=>(
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell className="font-mono">${p.price.toFixed(2)}</TableCell>
                <TableCell>{getRatingBadge(p.rating)}</TableCell>
                <TableCell className="text-right">{getRankBadge(p.rank ?? null)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}