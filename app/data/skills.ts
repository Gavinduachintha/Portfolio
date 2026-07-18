interface Layer {
  label: string;
  note: string;
  items: string[];
}

const layers: Layer[] = [
  {
    label: "Frontend",
    note: "interactive user experiences",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    note: "APIs, authentication & business logic",
    items: [
      "Go",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
    ],
  },
  {
    label: "Data",
    note: "databases & caching",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
    ],
  },
  {
    label: "Cloud & DevOps",
    note: "deployment & infrastructure",
    items: [
      "Docker",
      "Git",
      "Linux",
      "GitHub Actions",
      "AWS",
      "Azure",
      "DigitalOcean",
      "Vercel",
    ],
  },
  {
    label: "AI / ML",
    note: "intelligent applications",
    items: [
      "Python",
      "OpenCV",
      "YOLO",
      "Edge Impulse",
      "TensorFlow",
    ],
  },
  {
    label: "Embedded Systems",
    note: "where software meets hardware",
    items: [
      "C",
      "C++",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "ROS",
      "MQTT",
      "I2C",
    ],
  },
];