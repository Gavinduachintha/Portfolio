import React from "react";
import {
  Download,
  Github,
  Linkedin,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-[40rem] relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-1 text-white">
            Keep In Touch
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations,
            opportunities, or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 p-6 md:p-8 text-sm transition-colors duration-300"
        >
          <div className="space-y-8">
            {/* Quick Links Grid */}
            <div className="space-y-4 ">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {/* Download Resume */}
                <motion.a
                  href="/resume.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#D25353] hover:bg-[#b74444] text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:text-blue-500/50 hover:border-blue-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110  transition-transform" />
                  LinkedIn
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:gavindu@example.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Email Me
                </motion.a>
              </div>
            </div>

            {/* Open to Opportunities Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500/10 border border-green-500/30 w-fit mx-auto"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-base font-medium text-green-400">
                Open to Opportunities
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
