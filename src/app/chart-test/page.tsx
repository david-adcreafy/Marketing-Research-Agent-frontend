"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BarMini from "@/components/charts/BarMini"
import LineBasic from "@/components/charts/LineBasic"

export default function ChartTestPage() {
  const testBarData = [
    { name: "搜索广告", value: 5.0 },
    { name: "电商广告", value: 4.0 },
    { name: "社交媒体", value: 3.0 },
    { name: "视频广告", value: 2.5 }
  ]

  const testLineData = [
    { t: "2023", v: 10 },
    { t: "2024", v: 14 },
    { t: "2025", v: 16 }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold">图表测试页面</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>柱状图测试</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <BarMini data={testBarData} />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  数据：{JSON.stringify(testBarData)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>折线图测试</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <LineBasic data={testLineData} />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  数据：{JSON.stringify(testLineData)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>自定义 ROI 显示</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testBarData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-green-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 rounded-full ${
                      index === 0 ? 'bg-green-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                    }`} style={{width: `${item.value * 20}px`}}></div>
                    <Badge className={`${
                      index === 0 ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' :
                      index === 1 ? 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400' :
                      index === 2 ? 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400' :
                      'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400'
                    }`}>
                      {item.value}:1
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
