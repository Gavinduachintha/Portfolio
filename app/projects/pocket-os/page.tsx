"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import palette from "../../data/palette";

// TODO: replace with the real repository URL
const GITHUB_URL = "https://github.com/Gavinduachintha";

const BANNER = ` ██████╗  ██████╗  ██████╗██╗  ██╗███████╗████████╗     ██████╗ ███████╗
 ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝    ██╔═══██╗██╔════╝
 ██████╔╝██║   ██║██║     █████╔╝ █████╗     ██║       ██║   ██║███████╗
 ██╔═══╝ ██║   ██║██║     ██╔═██╗ ██╔══╝     ██║       ██║   ██║╚════██║
 ██║     ╚██████╔╝╚██████╗██║  ██╗███████╗   ██║       ╚██████╔╝███████║
 ╚═╝      ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝        ╚═════╝ ╚══════╝`;

export default function PocketOsPage() {
  const techStack = [
    "C++",
    "Arduino",
    "ESP32",
    "Wi-Fi",
    "BLE",
    "RGB565 Display",
  ];

  const features = [
    {
      title: "Wi-Fi Toolkit",
      description:
        "Connect to the strongest saved network, view link info (IP, gateway, DNS, live RSSI, channel, MAC), scan nearby networks, and see which of channels 1 / 6 / 11 is the quietest.",
    },
    {
      title: "Walk to Find",
      description:
        "Select a network or BLE device and follow a single bar that fills as you get closer, a simple way to hunt down a signal.",
    },
    {
      title: "BLE Tools",
      description:
        "Scan for nearby devices, advertise a beacon named NEOSTICK, or act as a Bluetooth keyboard remote with Slides (Left / Right) and Volume modes.",
    },
    {
      title: "Packet Counter",
      description:
        "Shows frames per second while hopping all channels or locking one. It counts frames only and never keeps addresses or contents.",
    },
    {
      title: "Setup Without Reflashing",
      description:
        "Opens an access point called NEOSTICK at 192.168.4.1. Up to four networks are stored on the device, and passwords are typed on the setup page, not kept in the sketch.",
    },
    {
      title: "Lock Screen Clock",
      description:
        "A clock synced over NTP after joining Wi-Fi, set to IST-5:30 by default and changeable with TZ_INFO in config.h.",
    },
  ];

  const tools = [
    { name: "Flasher", detail: "Full-white torch. Select turns it off." },
    { name: "Wi-Fi", detail: "Connect, link info, scan, channels, setup, packets" },
    { name: "BLE", detail: "Scan, beacon, keyboard remote" },
    { name: "Timer", detail: "Stopwatch or 1 to 60 minute countdown" },
    {
      name: "Settings",
      detail: "Brightness, saver, sleep, boot target, rotation",
    },
    {
      name: "System",
      detail: "Heap, uptime, CPU frequency, die temperature, flash, reset reason",
    },
    { name: "About", detail: "Build name, radio and version" },
  ];

  const controls = [
    { key: "NEXT", action: "Move the highlight, or the “up” action on a tool" },
    { key: "SEL", action: "Open, confirm, or the “down” action" },
    { key: "SEL held", action: "Deep sleep. Press NEXT to wake" },
    { key: "PWR", action: "Lock screen. Any key unlocks" },
  ];

  const specs = [
    { label: "Platform", value: "ESP32" },
    { label: "Connectivity", value: "Wi-Fi + BLE" },
    { label: "Input", value: "3 buttons (NEXT / SEL / PWR)" },
    { label: "Display", value: "Color, RGB565, landscape or 180°" },
    { label: "Language", value: "C++ (Arduino)" },
    { label: "Status", value: "In Progress" },
    { label: "Year", value: "2026" },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-neutral-100 font-sans">
      {/* ── Sticky nav ────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-neutral-800 bg-[#000000]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#hardware"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-[#4fda8e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <a
            href={GITHUB_URL}
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
            2026 — Embedded Systems / Operating System
          </p>

          <div>
            <h1 className="sr-only">Pocket OS</h1>
            <pre
              aria-hidden="true"
              className="overflow-x-auto overflow-y-hidden font-mono text-[7px] leading-[1.1] sm:text-[10px] md:text-[13px] text-[#4fda8e] select-none"
            >
              {BANNER}
            </pre>
            <p className="text-xs font-mono text-neutral-500 mt-3 uppercase tracking-widest">
              Custom OS for a pocket device
            </p>
          </div>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            A pocket-sized ESP32 device with its own menu-driven OS and a
            toolbox of Wi-Fi and Bluetooth tools. It runs on three buttons and
            a small color screen, from signal scanning to a BLE keyboard
            remote.
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

        {/* Device screen preview */}
        <section>
          {/*
            TODO: replace this mockup with a real photo or screen capture.
            Put the file in /public/images/ and use next/image, for example:
              <Image src="/images/pocket-os.jpg" alt="Pocket OS" width={1200} height={700} className="rounded-2xl border border-neutral-800" />
          */}
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
            <div
              className="rounded-lg border border-neutral-800 p-3 font-mono text-xs space-y-2"
              style={{ backgroundColor: "#000000" }}
              aria-label="Pocket OS screen mockup"
            >
              <div
                className="flex items-center justify-between rounded px-2 py-1"
                style={{ backgroundColor: "#080808" }}
              >
                <span style={{ color: "#29ceb5" }}>POCKET OS</span>
                <span style={{ color: "#5af7e6" }}>● LIVE</span>
              </div>
              <div
                className="rounded px-2 py-2 space-y-1"
                style={{ backgroundColor: "#080808" }}
              >
                <p style={{ color: "#29ceb5" }}>WIFI</p>
                <p style={{ color: "#5af7e6" }}>Connected</p>
              </div>
              <div
                className="rounded px-2 py-2 space-y-1"
                style={{ backgroundColor: "#080808" }}
              >
                <p style={{ color: "#29ceb5" }}>SCAN</p>
                <p style={{ color: "#ffa600" }}>Waiting, open networks…</p>
              </div>
            </div>
            <p className="mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
              Screen mockup — real photo coming soon
            </p>
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

        {/* Controls */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Controls
          </h2>
          <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
            {controls.map((c) => (
              <div key={c.key} className="flex items-center gap-4 px-5 py-3">
                <code className="w-20 shrink-0 rounded bg-neutral-900 px-2 py-0.5 text-center text-xs font-mono text-[#4fda8e]">
                  {c.key}
                </code>
                <span className="text-sm text-neutral-300">{c.action}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-mono text-neutral-500 leading-relaxed">
            The lock screen appears on its own after the saver time (30 seconds
            by default). Sleep stays off until you turn it on in Settings, so a
            USB session is not cut short.
          </p>
        </section>

        <div className="border-t border-neutral-800" />

        {/* Tools */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Tools
          </h2>
          <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3"
              >
                <span className="w-24 shrink-0 text-sm font-mono text-[#4fda8e]">
                  ▸ {t.name}
                </span>
                <span className="text-sm text-neutral-400">{t.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-neutral-800" />

        {/* Design language */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Design Language
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
            The device draws in 16-bit RGB565 color. This palette also became
            the theme of this portfolio.
          </p>
          <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
            {palette.map((c) => (
              <div
                key={c.role}
                className="flex items-center gap-4 px-5 py-3"
              >
                <span
                  className="h-6 w-6 shrink-0 rounded border border-neutral-700"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="flex-1 text-sm text-neutral-200">
                  {c.role}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {c.hex}
                </span>
                <code className="rounded bg-neutral-900 px-2 py-0.5 text-xs font-mono text-neutral-300">
                  {c.rgb565}
                </code>
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
              <span className="w-2 h-2 rounded-full bg-warning inline-block" />
              In Progress
            </p>
          </div>
          <a
            href={GITHUB_URL}
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
