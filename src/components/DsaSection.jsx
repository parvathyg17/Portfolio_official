import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Recursion",
  "Sorting",
  "Searching",
  "Trees",
  "BST",
  "Heaps",
  "Tries",
  "Graphs",
];

export default function DsaSection() {
  return (
    <section id="dsa" className="py-20 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> CORE COMPUTER SCIENCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            DSA & <span className="text-gradient-cyan">Problem Solving</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            I practice data structures and algorithms in Python to improve my problem-solving skills and understanding of core computer science concepts.
          </motion.p>
        </div>

        {/* Compact Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto"
        >
          {dsaTopics.map((topic, index) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono text-slate-300 bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/[0.04] transition-all duration-200 cursor-default"
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom subtle note */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-dark-950/60 px-3.5 py-1.5 rounded-full border border-white/5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Practiced with clean Python implementations & Big-O complexity analysis
          </span>
        </div>
      </div>
    </section>
  );
}
