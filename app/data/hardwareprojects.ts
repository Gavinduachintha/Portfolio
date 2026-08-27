/**
 * Hardware project data.
 * Each entry represents a physical / embedded-systems build.
 *
 * status:
 *   "completed"   — shipped / fully documented
 *   "in-progress" — actively being built
 *   "prototype"   — proof-of-concept, not production-ready
 */

export type HardwareStatus = "completed" | "in-progress" | "prototype";

export interface HardwareProject {
  slug: string;
  title: string;
  summary: string;
  /** Primary microcontroller / SBC (e.g. "ESP32", "Raspberry Pi 4") */
  platform: string;
  status: HardwareStatus;
  tags: string[];
  year: number;
  /** Optional link — GitHub, Hackster, Instructables, etc. */
  url?: string;
  /** Optional project image under /public */
  // image?: string;
}

const hardwareProjects: HardwareProject[] = [
  {
    slug: "WildLife AI",
    title: "WildLife AI",
    summary:
      "Edge-based real-time object detection on Raspberry Pi 5 with LoRa communication and GPS integration for remote, real-time updates.",
    platform: "Raspberry Pi 5",
    status: "in-progress",
    tags: ["Python", "Raspberry Pi 5", "YOLO", "OpenCV", "LoRa", "GPS"],
    year: 2026,
    // image: "/images/image.png",
    url: "https://github.com/Gavinduachintha",
  },
  {
    slug: "Mindfull Drive Pro",
    title: "Mindfull Drive Pro",
    summary:
      "An edge-AI driver drowsiness detection system built with Arduino UNO Q and Edge Impulse for real-time monitoring.",
    platform: "Arduino Uno Q",
    status: "in-progress",
    tags: ["C++", "Python", "YOLO", "ML", "Edge AI", "Arduino UNO Q"],
    year: 2024,
    url: "https://github.com/Gavinduachintha",
  },
  {
    slug: "iot-env-monitor",
    title: "IoT Environmental Monitor",
    summary:
      "Wireless sensor node that collects temperature, humidity, air quality, and light data, then publishes to an MQTT broker. A React dashboard visualises live readings and historical trends.",
    platform: "ESP32",
    status: "completed",
    tags: ["C++", "ESP32", "MQTT", "React", "Grafana", "InfluxDB"],
    year: 2025,
    url: "https://github.com/Gavinduachintha",
  },
  
];

export default hardwareProjects;
