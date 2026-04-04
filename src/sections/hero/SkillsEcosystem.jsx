import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function SkillsEcosystem({ skills }) {
  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-transparent border-t border-neutral-800/50"
    >
      {/* Subtle Background Elements matched to Hero terminal theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d6e40d]/[0.02] blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <div className="mb-12 text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-neutral-700/50 bg-neutral-800/30"
          >
            <Cpu className="w-4 h-4 text-[#d6e40d]" />
            <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
              System Loadout
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#57939f]"
          >
            Tech Stack
          </motion.h2>
        </div>

        {/* Interactive Ecosystem - Terminal Themed */}
        <div className="group relative flex flex-wrap justify-center gap-4 sm:gap-1 lg:gap-1 max-w-4xl mx-auto w-full px-4">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative z-0 transition-all duration-500 ease-out group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-[0.98] hover:!opacity-100 hover:!blur-0 hover:!scale-110 hover:!z-50 cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-22 h-16 sm:w-20 sm:h-20 rounded-xl border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-xl shadow-lg hover:bg-neutral-800 hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(214,228,13,0.1)] transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow-md grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 opacity-0 pointer-events-none group-hover:opacity-0 hover:!opacity-100 transition-opacity duration-200 z-50">
                    <div className="bg-neutral-800 border border-neutral-700 shadow-xl px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-200 whitespace-nowrap">
                      <span className="text-[#4fda8e] mr-1.5">$</span>
                      {skill.name.toLowerCase()}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
