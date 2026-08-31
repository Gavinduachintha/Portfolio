"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import hardwareProjects from "../data/hardwareprojects";
import HardwareCard from "./ui/HardwareCard";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function HardwareShowcase() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Embedded Systems &amp; Electronics
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">
            Hardware Projects
          </h2>

          <p className="text-neutral-600 text-sm max-w-2xl">
            Physical builds where software meets electronics — from
            microcontrollers and sensors to robotics and edge AI systems.
          </p>

          <div className="pt-1">
            <a
              href="https://www.hackster.io/gavindu911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#4fda8e] hover:text-[#3bb36d] transition-colors"
            >
              <span>Explore On Hackster</span>
              <ChevronsRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Projects */}
        {hardwareProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:gap-6
            "
          >
            {hardwareProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={itemVariants}
                className="h-full"
              >
                <HardwareCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-dashed border-neutral-200 py-20 text-center"
          >
            <div className="mb-4 text-4xl">🔧</div>

            <h3 className="mb-2 text-lg font-semibold text-neutral-900">
              Hardware Projects Coming Soon
            </h3>

            <p className="mx-auto max-w-md px-4 text-sm text-neutral-500">
              Building some exciting hardware projects. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
