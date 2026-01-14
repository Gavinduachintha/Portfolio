import { motion } from "framer-motion";
import { Code2, BookOpen, Cpu } from "lucide-react";
import techSkills from "./techSkills";
import IconCloud from "./IconCloud";
export default function AboutMe() {
  

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#ffffff]">
            About Me
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            2nd Year CS Undergraduate | Backend Developer | Robotics Enthusiast
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12 felx flex-col">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a0a0a] rounded-2xl p-8 md:p-12 shadow-lg border border-[#1a1a1a]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Who I Am
              </h3>
            </div>
            <div className="space-y-4 text-lg text-white leading-relaxed">
              <p>
                Hi! I'm{" "}
                <strong className="text-neutral-200">Gavindu Achintha</strong>,
                a 2nd year undergraduate student at university, currently
                studying{" "}
                <strong className="text-neutral-900">
                  Computer Science, Electronics, and Mathematics
                </strong>
                .
              </p>
              <p>
                I have a passion for{" "}
                <strong className="text-neutral-900">
                  building web applications
                </strong>{" "}
                and I'm particularly interested in the{" "}
                <strong className="text-neutral-900">
                  backend development path
                </strong>
                . I love creating robust, scalable APIs and systems that power
                modern web applications.
              </p>
              <p>
                Beyond software, I'm deeply passionate about{" "}
                <strong className="text-neutral-900">robotics</strong> —
                combining my knowledge of electronics and programming to bring
                innovative ideas to life. The intersection of hardware and
                software fascinates me, and I'm always exploring new ways to
                merge these fields.
              </p>
            </div>
          </motion.div>

          {/* Tech Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-100">
                <Code2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Tech Stack
              </h3>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg border border-transparent hover:border-[#3ECF8E]/30 hover:shadow-[#3ECF8E]/10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center"
                      whileHover={{ rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                      />
                    </motion.div>

                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="bg-neutral-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                          <div className="border-4 border-transparent border-t-neutral-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Backend Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Backend Development
              </h4>
              <p className="text-neutral-600">
                Building scalable APIs and server-side applications with modern
                technologies
              </p>
            </div>

            {/* Web Applications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Web Applications
              </h4>
              <p className="text-neutral-600">
                Creating full-stack web solutions that solve real-world problems
              </p>
            </div>

            {/* Robotics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Robotics
              </h4>
              <p className="text-neutral-600">
                Merging electronics and software to build intelligent robotic
                systems
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
