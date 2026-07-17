"use client";

import projects from "../data/projectlist";
import Card from "./ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronsRight } from "lucide-react";

export default function ProjectGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Normalize a tag to a plain string
  const tagName = (tag: string | { name: string; color?: string }) =>
    typeof tag === "string" ? tag : tag.name;

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tagName(tag)));
    });
    return ["All", ...Array.from(tags).sort()];
  }, []);

  // Filter projects based on search and selected tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const normalizedTags = project.tags.map(tagName);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        normalizedTags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesTag =
        selectedTag === "All" || normalizedTags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-16">
      <div className="mx-auto max-w-[72rem] ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#57939f]">
            Featured Projects
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Explore my latest work and side projects. Each project represents a
            unique challenge and learning experience.
          </p>
          <div className="pt-1">
            <a
              href="https://github.com/Gavinduachintha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl text-[#4fda8e] hover:text-[#3bb36d] cursor-pointer"
            >
              <span>Explore more</span>
              <ChevronsRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Projects Grid - Alternating Overlapping Layout */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  className={`flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } ${index > 0 ? "-mt-32 md:-mt-40" : ""}`}
                  style={{ zIndex: filteredProjects.length - index }}
                >
                  <div className="w-full md:w-[48%]">
                    <Card
                      title={project.title}
                      description={project.summary}
                      image={project.image}
                      href={project.url}
                      tags={project.tags.map(tagName)}
                      year={project.year}
                      as="div"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                No Projects Found
              </h3>
              <p className="text-neutral-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="px-6 py-2 bg-[#6C757D] hover:bg-[#495057] text-white font-medium rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State if no projects at all */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-neutral-600">
              I'm working on some exciting projects. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
