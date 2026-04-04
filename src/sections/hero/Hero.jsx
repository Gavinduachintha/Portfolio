import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Cpu,
  GitBranch,
  Rocket,
  Terminal as TerminalIcon,
} from "lucide-react";
import GlitchText from "../../components/ui/GlitchText.jsx";
import TerminalWindow from "./TerminalWindow.jsx";
import SkillsEcosystem from "./SkillsEcosystem.jsx";
import { skills } from "./techSkills.js";

const roles = [
  "Undergrad",
  "Allrounder",
  "Backend Lover",
  "Robotics Enthusiast",

  "Swimmer",
  "Basketball Player",
];

const stats = [
  { icon: Rocket, value: "10+", label: "Projects" },
  { icon: GitBranch, value: "500+", label: "Commits" },
  { icon: Cpu, value: "2+", label: "Years Coding" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  // Role rotation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <>
      <section className="hero-section min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side - Identity & Tech Stack */}
          <div className="text-left space-y-6 sm:space-y-8">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
                Hey I'm
                <br />
                <GlitchText
                  speed={0.8}
                  enableShadows={true}
                  className="text-[#d6e40d] whitespace-nowrap"
                >
                  Gavindu Achintha_
                </GlitchText>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
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
              <TerminalIcon className="w-5 h-5" />
              Explore Me
            </button>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 min-w-[120px] sm:min-w-0"
                >
                  <stat.icon className="w-4 h-4 text-[#D25353] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-white leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Terminal */}
          <TerminalWindow />
        </div>
      </section>

      <SkillsEcosystem skills={skills} />
    </>
  );
}
