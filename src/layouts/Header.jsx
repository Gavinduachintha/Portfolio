import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import Logo from "../components/common/Logo.jsx";
import ThemeToggle from "../components/common/ThemeToggle.jsx";
import { siteConfig } from "../config/site.config.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  const isActive = (path) => {
    return activeSection === path;
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
              ? "backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
              : "backdrop-blur-lg bg-white/30 dark:bg-neutral-900/20 shadow-sm border border-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            <Logo text={siteConfig.name} />
          </button>

          {/* Desktop Nav */}
          <nav
            id="primary-nav"
            aria-label="Primary"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-[#ffffff] dark:text-[#ffffff] after:w-full"
                        : "text-white dark:text-white hover:text-neutral-900 dark:hover:text-neutral-100 after:w-0 hover:after:w-full"
                    } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#6C757D] dark:after:bg-[#6C757D] after:transition-all after:duration-300`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {siteConfig?.social?.github && (
              <a
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-md text-neutral-800 dark:text-neutral-300 hover:scale-105 hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
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
              className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-md hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
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
              <button
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-[#6C757D]/10 text-[#6C757D]"
                    : "text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-black/50 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
