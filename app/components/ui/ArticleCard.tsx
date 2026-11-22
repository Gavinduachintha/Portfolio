"use client";

import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Article } from "@/app/data/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
    },
  );

  return (
    <article className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#4fda8e]/40 hover:shadow-lg hover:shadow-[#4fda8e]/5 h-64 flex flex-col">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#4fda8e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 min-h-0">
        {/* Meta row: platform + date + read time */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-500 flex-shrink-0">
          <span className="text-[#4fda8e]/80">{article.platform}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Calendar size={11} />
              <span>{formattedDate}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock size={11} />
                <span>{article.readTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title with external link icon */}
        <div className="flex items-start gap-2 mt-3 flex-shrink-0">
          <h3 className="flex-1 text-base font-semibold text-neutral-100 leading-snug group-hover:text-[#4fda8e] transition-colors duration-200 line-clamp-2">
            {article.title}
          </h3>
          <ExternalLink
            size={16}
            className="text-neutral-600 group-hover:text-[#4fda8e] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 flex-shrink-0"
          />
        </div>

        {/* Summary — grows to fill remaining space */}
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 flex-1 mt-2 min-h-0">
          {article.summary}
        </p>

        {/* Footer: tags + read more */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 flex-shrink-0 mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-x-2 gap-y-1 overflow-hidden">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors truncate"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read more */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-neutral-500 hover:text-[#4fda8e] transition-colors duration-200 group/link flex-shrink-0 ml-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Read</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Clickable overlay */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Read ${article.title}`}
      >
        <span className="sr-only">Read {article.title}</span>
      </a>
    </article>
  );
}
