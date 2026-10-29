import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  ArrowDown,
  Server,
  Database,
  Cloud,
  Zap,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const pipelineSteps = [
  {
    step: "01",
    phase: "Frontend Layer",
    tech: "React 19 + Vite + Tailwind CSS",
    role: "User Interface & Experience",
    summary: "Single-page responsive client with component modularity, fluid animations, and optimistic UI updates.",
    icon: Layers,
    color: "#06b6d4",
    details: [
      "State management & custom hooks",
      "Tailwind glassmorphism & responsive layouts",
      "Client-side caching & route guards"
    ]
  },
  {
    step: "02",
    phase: "REST API Gateway",
    tech: "Django REST Framework",
    role: "Contract & Security Gateway",
    summary: "Standardized RESTful HTTP endpoints with JWT bearer authentication, rate limiting, and input sanitization.",
    icon: Zap,
    color: "#8b5cf6",
    details: [
      "Strict request/response serialization",
      "JWT authorization & role-based middleware",
      "Pagination, throttling & OpenAPI contracts"
    ]
  },
  {
    step: "03",
    phase: "Backend Business Logic",
    tech: "Python Services & Logic",
    role: "Core Execution & Workflows",
    summary: "Clean architecture services isolating domain rules, transactional integrity, and payment workflows.",
    icon: Server,
    color: "#3b82f6",
    details: [
      "Decoupled service & repository patterns",
      "Atomic transactional boundaries",
      "Third-party integrations (Razorpay, OAuth)"
    ]
  },
  {
    step: "04",
    phase: "Data Persistence Layer",
    tech: "PostgreSQL / MySQL",
    role: "ACID Relational Storage",
    summary: "Normalized schemas with foreign key integrity, index optimization for fast queries, and automated migrations.",
    icon: Database,
    color: "#10b981",
    details: [
      "Relational integrity & complex joins",
      "B-Tree index optimization & query profiling",
      "ORM schema migrations & automated backups"
    ]
  },
  {
    step: "05",
    phase: "Cloud & Deployment",
    tech: "AWS EC2 + Linux + Nginx",
    role: "Server & Deployment Infrastructure",
    summary: "Configured Linux server environments deployed on AWS EC2 with reverse proxy routing and continuous deployment.",
    icon: Cloud,
    color: "#f59e0b",
    details: [
      "AWS EC2 cloud virtual instances",
      "Nginx reverse proxy & static asset delivery",
      "Git-based automated deployment workflows"
    ]
  }
];

export default function Architecture() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-dark-900/60">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> SYSTEM DESIGN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            How I <span className="text-gradient-cyan">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            A cohesive architectural pipeline translating client interactions into secure backend operations, resilient database transactions, and cloud deployments.
          </motion.p>
        </div>

        {/* High-level Tech Flow Badge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 glass-panel p-4 rounded-2xl border border-cyan-500/30 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-200 shadow-glow-cyan"
        >
          <span className="text-cyan-400 font-bold">React (SPA)</span>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
          <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />
          <span className="text-violet-400 font-bold">Django REST Framework</span>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
          <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />
          <span className="text-emerald-400 font-bold">PostgreSQL / MySQL</span>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
          <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />
          <span className="text-amber-400 font-bold">AWS EC2 & Linux</span>
        </motion.div>

        {/* Interactive Pipeline Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps Navigation Column */}
          <div className="lg:col-span-6 space-y-4">
            {pipelineSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = selectedStep === idx;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 relative border ${
                    isSelected
                      ? "glass-panel bg-dark-850 border-cyan-400/50 shadow-glow-cyan scale-[1.02]"
                      : "glass-card hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold" style={{ color: step.color }}>
                            PHASE {step.step}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="text-xs font-mono text-slate-400">
                            {step.role}
                          </span>
                        </div>
                        <h4 className="text-base font-display font-bold text-white mt-0.5">
                          {step.phase}
                        </h4>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 hidden sm:block">
                      {isSelected ? "Active" : "Inspect →"}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Inspector Card */}
          <div className="lg:col-span-6 sticky top-28">
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl"
            >
              {/* Top ambient color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: pipelineSteps[selectedStep].color }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                  SYSTEM TIER {pipelineSteps[selectedStep].step}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Engineering Principles
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white mb-1">
                {pipelineSteps[selectedStep].phase}
              </h3>

              <div
                className="text-sm font-mono font-semibold mb-4"
                style={{ color: pipelineSteps[selectedStep].color }}
              >
                {pipelineSteps[selectedStep].tech}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                {pipelineSteps[selectedStep].summary}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Technical Guarantees:
                </div>
                {pipelineSteps[selectedStep].details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: pipelineSteps[selectedStep].color }}
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-dark-950/80 border border-white/5 font-mono text-[11px] text-slate-400">
                <span className="text-cyan-400">$ system_check</span> --phase {pipelineSteps[selectedStep].phase.toLowerCase().replace(/ /g, "_")}
                <br />
                <span className="text-emerald-400">✓ Contract verified • 0 latency bottleneck</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
