"use client";

import { Terminal, ExternalLink } from "lucide-react";
import type { LinuxApp } from "@/app/data/linuxapps";

interface LinuxAppCardProps {
  app: LinuxApp;
}

const statusConfig = {
  completed: {
    label: "Packaged",
    dot: "bg-[#4fda8e]",
    text: "text-[#4fda8e]",
  },
  "in-progress": {
    label: "In Development",
    dot: "bg-blue-400",
    text: "text-blue-400",
  },
  script: {
    label: "Script",
    dot: "bg-amber-400",
    text: "text-amber-400",
  },
};

const ICON_SIZE = 12;

export default function LinuxAppCard({ app }: LinuxAppCardProps) {
  const status = statusConfig[app.status];

  const cardBody = (
    <div className="flex flex-col flex-1 p-5 gap-3">
      {/* Meta row: title + platform chip */}
      <div className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 truncate">
          {app.title}
        </span>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 border border-neutral-700 shrink-0">
          <Terminal size={ICON_SIZE} className="text-[#4fda8e]" />
          <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
            CLI
          </span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3 flex-1">
        {app.summary}
      </p>

      {/* Specifications */}
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-0.5">
          Specifications
        </p>

        <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
          <p className="text-xs font-mono text-neutral-500">Platform</p>
          <p className="text-xs font-mono text-neutral-200">{app.platform}</p>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
          <p className="text-xs font-mono text-neutral-500">Status</p>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            <p className={`text-xs font-mono ${status.text}`}>{status.label}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
          <p className="text-xs font-mono text-neutral-500">Year</p>
          <p className="text-xs font-mono text-neutral-200">{app.year}</p>
        </div>

        {app.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-neutral-500 border border-neutral-700 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Link row */}
      {app.url && (
        <div className="pt-1">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 hover:text-[#4fda8e] transition-colors duration-200 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <span>View Repository</span>
            <ExternalLink
              size={ICON_SIZE}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <article className="group w-full h-full flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#4fda8e]/40 hover:shadow-lg hover:shadow-[#4fda8e]/5">
      {cardBody}
    </article>
  );
}
