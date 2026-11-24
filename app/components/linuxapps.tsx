"use client";

import { motion, type Variants } from "framer-motion";
import { Terminal, ChevronsRight } from "lucide-react";
import linuxApps from "../data/linuxapps";
import LinuxAppCard from "./ui/LinuxAppCard";

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

export default function LinuxApps() {
  return (
    <section className="py-16 px-4 bg-neutral-950/50">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Terminal className="w-5 h-5 text-[#4fda8e]" />
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Linux Applications
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-4">
            Raspberry Pi Utilities
          </h2>

          <p className="text-neutral-400 text-sm max-w-2xl">
            Command-line tools and system utilities built specifically for Raspberry Pi 5.
            Lightweight, dependency-free, and designed for performance on ARM Linux.
          </p>

          <div className="pt-1 mt-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#4fda8e] hover:text-[#3bb36d] transition-colors"
            >
              <span>View on GitHub</span>
              <ChevronsRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Applications Grid */}
        {linuxApps.length > 0 ? (
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
            {linuxApps.map((app) => (
              <motion.div
                key={app.slug}
                variants={itemVariants}
                className="h-full"
              >
                <LinuxAppCard app={app} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-dashed border-neutral-800 py-20 text-center"
          >
            <div className="mb-4 text-4xl">
              <Terminal className="w-12 h-12 mx-auto text-neutral-700" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-neutral-100">
              Linux Applications Coming Soon
            </h3>

            <p className="mx-auto max-w-md px-4 text-sm text-neutral-500">
              Building some powerful CLI tools for Raspberry Pi. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
