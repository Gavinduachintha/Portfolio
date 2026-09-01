"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, GitBranch, Cpu, Rocket } from "lucide-react";
import Image from "next/image";
import GlitchText from "./glitchtext";
import { ACCENT, ACCENT_DIM, ACCENT_DARK_TEXT } from "../lib/theme";

const roles = [
  "Undergrad",
  "Allrounder",
  "Backend Lover",
  "Robotics Enthusiast",
  "Swimmer and Basketball Player",
  "Cloud Explorer",
  "Firmware Tinkerer",
];

const stats = [
  { icon: Rocket, value: "10+", label: "Projects" },
  { icon: GitBranch, value: "500+", label: "Commits" },
  { icon: Cpu, value: "2+", label: "Years Coding" },
];

const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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

// Inline terminal cursor — sharp blink, no fade
function TerminalCursor({ idle = false }: { idle?: boolean }) {
  return (
    <span
      className={`terminal-cursor${idle ? " terminal-cursor--idle" : ""}`}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    // window.performance.memory is a non-standard, Chrome-only API.
    // We declare a minimal interface so we avoid casting to `any`.
    interface ChromeMemory {
      usedJSHeapSize: number;
    }
    interface ChromePerformance extends Performance {
      memory?: ChromeMemory;
    }

    let memAmount = "42.3";
    const perf = window.performance as ChromePerformance | undefined;
    if (perf?.memory?.usedJSHeapSize) {
      memAmount = (perf.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
    }

    let loadTime = 120;
    if (window.performance) {
      const navEntry = window.performance.getEntriesByType?.(
        "navigation",
      )?.[0] as PerformanceNavigationTiming | undefined;
      if (navEntry) {
        loadTime = Math.round(navEntry.domComplete || performance.now());
      }
    }

    const cores = navigator.hardwareConcurrency || 4;

    const dynamicTerminalLines = [
      "$ system status portfolio.client",
      "● portfolio.client - Running",
      "   Active: active (running)",
      `   Memory: ${memAmount} MB | Cores: ${cores}`,
      `   Load Time: ${loadTime}ms`,
      "$ curl -I gavindu.dev/api/status",
      "HTTP/2 200 OK",
      "✓ All systems operational",
    ];

    const fullText = dynamicTerminalLines.join("\n");
    let currentIndex = 0;

    // Variable-speed typer: pause after newlines and $ prompts, faster on output
    const scheduleNext = () => {
      if (currentIndex >= fullText.length) {
        setIsDone(true);
        return;
      }

      const char = fullText[currentIndex];
      const nextChar = fullText[currentIndex + 1] ?? "";
      currentIndex++;
      setTypedText(fullText.substring(0, currentIndex));

      let delay = 28 + Math.random() * 24; // base: 28–52ms per char

      if (char === "\n") {
        // pause between lines — feels like the shell processing
        delay = nextChar === "$" ? 320 : 160;
      } else if (char === "$") {
        delay = 80; // brief pause right at the prompt symbol
      }

      setTimeout(scheduleNext, delay);
    };

    // Small initial delay before the terminal "wakes up"
    const startTimer = setTimeout(scheduleNext, 400);
    return () => clearTimeout(startTimer);
  }, []);

  // Gentle mouse-parallax for the background grid
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-section group min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
      {/* Subtle animated grid background, now with gentle parallax */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 218, 142, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 218, 142, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridFloat 20s linear infinite",
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
        />
      </div>

      {/* Drifting accent particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#4fda8e]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: 0.25,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side - Identity & Tech Stack */}
        <div className="text-left space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-neutral-400" />
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-mono text-neutral-400 block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-neutral-100 leading-tight">
              Hey I'm
              <br />
              <GlitchText
                speed={0.8}
                enableShadows={true}
                className="text-[#4fda8e] whitespace-nowrap"
              >
                Gavindu Achintha_
              </GlitchText>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-lg leading-relaxed">
              Applied Electronics undergraduate who likes building things that
              actually do something. I work across embedded systems,
              electronics, backend engineering, AI, and robotics — from circuits
              and microcontrollers to intelligent software systems. If I can
              build it, break it, and make it better, I'm interested.
            </p>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 w-fit border-2 hover:bg-accent hover:text-black"
            // style={{ backgroundColor: ACCENT, color: ACCENT_DARK_TEXT }}
          >
            <Terminal className="w-5 h-5" />
            Explore me
          </button>

          {/* <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 min-w-[120px] sm:min-w-0"
              >
                <stat.icon className="w-4 h-4 text-[#4fda8e] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-500">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div> */}

          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-neutral-500 font-mono">
              Tech stack:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {techIcons.map((icon, index) => (
                <motion.img
                  key={index}
                  src={icon}
                  alt="tech"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Robot + Interactive Terminal */}

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative z-10 bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-[#4fda8e]/5">
            {/* Subtle glow effect around terminal */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#4fda8e]/10 via-transparent to-[#4fda8e]/10 rounded-xl opacity-0  transition-opacity duration-500 -z-10" />
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-neutral-400">
                gavindu@portfolio:~/dev
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#4fda8e] rounded-full" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Live
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-[13px] min-h-[300px] flex flex-col text-left leading-loose">
              {typedText.split("\n").map((line, index, arr) => {
                const isLast = index === arr.length - 1;

                const highlightLine = (text: string) => {
                  // Tokenizer for terminal-style syntax highlighting
                  const regex =
                    /(https?:\/\/[^\s]+|--?[a-zA-Z0-9_-]+|\/[a-zA-Z0-9_./-]+|~\/[a-zA-Z0-9_./-]+|[A-Z_][A-Z0-9_]*=[^\s]+|[a-zA-Z_][a-zA-Z0-9_-]*=\S+|"[^"]*"|'[^']*'|`[^`]*`|\b\d+\.\d+%?\b|\b\d+%?\b|\b(?:true|false|null|undefined)\b|\b(?:error|ERROR|Error|failed|FAILED|warning|WARN|Warning|success|SUCCESS|Success)\b|\b(?:Epoch|loss|accuracy|val_loss|val_accuracy|precision|recall|f1|fps|ms|MB|GB|KB)\b|#[0-9a-fA-F]{3,8}|\b\d{1,3}(?:\.\d{1,3}){3}\b)/g;

                  const parts = text.split(regex);

                  return parts.map((part, i) => {
                    if (!part) return null;

                    // URLs
                    if (/^https?:\/\//.test(part)) {
                      return (
                        <span key={i} className="text-[#38bdf8] underline">
                          {part}
                        </span>
                      );
                    }

                    // Flags
                    if (/^--?[a-zA-Z0-9_-]+$/.test(part)) {
                      return (
                        <span key={i} className="text-[#c084fc]">
                          {part}
                        </span>
                      );
                    }

                    // File paths
                    if (
                      /^\/[a-zA-Z0-9_./-]+$/.test(part) ||
                      /^~\//.test(part)
                    ) {
                      return (
                        <span key={i} className="text-[#60a5fa]">
                          {part}
                        </span>
                      );
                    }

                    // Environment variables
                    if (/^[A-Z_][A-Z0-9_]*=/.test(part)) {
                      const [key, ...value] = part.split("=");

                      return (
                        <span key={i}>
                          <span className="text-[#facc15]">{key}</span>
                          <span className="text-neutral-500">=</span>
                          <span className="text-[#86efac]">
                            {value.join("=")}
                          </span>
                        </span>
                      );
                    }

                    // key=value
                    if (/^[a-zA-Z_][a-zA-Z0-9_-]*=/.test(part)) {
                      const [key, ...value] = part.split("=");

                      return (
                        <span key={i}>
                          <span className="text-[#67e8f9]">{key}</span>
                          <span className="text-neutral-500">=</span>
                          <span className="text-[#fde68a]">
                            {value.join("=")}
                          </span>
                        </span>
                      );
                    }

                    // Strings
                    if (
                      (part.startsWith('"') && part.endsWith('"')) ||
                      (part.startsWith("'") && part.endsWith("'"))
                    ) {
                      return (
                        <span key={i} className="text-[#a5f3fc]">
                          {part}
                        </span>
                      );
                    }

                    // Template literals
                    if (part.startsWith("`") && part.endsWith("`")) {
                      return (
                        <span key={i} className="text-[#f0abfc]">
                          {part}
                        </span>
                      );
                    }

                    // Decimal / percentage
                    if (/^\d+\.\d+%?$/.test(part)) {
                      return (
                        <span key={i} className="text-[#fb923c]">
                          {part}
                        </span>
                      );
                    }

                    // Integers
                    if (/^\d+%?$/.test(part)) {
                      return (
                        <span key={i} className="text-[#f59e0b]">
                          {part}
                        </span>
                      );
                    }

                    // Boolean / null
                    if (/^(true|false|null|undefined)$/.test(part)) {
                      return (
                        <span key={i} className="text-[#f472b6]">
                          {part}
                        </span>
                      );
                    }

                    // Errors
                    if (/^(error|ERROR|Error|failed|FAILED)$/.test(part)) {
                      return (
                        <span key={i} className="text-[#f87171] font-semibold">
                          {part}
                        </span>
                      );
                    }

                    // Warnings
                    if (/^(warning|WARN|Warning)$/.test(part)) {
                      return (
                        <span key={i} className="text-[#facc15] font-semibold">
                          {part}
                        </span>
                      );
                    }

                    // Success
                    if (/^(success|SUCCESS|Success)$/.test(part)) {
                      return (
                        <span key={i} className="text-[#4ade80] font-semibold">
                          {part}
                        </span>
                      );
                    }

                    // ML / system metrics
                    if (
                      /^(Epoch|loss|accuracy|val_loss|val_accuracy|precision|recall|f1|fps|ms|MB|GB|KB)$/.test(
                        part,
                      )
                    ) {
                      return (
                        <span key={i} className="text-[#22d3ee]">
                          {part}
                        </span>
                      );
                    }

                    // Hex colors
                    if (/^#[0-9a-fA-F]{3,8}$/.test(part)) {
                      return (
                        <span key={i} className="text-[#f0abfc]">
                          {part}
                        </span>
                      );
                    }

                    // IP addresses
                    if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(part)) {
                      return (
                        <span key={i} className="text-[#818cf8]">
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
                };

                // ─────────────────────────────
                // Prompt
                // ─────────────────────────────

                if (line.startsWith("$")) {
                  const command = line.substring(2);

                  return (
                    <div
                      key={index}
                      className="leading-loose whitespace-pre-wrap"
                    >
                      <span className="text-[#4ade80] font-bold">$</span>

                      <span className="ml-2">{highlightLine(command)}</span>

                      {isLast && !isDone && <TerminalCursor />}
                    </div>
                  );
                }

                // ─────────────────────────────
                // Success line
                // ─────────────────────────────

                if (line.startsWith("✓")) {
                  return (
                    <div key={index} className="leading-loose">
                      <span className="text-[#4ade80] font-bold mr-2">✓</span>

                      {highlightLine(line.substring(2))}

                      {isLast && !isDone && <TerminalCursor />}
                    </div>
                  );
                }

                // ─────────────────────────────
                // Status line
                // ─────────────────────────────

                if (line.startsWith("●")) {
                  return (
                    <div key={index} className="leading-loose">
                      <span className="text-[#facc15] mr-2">●</span>

                      {highlightLine(line.substring(2))}

                      {isLast && !isDone && <TerminalCursor />}
                    </div>
                  );
                }

                // ─────────────────────────────
                // Indented output
                // ─────────────────────────────

                if (line.startsWith("   ")) {
                  return (
                    <div
                      key={index}
                      className="leading-loose whitespace-pre-wrap ml-3"
                    >
                      <span className="text-[#52525b]">└─</span>

                      <span className="ml-2">
                        {highlightLine(line.trimStart())}
                      </span>

                      {isLast && !isDone && <TerminalCursor />}
                    </div>
                  );
                }

                // ─────────────────────────────
                // Normal terminal output
                // ─────────────────────────────

                return (
                  <div
                    key={index}
                    className="leading-loose whitespace-pre-wrap"
                  >
                    {highlightLine(line)}

                    {isLast && !isDone && <TerminalCursor />}
                  </div>
                );
              })}

              {/* Idle prompt line — appears once typing finishes */}
              {isDone && (
                <div className="leading-loose whitespace-pre-wrap mt-1">
                  <span className="text-[#4ade80] font-bold">$</span>
                  <span className="ml-2">
                    <TerminalCursor idle />
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Floating Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-5 -right-5 z-10 border border-neutral-800 bg-neutral-900 text-neutral-100 px-5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-2 h-2 bg-[#4fda8e] rounded-full animate-pulse" />
            <span className="text-sm font-medium">All systems go</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
