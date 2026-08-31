"use client";

import { ExternalLink, Cpu } from "lucide-react";
import { HardwareProject, HardwareStatus } from "@/app/data/hardwareprojects";

interface HardwareCardProps {
  project: HardwareProject;
}

const statusConfig: Record<
  HardwareStatus,
  { label: string; dot: string; text: string }
> = {
  completed: {
    label: "Completed",
    dot: "bg-[#4fda8e]",
    text: "text-[#4fda8e]",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-yellow-400",
    text: "text-yellow-400",
  },
  prototype: {
    label: "Prototype",
    dot: "bg-neutral-400",
    text: "text-neutral-400",
  },
};

const ICON_SIZE = 12;

export default function HardwareCard({ project }: HardwareCardProps) {
  const status = statusConfig[project.status];

  return (
    <article className="group w-full h-full flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#4fda8e]/40 hover:shadow-lg hover:shadow-[#4fda8e]/5">
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Meta row: title + platform chip */}
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-200">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 truncate">
            {project.title}
          </span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200 shrink-0">
            <Cpu size={ICON_SIZE} className="text-[#4fda8e]" />
            <span className="text-xs font-mono text-neutral-700 uppercase tracking-wider">
              {project.platform}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 flex-1">
          {project.summary}
        </p>

        {/* Specifications */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-0.5">
            Specifications
          </p>

          <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
            <p className="text-xs font-mono text-neutral-500">Platform</p>
            <p className="text-xs font-mono text-neutral-800">
              {project.platform}
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
            <p className="text-xs font-mono text-neutral-500">Status</p>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
              <p className={`text-xs font-mono ${status.text}`}>
                {status.label}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
            <p className="text-xs font-mono text-neutral-500">Year</p>
            <p className="text-xs font-mono text-neutral-800">{project.year}</p>
          </div>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-neutral-500 border border-neutral-300 rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Link */}
        {project.url && (
          <div className="pt-1">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 hover:text-[#4fda8e] transition-colors duration-200 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Project</span>
              <ExternalLink
                size={ICON_SIZE}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        )}
      </div>

      {/* Clickable overlay */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`View ${project.title}`}
        >
          <span className="sr-only">View {project.title}</span>
        </a>
      )}
    </article>
  );
}
