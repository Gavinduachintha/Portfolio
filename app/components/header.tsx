"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

import { siteConfig } from "../config/site.config";
const hacksterLogo = "/H.png"; // Place H.png in /public to use this logo

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
      const sections = ["home", "about", "projects", "contact"];
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

  const scrollToSection = (sectionId: string) => {
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

  const isActive = (path: string) => activeSection === path;

  return (
    <header
      className="site-header  fixed top-2 left-0 right-0 z-50 transition-colors duration-300 px-4"
      role="banner"
    >
      <div className="mx-auto max-w-[72rem]">
        <div
          className={`h-16 flex items-center justify-between px-4 rounded-2xl border transition-colors duration-300 ${
            scrolled
              ? "bg-neutral-950 border-neutral-800"
              : "bg-neutral-950/0 border-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer font-mono text-lg text-neutral-100"
            aria-label="Go to home"
          >
            <span className="text-[#5EEAD4]">&gt;</span>G
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
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-[#5EEAD4] after:w-full"
                        : "text-neutral-400 hover:text-neutral-100 after:w-0 hover:after:w-full"
                    } after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[#5EEAD4] after:transition-all after:duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1">
            {siteConfig?.social?.github && (
              <a
                className="inline-flex items-center justify-center w-9 h-9 text-neutral-400 hover:text-[#5EEAD4] transition-colors duration-200"
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
              >
                {/* <Github size={18} /> */}
                <LuGithub size={18} />

              </a>
            )}
            {siteConfig?.social?.linkedin && (
              <a
                className="inline-flex items-center justify-center w-9 h-9 text-neutral-400 hover:text-[#5EEAD4] transition-colors duration-200"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                {/* <Linkedin size={18} /> */}
                <FiLinkedin size={18}/>

              </a>
            )}
            {siteConfig?.social?.hackster && (
              <a
                className="inline-flex items-center justify-center w-9 h-9 text-neutral-400 hover:text-[#5EEAD4] transition-colors duration-200"
                href={siteConfig.social.hackster}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Hackster"
                title="Hackster"
              >
                <img
                  src={hacksterLogo}
                  alt="Hackster"
                  className="h-5 w-5 object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            )}
            <button
              className="inline-flex md:hidden items-center justify-center w-9 h-9 text-neutral-300 hover:text-[#5EEAD4] transition-colors duration-200"
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
        <ul className="flex flex-col gap-1 rounded-2xl border border-neutral-800 p-3 bg-neutral-950">
          {siteConfig.navigation.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-[#5EEAD4]/10 text-[#8B5CF6]"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100"
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