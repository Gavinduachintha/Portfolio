"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { SiHackster } from "react-icons/si";
import { FaDev } from "react-icons/fa";

const ACCENT = "#4fda8e";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "gavindu@example.com",
      href: "mailto:gavindu@example.com",
    },
    {
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null,
    },
    {
      label: "GitHub",
      value: "github.com/GavinduAchintha",
      href: "https://github.com/GavinduAchintha",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gavinduachintha",
      href: "https://linkedin.com/in/gavinduachintha",
    },
    {
      label: "Resume",
      value: "Download CV",
      href: "/resume.pdf",
    },
  ];

  const socialLinks = [
    {
      icon: LuGithub,
      label: "GitHub",
      href: "https://github.com/Gavinduachintha",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gavinduachintha",
    },
    { icon: FaXTwitter, label: "Twitter", href: "https://x.com/P911Stum" },
    { icon: FaMedium, label: "Medium", href: "medium.com" },
    { icon: SiHackster, label: "Hackster", href: "hackster.io" },
    { icon: FaDev, label: "DEV", href: "dev.to" },
  ];

  const inputClasses =
    "w-full px-0 py-2 bg-transparent border-0 border-b border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-[#4fda8e] transition-colors duration-200 disabled:opacity-50 rounded-none";

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-[72rem] mx-auto">
        {/* Section header */}
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-14">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <div className="flex flex-col justify-between">
            <dl className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <dt className="text-xs font-mono text-neutral-500 mb-1">
                    {info.label}
                  </dt>
                  <dd>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-neutral-200 hover:text-[#4fda8e] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm text-neutral-200">
                        {info.value}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex items-center gap-5 mt-10 lg:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#4fda8e] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-neutral-500 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "sending"}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-neutral-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "sending"}
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-neutral-500 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                disabled={status === "sending"}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
              style={{ backgroundColor: ACCENT, color: "#052e1f" }}
            >
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-xs text-[#4fda8e]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-3.5 h-3.5" />
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
