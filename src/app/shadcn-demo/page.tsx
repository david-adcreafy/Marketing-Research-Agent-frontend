"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardSub } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ShadcnDemo() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">shadcn/ui 组件演示</h1>
          <p className="text-muted-foreground">
            展示如何在营销研究仪表板中使用 shadcn/ui 组件
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* 按钮示例 */}
      <Card>
        <CardHeader>
          <CardTitle>按钮组件</CardTitle>
          <CardSub>不同样式和大小的按钮</CardSub>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>默认按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="destructive">危险按钮</Button>
          <Button variant="outline">轮廓按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="link">链接按钮</Button>
        </CardContent>
      </Card>

      {/* 徽章示例 */}
      <Card>
        <CardHeader>
          <CardTitle>徽章组件</CardTitle>
          <CardSub>用于显示状态和标签</CardSub>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge>默认</Badge>
          <Badge className="border-green-200 bg-green-50 text-green-700">次要</Badge>
          <Badge className="border-red-200 bg-red-50 text-red-700">错误</Badge>
          <Badge className="border-gray-200 bg-white text-gray-700">轮廓</Badge>
        </CardContent>
      </Card>

      {/* 表单示例 */}
      <Card>
        <CardHeader>
          <CardTitle>表单组件</CardTitle>
          <CardSub>输入框和选择器</CardSub>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="搜索关键词..." className="flex-1" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择地区" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">美国</SelectItem>
                <SelectItem value="cn">中国</SelectItem>
                <SelectItem value="jp">日本</SelectItem>
                <SelectItem value="kr">韩国</SelectItem>
              </SelectContent>
            </Select>
            <Button>搜索</Button>
          </div>
        </CardContent>
      </Card>

      {/* 标签页示例 */}
      <Card>
        <CardHeader>
          <CardTitle>标签页组件</CardTitle>
          <CardSub>用于组织不同类型的数据</CardSub>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="analytics">分析</TabsTrigger>
              <TabsTrigger value="reports">报告</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总收入</CardTitle>
                    <Badge className="border-green-200 bg-green-50 text-green-700">+20.1%</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">¥45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      相比上月 +20.1%
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">订阅数</CardTitle>
                    <Badge className="border-green-200 bg-green-50 text-green-700">+180</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      相比上月 +180 个
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>分析数据</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>这里可以放置图表和分析数据</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>报告</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>这里可以放置报告内容</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 表格示例 */}
      <Card>
        <CardHeader>
          <CardTitle>数据表格</CardTitle>
          <CardSub>展示营销数据的表格</CardSub>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>关键词</TableHead>
                <TableHead>搜索量</TableHead>
                <TableHead>CPC</TableHead>
                <TableHead>竞争度</TableHead>
                <TableHead className="text-right">趋势</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">clean beauty</TableCell>
                <TableCell>12,500</TableCell>
                <TableCell>¥2.45</TableCell>
                <TableCell>
                  <Badge className="border-yellow-200 bg-yellow-50 text-yellow-700">中等</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="border-green-200 bg-green-50 text-green-700">↑ 15%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">organic skincare</TableCell>
                <TableCell>8,900</TableCell>
                <TableCell>¥3.21</TableCell>
                <TableCell>
                  <Badge className="border-red-200 bg-red-50 text-red-700">高</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="border-red-200 bg-red-50 text-red-700">↓ 5%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">natural cosmetics</TableCell>
                <TableCell>6,700</TableCell>
                <TableCell>¥1.89</TableCell>
                <TableCell>
                  <Badge className="border-gray-200 bg-white text-gray-700">低</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="border-green-200 bg-green-50 text-green-700">↑ 22%</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
