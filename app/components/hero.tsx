"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, GitBranch, Cpu, Rocket } from "lucide-react";
import GlitchText from "./glitchtext";

const roles = [
  "Allrounder",
  "Backend Lover",
  "Robotics Enthusiast",
  "Undergrad",
  "Swimmer and Basketball Player",
  "Cloud Explorer",
];

const stats = [
  { icon: Rocket, value: "10+", label: "Projects" },
  { icon: GitBranch, value: "500+", label: "Commits" },
  { icon: Cpu, value: "2+", label: "Years Coding" },
];

const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    let memAmount = "42.3";
    if (window.performance && (window.performance as any).memory) {
      memAmount = (
        (window.performance as any).memory.usedJSHeapSize /
        (1024 * 1024)
      ).toFixed(1);
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

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
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
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed">
              Backend enthusiast learning to craft APIs, manage databases, and
              deploy cloud solutions
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
            className="px-8 py-3 bg-[#4fda8e] hover:bg-[#3bb36d] text-black rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 w-fit"
          >
            <Terminal className="w-5 h-5" />
            Explore me
          </button>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800">
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
          </div>

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
                  className="w-6 h-6 transition-opacity duration-200 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Terminal, flat single-accent */}
        <div className="relative">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
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
                let content;

                if (line.startsWith("$")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">$</span>
                      <span className="text-neutral-300">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("●")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">●</span>
                      <span className="text-neutral-100">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("   Active:")) {
                  content = (
                    <>
                      <span className="text-neutral-500 ml-3">Active: </span>
                      <span className="text-[#4fda8e]">
                        {line.substring(11)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("   Memory:")) {
                  if (line.includes("| Cores:")) {
                    const parts = line.split("| Cores:");
                    content = (
                      <>
                        <span className="text-neutral-500 ml-3">Memory: </span>
                        <span className="text-neutral-200">
                          {parts[0].substring(11)}
                        </span>
                        <span className="text-neutral-600 mx-2">│</span>
                        <span className="text-neutral-500">Cores:</span>
                        <span className="text-neutral-200 ml-1">
                          {parts[1]}
                        </span>
                      </>
                    );
                  } else {
                    content = (
                      <>
                        <span className="text-neutral-500 ml-3">Memory: </span>
                        <span className="text-neutral-200">
                          {line.substring(11)}
                        </span>
                      </>
                    );
                  }
                } else if (line.startsWith("   Load Time:")) {
                  content = (
                    <>
                      <span className="text-neutral-500 ml-3">Load Time: </span>
                      <span className="text-neutral-200">
                        {line.substring(14)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("HTTP/2")) {
                  content = (
                    <>
                      <span className="text-neutral-400">HTTP/2 </span>
                      <span className="text-[#4fda8e]">
                        {line.substring(7)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("✓")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">✓</span>
                      <span className="text-neutral-100">
                        {line.substring(2)}
                      </span>
                    </>
                  );
                } else {
                  content = <span className="text-neutral-400">{line}</span>;
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
            className="absolute -bottom-5 -right-5 border border-neutral-800 bg-neutral-900 text-neutral-100 px-5 py-2.5 rounded-xl flex items-center gap-2.5"
          >
            <div className="w-2 h-2 bg-[#4fda8e] rounded-full animate-pulse" />
            <span className="text-sm font-medium">All systems go</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
