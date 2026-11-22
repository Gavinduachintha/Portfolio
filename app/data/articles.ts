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
    slug: "beyond-pir-dfrobot-c4002-mmwave-sensor",
    title:
      "Beyond PIR: Exploring the DFRobot C4002 mmWave Human Presence Sensor",
    summary:
      "An exploration of mmWave radar-based human presence detection, examining the DFRobot C4002 sensor, its working principles, capabilities, and applications beyond conventional PIR sensors.",
    url: "https://medium.com/@gavindu.al/beyond-pir-exploring-the-dfrobot-c4002-mmwave-human-presence-sensor-14cf14d3bb6a?sharedUserId=gavindu.al",
    tags: ["Embedded Systems", "IoT", "Sensors", "Electronics"],
    publishedDate: "2026-06",
    platform: "Medium",
    readTime: "10 min",
  },
  {
    slug: "inside-the-esp32-boot-process",
    title: "Inside the ESP32 Boot Process: From Power-On Reset to app_main",
    summary:
      "A technical walkthrough of the ESP32 boot sequence, tracing the journey from power-on reset through the ROM bootloader, second-stage bootloader, application initialization, and finally to app_main.",
    url: "https://medium.com/@gavindu.al/inside-the-esp32-boot-process-from-power-on-reset-to-app-main-512198258f48?sharedUserId=gavindu.al",
    tags: ["ESP32", "Embedded Systems", "RTOS", "Low-Level Programming"],
    publishedDate: "2026-11",
    platform: "Medium",
    readTime: "10 min",
  },
  {
    slug: "raspberry-pi-pico-ws2812-pio-state-machines",
    title:
      "Why the Raspberry Pi Pico Can Drive WS2812 LEDs Without Jitter: Understanding PIO State Machines",
    summary:
      "An exploration of the RP2040/RP2350 Programmable I/O architecture and how PIO state machines generate precise WS2812 timing independently of the CPU.",
    url: "https://medium.com/@gavindu.al/why-the-raspberry-pi-pico-can-drive-ws2812-leds-without-jitter-understanding-pio-state-machines-d3115403c9e9?sharedUserId=gavindu.al",
    tags: ["Raspberry Pi", "RP2040", "RP2350", "PIO", "Embedded Systems"],
    publishedDate: "2026-11",
    platform: "Medium",
    readTime: "10 min",
  },
];

export default articles;
