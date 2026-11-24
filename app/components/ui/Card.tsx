"use client";

import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  tags?: string[];
  year?: string | number;
}

export default function Card({
  title,
  description,
  image,
  href,
  tags = [],
  year,
}: CardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950 transition-colors duration-300 hover:border-neutral-700">
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-300">
            {year || "—"}
          </span>
        </div>
      )}

      <div className="flex flex-col p-4">
        <div>
          <h3 className="text-[15px] font-semibold leading-snug text-neutral-100">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-400">
            {description}
          </p>
        </div>

        <div className="mt-4">
          {tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-wider text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} repository`}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400 transition-colors hover:text-[#4fda8e]"
            >
              <span>View project</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
