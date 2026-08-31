"use client";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiHackster } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { siteConfig } from "../config/site.config";
import { ACCENT, ACCENT_DARK_TEXT } from "../lib/theme";
import { useState } from "react";

const socialLinks = [
  { icon: LuGithub, label: "GitHub", href: siteConfig.social.github },
  { icon: FiLinkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: FaXTwitter, label: "Twitter", href: siteConfig.social.twitter },
  { icon: FaMedium, label: "Medium", href: "https://medium.com/@gavindu.al" },
  {
    icon: SiHackster,
    label: "Hackster",
    href: "https://www.hackster.io/gavindu911",
  },
  { icon: FaDev, label: "DEV", href: "https://dev.to/gavinduachintha" },
];

const contactInfo = [
  {
    label: "Email",
    value: "gavindu.al@gmail.com",
    href: "mailto:gavindu.al@gmail.com",
  },
  { label: "Location", value: "Colombo, Sri Lanka", href: null },
  {
    label: "GitHub",
    value: "github.com/GavinduAchintha",
    href: siteConfig.social.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gavinduachintha",
    href: siteConfig.social.linkedin,
  },
  { label: "Resume", value: "Download CV", href: "/resume.pdf" },
];

const inputClasses =
  "w-full px-0 py-2 bg-transparent border-0 border-b border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#4fda8e] transition-colors duration-200 disabled:opacity-50 rounded-none";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    setStatus("");
    setIsError(false);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const message =
          typeof result?.error === "string"
            ? result.error
            : (result?.error?.message ?? result?.message ?? "Request failed");
        throw new Error(message);
      }

      setStatus("Message sent — I'll get back to you soon.");
      setIsError(false);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error instanceof Error ? error.message : error,
      );
      setStatus("Failed to send message. Please try again.");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[72rem] mx-auto">
        {/* Section header */}
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-14">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — contact info + social links */}
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
                        className="text-sm text-neutral-800 hover:text-[#4fda8e] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm text-neutral-800">
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

          {/* Right — contact form */}
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
                required
                disabled={isPending}
                className={inputClasses}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                disabled={isPending}
                className={inputClasses}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                rows={3}
                disabled={isPending}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project or inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className="
                group
                relative
                flex
                w-fit
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-black
                text-white
                border-2
                border-black
                px-6
                py-2.5
                font-mono
                text-sm
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:-translate-y-0.5
                hover:shadow-lg
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-black/50
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {isPending ? (
                <>
                  <span className="animate-pulse">$</span>
                  <span>
                    ./sending_request.sh
                    <span className="animate-pulse">_</span>
                  </span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>$ ./send.sh</span>
                </>
              )}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`flex items-center gap-2 text-xs ${
                  isError ? "text-red-400" : "text-[#4fda8e]"
                }`}
              >
                {isError ? (
                  <AlertCircle className="w-3.5 h-3.5" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                )}
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
