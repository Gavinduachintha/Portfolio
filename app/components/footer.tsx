"use client";
import React from "react";
import { siteConfig } from "../config/site.config";
import { VscTwitter } from "react-icons/vsc";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-16 border-t border-neutral-800">
      <div className="mx-auto max-w-[72rem] px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm  text-neutral-300">
            Designed &amp; developed by {siteConfig.author.name}.
          </p>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            <span className="text-neutral-400">NextJs</span> · {" "}
            <span className="text-neutral-400">Tailwind CSS</span> · {" "}
            <span className="text-neutral-400">Vercel</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-neutral-400 hover:text-[#8B5CF6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-[#8B5CF6] rounded"
            >
              <LuGithub size={18} />
              <span className="sr-only">GitHub</span>
            </a>
          )}

          {siteConfig.social.twitter && (
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="text-neutral-400 hover:text-[#8B5CF6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-[#8B5CF6] rounded"
            >
              <VscTwitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
          )}
        </div>

        <p className="text-xs font-mono text-neutral-500 text-center sm:text-right">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}