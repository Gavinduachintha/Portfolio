export interface Project {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  url?: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    summary:
      "This portfolio site built with Next.js, Tailwind CSS, and Framer Motion to showcase my projects and skills.",
    image: "",
    url: "https://github.com/Gavinduachintha",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024",
  },
  {
    slug: "backend-api",
    title: "REST API Server",
    summary:
      "A scalable Node.js/Express REST API with PostgreSQL, Redis caching, JWT authentication, and Docker deployment.",
    image: "",
    url: "https://github.com/Gavinduachintha",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    year: "2024",
  },
  {
    slug: "robotics-project",
    title: "Autonomous Robot",
    summary:
      "An Arduino/Raspberry Pi based autonomous robot with obstacle avoidance and remote control capabilities.",
    image: "",
    url: "https://github.com/Gavinduachintha",
    tags: ["Python", "Arduino", "Robotics", "IoT"],
    year: "2023",
  },
];

export default projects;
