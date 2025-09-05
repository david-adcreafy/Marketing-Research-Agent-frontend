"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ThemeToggle } from "@/components/theme-toggle"
import BarMini from "@/components/charts/BarMini"
import LineBasic from "@/components/charts/LineBasic"
import reportData from "@/lib/report-data"

export default function ReportPage() {
  // 使用报告数据
  const {
    marketShare: marketShareData,
    penetrationTrend: penetrationTrendData,
    cpmTrend: cpmTrendData,
    channelDistribution: channelData,
    roiComparison: roiData,
    keyMetrics
  } = reportData

  return (
    <div className="min-h-screen bg-background">
      {/* 页面头部 */}
      <div className="border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                  2025年研究报告
                </Badge>
                <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                  最新数据
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Apple AirPods 美国市场广告竞争分析
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                深度研究 CPM、投放渠道与 ROI 表现，揭示苹果如何在激烈竞争中维持市场主导地位
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm text-muted-foreground">发布日期：2025年9月5日</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">数据来源：Counterpoint Research, CIRP, SplitMetrics</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">下载报告</Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* 执行摘要 */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              执行摘要
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              本报告针对 2025 年 Apple AirPods 在美国市场的广告竞争情况展开深度分析，聚焦广告 CPM（千次展示成本）、投放渠道策略及投资回报率（ROI）三大核心维度。
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{keyMetrics.penetrationRate}%</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">iPhone用户渗透率回升</div>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">${keyMetrics.revenueProjection2026}亿</div>
                <div className="text-sm text-green-700 dark:text-green-300">2026年预计收入突破</div>
              </div>
              <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{keyMetrics.salesGrowthChange}%</div>
                <div className="text-sm text-orange-700 dark:text-orange-300">2025年销售增长下降</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="market" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="market">市场格局</TabsTrigger>
            <TabsTrigger value="channels">投放渠道</TabsTrigger>
            <TabsTrigger value="cpm">CPM分析</TabsTrigger>
            <TabsTrigger value="roi">ROI评估</TabsTrigger>
            <TabsTrigger value="outlook">未来展望</TabsTrigger>
          </TabsList>

          {/* 市场格局 */}
          <TabsContent value="market" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    全球 TWS 耳机市场份额
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <BarMini data={marketShareData} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">AirPods 市场占有率</span>
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                        {keyMetrics.globalMarketShare}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      在美国及欧盟市场保持主导地位，面临小米、JBL 等低成本品牌竞争
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📈</span>
                    iPhone 用户渗透率趋势
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <LineBasic data={penetrationTrendData} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">2025年渗透率</span>
                      <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                        {keyMetrics.penetrationRate}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      从 57% 回升至 59%，表明用户忠诚度与交叉销售能力仍具优势
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">⚠️</span>
                  市场挑战与机遇
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">主要挑战</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>市场饱和：</strong>高渗透率导致新增用户增速放缓</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>定价压力：</strong>高端定价在通胀环境下面临压力</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>竞品创新：</strong>Bose 等品牌在降噪技术领域构成威胁</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">核心优势</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>生态整合：</strong>与 iPhone 等设备无缝连接体验</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>品牌忠诚度：</strong>用户忠诚度与重复购买率高</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>技术创新：</strong>空间音频、主动降噪等领先技术</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 投放渠道 */}
          <TabsContent value="channels" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📱</span>
                    广告投放渠道分布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <BarMini data={channelData} />
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    搜索广告占比最高，社交媒体紧随其后
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    核心营销策略
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 mt-1">
                        设计
                      </Badge>
                      <div>
                        <div className="font-medium text-sm">极简主义设计</div>
                        <div className="text-xs text-muted-foreground">突出无缝配对、舒适佩戴等体验优势</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 mt-1">
                        情感
                      </Badge>
                      <div>
                        <div className="font-medium text-sm">情感品牌化</div>
                        <div className="text-xs text-muted-foreground">通过生活方式营销强化品牌情感连接</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400 mt-1">
                        价值
                      </Badge>
                      <div>
                        <div className="font-medium text-sm">价值定价策略</div>
                        <div className="text-xs text-muted-foreground">强调独特价值而非直接竞争价格</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  渠道效果对比分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>渠道类型</TableHead>
                      <TableHead>优势</TableHead>
                      <TableHead>挑战</TableHead>
                      <TableHead>适用场景</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">社交媒体</TableCell>
                      <TableCell>高互动率，年轻用户覆盖广</TableCell>
                      <TableCell>CPM 上涨，竞争激烈</TableCell>
                      <TableCell>品牌认知与用户互动</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">搜索广告</TableCell>
                      <TableCell>高转化率，意图明确</TableCell>
                      <TableCell>关键词成本高</TableCell>
                      <TableCell>转化与销售驱动</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">视频广告</TableCell>
                      <TableCell>沉浸式体验，品牌记忆度高</TableCell>
                      <TableCell>制作与投放成本高</TableCell>
                      <TableCell>产品功能演示与品牌建设</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">电商平台</TableCell>
                      <TableCell>直接转化，数据可追踪</TableCell>
                      <TableCell>平台佣金与广告费挤压利润</TableCell>
                      <TableCell>销售促进与库存清理</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">线下体验</TableCell>
                      <TableCell>增强用户体验，推动即时购买</TableCell>
                      <TableCell>覆盖范围有限，成本高</TableCell>
                      <TableCell>高端用户与新品推广</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CPM 分析 */}
          <TabsContent value="cpm" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    CPM 趋势变化
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <LineBasic data={cpmTrendData} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">2025年平均CPM</span>
                      <Badge className="bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400">
                        ${keyMetrics.avgCpm2025}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      较2024年上涨约{keyMetrics.cpmGrowthRate}%，主要受竞争加剧和渠道通胀影响
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📈</span>
                    分渠道 CPM 对比
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                      <div>
                        <div className="font-medium text-sm">搜索广告</div>
                        <div className="text-xs text-muted-foreground">高端关键词成本更高</div>
                      </div>
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                        $20-$30
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                      <div>
                        <div className="font-medium text-sm">视频广告</div>
                        <div className="text-xs text-muted-foreground">取决于视频长度与受众定位</div>
                      </div>
                      <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400">
                        $15-$25
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/50">
                      <div>
                        <div className="font-medium text-sm">社交媒体</div>
                        <div className="text-xs text-muted-foreground">较2024年上涨10-15%</div>
                      </div>
                      <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                        $12-$18
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50">
                      <div>
                        <div className="font-medium text-sm">电商广告</div>
                        <div className="text-xs text-muted-foreground">转化成本(CPA)较低</div>
                      </div>
                      <Badge className="bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400">
                        $8-$12
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🔍</span>
                  CPM 驱动因素分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/50">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">20-30%</div>
                    <div className="font-medium text-sm mb-1">季节性波动</div>
                    <div className="text-xs text-muted-foreground">假日季(Q4)CPM普遍上涨</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">15-20%</div>
                    <div className="font-medium text-sm mb-1">新品发布</div>
                    <div className="text-xs text-muted-foreground">AirPods Pro 3发布期间临时上涨</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/50">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">3-4倍</div>
                    <div className="font-medium text-sm mb-1">精准定位</div>
                    <div className="text-xs text-muted-foreground">iPhone用户转化率比安卓用户高</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ROI 评估 */}
          <TabsContent value="roi" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">💎</span>
                    分渠道 ROI 表现
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {roiData.map((item, index) => (
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
                  <div className="mt-4 text-xs text-muted-foreground">
                    搜索广告ROI最高达5:1，因用户意图明确
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    ROI 优势因素
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                      <div className="font-medium text-sm text-green-700 dark:text-green-300 mb-1">高转化率</div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        Apple生态用户购买意愿强，iPhone用户转化率比安卓用户高3-4倍
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                      <div className="font-medium text-sm text-blue-700 dark:text-blue-300 mb-1">长生命周期价值</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        用户忠诚度高，重复购买与配件销售贡献长期收益
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
                      <div className="font-medium text-sm text-purple-700 dark:text-purple-300 mb-1">交叉销售效应</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">
                        AirPods广告常推动iPhone、Apple Watch等相关产品销售
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  ROI 优化策略
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">📊</span>
                      <div className="font-medium text-sm">数据驱动归因</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      使用 Apple Search Ads 与 SKAdNetwork 精准追踪转化
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🎨</span>
                      <div className="font-medium text-sm">动态创意优化</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      针对不同受众展示个性化广告内容(DCO)
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">📅</span>
                      <div className="font-medium text-sm">季节性调整</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      加大高ROI渠道在旺季的预算分配
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 未来展望 */}
          <TabsContent value="outlook" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    当前挑战
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
                    <div className="font-medium text-sm text-red-700 dark:text-red-300 mb-1">广告成本持续上升</div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      CPM上涨可能挤压利润，尤其面对低价竞品
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                    <div className="font-medium text-sm text-orange-700 dark:text-orange-300 mb-1">用户获取难度增加</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">
                      市场饱和导致新用户获取成本(CAC)攀升
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <div className="font-medium text-sm text-yellow-700 dark:text-yellow-300 mb-1">隐私政策影响</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400">
                      iOS隐私更新限制数据追踪，增加广告优化难度
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    未来策略建议
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                    <div className="font-medium text-sm text-blue-700 dark:text-blue-300 mb-1">深化第一方数据利用</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      通过Apple ID与生态系统数据提升定向精度
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
                    <div className="font-medium text-sm text-purple-700 dark:text-purple-300 mb-1">探索新兴渠道</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      如AR/VR广告、influencer合作（尤其针对Z世代）
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                    <div className="font-medium text-sm text-green-700 dark:text-green-300 mb-1">强化内容营销</div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      通过教育性内容提升自然转化
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🔮</span>
                  2026年长期展望
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">预期增长</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">收入增长率</span>
                        <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                          +2.4%
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">累计收入预期</span>
                        <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                          $1000亿+
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">关键驱动因素</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 技术创新：空间音频、健康监测功能</li>
                      <li>• 可持续发展：环保材料与回收计划</li>
                      <li>• 全球化与本地化平衡</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 结论 */}
        <Card className="mt-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className="text-2xl">📝</span>
              研究结论
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2025年，Apple AirPods 在美国市场的广告竞争呈现出<strong>&ldquo;高成本、高回报&rdquo;</strong>的特征。
              尽管 CPM 因竞争加剧而上涨，Apple 通过其强大的品牌生态、精准的渠道策略与高用户忠诚度维持了领先的 ROI。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              未来，通过深化数据驱动营销、探索新兴渠道及优化成本结构，Apple 有望在巩固市场地位的同时实现可持续增长。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
