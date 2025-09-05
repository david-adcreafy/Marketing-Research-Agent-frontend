"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ThemeDemo() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* 页面头部 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">深色模式演示</h1>
            <p className="text-muted-foreground">
              展示 shadcn/ui 组件在浅色和深色主题下的效果
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">切换主题：</span>
            <ThemeToggle />
          </div>
        </div>

        {/* 主要内容 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 卡片演示 */}
          <Card>
            <CardHeader>
              <CardTitle>卡片组件</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                这是一个卡片组件，在深色模式下会自动调整颜色。
              </p>
              <div className="flex gap-2">
                <Badge className="border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400">
                  成功
                </Badge>
                <Badge className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400">
                  信息
                </Badge>
                <Badge className="border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
                  错误
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 按钮演示 */}
          <Card>
            <CardHeader>
              <CardTitle>按钮组件</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>默认按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="ghost">幽灵按钮</Button>
              </div>
              <Input placeholder="输入框也会适配主题..." />
            </CardContent>
          </Card>

          {/* 色彩系统演示 */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>色彩系统</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">背景色</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-background border"></div>
                      <span className="text-xs">background</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-card border"></div>
                      <span className="text-xs">card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-muted border"></div>
                      <span className="text-xs">muted</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">文字色</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-foreground border"></div>
                      <span className="text-xs">foreground</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-muted-foreground border"></div>
                      <span className="text-xs">muted-foreground</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">主色调</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-primary border"></div>
                      <span className="text-xs">primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-secondary border"></div>
                      <span className="text-xs">secondary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-accent border"></div>
                      <span className="text-xs">accent</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 使用说明 */}
        <Card>
          <CardHeader>
            <CardTitle>如何使用深色模式</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm space-y-2">
              <p>
                🌟 <strong>自动切换：</strong>系统会根据您的操作系统设置自动选择主题
              </p>
              <p>
                🌙 <strong>手动切换：</strong>点击右上角的主题切换按钮来切换浅色/深色模式
              </p>
              <p>
                🎨 <strong>完美适配：</strong>所有 shadcn/ui 组件都完美支持深色模式
              </p>
              <p>
                💾 <strong>记住偏好：</strong>您的主题选择会被保存，下次访问时自动应用
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
