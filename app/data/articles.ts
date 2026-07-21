// Article data — add your real published articles here.
// Entries marked PLACEHOLDER must be replaced or removed before going to production.
export interface Article {
  slug: string;
  title: string;
  summary: string;
  url: string;
  tags: string[];
  publishedDate: string;
  platform: string;
  readTime?: string;
}

const articles: Article[] = [
  // ── Real articles ────────────────────────────────────────────────────────────
  {
    slug: "beyond-pir-dfrobot-c4002-mmwave-sensor",
    title:
      "Beyond PIR: Exploring the DFRobot C4002 mmWave Human Presence Sensor",
    summary: "A comprehensive explanation about DFRobot mmWave Sensor",
    url: "https://medium.com/@gavindu.al/beyond-pir-exploring-the-dfrobot-c4002-mmwave-human-presence-sensor-14cf14d3bb6a?sharedUserId=gavindu.al",
    tags: ["C", "C++", "IoT", "Robotics"],
    publishedDate: "2026-06",
    platform: "Medium",
    readTime: "10 min",
  },

  // ── PLACEHOLDER entries — replace with your real articles ────────────────────
  // {
  //   slug: "react-performance-optimization",
  //   title: "React Performance Optimization: Beyond the Basics",
  //   summary:
  //     "Deep dive into advanced React optimization techniques including code splitting, lazy loading, memoization strategies, and profiling tools for production applications.",
  //   url: "https://dev.to/yourprofile/react-performance-optimization",
  //   tags: ["React", "Performance", "JavaScript"],
  //   publishedDate: "2024-12",
  //   platform: "Dev.to",
  //   readTime: "10 min",
  // },
  // {
  //   slug: "kubernetes-production-guide",
  //   title: "Kubernetes in Production: Lessons Learned",
  //   summary:
  //     "Real-world insights from deploying and managing Kubernetes clusters in production, covering monitoring, auto-scaling, security best practices, and common pitfalls.",
  //   url: "https://hashnode.dev/@yourprofile/kubernetes-production-guide",
  //   tags: ["Kubernetes", "DevOps", "Cloud"],
  //   publishedDate: "2024-11",
  //   platform: "Hashnode",
  //   readTime: "15 min",
  // },
];

export default articles;
