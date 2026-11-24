"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Code, Cpu, Terminal, Layers, ChevronDown, ChevronUp } from "lucide-react";
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
  const [showAllWeb, setShowAllWeb] = useState(false);
  const [showAllHardware, setShowAllHardware] = useState(false);
  const [showAllLinux, setShowAllLinux] = useState(false);

  const ExpandButton = ({
    expanded,
    onClick,
  }: {
    expanded: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto mt-6 flex items-center gap-2 border-b border-neutral-700 pb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400 transition-colors hover:border-[#4fda8e] hover:text-[#4fda8e]"
      aria-expanded={expanded}
    >
      <span>{expanded ? "Show less" : "Show more"}</span>
      {expanded ? (
        <ChevronUp className="h-3.5 w-3.5" />
      ) : (
        <ChevronDown className="h-3.5 w-3.5" />
      )}
    </button>
  );

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
      label: "Linux Apps",
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
    <section className="px-4 py-16">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#4fda8e]">
              03 / Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-100">
              Selected builds
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400 md:text-right">
            Web applications, embedded systems, and command-line tools built to
            solve real problems.
          </p>
        </motion.div>

        {/* Interactive Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex gap-1  border-b border-neutral-800">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex shrink-0 items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      isActive ? "text-[#4fda8e]" : ""
                    }`}
                  />
                  <span>{category.label}</span>
                  <span className="text-[10px] text-neutral-600">
                    {category.count}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-px left-0 right-0 h-px bg-[#4fda8e]"
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
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {(showAllWeb ? filtered.web : filtered.web.slice(0, 3)).map((project) => (
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
              {filtered.web.length > 3 && (
                <ExpandButton
                  expanded={showAllWeb}
                  onClick={() => setShowAllWeb((current) => !current)}
                />
              )}
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
                {(showAllHardware
                  ? filtered.hardware
                  : filtered.hardware.slice(0, 3)
                ).map((project) => (
                  <motion.div key={project.slug} variants={itemVariants}>
                    <HardwareCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
              {filtered.hardware.length > 3 && (
                <ExpandButton
                  expanded={showAllHardware}
                  onClick={() => setShowAllHardware((current) => !current)}
                />
              )}
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
                {(showAllLinux
                  ? filtered.linux
                  : filtered.linux.slice(0, 3)
                ).map((app) => (
                  <motion.div key={app.slug} variants={itemVariants}>
                    <LinuxAppCard app={app} />
                  </motion.div>
                ))}
              </motion.div>
              {filtered.linux.length > 3 && (
                <ExpandButton
                  expanded={showAllLinux}
                  onClick={() => setShowAllLinux((current) => !current)}
                />
              )}
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
