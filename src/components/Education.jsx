import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Trophy,
  Users,
  ShieldCheck,
} from "lucide-react";
import { educationData } from "../data/education";
import { personalInfo } from "../data/personal";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl flex flex-col justify-between"
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
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: `${edu.accentColor}15`,
                      color: edu.accentColor,
                      border: `1px solid ${edu.accentColor}30`,
                    }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-xs font-mono text-cyan-400 font-medium mt-1">
                  {edu.institution}
                </div>

                <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <Award className="w-3 h-3" />
                  <span>{edu.grade}</span>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 mt-3 leading-relaxed font-light">
                  {edu.description}
                </p>

                {/* Core Modules / Coursework */}
                <div className="mt-5 pt-3 border-t border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-cyan-400" /> Core Disciplines:
                  </div>
                  <div className="space-y-1.5">
                    {edu.courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 text-xs font-mono text-slate-300"
                      >
                        <CheckCircle2
                          className="w-3 h-3 flex-shrink-0"
                          style={{ color: edu.accentColor }}
                        />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Status:</span>
                <span className="text-slate-300">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Key Honors Section */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Leadership Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                    <Users className="w-4 h-4" /> Leadership & Community
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    Sep 2026 – Oct 2026
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-1">
                  Communication Coordinator
                </h4>
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                  Brototype
                </div>

                <ul className="space-y-2 text-xs text-slate-300 font-light leading-relaxed pl-4 list-disc marker:text-cyan-400">
                  <li>
                    Led English communication sessions, interactive workshops, and group discussions to elevate student professional fluency and interview confidence.
                  </li>
                  <li>
                    Organized technical debates, impromptu speaking challenges, and peer presentations focused on technical communication readiness.
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Mentorship • Communication • Student Leadership</span>
              </div>
            </motion.div>

            {/* Achievements & Honors Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" /> Key Honors & State Recognition
                  </span>
                  <span className="text-xs font-mono text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    State & National
                  </span>
                </div>

                {/* Best NSS Volunteer Award */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 mb-3">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-display font-bold text-white">
                        Best NSS Volunteer Award (IHRD Level, 2023)
                      </h5>
                      <p className="text-xs font-mono text-amber-300 font-semibold mt-0.5">
                        Awarded by the Education Minister of Kerala
                      </p>
                      <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                        Recognized at the state/IHRD level for exceptional leadership, social service drives, and community welfare impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* NIC Participation */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-display font-bold text-white">
                        National Integration Camp (NIC) Participant
                      </h5>
                      <p className="text-xs font-mono text-cyan-300 font-semibold mt-0.5">
                        National NSS Integration Camp
                      </p>
                      <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                        Represented the institution and state at the national camp, collaborating across diverse socio-cultural exchange and youth initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>State & National Level Social & Youth Engagement</span>
              </div>
            </motion.div>
          </div>

          {/* Certifications Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="uppercase tracking-wider font-semibold text-white">Verified Certifications:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {personalInfo.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
