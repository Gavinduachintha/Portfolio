import { motion } from "framer-motion";
import { BookOpen, Sparkles, TrendingUp } from "lucide-react";
import IconCloud from "./IconCloud";

const skills = [
  {
    name: "Node.js / Express",
    level: 85,
      color: "from-[#D25353] to-[#D25353]",
  },
  { name: "PostgreSQL / Redis", level: 75, color: "from-[#D25353] to-[#D25353]" },
  { name: "Python", level: 80, color: "from-[#D25353] to-[#D25353]" },
  { name: "Docker / DevOps", level: 65, color: "from-[#D25353] to-[#D25353]" },
  { name: "React / Frontend", level: 70, color: "from-[#D25353] to-[#D25353]" },
];

const currentlyLearning = ["Go", "Kubernetes", "System Design"];

export default function AboutMe() {
  const interests = [
    {
      icon: "⚙️",
      title: "Backend Development",
      desc: "Building scalable APIs and server-side applications with modern technologies",
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "hover:border-blue-500/50",
    },
    {
      icon: "🌐",
      title: "Web Applications",
      desc: "Creating full-stack web solutions that solve real-world problems",
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "hover:border-purple-500/50",
    },
    {
      icon: "🤖",
      title: "Robotics",
      desc: "Merging electronics and software to build intelligent robotic systems",
      color: "from-green-500/20 to-green-500/5",
      borderColor: "hover:border-green-500/50",
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-[72rem] relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D25353]">
            About Me
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            2nd Year CS Undergraduate | Backend Developer | Robotics Enthusiast
          </p>
        </motion.div>

        {/* Main Content - IconCloud as Background */}
        <div className="relative mb-12 min-h-[500px]">
          {/* IconCloud floating in background - larger and more prominent */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="opacity-15 lg:opacity-25 scale-110 lg:scale-125">
              <IconCloud size="extra-large" />
            </div>
          </div>

          {/* Full Width About Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 backdrop-blur-sm bg-gradient-to-br from-[#0a0a0a]/90 to-[#111111]/90 rounded-2xl p-8 md:p-12 shadow-xl border border-[#1a1a1a] hover:border-[#2a2a2a] transition-colors duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - About Text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Who I Am
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                  <p>
                    Hi! I'm{" "}
                    <strong className="text-blue-400">Gavindu Achintha</strong>,
                    a 2nd year undergraduate student at university, currently
                    studying{" "}
                    <strong className="text-neutral-100">
                      Computer Science, Electronics, and Mathematics
                    </strong>
                    .
                  </p>
                  <p>
                    I have a passion for{" "}
                    <strong className="text-neutral-100">
                      building web applications
                    </strong>{" "}
                    and I'm particularly interested in the{" "}
                    <strong className="text-neutral-100">
                      backend development path
                    </strong>
                    . I love creating robust, scalable APIs and systems that
                    power modern web applications.
                  </p>
                  <p>
                    Beyond software, I'm deeply passionate about{" "}
                    <strong className="text-neutral-100">robotics</strong> —
                    combining my knowledge of electronics and programming to
                    bring innovative ideas to life.
                  </p>
                </div>

                {/* Currently Learning Badge */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold text-emerald-400">
                      Currently Learning
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentlyLearning.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div> */}
              </div>

              {/* Right Side - Skill Progress Bars */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Skills
                  </h3>
                </div>
                <div className="space-y-5">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + idx * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests Grid - Full Width with Improved Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative bg-gradient-to-br ${item.color} bg-[#0a0a0a] rounded-2xl p-8 border border-[#1a1a1a] ${item.borderColor} transition-all duration-300 group overflow-hidden`}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              </div>

              <motion.div
                className="text-4xl mb-4 relative z-10"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-2 relative z-10">
                {item.title}
              </h4>
              <p className="text-neutral-400 relative z-10">{item.desc}</p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
