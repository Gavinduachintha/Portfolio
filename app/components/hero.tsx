"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  BrainCircuit,
  Bot,
  ScanEye,
  Server,
  Terminal,
  ArrowRight,
} from "lucide-react";
import GlitchText from "./glitchtext";
import { ACCENT_DARK_TEXT } from "../lib/theme";

// ─────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────

const roles = [
  "Applied Electronics Undergrad",
  "Embedded Systems Engineer",
  "Edge AI Builder",
  "Robotics Enthusiast",
  "Computer Vision Tinkerer",
  "Backend Developer",
];

const domains = [
  { icon: CircuitBoard, label: "Embedded Systems" },
  { icon: BrainCircuit, label: "Edge AI" },
  { icon: Bot, label: "Robotics" },
  { icon: ScanEye, label: "Computer Vision" },
  { icon: Server, label: "Backend" },
];

// Edge-device console: an SSH session into a field node, boot log, then a
// live inference loop. Hardware/stack mirrors the WildLife AI build.
const bootCommand = "ssh pi@edge-node-01";

type BootLine =
  | { kind: "log"; tag: string; text: string; delay: number }
  | { kind: "ok"; text: string; delay: number };

const bootLog: BootLine[] = [
  { kind: "log", tag: "boot", text: "Raspberry Pi 5  arm64  4x Cortex-A76 @ 2.4GHz", delay: 0 },
  { kind: "log", tag: "cam", text: "/dev/video0  1280x720 @ 30fps", delay: 260 },
  { kind: "log", tag: "model", text: "yolov8n.onnx loaded  size=12.2MB  warmup=412ms", delay: 520 },
  { kind: "log", tag: "lora", text: "SX1278  433MHz  sf=7  bw=125kHz  rssi=-91dBm", delay: 240 },
  { kind: "log", tag: "gps", text: "fix=3D  sats=11  hdop=0.9", delay: 200 },
  { kind: "log", tag: "api", text: "POST https://gavindu.dev/api/telemetry  201 Created", delay: 340 },
  { kind: "ok", text: "edge node online — streaming inference", delay: 300 },
];

// Fixed (non-random) layout so there's no server/client hydration mismatch
const particles = [
  { left: "8%", top: "20%", size: 3, duration: 9, delay: 0 },
  { left: "22%", top: "68%", size: 2, duration: 11, delay: 1.2 },
  { left: "35%", top: "15%", size: 2, duration: 8, delay: 0.6 },
  { left: "48%", top: "80%", size: 3, duration: 12, delay: 2 },
  { left: "60%", top: "35%", size: 2, duration: 10, delay: 0.3 },
  { left: "72%", top: "60%", size: 3, duration: 9.5, delay: 1.6 },
  { left: "85%", top: "22%", size: 2, duration: 11.5, delay: 0.9 },
  { left: "92%", top: "75%", size: 2, duration: 8.5, delay: 2.4 },
  { left: "15%", top: "45%", size: 2, duration: 10.5, delay: 1.8 },
  { left: "78%", top: "88%", size: 3, duration: 9, delay: 0.5 },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

// Lightweight tokenizer for serial-log style highlighting.
// Order matters: URL → path → key=value → number(+unit) → status word.
const TOKEN_RE =
  /(https?:\/\/\S+|\/[\w./-]+|[a-zA-Z_][\w-]*=\S+|(?<![\w.-])-?\d+(?:\.\d+)?(?:x\d+)?[a-zA-Z%]*|\b(?:ok|online)\b)/g;

function highlight(text: string): ReactNode[] {
  return text.split(TOKEN_RE).map((part, i) => {
    if (!part) return null;

    if (/^https?:\/\//.test(part)) {
      return (
        <span key={i} className="text-[#38bdf8] underline decoration-[#38bdf8]/40">
          {part}
        </span>
      );
    }
    if (/^\/[\w./-]+$/.test(part)) {
      return (
        <span key={i} className="text-[#60a5fa]">
          {part}
        </span>
      );
    }
    if (/^[a-zA-Z_][\w-]*=/.test(part)) {
      const eq = part.indexOf("=");
      return (
        <span key={i}>
          <span className="text-[#67e8f9]">{part.slice(0, eq)}</span>
          <span className="text-neutral-600">=</span>
          <span className="text-[#fde68a]">{part.slice(eq + 1)}</span>
        </span>
      );
    }
    if (/^-?\d/.test(part)) {
      return (
        <span key={i} className="text-[#fb923c]">
          {part}
        </span>
      );
    }
    if (/^(ok|online)$/.test(part)) {
      return (
        <span key={i} className="text-[#4ade80] font-semibold">
          {part}
        </span>
      );
    }
    return (
      <span key={i} className="text-[#d4d4d8]">
        {part}
      </span>
    );
  });
}

// Inline terminal cursor — sharp blink, no fade
function TerminalCursor({ idle = false }: { idle?: boolean }) {
  return (
    <span
      className={`terminal-cursor${idle ? " terminal-cursor--idle" : ""}`}
      aria-hidden="true"
    />
  );
}

function LogRow({ line, cursor }: { line: BootLine; cursor: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="whitespace-pre-wrap"
    >
      {line.kind === "ok" ? (
        <span className="text-[#4ade80] font-bold mr-2">✓</span>
      ) : (
        <span className="inline-block w-[4.75rem] text-neutral-500">
          [{line.tag}]
        </span>
      )}
      {highlight(line.text)}
      {cursor && <TerminalCursor />}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  // Console state
  const [typedCmd, setTypedCmd] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [booted, setBooted] = useState(false);
  const [telemetry, setTelemetry] = useState({
    frame: 231,
    objects: 2,
    latency: 47,
  });

  const cmdDone = typedCmd.length === bootCommand.length;

  // Rotate role label
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Type the command, then stream the boot log line by line
  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(
        setTimeout(() => {
          if (!cancelled) fn();
        }, ms),
      );
    };

    let i = 0;
    const typeNext = () => {
      i += 1;
      setTypedCmd(bootCommand.slice(0, i));
      if (i < bootCommand.length) later(typeNext, 38 + Math.random() * 30);
      else later(() => showLine(0), 420);
    };

    const showLine = (n: number) => {
      setVisibleLines(n + 1);
      const next = bootLog[n + 1];
      if (next) later(() => showLine(n + 1), next.delay);
      else later(() => setBooted(true), 350);
    };

    later(typeNext, 500);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Live inference telemetry once booted
  useEffect(() => {
    if (!booted) return;
    const id = setInterval(() => {
      setTelemetry((t) => ({
        frame: t.frame + 1 + Math.floor(Math.random() * 2),
        objects:
          Math.random() < 0.15 ? Math.floor(Math.random() * 4) : t.objects,
        latency: 38 + Math.floor(Math.random() * 18),
      }));
    }, 850);
    return () => clearInterval(id);
  }, [booted]);

  // Mouse parallax for the grid — motion values, so no React re-renders
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const gridX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const gridY = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 16);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 16);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  const fps = Math.min(30, 1000 / telemetry.latency).toFixed(1);

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
      {/* Grid background — outer layer handles parallax, inner handles drift */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      >
        <motion.div
          className="absolute -inset-[50px]"
          style={{ x: gridX, y: gridY }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(79, 218, 142, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(79, 218, 142, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              animation: "gridFloat 20s linear infinite",
            }}
          />
        </motion.div>
      </div>

      {/* Drifting accent particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* ── Left: identity ─────────────────────────────────── */}
        <div className="text-left space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Cpu className="w-5 h-5 text-accent" />
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-mono text-neutral-400 block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight">
              Hey I&apos;m
              <br />
              <GlitchText
                speed={0.8}
                enableShadows={true}
                className="text-accent whitespace-nowrap"
              >
                Gavindu Achintha_
              </GlitchText>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-lg sm:text-xl font-medium text-neutral-200">
              I build things that sense, think and act —{" "}
              <span className="text-accent">from sensors to servers.</span>
            </p>
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
              Applied Electronics undergraduate working where hardware meets
              software: microcontrollers and PCBs, on-device AI and computer
              vision, robots that move, and the backends that keep it all
              talking.
            </p>
          </motion.div>

          {/* Domain chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {domains.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection("skills")}
                className="group inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-1.5 text-xs font-mono text-neutral-300 transition-colors duration-200 hover:border-accent/50 hover:text-neutral-100"
              >
                <Icon className="w-3.5 h-3.5 text-neutral-500 transition-colors group-hover:text-accent" />
                {label}
              </button>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <button
              type="button"
              onClick={() => scrollToSection("hardware")}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold transition-colors duration-200 hover:bg-accent-dim"
              style={{ color: ACCENT_DARK_TEXT }}
            >
              <CircuitBoard className="w-5 h-5" />
              Hardware builds
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-800 px-6 py-[10px] font-semibold text-neutral-200 transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Terminal className="w-5 h-5" />
              Software projects
            </button>
          </motion.div>
        </div>

        {/* ── Right: edge-device console ─────────────────────── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative z-10 bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-[#4fda8e]/5">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-neutral-400">
                pi@edge-node-01:~
              </span>
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    booted ? "bg-accent" : "bg-yellow-400"
                  }`}
                />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  {booted ? "Live" : "Boot"}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 font-mono text-[13px] leading-7 min-h-[320px] text-left">
              {/* Command */}
              <div className="whitespace-pre-wrap">
                <span className="text-[#4ade80] font-bold">$</span>
                <span className="ml-2">{highlight(typedCmd)}</span>
                {!cmdDone && <TerminalCursor />}
              </div>

              {/* Boot log */}
              {bootLog.slice(0, visibleLines).map((line, i) => (
                <LogRow
                  key={i}
                  line={line}
                  cursor={!booted && i === visibleLines - 1}
                />
              ))}

              {/* Live inference line */}
              {booted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="whitespace-pre-wrap"
                >
                  <span className="inline-block w-[4.75rem] text-accent">
                    [infer]
                  </span>
                  <span className="text-[#67e8f9]">frame</span>
                  <span className="text-neutral-600">=</span>
                  <span className="text-[#fde68a]">
                    {String(telemetry.frame).padStart(4, "0")}
                  </span>
                  {"  "}
                  <span className="text-[#67e8f9]">objects</span>
                  <span className="text-neutral-600">=</span>
                  <span className="text-[#fde68a]">{telemetry.objects}</span>
                  {"  "}
                  <span className="text-[#67e8f9]">latency</span>
                  <span className="text-neutral-600">=</span>
                  <span className="text-[#fde68a]">{telemetry.latency}ms</span>
                  {"  "}
                  <span className="text-[#67e8f9]">fps</span>
                  <span className="text-neutral-600">=</span>
                  <span className="text-[#fde68a]">{fps}</span>
                  <span className="ml-2">
                    <TerminalCursor idle />
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Floating status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-5 -right-3 sm:-right-5 z-10 border border-neutral-800 bg-neutral-900 text-neutral-100 px-5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg"
          >
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${
                booted ? "bg-accent" : "bg-yellow-400"
              }`}
            />
            <span className="text-sm font-medium">
              {booted ? "Edge node online" : "Booting…"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
