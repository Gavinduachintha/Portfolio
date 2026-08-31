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

export default function Hero() {
  const [typedText, setTypedText] = useState("");
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

    const typeNextChar = () => {
      if (currentIndex >= fullText.length) return;
      currentIndex++;
      setTypedText(fullText.substring(0, currentIndex));
    };

    const interval = setInterval(typeNextChar, 50);
    return () => clearInterval(interval);
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
              <Code2 className="w-6 h-6 text-neutral-600" />
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-mono text-neutral-600 block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900 leading-tight">
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
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed">
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
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 w-fit border-2 border-black hover:bg-white hover:text-black"
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
                  className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
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
          <div className="relative z-10 bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-2xl shadow-neutral-200/50">
            {/* Subtle glow effect around terminal */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#4fda8e]/10 via-transparent to-[#4fda8e]/10 rounded-xl opacity-0  transition-opacity duration-500 -z-10" />
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-100 border-b border-neutral-200">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-neutral-600">
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
                let content;

                if (line.startsWith("$")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">$</span>
                      <span className="text-neutral-700">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("●")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">●</span>
                      <span className="text-neutral-900">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("✓")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">✓</span>
                      <span className="text-neutral-900">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("   ")) {
                  // Indented status lines
                  content = (
                    <span className="text-neutral-600 ml-3">
                      {line.trimStart()}
                    </span>
                  );
                } else if (line.includes("loss:") || line.includes("Epoch")) {
                  content = <span className="text-neutral-700">{line}</span>;
                } else {
                  content = <span className="text-neutral-600">{line}</span>;
                }

                return (
                  <div
                    key={index}
                    className="leading-loose whitespace-pre-wrap"
                  >
                    {content}
                    {isLast && (
                      <span className="animate-pulse text-[#4fda8e] ml-1.5">
                        ▊
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-5 -right-5 z-10 border border-neutral-200 bg-white text-neutral-900 px-5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-2 h-2 bg-[#4fda8e] rounded-full animate-pulse" />
            <span className="text-sm font-medium">All systems go</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
