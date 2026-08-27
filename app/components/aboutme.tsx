"use client";

import { motion } from "framer-motion";
import { Gamepad, Server, Database, Cpu, Terminal } from "lucide-react";

export default function AboutMe() {
  const logs = [
    {
      icon: Cpu,
      title: "AI + Embedded Systems",
      desc: "Combining software engineering with electronics and intelligent systems.",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      desc: "Designing scalable APIs, distributed systems, and server-side architectures.",
    },
    {
      icon: Database,
      title: "Data & Infrastructure",
      desc: "Working with databases, cloud services, and reliable data pipelines.",
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="mx-auto max-w-[72rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            ~/about
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
            About Me
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-2xl 
            border border-neutral-800
            bg-[#0c0c0c]
            shadow-2xl
            overflow-hidden
          "
        >
          {/* Terminal Header */}
          <div
            className="
            flex items-center justify-between
            px-5 py-3
            border-b border-neutral-800
            bg-[#111111]
          "
          >
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
              <Terminal size={14} />
              gavindu@portfolio:~/about
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Logs */}
              <div className="space-y-8 font-mono">
                <div>
                  <p className="text-[#4fda8e] text-sm">$ whoami</p>

                  <p className="mt-2 text-neutral-300 leading-relaxed font-sans text-lg">
                    Hi, I'm{" "}
                    <strong className="text-[#4fda8e]">Gavindu Achintha</strong>
                    , an undergraduate student passionate about embedded systems
                    and building solutions with Edge AI, robotics, and machine
                    learning.
                  </p>
                </div>

                <div>
                  <p className="text-[#4fda8e] text-sm">
                    $ cat engineer.profile
                  </p>

                  <p className="mt-2 text-neutral-300 leading-relaxed font-sans text-lg">
                    Undergraduate student exploring{" "}
                    <strong className="text-neutral-100">
                      Embedded systems, AI/ML, Robotics, and Backend development
                    </strong>
                    .
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {logs.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15,
                        }}
                        className="
                          flex gap-4
                          p-4
                          rounded-xl
                          border border-neutral-800
                          bg-[#111111]
                          hover:border-[#4fda8e]/40
                          transition
                        "
                      >
                        <div
                          className="
                          mt-1
                          text-[#4fda8e]
                        "
                        >
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-neutral-100 font-semibold">
                            {item.title}
                          </h3>

                          <p className="text-sm text-neutral-400 mt-1 font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <p className="text-sm text-neutral-500">
                  $ hobbies --include
                  <span className="text-neutral-300">
                    <Gamepad className="inline w-4 h-4 mx-1" />
                    electronics basketball, gaming{" "}
                  </span>
                </p>
              </div>

              {/* Profile Node */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="flex justify-center items-center"
              >
                <div
                  className="
                  relative
                  w-64 h-64
                  md:w-80 md:h-80
                "
                >
                  <div
                    className="
                    absolute inset-0
                    rounded-full
                    bg-[#4fda8e]
                    p-[2px]
                  "
                  >
                    <div
                      className="
                      w-full h-full
                      rounded-full
                      bg-[#0a0a0a]
                      p-2
                    "
                    >
                      <img
                        src="/images/profilePhoto.jpg"
                        alt="Gavindu Achintha"
                        className="
                          w-full
                          h-full
                          object-cover
                          rounded-full
                        "
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div
                    className="
                    absolute
                    bottom-6
                    right-6
                    px-3 py-1
                    rounded-full
                    bg-[#0a0a0a]
                    border border-[#4fda8e]/50
                    text-xs
                    font-mono
                    text-[#4fda8e]
                  "
                  >
                    ● online
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
