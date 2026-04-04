import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Terminal,
  Code2,
  Zap,
  GitBranch,
  Cpu,
  Rocket,
  Download,
  Github,
  Linkedin,
  Mail,
  Copy,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import GlitchText from "../../components/ui/GlitchText.jsx";

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
  // Core stack
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  // DevOps & Infra
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  // Cloud
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",

  // Tools
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("gavindu@example.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Role rotation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  // Typewriter effect - build the full text string based on position
  useEffect(() => {
    // Gather real client metrics
    let memAmount = "42.3"; // Fallback
    if (window.performance && window.performance.memory) {
      memAmount = (
        window.performance.memory.usedJSHeapSize /
        (1024 * 1024)
      ).toFixed(1);
    }

    let loadTime = 120; // Fallback
    if (window.performance) {
      const navEntry = window.performance.getEntriesByType?.("navigation")?.[0];
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
      "✓ All systems operational 🚀",
    ];

    // Flatten all terminal lines into a single string with newlines
    const fullText = dynamicTerminalLines.join("\n");
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex >= fullText.length) {
        return;
      }

      currentIndex++;
      setTypedText(fullText.substring(0, currentIndex));
    };

    const interval = setInterval(typeNextChar, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden  px-0">
      <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Identity & Tech Stack */}
        <div className="text-left space-y-8">
          {/* Main Title */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-[#ffffff]" />
              <div className=" overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Hey I'm
              <br />
              <GlitchText
                speed={0.8}
                enableShadows={true}
                className="text-[#d6e40d]"
              >
                Gavindu Achintha_
              </GlitchText>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-lg">
              Backend enthusiast learning to craft APIs, manage databases, and
              deploy cloud solutions
            </p>
          </div>

          {/* CTA Button */}
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
            className="px-8 py-3 bg-[#ffffff] hover:bg-[#bdbcbc] text-black rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit"
          >
            <Terminal className="w-5 h-5" />
            Explore Me
          </button>

          {/* Stats Bar */}
          <div className="flex items-center gap-6 pt-4 border-t border-neutral-800">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <stat.icon className="w-4 h-4 text-[#D25353]" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-500">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini Tech Icon Cloud */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-neutral-500 font-mono">
              Tech Stack:
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
                  className="w-6 h-6  transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Terminal */}
        <div className="relative">
          {/* Terminal Window */}
          <div className="backdrop-blur-xl bg-neutral-900/95 border border-neutral-700/50 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-800/50 border-b border-neutral-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                backend@dev: ~/workspace
              </span>
              <Terminal className="w-4 h-4 text-neutral-500" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[320px] flex flex-col text-left">
              {typedText.split("\n").map((line, index, arr) => {
                const isLast = index === arr.length - 1;
                let content;

                if (line.startsWith("$")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">$</span>
                      <span className="text-blue-300">{line.substring(2)}</span>
                    </>
                  );
                } else if (line.startsWith("●")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">●</span>
                      <span className="text-white">{line.substring(2)}</span>
                    </>
                  );
                } else if (line.startsWith("   Active:")) {
                  content = (
                    <>
                      <span className="text-neutral-500">{"   Active: "}</span>
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
                        <span className="text-neutral-500">
                          {"   Memory: "}
                        </span>
                        <span className="text-yellow-300">
                          {parts[0].substring(11)}
                        </span>
                        <span className="text-neutral-500">{"| Cores:"}</span>
                        <span className="text-yellow-300">{parts[1]}</span>
                      </>
                    );
                  } else {
                    content = (
                      <>
                        <span className="text-neutral-500">
                          {"   Memory: "}
                        </span>
                        <span className="text-yellow-300">
                          {line.substring(11)}
                        </span>
                      </>
                    );
                  }
                } else if (line.startsWith("   Load Time:")) {
                  content = (
                    <>
                      <span className="text-neutral-500">
                        {"   Load Time: "}
                      </span>
                      <span className="text-yellow-300">
                        {line.substring(14)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("HTTP/2")) {
                  content = (
                    <>
                      <span className="text-purple-400">{"HTTP/2 "}</span>
                      <span className="text-[#4fda8e]">
                        {line.substring(7)}
                      </span>
                    </>
                  );
                } else if (line.startsWith("✓")) {
                  content = (
                    <>
                      <span className="text-[#4fda8e] mr-2">✓</span>
                      <span className="text-white">{line.substring(2)}</span>
                    </>
                  );
                } else {
                  content = <span className="text-neutral-400">{line}</span>;
                }

                return (
                  <div
                    key={index}
                    className="leading-relaxed whitespace-pre-wrap"
                  >
                    {content}
                    {isLast && (
                      <span className="animate-pulse text-white ml-2">▊</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Status Indicator */}
          <div className="absolute -bottom-4 -right-4 border border-neutral-600 hover:bg-[#3ea4af] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">System Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
