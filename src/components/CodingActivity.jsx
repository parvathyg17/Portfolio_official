import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Sparkles, Trophy, GitCommit, CheckCircle2, ExternalLink } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "./Icons";
import { personalInfo } from "../data/personal";

export default function CodingActivity() {
  const [lcStats, setLcStats] = useState({
    solved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    loading: true
  });

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/parvathig17/solved")
      .then(res => res.json())
      .then(data => {
        setLcStats({
          solved: data.solvedProblem || 0,
          easy: data.easySolved || 0,
          medium: data.mediumSolved || 0,
          hard: data.hardSolved || 0,
          loading: false
        });
      })
      .catch(() => setLcStats(prev => ({ ...prev, loading: false })));
  }, []);

  const dsaTopics = [
    { topic: "Easy", count: lcStats.easy, pct: lcStats.solved ? (lcStats.easy / lcStats.solved) * 100 : 0, color: "#10b981" },
    { topic: "Medium", count: lcStats.medium, pct: lcStats.solved ? (lcStats.medium / lcStats.solved) * 100 : 0, color: "#f59e0b" },
    { topic: "Hard", count: lcStats.hard, pct: lcStats.solved ? (lcStats.hard / lcStats.solved) * 100 : 0, color: "#ef4444" },
  ];
  return (
    <section id="activity" className="py-24 relative overflow-hidden bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> CONTINUOUS DISCIPLINE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Coding & <span className="text-gradient-cyan">Problem Solving</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Consistent engineering habit: algorithmic challenge solving, daily commit discipline, and clean code principles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GitHub Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-7 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      GitHub Activity
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      @parvathyg17
                    </span>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 transition-colors"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                Active version control workflow practicing branch isolation, semantic commit histories, continuous refactoring, and reproducible README specifications.
              </p>

              {/* Heatmap Visual */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 mb-6 overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                    Commit Consistency Matrix
                  </span>
                </div>
                <div className="overflow-x-auto pb-2 text-white/90">
                  <GitHubCalendar 
                    username="parvathyg17" 
                    colorScheme="dark"
                    theme={{
                      dark: ['#ffffff0a', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9']
                    }}
                    blockSize={12}
                    hideTotalCount={true}
                    hideColorLegend={false}
                  />
                </div>
              </div>
            </div>

          </motion.div>

          {/* DSA / Problem Solving Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-7 sm:p-8 rounded-3xl border border-violet-500/20 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Problem Solving & DSA
                    </h3>
                    <span className="text-xs font-mono text-violet-400">
                      Algorithmic Mastery
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
                  {lcStats.loading ? "Loading..." : `${lcStats.solved} Solved`}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                Strengthening algorithmic computational complexity, space-time efficiency (Big-O analysis), edge-case validation, and optimal data structure choices.
              </p>

              {/* Progress Bars for Topics */}
              <div className="space-y-3.5 mb-6">
                {dsaTopics.map((item) => (
                  <div key={item.topic} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">{item.topic}</span>
                      <span className="text-slate-400">{item.count}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified algorithmic competence
              </span>
              <span className="text-cyan-400 font-semibold">Python & Java</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
