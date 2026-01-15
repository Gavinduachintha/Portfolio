import React from "react";
import {
  Download,
  Github,
  Linkedin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <>
      {/* Quick Links Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Quick Links
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Download Resume */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#D25353] hover:bg-[#b74444] text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-[#D25353]/50 text-white font-medium transition-all duration-300 hover:scale-105 group"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            LinkedIn
          </motion.a>

          {/* Email with Copy */}
          {/* <motion.button
            onClick={copyEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group relative"
          >
            {emailCopied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
                <Copy className="w-3 h-3 opacity-50" />
              </>
            )}
          </motion.button> */}
        </div>

        {/* Open to Opportunities Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 border border-green-500/30 w-fit"
        >
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-green-400">
            Open to Opportunities
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
