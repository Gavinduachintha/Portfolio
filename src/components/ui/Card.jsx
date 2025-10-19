import React from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const Card = ({
  title,
  description,
  image,
  href,
  tags = [],
  year,
  as: Component = "div",
}) => {
  const content = (
    <div className="group relative flex flex-col w-full h-full border border-neutral-200 dark:border-neutral-800/50 rounded-2xl shadow-md overflow-hidden bg-white dark:bg-neutral-900/60 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#3ECF8E] dark:hover:border-[#3ECF8E]">
      {/* Image Container with Overlay */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800/50 dark:to-neutral-900/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Year Badge */}
        {year && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-neutral-800/90 text-neutral-900 dark:text-neutral-100 backdrop-blur-sm shadow-lg">
            {year}
          </div>
        )}

        {/* Hover Action Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-[#3ECF8E]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title & Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-[#3ECF8E] dark:group-hover:text-[#3ECF8E] transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/30"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800/60">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3ECF8E] hover:bg-[#2fb573] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>View Code</span>
          </a>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-neutral-300 dark:border-neutral-700/60 hover:border-[#3ECF8E] dark:hover:border-[#3ECF8E] text-neutral-700 dark:text-neutral-300 hover:text-[#3ECF8E] dark:hover:text-[#3ECF8E] font-medium text-sm transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add demo link functionality here
            }}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </button>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3ECF8E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );

  return Component === "a" ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Card;
