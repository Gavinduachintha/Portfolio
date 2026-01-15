import React from "react";
import { Github, ExternalLink } from "lucide-react";
import ImageLoader from "./ImageLoader";

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
    <div className="group relative flex flex-col w-full h-full border border-[#211d1d] rounded-2xl shadow-md overflow-hidden bg-[#0a0a0a] transition-all duration-300 hover:shadow-xl hover:border-[#252323]">
      {/* Image Container with Overlay */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50">
        <ImageLoader
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform "
        />
        {/* Gradient Overlay on Hover */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

        {/* Year Badge */}
        {year && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/95 text-neutral-100 shadow-lg">
            {year}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title & Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg font-bold mb-2 text-neutral-100 group-hover:text-[#D25353] transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-neutral-100 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded  bg-white  text-black border border-[#B2BEB5]"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 text-neutral-600">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#d0d9d4] text-black font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>View Code</span>
          </a>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-neutral-300 hover:border-white text-white hover:border-[#d0d9d4] font-medium text-sm transition-all duration-200"
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
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
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
