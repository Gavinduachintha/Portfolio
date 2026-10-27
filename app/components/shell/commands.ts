import hardwareProjects from "../../data/hardwareprojects";
import projects from "../../data/projectlist";
import layers from "../../data/skills";
import palette from "../../data/palette";
import { siteConfig } from "../../config/site.config";

export type Tone = "plain" | "ok" | "warn" | "dim" | "cmd" | "err";

export type Line = { text: string; tone?: Tone; swatch?: string };

export type Effect =
  | { type: "scroll"; id: string }
  | { type: "navigate"; href: string }
  | { type: "external"; href: string }
  | { type: "clear" };

export type Result = { lines: Line[]; effect?: Effect };

export type Session = {
  /** Commands run so far, used to rotate sample detections and fake uptime. */
  runs: number;
  startedAt: number;
};

const sections = siteConfig.navigation.map((n) => n.path);

const FILES = [
  "engineer.profile",
  "skills.txt",
  "contact.txt",
  "wildlife.log",
  "pocketos.palette",
];

export const COMMANDS = [
  "help",
  "whoami",
  "ls",
  "cat",
  "tail",
  "scan",
  "open",
  "goto",
  "heap",
  "palette",
  "uptime",
  "clear",
];

// Sample replay of one WildLife AI node. Matches the boot log on the hero
// (Pi 5, YOLOv8n, SX1278 433 MHz, 3D fix). Not live telemetry.
const DETECTIONS = [
  "det species=elephant conf=0.93 infer=38ms",
  "det species=sambar   conf=0.88 infer=36ms",
  "det species=wild_boar conf=0.81 infer=41ms",
  "det species=peafowl  conf=0.76 infer=35ms",
  "det species=macaque  conf=0.84 infer=37ms",
];

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function plain(text: string, tone: Tone = "plain"): Line {
  return { text, tone };
}

function findHardware(query: string) {
  const q = norm(query);
  if (!q) return undefined;
  return hardwareProjects.find(
    (p) => norm(p.slug) === q || norm(p.title) === q || norm(p.title).includes(q) || norm(p.slug).includes(q),
  );
}

function findProject(query: string) {
  const q = norm(query);
  if (!q) return undefined;
  return projects.find((p) => norm(p.title).includes(q));
}

function stamp(n: number): string {
  const s = 14 * 3600 + 2 * 60 + 11 + n * 7;
  const hh = String(Math.floor(s / 3600) % 24).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function wildlifeLog(session: Session): Line[] {
  const start = session.runs % DETECTIONS.length;
  const out: Line[] = [plain("# sample replay, not live telemetry", "dim")];
  for (let i = 0; i < 3; i++) {
    const det = DETECTIONS[(start + i) % DETECTIONS.length];
    const n = session.runs * 3 + i;
    out.push(plain(`[${stamp(n)}] ${det}`));
    out.push(plain(`[${stamp(n)}] gps fix=3D sats=11 hdop=0.9`, "dim"));
    out.push(plain(`[${stamp(n)}] lora tx sf=7 bw=125kHz rssi=-91dBm  ack`, "ok"));
  }
  return out;
}

function helpLines(): Line[] {
  const rows: [string, string][] = [
    ["whoami", "who I am"],
    ["ls [hardware|projects]", "list files, builds, or projects"],
    ["cat <file>", "read a file (try engineer.profile)"],
    ["tail wildlife.log", "latest WildLife AI detections (sample)"],
    ["scan", "list hardware builds and jump to them"],
    ["open <name>", "open a project, e.g. open pocket-os"],
    ["goto <section>", `jump to ${sections.join(", ")}`],
    ["heap", "Pocket OS system stats"],
    ["palette", "Pocket OS RGB565 colors"],
    ["uptime", "how long this shell has been up"],
    ["clear", "clear the screen"],
  ];
  const width = Math.max(...rows.map(([c]) => c.length));
  return [
    plain("commands", "dim"),
    ...rows.map(([c, d]) => plain(`  ${c.padEnd(width + 2)}${d}`)),
    plain("tab completes, up/down recalls history", "dim"),
  ];
}

export function run(raw: string, session: Session): Result {
  const input = raw.trim();
  if (!input) return { lines: [] };

  const [cmd, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ");
  const name = cmd.toLowerCase();

  switch (name) {
    case "help":
    case "?":
      return { lines: helpLines() };

    case "whoami":
      return {
        lines: [
          plain(`${siteConfig.name}`, "ok"),
          plain("applied electronics undergrad: embedded systems, edge AI, robotics, backend"),
          plain("hobbies: electronics, basketball, gaming", "dim"),
        ],
      };

    case "ls": {
      if (!arg || arg === "." || arg === "~") {
        return {
          lines: [
            plain("hardware/  projects/  articles/", "ok"),
            plain(FILES.join("  ")),
          ],
        };
      }
      if (norm(arg) === "hardware") {
        return {
          lines: hardwareProjects.map((p) =>
            plain(`${p.slug.padEnd(16)} ${p.platform.padEnd(16)} ${p.status}`),
          ),
        };
      }
      if (norm(arg) === "projects") {
        return { lines: projects.map((p) => plain(`${p.title}  (${p.year})`)) };
      }
      return { lines: [plain(`ls: ${arg}: no such directory`, "err")] };
    }

    case "cat":
    case "tail": {
      const file = arg.toLowerCase();
      if (!file) {
        return { lines: [plain(`${name}: missing file. try: ${name} ${name === "tail" ? "wildlife.log" : "engineer.profile"}`, "err")] };
      }
      if (file === "wildlife.log") return { lines: wildlifeLog(session) };
      if (name === "tail") {
        return { lines: [plain(`tail: ${arg}: only wildlife.log is a live-style log`, "err")] };
      }
      if (file === "engineer.profile") {
        return {
          lines: [
            plain("name     Gavindu Achintha"),
            plain("focus    embedded systems, AI/ML, robotics, backend"),
            plain("builds   ESP32 devices, Pi 5 edge vision, LoRa links, Next.js dashboards"),
            plain("more     ls hardware, cat skills.txt, goto contact", "dim"),
          ],
        };
      }
      if (file === "skills.txt") {
        return {
          lines: layers.flatMap((l) => [
            plain(l.label, "ok"),
            plain(`  ${l.items.join(", ")}`),
          ]),
        };
      }
      if (file === "contact.txt") {
        const s = siteConfig.social;
        return {
          lines: [
            plain(`github    ${s.github}`),
            plain(`linkedin  ${s.linkedin}`),
            plain(`x         ${s.twitter}`),
            plain("or run: goto contact", "dim"),
          ],
        };
      }
      if (file === "pocketos.palette") return paletteResult();
      return { lines: [plain(`cat: ${arg}: no such file`, "err")] };
    }

    case "scan": {
      return {
        lines: [
          plain("scanning hardware bus...", "dim"),
          ...hardwareProjects.map((p) =>
            plain(
              `  found ${p.title.padEnd(24)} ${p.platform.padEnd(16)} ${p.status}`,
              p.status === "in-progress" ? "warn" : "ok",
            ),
          ),
          plain(`${hardwareProjects.length} devices. opening hardware section`, "dim"),
        ],
        effect: { type: "scroll", id: "hardware" },
      };
    }

    case "open": {
      if (!arg) return { lines: [plain("open: which project? try: open pocket-os", "err")] };
      const hw = findHardware(arg);
      if (hw) {
        if (!hw.url) return { lines: [plain(`${hw.title} has no page yet`, "warn")] };
        if (hw.url.startsWith("/")) {
          return { lines: [plain(`opening ${hw.title}...`, "ok")], effect: { type: "navigate", href: hw.url } };
        }
        return { lines: [plain(`opening ${hw.title} in a new tab...`, "ok")], effect: { type: "external", href: hw.url } };
      }
      const pr = findProject(arg);
      if (pr) {
        return {
          lines: [plain(`opening ${pr.title} on GitHub...`, "ok")],
          effect: { type: "external", href: pr.url.replace("api.github.com/repos", "github.com") },
        };
      }
      return { lines: [plain(`open: ${arg}: not found. try scan or ls projects`, "err")] };
    }

    case "goto":
    case "cd": {
      const target = norm(arg.replace(/^~?\/?/, ""));
      if (!target) return { lines: [plain(`goto: where? ${sections.join(", ")}`, "err")] };
      const id = sections.find((s) => norm(s) === target);
      if (!id) return { lines: [plain(`goto: ${arg}: unknown section`, "err")] };
      return { lines: [plain(`-> ${id}`, "dim")], effect: { type: "scroll", id } };
    }

    case "heap":
      return {
        lines: [
          plain("pocket os  NEOSTICK  (ESP32)", "ok"),
          plain("  HEAP    184320 bytes free"),
          plain("  CPU     240 MHz"),
          plain("  TEMP    45.4 C (die)"),
          plain("  FLASH   4 MB"),
          plain("  RST     POWER_ON"),
          plain("sample values from the device UI, not a live read", "dim"),
        ],
      };

    case "palette":
      return paletteResult();

    case "uptime": {
      const s = Math.floor((Date.now() - session.startedAt) / 1000);
      const mm = String(Math.floor(s / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      return { lines: [plain(`shell up ${mm}:${ss}, ${session.runs} commands`)] };
    }

    case "clear":
      return { lines: [], effect: { type: "clear" } };

    case "sudo":
      return { lines: [plain("permission denied: this portfolio is read-only (nice try)", "warn")] };

    case "exit":
      return { lines: [plain("there is nowhere to go, but try: goto contact", "dim")] };

    default:
      return { lines: [plain(`${cmd}: command not found. type help`, "err")] };
  }
}

function paletteResult(): Result {
  return {
    lines: [
      plain("pocket os RGB565 -> 24-bit", "dim"),
      ...palette.map((c) => ({
        text: `${c.rgb565}  ${c.hex}  ${c.role}`,
        tone: "plain" as Tone,
        swatch: c.hex,
      })),
    ],
  };
}

export function complete(input: string): string {
  const parts = input.split(/\s+/);
  if (parts.length <= 1) {
    const hit = COMMANDS.filter((c) => c.startsWith(parts[0].toLowerCase()));
    return hit.length === 1 ? hit[0] + " " : input;
  }
  const [cmd, ...rest] = parts;
  const frag = rest.join(" ").toLowerCase();
  let pool: string[] = [];
  if (cmd === "cat" || cmd === "tail") pool = FILES;
  else if (cmd === "open") pool = hardwareProjects.map((p) => p.slug);
  else if (cmd === "goto") pool = sections;
  else if (cmd === "ls") pool = ["hardware", "projects"];
  const hit = pool.filter((p) => p.toLowerCase().startsWith(frag));
  return hit.length === 1 ? `${cmd} ${hit[0]}` : input;
}
