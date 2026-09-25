"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";

export default function MindfulDriveProPage() {
  const techStack = ["C++", "Python", "YOLO", "Edge Impulse", "ML", "Arduino Uno Q"];

  const features = [
    {
      title: "Real-Time Drowsiness Detection",
      description:
        "Monitors driver eye state and head position using a camera feed, triggering alerts the moment drowsiness is detected.",
    },
    {
      title: "Edge Impulse ML Pipeline",
      description:
        "Model trained and deployed via Edge Impulse — optimized for the Arduino Uno Q's onboard ML accelerator.",
    },
    {
      title: "On-Device Inference",
      description:
        "All processing runs directly on the Arduino Uno Q with no cloud round-trip, keeping latency under 100ms.",
    },
    {
      title: "Alert System",
      description:
        "Buzzer and visual indicator fire immediately when a drowsiness event is confirmed, keeping the driver alert.",
    },
  ];

  const specs = [
    { label: "Platform", value: "Arduino Uno Q" },
    { label: "ML Framework", value: "Edge Impulse" },
    { label: "Detection Model", value: "YOLO (quantized)" },
    { label: "Languages", value: "C++, Python" },
    { label: "Status", value: "In Progress" },
    { label: "Year", value: "2026" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans">
      {/* ── Sticky nav ────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-neutral-800 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#hardware"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-[#4fda8e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <a
            href="https://github.com/Gavinduachintha/Mindful-Drive-Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-[#4fda8e] transition-colors"
          >
            <RiGithubLine className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 pt-14 pb-16 space-y-16">
        {/* Hero */}
        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            2026 — Edge AI / Safety Systems
          </p>

          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Mindful Drive Pro
            </h1>
            <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-widest">
              Arduino Uno Q
            </p>
          </div>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            An edge-AI driver drowsiness detection system built with the Arduino
            Uno Q and Edge Impulse — running a quantized YOLO model entirely
            on-device for sub-100ms real-time monitoring without any cloud
            dependency.
          </p>

          <div className="flex flex-wrap gap-1 pt-1">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="border-t border-neutral-800" />

        {/* Specs */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Specifications
          </h2>
          <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {s.label}
                </span>
                <span className="text-xs font-mono text-neutral-200">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-neutral-800" />

        {/* Features */}
        <section className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2 hover:border-[#4fda8e]/30 transition-colors"
              >
                <h3 className="text-sm font-semibold text-neutral-100">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-neutral-800" />

        {/* CTA */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Status
            </p>
            <p className="text-sm text-neutral-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              In Progress
            </p>
          </div>
          <a
            href="https://github.com/Gavinduachintha/Mindful-Drive-Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4fda8e]/10 border border-[#4fda8e]/30 text-[#4fda8e] text-sm font-mono rounded-xl hover:bg-[#4fda8e]/20 transition-colors"
          >
            <RiGithubLine className="w-4 h-4" />
            View on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </section>
      </main>
    </div>
  );
}
