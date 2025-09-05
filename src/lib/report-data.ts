// Apple AirPods 报告数据
export const reportData = {
  // 市场份额数据
  marketShare: [
    { name: "AirPods", value: 31 },
    { name: "小米", value: 15 },
    { name: "JBL", value: 12 },
    { name: "Realme", value: 8 },
    { name: "其他", value: 34 }
  ],

  // iPhone用户渗透率趋势
  penetrationTrend: [
    { t: "2023", v: 55 },
    { t: "2024", v: 57 },
    { t: "2025", v: 59 }
  ],

  // CPM趋势数据
  cpmTrend: [
    { t: "2023", v: 10 },
    { t: "2024", v: 14 },
    { t: "2025", v: 16 }
  ],

  // 广告渠道分布
  channelDistribution: [
    { name: "搜索广告", value: 30 },
    { name: "社交媒体", value: 25 },
    { name: "视频广告", value: 20 },
    { name: "电商平台", value: 15 },
    { name: "线下体验", value: 10 }
  ],

  // ROI数据
  roiComparison: [
    { name: "搜索广告", value: 5.0 },
    { name: "电商广告", value: 4.0 },
    { name: "社交媒体", value: 3.0 },
    { name: "视频广告", value: 2.5 }
  ],

  // CPM分渠道对比
  cpmByChannel: [
    { channel: "搜索广告", min: 20, max: 30, avg: 25 },
    { channel: "视频广告", min: 15, max: 25, avg: 20 },
    { channel: "社交媒体", min: 12, max: 18, avg: 15 },
    { channel: "电商广告", min: 8, max: 12, avg: 10 }
  ],

  // 关键指标
  keyMetrics: {
    penetrationRate: 59,
    revenueProjection2026: 1000,
    salesGrowthChange: -0.4,
    globalMarketShare: 31,
    avgCpm2025: 16,
    cpmGrowthRate: 14
  }
}

export default reportData
