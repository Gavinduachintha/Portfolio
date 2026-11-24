"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Code, Cpu, Terminal, Layers } from "lucide-react";
import projects from "../data/projectlist";
import hardwareProjects from "../data/hardwareprojects";
import linuxApps from "../data/linuxapps";
import Card from "./ui/Card";
import HardwareCard from "./ui/HardwareCard";
import LinuxAppCard from "./ui/LinuxAppCard";

type ProjectCategory = "all" | "web" | "hardware" | "linux";

interface CategoryTab {
  id: ProjectCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: CategoryTab[] = [
    {
      id: "all",
      label: "All Projects",
      icon: Layers,
      count: projects.length + hardwareProjects.length + linuxApps.length,
    },
    {
      id: "web",
      label: "Web Apps",
      icon: Code,
      count: projects.length,
    },
    {
      id: "hardware",
      label: "Hardware",
      icon: Cpu,
      count: hardwareProjects.length,
    },
    {
      id: "linux",
      label: "Linux CLI",
      icon: Terminal,
      count: linuxApps.length,
    },
  ];

  // Filter projects based on active category
  const getFilteredProjects = () => {
    switch (activeCategory) {
      case "web":
        return { web: projects, hardware: [], linux: [] };
      case "hardware":
        return { web: [], hardware: hardwareProjects, linux: [] };
      case "linux":
        return { web: [], hardware: [], linux: linuxApps };
      case "all":
      default:
        return { web: projects, hardware: hardwareProjects, linux: linuxApps };
    }
  };

  const filtered = getFilteredProjects();
  const totalCount =
    filtered.web.length + filtered.hardware.length + filtered.linux.length;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#000000] to-neutral-950">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-3">
            All Projects
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            A collection of web applications, embedded systems, and command-line
            tools built with modern technologies.
          </p>
        </motion.div>

        {/* Interactive Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    group relative flex items-center gap-2.5 px-5 py-3 rounded-xl
                    border transition-all duration-300 font-medium text-sm
                    ${
                      isActive
                        ? "bg-[#4fda8e]/10 border-[#4fda8e]/50 text-[#4fda8e] shadow-lg shadow-[#4fda8e]/10"
                        : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900 hover:text-neutral-300"
                    }
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />

                  {/* Label */}
                  <span>{category.label}</span>

                  {/* Count Badge */}
                  <span
                    className={`
                    px-2 py-0.5 rounded-full text-xs font-mono transition-colors
                    ${
                      isActive
                        ? "bg-[#4fda8e]/20 text-[#4fda8e]"
                        : "bg-neutral-800 text-neutral-500 group-hover:bg-neutral-700"
                    }
                  `}
                  >
                    {category.count}
                  </span>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#4fda8e] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Project Count */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-xs font-mono text-neutral-600"
          >
            Showing {totalCount} project{totalCount !== 1 ? "s" : ""}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Web Apps Section */}
          {filtered.web.length > 0 && (
            <div>
              {activeCategory === "all" && (
                <motion.div
                  variants={itemVariants}
                  className="mb-6 flex items-center gap-2"
                >
                  <Code className="w-5 h-5 text-[#4fda8e]" />
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Web Applications
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-500 text-xs font-mono">
                    {filtered.web.length}
                  </span>
                </motion.div>
              )}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6"
              >
                {filtered.web.map((project) => (
                  <motion.div key={project.slug} variants={itemVariants}>
                    <Card
                      title={project.title}
                      description={project.summary}
                      image={project.image}
                      href={project.url}
                      tags={project.tags.map((tag) =>
                        typeof tag === "string" ? tag : tag.name,
                      )}
                      year={project.year}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Hardware Section */}
          {filtered.hardware.length > 0 && (
            <div>
              {activeCategory === "all" && (
                <motion.div
                  variants={itemVariants}
                  className="mb-6 flex items-center gap-2"
                >
                  <Cpu className="w-5 h-5 text-[#4fda8e]" />
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Hardware Projects
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-500 text-xs font-mono">
                    {filtered.hardware.length}
                  </span>
                </motion.div>
              )}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6"
              >
                {filtered.hardware.map((project) => (
                  <motion.div key={project.slug} variants={itemVariants}>
                    <HardwareCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Linux Apps Section */}
          {filtered.linux.length > 0 && (
            <div>
              {activeCategory === "all" && (
                <motion.div
                  variants={itemVariants}
                  className="mb-6 flex items-center gap-2"
                >
                  <Terminal className="w-5 h-5 text-[#4fda8e]" />
                  <h3 className="text-xl font-semibold text-neutral-200">
                    Linux Applications
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-500 text-xs font-mono">
                    {filtered.linux.length}
                  </span>
                </motion.div>
              )}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6"
              >
                {filtered.linux.map((app) => (
                  <motion.div key={app.slug} variants={itemVariants}>
                    <LinuxAppCard app={app} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {totalCount === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-dashed border-neutral-800 py-20 text-center"
          >
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-100">
              No Projects Found
            </h3>
            <p className="mx-auto max-w-md px-4 text-sm text-neutral-500">
              No projects match the selected category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
