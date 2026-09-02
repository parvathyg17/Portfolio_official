import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Layout, Cloud, CheckCircle, Terminal, Sparkles, Cpu } from "lucide-react";
import { personalInfo } from "../data/personal";

const iconMap = {
  Server: Server,
  Database: Database,
  Layout: Layout,
  Cloud: Cloud,
};

function TiltCard({ item, index }) {
  const IconComponent = iconMap[item.icon] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden group border border-white/10 hover:border-cyan-500/40"
    >
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-glow-cyan">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {item.title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed font-light">
        {item.desc}
      </p>

      {/* Decorative corner tag */}
      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-slate-600 group-hover:text-cyan-400/60 transition-colors">
        0{index + 1}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> ARCHITECTURAL MINDSET
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Engineering With <span className="text-gradient-cyan">Precision & Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {personalInfo.aboutText}
          </motion.p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden text-center group hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-gradient-cyber mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Interactive Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.pillars.map((pillar, index) => (
            <TiltCard key={pillar.title} item={pillar} index={index} />
          ))}
        </div>

        {/* Philosophy Quotation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">
                "Code is written for humans to understand, and machines to execute."
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                My approach focuses on clean domain models, explicit contracts, robust error boundaries, and seamless DX.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 whitespace-nowrap">
            <CheckCircle className="w-4 h-4" />
            <span>Ready for Production</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
