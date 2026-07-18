// Article data structure - separated for maintainability
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
  {
    slug: "building-scalable-microservices",
    title: "Building Scalable Microservices with Node.js",
    summary:
      "A comprehensive guide on architecting and implementing microservices at scale, covering service discovery, inter-service communication, and deployment strategies.",
    url: "https://medium.com/@yourprofile/building-scalable-microservices",
    tags: ["Node.js", "Microservices", "Architecture"],
    publishedDate: "2025-01",
    platform: "Medium",
    readTime: "12 min",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Beyond the Basics",
    summary:
      "Deep dive into advanced React optimization techniques including code splitting, lazy loading, memoization strategies, and profiling tools for production applications.",
    url: "https://dev.to/yourprofile/react-performance-optimization",
    tags: ["React", "Performance", "JavaScript"],
    publishedDate: "2024-12",
    platform: "Dev.to",
    readTime: "10 min",
  },
  {
    slug: "kubernetes-production-guide",
    title: "Kubernetes in Production: Lessons Learned",
    summary:
      "Real-world insights from deploying and managing Kubernetes clusters in production, covering monitoring, auto-scaling, security best practices, and common pitfalls.",
    url: "https://hashnode.dev/@yourprofile/kubernetes-production-guide",
    tags: ["Kubernetes", "DevOps", "Cloud"],
    publishedDate: "2024-11",
    platform: "Hashnode",
    readTime: "15 min",
  },
];

export default articles;
