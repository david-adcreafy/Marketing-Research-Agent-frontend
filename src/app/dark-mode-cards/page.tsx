"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import HashtagTrendCard from "@/components/cards/HashtagTrendCard"
import TrafficMixCard from "@/components/cards/TrafficMixCard"
import ProductPriceRankCard from "@/components/cards/ProductPriceRankCard"
import TopVideosCTRCard from "@/components/cards/TopVideosCTRCard"
import { hashtagDemo, trafficMix, landingPages, productList, videosTop5 } from "@/lib/sample-data"

export default function DarkModeCardsDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* 页面头部 */}
      <div className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">卡片深色模式演示</h1>
              <p className="text-sm text-muted-foreground">
                查看营销研究卡片在深色模式下的完美适配效果
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">切换主题：</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* 卡片展示 */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <HashtagTrendCard block={hashtagDemo} />
          <TrafficMixCard mix={trafficMix} topPages={landingPages} />
          <TopVideosCTRCard videos={videosTop5} />
          <ProductPriceRankCard items={productList} />
        </div>

        {/* 说明文字 */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6 text-card-foreground">
          <h2 className="text-lg font-semibold mb-4">深色模式特性</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium text-foreground mb-2">🎨 完美适配</h3>
              <p className="text-sm text-muted-foreground">
                所有卡片组件都使用语义化的颜色变量，在浅色和深色主题之间无缝切换。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">🌙 自动调节</h3>
              <p className="text-sm text-muted-foreground">
                背景色、文字色、边框色都会根据当前主题自动调整，确保最佳的视觉体验。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">📊 数据清晰</h3>
              <p className="text-sm text-muted-foreground">
                徽章和数据标签使用半透明颜色，在深色模式下依然保持良好的可读性。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">⚡ 性能优化</h3>
              <p className="text-sm text-muted-foreground">
                使用 CSS 变量和 Tailwind 的深色模式功能，主题切换快速且流畅。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
