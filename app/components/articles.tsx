"use client";

import { motion } from "framer-motion";
import { ChevronsRight, BookOpen } from "lucide-react";
import articles from "../data/articles";
import ArticleCard from "./ui/ArticleCard";

export default function Articles() {
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
    <section className="py-16 px-6 md:px-16">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={14} className="text-neutral-500" />
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Technical Writing
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-4">
            Article Series
          </h2>

          <p className="text-neutral-400 text-sm max-w-2xl">
            Sharing insights, experiments, and lessons learned while building
            software, embedded systems, AI applications, and backend
            architectures.
          </p>

          <div className="pt-1">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#4fda8e] hover:text-[#3bb36d] transition-colors"
            >
              <span>View all articles</span>
              <ChevronsRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Articles */}
        {articles.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.slice(0, 3).map((article) => (
              <div key={article.slug}>
                <ArticleCard article={article} />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold text-neutral-100 mb-2">
              Articles Coming Soon
            </h3>
            <p className="text-neutral-400">
              I'm working on some exciting technical content. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
