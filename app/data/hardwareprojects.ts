/**
 * Hardware project data.
 * Each entry represents a physical / embedded-systems build.
 *
 * status:
 *   "completed"   — shipped / fully documented
 *   "in-progress" — actively being built
 *   "prototype"   — proof-of-concept, not production-ready
 */

import { Lora } from "next/font/google";

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
    status: "completed",
    tags: ["Raspberry Pi 5", "Python", "YOLO", "OpenCV", "LoRa", "GPS"],
    year: 2026,
    // image: "/images/image.png",
    url: "/projects/wildlife",
  },
  {
    slug: "LoRa Receiver",
    title: "LoRa Receiver",
    summary:
      "A compact LoRa receiver device powered by SX1278 LoRa moduel and the Raspberry Pi pico2 MCU",
    platform: "Raspberry Pi Pico2",
    status: "completed",
    tags: ["LoRa", "Raspberry Pi Pico"],
    year: 2026,
    url: "/projects/lora-receiver",
  },
  {
    slug: "Mindfull Drive Pro",
    title: "Mindfull Drive Pro",
    summary:
      "An edge-AI driver drowsiness detection system built with Arduino UNO Q and Edge Impulse for real-time monitoring.",
    platform: "Arduino Uno Q",
    status: "in-progress",
    tags: ["C++", "Python", "YOLO", "ML", "Edge AI", "Arduino UNO Q"],
    year: 2026,
    url: "/projects/mindful-drive-pro",
  },
  {
    slug: "iot-env-monitor",
    title: "IoT Soil Moisture Monitor",
    summary:
      "A real-time soil moisture monitoring system built with XIAO ESP32 and a capacitive soil moisture sensor, featuring a Next.js dashboard for live data visualization.",
    platform: "XIAO ESP32",
    status: "completed",
    tags: ["IoT", "ESP32", "Next.js"],
    year: 2026,
    url: "https://www.hackster.io/gavindu911/diy-soil-moisture-sensor-6546da",
  },
];

export default hardwareProjects;
