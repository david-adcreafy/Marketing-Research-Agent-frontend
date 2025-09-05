// filename: lib/sample-data.ts
import { HashtagBlock, LandingPage, ProductItem, ReviewAgg, VideoItem } from "./type"

export const sampleTrend = Array.from({ length: 14 }).map((_, i) => ({ t: `D${i + 1}`, v: Math.round(50 + Math.random() * 50) }))

export const videosTop5: VideoItem[] = [
  { id: "v1", title: "Quick Glow Routine", author: "@creator1", url: "#", thumb: "https://picsum.photos/seed/v1/320/180", likes: 12000, comments: 430, shares: 900, ctr: 2.9, ctrPeakSec: 3 },
  { id: "v2", title: "No-Filter Day", author: "@creator2", url: "#", thumb: "https://picsum.photos/seed/v2/320/180", likes: 9800, comments: 260, shares: 520, ctr: 2.1, ctrPeakSec: 2 },
  { id: "v3", title: "Hydrate Hack", author: "@creator3", url: "#", thumb: "https://picsum.photos/seed/v3/320/180", likes: 8600, comments: 200, shares: 410, ctr: 1.7, ctrPeakSec: 4 },
  { id: "v4", title: "Minimal Makeup", author: "@creator4", url: "#", thumb: "https://picsum.photos/seed/v4/320/180", likes: 7800, comments: 190, shares: 350, ctr: 1.5, ctrPeakSec: 3 },
  { id: "v5", title: "Night Repair", author: "@creator5", url: "#", thumb: "https://picsum.photos/seed/v5/320/180", likes: 7200, comments: 160, shares: 300, ctr: 1.3, ctrPeakSec: 5 },
]

export const hashtagDemo: HashtagBlock = {
  tag: "#skincare",
  region: "US",
  window: "Last 30 days",
  videos: videosTop5,
  trend: sampleTrend,
}

export const trafficMix = [
  { name: "Direct", value: 28 },
  { name: "Organic", value: 36 },
  { name: "Paid", value: 18 },
  { name: "Social", value: 14 },
  { name: "Referral", value: 4 },
]

export const landingPages: LandingPage[] = [
  { url: "/lp/summer-sale", share: 24, bounce: 48 },
  { url: "/lp/try-now", share: 18, bounce: 41 },
  { url: "/collections/new", share: 15, bounce: 52 },
]

export const serpTrend = sampleTrend
export const serpCompetitors = [
  { name: "Brand A", value: 38 },
  { name: "Brand B", value: 26 },
  { name: "Brand C", value: 18 },
  { name: "Others", value: 18 },
]

export const productList: ProductItem[] = [
  { id: "p1", title: "Lantern Pro", price: 39.9, rating: 4.6, rank: 3 },
  { id: "p2", title: "Lantern Lite", price: 24.5, rating: 4.2, rank: 8 },
  { id: "p3", title: "Lantern Max", price: 59.0, rating: 4.7, rank: 5 },
]

export const reviewAgg: ReviewAgg = {
  positive: 62,
  neutral: 21,
  negative: 17,
  topPainPoints: ["电池续航", "开关易松动", "夜间眩光"],
  topSellingPoints: ["轻量便携", "充电口通用", "亮度高"],
}

export const crossPlatform = {
  tiktok: sampleTrend,
  instagram: sampleTrend.map((d) => ({ t: d.t, v: Math.max(10, d.v - Math.round(Math.random() * 20)) })),
}