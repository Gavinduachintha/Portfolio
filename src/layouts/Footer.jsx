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
            Designed &amp; Developed by {siteConfig.author.name}.
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Built with <span className="text-[#61DBFB]">React</span>, <span className="text-[#38B2AC]">Tailwind CSS</span> and hosted on <span className="text-[#fff]">Vercel</span>.
          </p>
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

            

            {siteConfig.social.twitter && (
              <a
                href="https://x.com/P911Stum"
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

        <p className="text-xs text-neutral-500 sm:hidden text-center">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
