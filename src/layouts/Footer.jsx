import React from "react";
import { siteConfig } from "../config/site.config.js";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-16  ">
      <div className="mx-auto max-w-[72rem] px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-300">
            Designed &amp; built by
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="ml-1 font-medium text-neutral-100 hover:underline"
            >
              {siteConfig.author.name}
            </a>
            .
          </p>
          <p className="text-xs text-neutral-500 mt-1">Built with React &amp; Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 rounded"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
            )}

            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 rounded"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}

            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 rounded"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            )}
          </div>

          
        </div>

        <p className="text-xs text-neutral-500 sm:hidden text-center">© {year} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
