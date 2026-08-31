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
    <header className="fixed top-2 left-0 right-0 z-50 px-4 transition-all duration-300">
      <div className="mx-auto max-w-[72rem]">
        <div
          className={`h-16 flex items-center justify-between px-5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-neutral-300 shadow-xl"
              : "bg-white/70 border-transparent"
          }`}
        >
          {/* Backend-style Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1.5 font-mono text-xl text-neutral-900 group"
          >
            <span className="text-[#5EEAD4]">
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
                        ? "text-[#5EEAD4]"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-[#5EEAD4]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* System Status */}

            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 h-9 text-neutral-600 hover:text-[#5EEAD4] transition-colors rounded-lg hover:bg-neutral-100"
            >
              <LuGithub size={18} />
              <span className="text-sm font-medium">{followers}</span>
            </a>

            {/* LinkedIn */}
            {siteConfig?.social?.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                className="p-2 text-neutral-600 hover:text-[#5EEAD4] transition-colors"
              >
                <FiLinkedin size={19} />
              </a>
            )}

            {/* Hackster */}
            {siteConfig?.social?.hackster && (
              <a
                href={siteConfig.social.hackster}
                target="_blank"
                className="p-2 text-neutral-600 hover:text-[#5EEAD4] transition-colors"
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
              className="md:hidden p-2 text-neutral-700 hover:text-[#5EEAD4]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <ul className="bg-white border border-neutral-200 rounded-2xl p-3 flex flex-col gap-1">
          {siteConfig.navigation.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-[#5EEAD4]/10 text-[#5EEAD4]"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
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
