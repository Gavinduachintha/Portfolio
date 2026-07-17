"use client";

import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  tags?: string[];
  year?: string | number;
  as?: React.ElementType;
}

export default function Card({
  title,
  description,
  image,
  href,
  tags = [],
  year,
  as: Wrapper = "div",
}: CardProps) {
  return (
    <Wrapper className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#8B5CF6]/50">
      {/* Image */}
      {image && (
        <div className="relative w-full h-44 overflow-hidden border-b border-neutral-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Meta row: year + link, datasheet style */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            {year ?? "—"}
          </span>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title}`}
              className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-[#8B5CF6] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View
              <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-neutral-100 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags — treated as a stack, not pills */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2 border-t border-neutral-800/80">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}