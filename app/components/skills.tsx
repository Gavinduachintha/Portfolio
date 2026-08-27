"use client";

import { motion } from "framer-motion";
import layers from "../data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Technical expertise
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
            How I build things
          </h2>
        </div>
        {/* Robot illustration — behind the terminal */}
        {/* <div className="absolute -top-16 -right-8 w-52 sm:w-60 lg:w-72 pointer-events-none select-none z-0">
          {/* Glow underneath */}
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-16 bg-[#4fda8e]/10 rounded-full blur-2xl" />
          <Image
            src="/images/robot1.png"
            alt="Robot illustration"
            width={400}
            height={520}
            className="w-full h-auto opacity-[0.12] mix-blend-screen"
            style={{ filter: "hue-rotate(120deg) saturate(2) brightness(3)" }}
            priority */}
           {/* /> */}
        {/* </div> */}
        {/* Layered stack */}
        <div className="max-w-2xl mx-auto">
          {layers.map((layer, i) => (
            <div key={layer.label} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="border border-neutral-800 rounded-lg bg-neutral-950 hover:border-neutral-700 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 px-5 py-4">
                  {/* Label column */}
                  <div className="sm:w-40 shrink-0 flex items-baseline gap-2 sm:block">
                    <span className="text-[11px] font-mono text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#4fda8e]">
                        {layer.label}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {layer.note}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 sm:border-l sm:border-neutral-800 sm:pl-6">
                    {layer.items.map((item) => (
                      <span key={item} className="text-sm text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector line to next layer */}
              {i < layers.length - 1 && (
                <div
                  className="w-px h-4 bg-neutral-800 mx-auto"
                  style={{ marginLeft: "2.4rem" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
