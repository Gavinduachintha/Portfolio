"use client";
import React from "react";
import { LuGithub, LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "../config/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="mt-16 border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-700">
            Designed &amp; developed by {siteConfig.author.name}.
          </p>
          <p className="text-xs font-mono text-neutral-500 mt-1 flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-neutral-600">Designed with Next.js</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-600">Hosted on Vercel</span>
          </p>
        </div>

        <div className="text-xs font-mono text-neutral-500 text-center sm:text-right">
          <p>
            © {year} {siteConfig.name}
          </p>

          <p className="mt-1 flex items-center justify-center sm:justify-end gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-600">
              status: All systems operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
