import { siteConfig } from "../config/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="mt-16 border-t border-neutral-900 bg-neutral-950"
    >
      <div className="mx-auto flex max-w-[72rem] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-300">
            Designed &amp; developed by {siteConfig.author.name}.
          </p>
          <p className="mt-1 flex items-center justify-center gap-2 font-mono text-xs text-neutral-500 sm:justify-start">
            <span>Designed with Next.js</span>
            <span aria-hidden="true">·</span>
            <span>Hosted on Vercel</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 font-mono text-xs text-neutral-500 sm:items-end">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="flex items-center gap-2 text-neutral-500">
            <span
              aria-hidden="true"
              className="size-1.5 animate-pulse rounded-full bg-cyan-400"
            />
            status: All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}