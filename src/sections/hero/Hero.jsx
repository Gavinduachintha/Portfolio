import { useEffect, useState, useRef } from "react";
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

const roles = [
  "Backend Developer",
  "Robotics Enthusiast",
  "CS Student",
  "API Architect",
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
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  // DevOps & Infra
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  // Cloud
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",

  // Databases

  // Tools & Languages
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

const terminalLines = [
  "$ systemctl status portfolio.service",
  "● portfolio.service - Running",
  "   Active: active (running)",
  "   Memory: 42.3 MB | CPU: 0.8%",
  "   Uptime: 730 days",
  "$ curl -I gavindu.dev/api/status",
  "HTTP/2 200 OK",
  "✓ All systems operational 🚀",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  
  // Refs for typewriter effect to avoid stale closures
  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);

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

  // Typewriter effect with refs for consistent behavior
  useEffect(() => {
    const typeNextChar = () => {
      if (!isTypingRef.current) return;
      
      const lineIndex = lineIndexRef.current;
      const charIndex = charIndexRef.current;
      
      if (lineIndex >= terminalLines.length) {
        isTypingRef.current = false;
        return;
      }
      
      const currentLineText = terminalLines[lineIndex];
      
      if (charIndex < currentLineText.length) {
        setTypedText((prev) => prev + currentLineText[charIndex]);
        charIndexRef.current = charIndex + 1;
      } else {
        setTypedText((prev) => prev + "\n");
        lineIndexRef.current = lineIndex + 1;
        charIndexRef.current = 0;
      }
    };

    const interval = setInterval(typeNextChar, 50);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // const currentActivity = [
  //   {
  //     icon: Code2,
  //     label: "Currently Learning",
  //     value: "Kubernetes & System Design",
  //     color: "text-blue-500",
  //   },
  //   {
  //     icon: Rocket,
  //     label: "Active Projects",
  //     value: "3 in production",
  //     color: "text-purple-500",
  //   },
  //   {
  //     icon: Server,
  //     label: "Latest Stack",
  //     value: "Node.js + PostgreSQL + Redis",
  //     color: "text-green-500",
  //   },
  //   {
  //     icon: GitBranch,
  //     label: "Last Commit",
  //     value: "2 hours ago",
  //     color: "text-orange-500",
  //   },
  // ];

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden py-20 px-4">
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
              I'm Gavindu
              <br />
              <span className="text-[#D25353]">Achintha</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-lg">
              Backend enthusiast learning to craft APIs, manage databases, and
              deploy cloud solutions
            </p>
          </div>

          {/* Current Activity */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Current Activity
            </h3>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById("projects");
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
            View My Projects
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
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
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
            <div className="p-6 font-mono text-sm min-h-[320px]">
              <pre className="text-white whitespace-pre-wrap leading-relaxed">
                {typedText}
                <span className="animate-pulse text-white">▊</span>
              </pre>
            </div>
          </div>

          {/* Floating Status Indicator */}
          <div className="absolute -bottom-4 -right-4 bg-[#3ECF8E] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">System Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
