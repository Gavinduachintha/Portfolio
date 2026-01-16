import { motion } from "framer-motion";
import { BookOpen, Sparkles, TrendingUp } from "lucide-react";
import profilePhoto from "../../assets/images/profilePhoto.jpg";

const skills = [
  {
    name: "Node.js / Express",
    level: 85,
    color: "from-[#D25353] to-[#D25353]",
  },
  {
    name: "PostgreSQL / Redis",
    level: 75,
    color: "from-[#D25353] to-[#D25353]",
  },
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
          className="text-right mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D25353]">
            About Me
          </h1>
          <p className="text-xl text-neutral-400   leading-relaxed">
            CS Undergraduate | Backend Developer | Robotics Enthusiast
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#4fda8e]/20">
                  <BookOpen className="w-6 h-6 text-[#4fda8e]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Who I Am
                </h3>
              </div>
              <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                <p>
                  Hi! I'm{" "}
                  <strong className="text-blue-400">Gavindu Achintha</strong>, a
                  2nd year undergraduate student at university, currently
                  studying{" "}
                  <strong className="text-[#4fda8e]">
                    Computer Science, Electronics, and Mathematics
                  </strong>
                  .
                </p>
                <p>
                  I have a passion for{" "}
                  <strong className="text-[#4fda8e]">
                    building web applications
                  </strong>{" "}
                  and I'm particularly interested in the{" "}
                  <strong className="text-blue-400">
                    backend development path
                  </strong>
                  . I love creating robust, scalable APIs and systems that power
                  modern web applications.
                </p>
                <p>
                  Beyond software, I'm deeply passionate about{" "}
                  <strong className="text-[#D25353]">robotics</strong> —
                  combining my knowledge of electronics and programming to bring
                  innovative ideas to life.
                </p>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D25353] via-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute -inset-2 bg-[#D25353] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D25353] via-purple-500 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] p-2">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#D25353]/20 via-transparent to-transparent pointer-events-none" />

                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#D25353]/0 group-hover:border-[#D25353]/50 transition-all duration-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
