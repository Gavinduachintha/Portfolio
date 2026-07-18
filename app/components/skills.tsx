"use client";

import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Technical expertise
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
            How I build things
          </h2>
        </div>

        {/* Layered stack */}
        <div className="max-w-2xl mx-auto">
          {layers.map((layer, i) => (
            <div key={layer.label} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="border border-neutral-800 rounded-lg bg-neutral-950 hover:border-neutral-700 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 px-5 py-4">
                  {/* Label column */}
                  <div className="sm:w-40 shrink-0 flex items-baseline gap-2 sm:block">
                    <span className="text-[11px] font-mono text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#4fda8e]">
                        {layer.label}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {layer.note}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 sm:border-l sm:border-neutral-800 sm:pl-6">
                    {layer.items.map((item) => (
                      <span key={item} className="text-sm text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector line to next layer */}
              {i < layers.length - 1 && (
                <div
                  className="w-px h-4 bg-neutral-800 mx-auto"
                  style={{ marginLeft: "2.4rem" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
