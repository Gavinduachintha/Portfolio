import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import Logo from "../components/common/Logo.jsx";
import ThemeToggle from "../components/common/ThemeToggle.jsx";
import { siteConfig } from "../config/site.config.js";
import toast from "react-hot-toast";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
    function onDocClick(e) {
      const header = document.querySelector("header.site-header");
      if (header && !header.contains(e.target)) setOpen(false);
    }
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className="site-header  sticky top-2 z-50 transition-all duration-300 px-4"
      role="banner"
    >
      <div className="mx-auto max-w-[72rem]">
        <div
          className={`h-16 flex items-center justify-between px-4 rounded-full transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-xl bg-white/60 dark:bg-black/30 shadow-lg"
              : "backdrop-blur-lg bg-white/20 dark:bg-black/10 shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link to="/">
            <Logo text={siteConfig.name} />
          </Link>

          {/* Desktop Nav */}
          <nav
            id="primary-nav"
            aria-label="Primary"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-blue-600 dark:text-blue-400 after:w-full"
                        : "text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white after:w-0 hover:after:w-full"
                    } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {siteConfig?.social?.github && (
              <a
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 bg-white/30 dark:bg-black/30 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:scale-105 hover:shadow-md transition-all duration-300"
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            <ThemeToggle />
            <button
              className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:scale-105 transition-all duration-300"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`md:hidden px-4 pb-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 rounded-2xl border border-neutral-300/60 dark:border-neutral-700/60 p-4 bg-white/50 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          {siteConfig.navigation.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-black/50 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
