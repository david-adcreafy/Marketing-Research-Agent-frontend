"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ThemeToggle } from "@/components/theme-toggle"
import BarMini from "@/components/charts/BarMini"
import LineBasic from "@/components/charts/LineBasic"
import report2Data from "@/lib/report2-data"

export default function Report2Page() {
  // 使用报告数据
  const {
    salesTrend,
    productInterest,
    globalGrowth,
    adMetrics,
    influencerImpact,
    challengesOpportunities,
    keyMetrics
  } = report2Data

  return (
    <div className="min-h-screen bg-background">
      {/* 页面头部 */}
      <div className="border-b bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400">
                  TikTok Shop 德国
                </Badge>
                <Badge className="bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400">
                  #homeorganizer
                </Badge>
                <Badge className="bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                  7天分析
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                TikTok Shop 家居卖家德国市场表现分析
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                深度分析 #homeorganizer 标签在德国市场的销售与广告表现，揭示平台挑战与机遇
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm text-muted-foreground">发布日期：2025年9月5日</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">数据覆盖：近7天</span>
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
        <Card className="mb-8 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              执行摘要
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              德国 TikTok Shop 整体销售额近期出现<strong>异常大幅下滑</strong>，家居类目亦受波及。
              尽管德国市场具备高电商渗透率和良好的短视频购物接受度，但目前面临平台算法调整、市场竞争加剧及跨境物流等多重挑战。
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">-{keyMetrics.salesDrop}%</div>
                <div className="text-sm text-red-700 dark:text-red-300">销售额大幅下滑</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{keyMetrics.ecommerceRate}%</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">德国电商渗透率</div>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">${keyMetrics.globalGMV}亿</div>
                <div className="text-sm text-green-700 dark:text-green-300">全球年度GMV</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="performance">表现分析</TabsTrigger>
            <TabsTrigger value="market">市场背景</TabsTrigger>
            <TabsTrigger value="advertising">广告数据</TabsTrigger>
            <TabsTrigger value="strategy">策略建议</TabsTrigger>
            <TabsTrigger value="outlook">未来展望</TabsTrigger>
          </TabsList>

          {/* 表现分析 */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📉</span>
                    近7天销售额趋势
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <LineBasic data={salesTrend} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">销售额下滑</span>
                      <Badge className="bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400">
                        -{keyMetrics.salesDrop}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      从日均 ${keyMetrics.avgDailySalesBefore} 美元急剧下降至 ${keyMetrics.avgDailySalesNow} 美元
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    德国用户产品兴趣分布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <BarMini data={productInterest} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">家居产品兴趣度</span>
                      <Badge className="bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400">
                        {keyMetrics.userInterestHome}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      62% 用户更关注化妆品、药店或食品类产品，家居类需额外市场教育
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  #homeorganizer 标签表现分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">主要挑战</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>整体销售暴跌：</strong>平台日均销售额下降67-75%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>品类竞争激烈：</strong>用户更偏好快消品类</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>广告效率下降：</strong>算法调整影响ROAS</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">潜在机遇</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>精准定位：</strong>单一标签锁定细分受众</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>内容优势：</strong>实用性与可视化结合</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>增长历史：</strong>美国市场曾实现222%增长</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 市场背景 */}
          <TabsContent value="market" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🌍</span>
                    TikTok Shop 全球增长
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <LineBasic data={globalGrowth} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">年增长率</span>
                      <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                        7倍
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      全球商店数量超过 {keyMetrics.storeCount} 万家
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🇩🇪</span>
                    德国市场特点
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                      <div>
                        <div className="font-medium text-sm">电商渗透率</div>
                        <div className="text-xs text-muted-foreground">欧洲核心电商市场</div>
                      </div>
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                        {keyMetrics.ecommerceRate}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/50">
                      <div>
                        <div className="font-medium text-sm">短视频购物接受度</div>
                        <div className="text-xs text-muted-foreground">低市场教育成本</div>
                      </div>
                      <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                        高
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                      <div>
                        <div className="font-medium text-sm">家居类增长潜力</div>
                        <div className="text-xs text-muted-foreground">美国市场经验</div>
                      </div>
                      <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400">
                        +{keyMetrics.homeGrowthUS}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">⚖️</span>
                  挑战与机遇评估
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challengesOpportunities.map((item, index) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{item.category}</span>
                        <div className="flex gap-4">
                          <span className="text-red-600 dark:text-red-400">挑战 {item.challenge}%</span>
                          <span className="text-green-600 dark:text-green-400">机遇 {item.opportunity}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-red-100 dark:bg-red-950/30 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{width: `${item.challenge}%`}}
                          ></div>
                        </div>
                        <div className="flex-1 bg-green-100 dark:bg-green-950/30 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{width: `${item.opportunity}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 广告数据 */}
          <TabsContent value="advertising" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📈</span>
                    关键广告指标表现
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adMetrics.map((metric, index) => (
                      <div key={metric.name} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            metric.current >= metric.target ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-medium">{metric.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {metric.name === 'ROAS' ? `${metric.current}:1` : 
                               metric.name === 'CPA' ? `$${metric.current}` : 
                               `${metric.current}%`}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              目标: {metric.name === 'ROAS' ? `${metric.target}:1` : 
                                    metric.name === 'CPA' ? `$${metric.target}` : 
                                    `${metric.target}%`}
                            </div>
                          </div>
                          <Badge className={`${
                            metric.current >= metric.target ? 
                            'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' :
                            'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'
                          }`}>
                            {metric.current >= metric.target ? '达标' : '待优化'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">👥</span>
                    影响者营销效果
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <BarMini data={influencerImpact} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">购买决策影响力</span>
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                        {keyMetrics.influencerImpact}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      德国在线购物者表示影响者与品牌合作影响其购买决策
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  TikTok Ads Manager 关键路径
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm font-mono">
                    Campaign → Filters → Campaign settings → Product source → TikTok Shop
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">核心指标</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Checkouts initiated (Shop)</li>
                      <li>• Purchases (Shop)</li>
                      <li>• 广告花费回报率（ROAS）</li>
                      <li>• 单次购买成本（CPA）</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">优化建议</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 持续监控核心转化指标</li>
                      <li>• 设定 ROAS 底线并及时调整</li>
                      <li>• A/B 测试广告创意内容</li>
                      <li>• 精准定向目标受众群体</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 策略建议 */}
          <TabsContent value="strategy" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📊</span>
                    广告投放优化
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">监控核心指标</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      持续监控 Purchases (Shop) 与 Checkouts initiated (Shop)，设定 ROAS 底线，及时调整出价策略
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/50">
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">A/B 测试创意</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      针对德国市场偏好，测试实用教程 vs. 情感共鸣类内容，优化 CTR 与 CVR
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/50">
                    <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">精准定向</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      根据德国用户年龄、性别分布精准定向，重点投放 25-34 岁女性群体
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🎬</span>
                    内容与标签策略
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/50">
                    <h4 className="font-medium text-orange-700 dark:text-orange-300 mb-2">扩展相关标签</h4>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      同时使用 #homeorganization、#hausorganisation（德语）扩大覆盖面
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/50">
                    <h4 className="font-medium text-teal-700 dark:text-teal-300 mb-2">本土化内容</h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      使用德语配音、字幕，展示适合德国家居环境的收纳场景
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/50">
                    <h4 className="font-medium text-pink-700 dark:text-pink-300 mb-2">趋势结合</h4>
                    <p className="text-sm text-pink-600 dark:text-pink-400">
                      参考 TikTok 官方爆品预测（毛毯、收纳盒），开发吻合趋势的内容
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  影响者合作与风险管控
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">影响者营销策略</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span><strong>优先中小达人：</strong>与本地家居、生活类达人合作</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span><strong>内容形式：</strong>制作&ldquo;开箱&rdquo;、&ldquo;整理挑战&rdquo;内容</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span><strong>合作模式：</strong>采用 CPS 模式，降低前期风险</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">风险管控建议</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span><strong>多平台布局：</strong>降低单一渠道依赖</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span><strong>监控通知：</strong>关注平台算法更新</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span><strong>备选渠道：</strong>同步运营亚马逊德国站</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 未来展望 */}
          <TabsContent value="outlook" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    市场增长预测
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                    <div className="font-medium text-sm text-green-700 dark:text-green-300 mb-1">坚实基础</div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      德国电商渗透率超80%，为TikTok Shop发展提供基础
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                    <div className="font-medium text-sm text-blue-700 dark:text-blue-300 mb-1">增长潜力</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      全球TikTok Shop年增长率近7倍，德国有望逐步追赶
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
                    <div className="font-medium text-sm text-purple-700 dark:text-purple-300 mb-1">品类优势</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      家居品类在社交电商中具高增长潜力
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    风险提示
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
                    <div className="font-medium text-sm text-red-700 dark:text-red-300 mb-1">平台可靠性</div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      销售额急剧下滑表明平台仍处于不稳定期
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                    <div className="font-medium text-sm text-orange-700 dark:text-orange-300 mb-1">政策合规</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">
                      欧盟数字法规可能对TikTok Shop运营增加限制
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <div className="font-medium text-sm text-yellow-700 dark:text-yellow-300 mb-1">竞争加剧</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400">
                      亚马逊、Shein、Temu等平台加大德国投入
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  6-12个月复苏预期
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">关键改善因素</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">平台稳定性改善</span>
                        <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">
                          预期
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">本地化深入</span>
                        <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">
                          进行中
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">算法优化</span>
                        <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400">
                          持续
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">增长驱动力</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 影响者营销效果提升</li>
                      <li>• 本地化内容质量改善</li>
                      <li>• 跨境物流体验优化</li>
                      <li>• 用户购物习惯培养</li>
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
              #homeorganizer 标签下的家居卖家在德国 TikTok Shop 近期表现受到平台整体销售额下滑的严重拖累，
              但市场基本盘依然稳固。当前挑战主要源于算法调整、跨境运营瓶颈及品类偏好差异，而非需求不足。
            </p>
            <div className="grid gap-4 md:grid-cols-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                <div className="font-medium text-blue-700 dark:text-blue-300">优化广告策略</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">聚焦ROI核心指标</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="font-medium text-green-700 dark:text-green-300">深化本地化</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">内容与影响者合作</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                <div className="font-medium text-purple-700 dark:text-purple-300">产品组合调整</div>
                <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">贴合平台趋势预测</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50">
                <div className="font-medium text-orange-700 dark:text-orange-300">多渠道布局</div>
                <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">建立销售体系分散风险</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              预计未来 6-12 个月，随着平台稳定性改善与本地化深入，德国 TikTok Shop 家居类目有望复苏并逐步释放增长潜力。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
