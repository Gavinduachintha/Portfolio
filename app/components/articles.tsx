"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronsRight, BookOpen } from "lucide-react";
import articles from "../data/articles";
import ArticleCard from "./ui/ArticleCard";

export default function Articles() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags).sort()];
  }, []);

  // Filter articles based on selected tag
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesTag =
        selectedTag === "All" || article.tags.includes(selectedTag);
      return matchesTag;
    });
  }, [selectedTag]);

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
            Sharing insights and lessons learned from 20 years in the industry.
            Deep dives into architecture, performance, and best practices.
          </p>
          <div className="pt-1">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#4fda8e] hover:text-[#3bb36d] cursor-pointer transition-colors"
            >
              <span>View all articles</span>
              <ChevronsRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Filter Tags */}
        {allTags.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`
                  px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider
                  transition-all duration-200
                  ${
                    selectedTag === tag
                      ? "bg-[#4fda8e] text-neutral-900 shadow-lg shadow-[#4fda8e]/20"
                      : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-[#4fda8e]/40 hover:text-neutral-200"
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          {filteredArticles.length > 0 ? (
            <motion.div
              key="articles-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article) => (
                <motion.div key={article.slug} variants={itemVariants}>
                  <ArticleCard article={article} />
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
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                No Articles Found
              </h3>
              <p className="text-neutral-400 mb-4">
                Try selecting a different tag
              </p>
              <button
                onClick={() => setSelectedTag("All")}
                className="px-6 py-2 bg-[#4fda8e] hover:bg-[#3bb36d] text-neutral-900 font-medium rounded-lg transition-colors"
              >
                Show All Articles
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State if no articles at all */}
        {articles.length === 0 && (
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
