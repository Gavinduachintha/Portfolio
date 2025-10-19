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
    <div className="group relative flex flex-col w-full h-full border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-500">
      {/* Image Container with Overlay */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
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
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white backdrop-blur-sm shadow-lg">
            {year}
          </div>
        )}

        {/* Hover Action Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title & Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>View Code</span>
          </a>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all duration-200"
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
