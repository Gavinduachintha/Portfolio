import { siteConfig } from "../config/site.config.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="mt-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {year} {siteConfig.author.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
