import { useEffect, useState } from "react";
import { Server, Database, Cloud, Terminal, Code2, Zap } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    "$ cd ~/projects/backend-services",
    "$ docker-compose up -d",
    "✓ PostgreSQL container started",
    "✓ Redis cache connected",
    "✓ Express server running on :3000",
    "$ npm run dev",
    "> Watching for changes...",
    "Ready to build scalable APIs 🚀",
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
          setTypedText((prev) => prev + terminalLines[lineIndex][charIndex]);
          charIndex++;
        } else {
          setTypedText((prev) => prev + "\n");
          lineIndex++;
          charIndex = 0;
          setCurrentLine(lineIndex);
        }
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const techBadges = [
    { icon: Server, label: "REST APIs", color: "from-blue-500 to-cyan-500" },
    { icon: Database, label: "PostgreSQL", color: "from-cyan-500 to-teal-500" },
    {
      icon: Cloud,
      label: "Cloud Native",
      color: "from-teal-500 to-emerald-500",
    },
    { icon: Zap, label: "Real-time", color: "from-emerald-500 to-green-500" },
  ];

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden py-20 px-4">
      <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Identity & Tech Stack */}
        <div className="text-left space-y-8">
          {/* Main Title */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-[#3ECF8E]" />
              <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                Backend and Robotics Enthusiast
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-neutral-100 leading-tight">
              I'm Gavindu
              <br />
              <span className="text-neutral-600 dark:text-neutral-400">
                Achintha
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg">
              Building robust, scalable backend systems. Specialized in APIs,
              databases, and cloud infrastructure.
            </p>
          </div>

          {/* Tech Specializations */}
          <div className="grid grid-cols-2 gap-3">
            {techBadges.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/40 hover:border-[#3ECF8E]/50 dark:hover:border-[#3ECF8E]/50 transition-all duration-300 group"
              >
                <tech.icon className="w-4 h-4 text-[#3ECF8E] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {tech.label}
                </span>
              </div>
            ))}
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
            className="px-8 py-3 bg-[#3ECF8E] hover:bg-[#2fb573] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit"
          >
            <Terminal className="w-5 h-5" />
            View My Projects
          </button>
        </div>

        {/* Right Side - Interactive Terminal */}
        <div className="relative">
          {/* Terminal Window */}
          <div className="backdrop-blur-xl bg-neutral-900/95 dark:bg-neutral-900/80 border border-neutral-700/50 rounded-xl overflow-hidden shadow-2xl">
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
              <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                {typedText}
                <span className="animate-pulse text-green-400">▊</span>
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
