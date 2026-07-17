"use client";

import { motion } from "framer-motion";
import { Gamepad } from "lucide-react";

export default function AboutMe() {
  const interests = [
    {
      icon: "⚙️",
      title: "Backend Development",
      desc: "Building scalable APIs and server-side applications with modern technologies",
    },
    {
      icon: "🌐",
      title: "Web Applications",
      desc: "Creating full-stack web solutions that solve real-world problems",
    },
    {
      icon: "🤖",
      title: "Robotics",
      desc: "Merging electronics and software to build intelligent robotic systems",
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="mx-auto max-w-[72rem] relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-100">
            About Me
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            CS Undergraduate | Backend Developer | Robotics Enthusiast
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Text */}
            <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
              <p>
                Hi! I'm{" "}
                <strong className="text-[#4fda8e]">Gavindu Achintha</strong>, an
                undergraduate student passionate about technology and
                innovation, currently studying{" "}
                <strong className="text-neutral-100">
                  Computer Science, Electronics, and Mathematics
                </strong>
                .
              </p>
              <p>
                I focus on building{" "}
                <strong className="text-[#4fda8e]">
                  scalable web applications
                </strong>{" "}
                with a strong interest in{" "}
                <strong className="text-neutral-100">
                  backend development, AI/ML, and Robotics
                </strong>
                .
              </p>
              <p>
                Beyond coding, I enjoy{" "}
                <strong className="text-neutral-100">basketball</strong>,{" "}
                <strong className="text-neutral-100">
                  gaming <Gamepad className="inline w-5 h-5" />
                </strong>
                , and hands-on electronics projects.
              </p>
            </div>

            {/* Right Side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Border */}
                  <div className="absolute inset-0 rounded-full bg-[#4fda8e] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1.5">
                      <img
                        src="/images/profilePhoto.jpg"
                        alt="Gavindu Achintha - Profile Photo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
