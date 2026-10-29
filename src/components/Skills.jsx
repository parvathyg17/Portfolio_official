import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode2,
  Atom,
  ShieldAlert,
  Network,
  Layers,
  Waypoints,
  Database,
  HardDrive,
  Cloud,
  Box,
  GitBranch,
  Sparkles,
  Orbit,
  Grid,
  Check,
  Cpu,
  Terminal,
  Server,
  Layout
} from "lucide-react";
import TechScene from "./3d/TechScene";
import { skills, skillCategories } from "../data/skills";

const iconMap = {
  Code2,
  FileCode2,
  Atom,
  ShieldAlert,
  Network,
  Layers,
  Waypoints,
  Database,
  HardDrive,
  Cloud,
  Box,
  GitBranch,
  Cpu,
  Terminal,
  Server,
  Layout,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("constellation"); // 'constellation' | 'grid'
  const [inspectedTech, setInspectedTech] = useState(null);

  const filteredSkills = skills.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> CORE STACK & SPECIALIZATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Interactive <span className="text-gradient-cyan">Tech Constellation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Technologies and tools I use to build backend services, manage databases, and develop responsive web applications.
          </motion.p>
        </div>

        {/* Controls: Category Filter + View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl glass-panel border border-white/10 max-w-full overflow-x-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle (3D Orbit vs Responsive Grid) */}
          <div className="flex items-center gap-1 p-1 rounded-xl glass-panel border border-white/10">
            <button
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === "constellation"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan font-medium"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Constellation</span>
              <span className="sm:hidden">3D</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan font-medium"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid View</span>
              <span className="sm:hidden">Grid</span>
            </button>
          </div>
        </div>

        {/* View Content */}
        {viewMode === "constellation" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Interactive Canvas */}
            <div className="lg:col-span-8 h-[480px] sm:h-[520px] rounded-3xl glass-panel border border-cyan-500/20 overflow-hidden relative shadow-2xl">
              <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Orbiting Tech Cluster • Drag to rotate</span>
              </div>

              {/* 3D Tech Scene */}
              <TechScene onHoverTech={setInspectedTech} />

              <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-slate-400 bg-dark-950/70 px-3 py-1 rounded-full border border-white/10">
                Hover node to inspect details
              </div>
            </div>

            {/* Side Inspector Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 relative overflow-hidden">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Technology Inspector
                </div>

                {inspectedTech ? (
                  <motion.div
                    key={inspectedTech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                        style={{ backgroundColor: `${inspectedTech.color}20`, color: inspectedTech.color }}
                      >
                        {inspectedTech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">
                          {inspectedTech.name}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          {inspectedTech.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {skills.find((s) => s.name.toLowerCase().includes(inspectedTech.name.toLowerCase()))?.description ||
                        "Key component in modern full-stack architecture."}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Proficiency:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Production Ready
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <Orbit className="w-10 h-10 text-cyan-400/40 mx-auto animate-spin-slow" />
                    <p className="text-sm">Hover over any floating 3D tech node to inspect stack architecture details.</p>
                  </div>
                )}
              </div>

              {/* Quick Badge List for Mobile/Tablets */}
              <div className="glass-panel p-5 rounded-3xl border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Quick Select
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => setInspectedTech({ name: tech.name, color: tech.color, category: tech.tag })}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Structured Grid View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((tech, idx) => {
              const IconComp = iconMap[tech.icon] || Code2;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: tech.bgGlow, color: tech.color }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {tech.level}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-400/80 mb-2">
                      {tech.tag}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>Category:</span>
                    <span className="text-slate-300 capitalize">{tech.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
