"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const ACCENT = "#4fda8e";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "gavindu@example.com", href: "mailto:gavindu@example.com" },
    { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka", href: null },
  ];

  const socialLinks = [
    { icon: LuGithub, label: "GitHub", href: "https://github.com/Gavinduachintha" },
    { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/gavinduachintha" },
    { icon: FaXTwitter, label: "Twitter", href: "https://x.com/P911Stum" },
  ];

  const inputClasses =
    "w-full px-3 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-[#4fda8e] transition-colors duration-200 disabled:opacity-50";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-[72rem] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — info */}
          <div className="space-y-8">
            <div className="space-y-5">
              {contactInfo.map((info) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <info.icon className="w-4 h-4 text-neutral-500" />
                    <div>
                      <p className="text-xs font-mono text-neutral-500">{info.label}</p>
                      <p className="text-sm text-neutral-200">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    className="block group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:opacity-80 transition-opacity duration-200">
                      {content}
                    </div>
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-neutral-500 mb-1.5">
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
              <label htmlFor="email" className="block text-xs font-mono text-neutral-500 mb-1.5">
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
              <label htmlFor="message" className="block text-xs font-mono text-neutral-500 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={status === "sending"}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: ACCENT, color: "#052e1f" }}
            >
              {status === "sending" ? "Sending…" : (
                <>
                  <Send className="w-4 h-4" />
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