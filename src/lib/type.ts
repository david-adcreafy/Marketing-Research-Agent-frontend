// filename: lib/types.ts
export type VideoItem = {
    id: string
    title: string
    author: string
    url: string
    thumb: string
    likes: number
    comments: number
    shares: number
    ctr?: number
    ctrPeakSec?: number
  }
  
  export type LandingPage = { url: string; share: number; bounce?: number }
  
  export type ProductItem = {
    id: string
    title: string
    price: number
    rating: number
    rank?: number
  }
  
  export type ReviewAgg = {
    positive: number
    neutral: number
    negative: number
    topPainPoints: string[]
    topSellingPoints: string[]
  }
  
  export type HashtagBlock = {
    tag: string
    region: string
    window: string
    videos: VideoItem[]
    trend: Array<{ t: string; v: number }>
  }