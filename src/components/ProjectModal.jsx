import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel bg-dark-900/95 rounded-3xl border border-cyan-500/40 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Featured Architecture
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-300 mt-1">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 ${project.metrics.length > 4 ? "lg:grid-cols-6" : "lg:grid-cols-4"} gap-2.5 my-6`}>
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                >
                  <div className="text-[10px] font-mono text-slate-400">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5 truncate">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architecture && (
            <div className="my-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> System Architecture & Technical Highlights:
              </h4>
              <div className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/20 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comprehensive Features List */}
          <div className="my-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Core Engineering Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="my-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-medium glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Backend Source</span>
              </a>
            )}

            {project.frontendGithubUrl && (
              <a
                href={project.frontendGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-medium glass-panel border border-white/10 hover:border-white/30 text-white flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Frontend Source</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
