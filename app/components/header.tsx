"use client";

import { useEffect, useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

import { siteConfig } from "../config/site.config";
const hacksterLogo = "/H.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [followers, setFollowers] = useState(0);

  // Fetch GitHub followers
  useEffect(() => {
    const getFollowers = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setFollowers(data.followers || 0);
      } catch (err) {
        console.error("Failed to fetch GitHub followers");
      }
    };
    getFollowers();
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "articles",
        "contact",
      ];
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
      const offset = 80;
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
    <header className="fixed inset-x-0 top-2 z-50 box-border w-[100dvw] max-w-[100dvw] px-2 sm:px-4 transition-all duration-300">
      <div className="mx-auto w-full max-w-[72rem]">
        <div
          className={`h-16 min-w-0 flex items-center justify-between px-3 sm:px-5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-neutral-950/95 backdrop-blur-xlski border-neutral-700 shadow-xl"
              : "bg-neutral-950/70 border-transparent"
          }`}
        >
          {/* Backend-style Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex min-w-0 items-center gap-1.5 font-mono text-lg sm:text-xl text-neutral-100 group"
          >
            <span className="text-[#4fda8e]">
              &gt;<span className="animate-pulse ">_</span>
            </span>
            <span>GAVINDU</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-[#4fda8e]"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-[#4fda8e]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-4">
            {/* System Status */}

            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 sm:px-3 h-9 text-neutral-400 hover:text-[#4fda8e] transition-colors rounded-lg hover:bg-neutral-900"
            >
              <LuGithub size={18} />
              <span className="hidden text-sm font-medium sm:inline">{followers}</span>
            </a>

            {/* LinkedIn */}
            {siteConfig?.social?.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                className="group hidden sm:inline-flex p-2 text-neutral-400 hover:text-[#ffa600] transition-colors"
              >
                <FiLinkedin
                  size={19}
                  className="transition-[filter] duration-200 group-hover:drop-shadow-[0_0_8px_var(--warning)]"
                />
              </a>
            )}

            {/* Hackster */}
            {siteConfig?.social?.hackster && (
              <a
                href={siteConfig.social.hackster}
                target="_blank"
                className="hidden p-2 text-neutral-400 hover:text-[#4fda8e] transition-colors sm:inline-flex"
              >
                <img
                  src={hacksterLogo}
                  alt="Hackster"
                  className="h-5 w-5 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </a>
            )}

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-neutral-300 hover:text-[#4fda8e]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-2 right-2 top-[72px] md:hidden px-0 pb-4 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <ul className="bg-neutral-950 border border-neutral-800 rounded-2xl p-3 flex flex-col gap-1">
          {siteConfig.navigation.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-[#4fda8e]/10 text-[#4fda8e]"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
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
