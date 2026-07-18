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
    <article className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#4fda8e]/40 hover:shadow-lg hover:shadow-[#4fda8e]/5">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#4fda8e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta row: platform + date + read time */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-500">
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
        <div className="flex items-start gap-2">
          <h3 className="flex-1 text-lg font-semibold text-neutral-100 leading-snug group-hover:text-[#4fda8e] transition-colors duration-200">
            {article.title}
          </h3>
          <ExternalLink
            size={16}
            className="text-neutral-600 group-hover:text-[#4fda8e] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 flex-shrink-0"
          />
        </div>

        {/* Summary */}
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
          {article.summary}
        </p>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-3 border-t border-neutral-800/80">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more button */}
        <div className="pt-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-[#4fda8e] transition-colors duration-200 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Read article</span>
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
