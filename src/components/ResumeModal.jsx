import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, CheckCircle, ExternalLink, Sparkles, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo } from "../data/personal";
import { experiences } from "../data/experience";
import { educationData } from "../data/education";
import { skills } from "../data/skills";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel bg-dark-900/95 rounded-3xl border border-cyan-500/40 p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] overflow-y-auto print:bg-white print:text-black print:p-0 print:border-none"
        >
          {/* Top Actions Bar (Hidden on print) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 print:hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Header */}
          <div className="space-y-2 pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-display font-extrabold text-white">
                  {personalInfo.name}
                </h2>
                <p className="text-sm font-mono text-cyan-400 font-semibold mt-0.5">
                  {personalInfo.headline}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 font-light">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="py-6 border-b border-white/10 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-cyan-400 block mb-1">
                  Languages:
                </span>
                <span className="text-slate-300">
                  Python, Java, JavaScript (ES6+), SQL, HTML5/CSS3
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-violet-400 block mb-1">
                  Frameworks & APIs:
                </span>
                <span className="text-slate-300">
                  Django, Django REST Framework, Spring Boot, React, RESTful Architecture
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-emerald-400 block mb-1">
                  Databases & Cloud:
                </span>
                <span className="text-slate-300">
                  PostgreSQL, MySQL, AWS (EC2, S3), Docker, Git/GitHub
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="py-6 border-b border-white/10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Work Experience
            </h3>

            {experiences.map((exp) => (
              <div key={exp.company} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-display font-bold text-white">
                    {exp.role} — <span className="text-cyan-300">{exp.company}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-1 pt-1">
                  {exp.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-400">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="pt-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Formal Education
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((edu) => (
                <div key={edu.degree} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-sm font-bold text-white">{edu.degree}</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">{edu.institution}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">{edu.period} • {edu.grade}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
