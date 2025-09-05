"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

import HashtagTrendCard from "@/components/cards/HashtagTrendCard"
import TrafficMixCard from "@/components/cards/TrafficMixCard"
import SERPCompCard from "@/components/cards/SERPCompCard"
import TopVideosCTRCard from "@/components/cards/TopVideosCTRCard"
import OrganicPaidSplitCard from "@/components/cards/OrganicPaidSplitCard"
import ProductPriceRankCard from "@/components/cards/ProductPriceRankCard"
import ReviewInsightCard from "@/components/cards/ReviewInsightCard"
import CTRKeyframeCard from "@/components/cards/CTRKeyframeCard"
import CrossPlatformTrendCard from "@/components/cards/CrossPlatformTrendCard"
import CommunityPulseCard from "@/components/cards/CommunityPulseCard"

import {
  hashtagDemo,
  trafficMix,
  landingPages,
  serpCompetitors,
  serpTrend,
  videosTop5,
  productList,
  reviewAgg,
  crossPlatform,
  sampleTrend,
} from "@/lib/sample-data"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")

  return (
    <div className="min-h-screen bg-background">
      {/* 页面头部 */}
      <div className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-foreground">营销研究仪表板</h1>
              <p className="text-sm text-muted-foreground">
                实时监控营销数据和趋势分析
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="border-green-200 bg-green-50 text-green-700">实时数据</Badge>
              <Badge className="border-blue-200 bg-blue-50 text-blue-700">已同步</Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* 筛选和搜索栏 */}
      <div className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <Input
              placeholder="搜索关键词、品牌或产品..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:max-w-xs"
            />
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="sm:w-[150px]">
                <SelectValue placeholder="选择地区" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部地区</SelectItem>
                <SelectItem value="us">美国</SelectItem>
                <SelectItem value="cn">中国</SelectItem>
                <SelectItem value="jp">日本</SelectItem>
                <SelectItem value="kr">韩国</SelectItem>
                <SelectItem value="sea">东南亚</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="sm:w-[120px]">
                <SelectValue placeholder="时间范围" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1d">今天</SelectItem>
                <SelectItem value="7d">7天</SelectItem>
                <SelectItem value="30d">30天</SelectItem>
                <SelectItem value="90d">90天</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              应用筛选
            </Button>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="content">内容</TabsTrigger>
            <TabsTrigger value="traffic">流量</TabsTrigger>
            <TabsTrigger value="products">产品</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <HashtagTrendCard block={hashtagDemo} />
              <TrafficMixCard mix={trafficMix} topPages={landingPages} />
              <SERPCompCard keyword="clean beauty" region="US" serpShare={serpCompetitors} trend={serpTrend} />
              <CrossPlatformTrendCard topic="#kidsfashion" tiktok={crossPlatform.tiktok} instagram={crossPlatform.instagram} />
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <TopVideosCTRCard videos={videosTop5} />
              <CTRKeyframeCard video={videosTop5[0]} ctrSeries={sampleTrend} />
              <ReviewInsightCard agg={reviewAgg} />
              <CommunityPulseCard
                topic="TikTok Shop 广告"
                posts={[
                  { title: "CTR 下降，怎么优化素材开场？", link: "#", up: 132, comments: 41 },
                  { title: "东南亚转化路径对比：直链 vs 落地页", link: "#", up: 88, comments: 29 },
                  { title: "短视频长度与完播率的真实关系", link: "#", up: 65, comments: 18 },
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <TrafficMixCard mix={trafficMix} topPages={landingPages} />
              <OrganicPaidSplitCard split={[{name:"自然", value:56}, {name:"广告", value:44}]} topLanding={landingPages} />
              <SERPCompCard keyword="clean beauty" region="US" serpShare={serpCompetitors} trend={serpTrend} />
              <div className="lg:col-span-2">
                <CTRKeyframeCard video={videosTop5[0]} ctrSeries={sampleTrend} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ProductPriceRankCard items={productList} />
              <ReviewInsightCard agg={reviewAgg} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}