import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> ACADEMIC FOUNDATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient-cyan">Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Rigorous university education covering algorithmic foundations, database theory, systems programming, and modern software architectures.
          </motion.p>
        </div>

        {/* Education Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl flex flex-col justify-between"
            >
              {/* Top accent glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl transition-opacity duration-300"
                style={{ backgroundColor: edu.accentColor }}
              />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: `${edu.accentColor}15`,
                      color: edu.accentColor,
                      border: `1px solid ${edu.accentColor}30`,
                    }}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm font-mono text-cyan-400 font-medium mt-1">
                  {edu.institution}
                </div>

                <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.grade}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                  {edu.description}
                </p>

                {/* Core Modules / Coursework */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Core Disciplines:
                  </div>
                  <div className="space-y-2">
                    {edu.courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 text-xs font-mono text-slate-300"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: edu.accentColor }}
                        />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Status:</span>
                <span className="text-slate-300">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
