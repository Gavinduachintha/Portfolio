/**
 * Linux Application data for Raspberry Pi projects.
 * Command-line tools and system utilities.
 *
 * status:
 *   "completed"   — packaged / ready for distribution
 *   "in-progress" — actively being developed
 *   "script"      — working script, not yet packaged
 */

export type LinuxAppStatus = "completed" | "in-progress" | "script";

export interface LinuxApp {
  slug: string;
  title: string;
  summary: string;
  /** Target platform (e.g. "Raspberry Pi 5", "Linux ARM64") */
  platform: string;
  status: LinuxAppStatus;
  tags: string[];
  year: number;
  /** Optional link — GitHub, GitLab, documentation, etc. */
  url?: string;
  /** Optional demo image or screenshot under /public */
  image?: string;
}

const linuxApps: LinuxApp[] = [
  {
    slug: "pifetch",
    title: "pifetch",
    summary:
      "A lightweight, dependency-free system information tool for Raspberry Pi, offering more detailed hardware and system metrics than neofetch.",
    platform: "Raspberry Pi 5",
    status: "script",
    tags: ["Bash", "Linux", "System Info", "CLI"],
    year: 2026,
    // url: "https://github.com/yourusername/pifetch",
  },
  {
    slug: "pibreeze",
    title: "pibreeze",
    summary:
      "A manual PWM control utility for Raspberry Pi 5's integrated cooling fan, enabling custom fan curves and thermal management.",
    platform: "Raspberry Pi 5",
    status: "script",
    tags: ["Bash", "Linux", "PWM", "Thermal Management"],
    year: 2026,
    // url: "https://github.com/yourusername/pibreeze",
  },
];

export default linuxApps;
