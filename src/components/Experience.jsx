import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> CAREER TIMELINE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Engineering <span className="text-gradient-cyan">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Hands-on software development roles, from full-stack system architecture to enterprise backend services.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-violet-500 to-emerald-500 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.company}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    }`}
                  >
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl">
                      {/* Top Accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl transition-opacity duration-300"
                        style={{ backgroundColor: item.accentColor }}
                      />

                      {/* Header meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span
                          className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                          style={{
                            color: item.accentColor,
                            borderColor: `${item.accentColor}40`,
                            backgroundColor: `${item.accentColor}10`,
                          }}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.company}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono font-normal">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 space-y-2 pt-3 border-t border-white/5">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2
                              className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                              style={{ color: item.accentColor }}
                            />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech badges */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
