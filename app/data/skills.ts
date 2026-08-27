export interface Layer {
  label: string;
  note: string;
  items: string[];
}

const layers: Layer[] = [
  {
    label: "Embedded Systems",
    note: "where software meets hardware",
    items: ["C", "C++", "Arduino", "ESP32", "STM32", "Raspberry Pi", "ROS"],
  },
  {
    label: "AI / ML",
    note: "intelligent applications",
    items: ["Python", "OpenCV", "YOLO", "Edge Impulse", "TensorFlow"],
  },
  {
    label: "Frontend",
    note: "interactive user experiences",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    note: "APIs, authentication & business logic",
    items: ["Go", "Node.js", "Express.js", "FastAPI"],
  },
  {
    label: "Data",
    note: "databases & caching",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    note: "deployment & infrastructure",
    items: [
      "AWS",
      "Azure",
      "DigitalOcean",
      "Vercel",
    ],
  },
];

export default layers;
