import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, Sparkles, Code, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import HeroScene from "./3d/HeroScene";
import { personalInfo } from "../data/personal";
import profilePic from "../assets/profile360.png";

export default function Hero({ onOpenResume }) {
  const [rotation, setRotation] = useState(0);
  
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-cyber"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-8rem)]">
        
        {/* Left Column: Text, Value Proposition, CTAs, Socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center z-10 space-y-6 pt-6 lg:pt-0"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <span className="cyber-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              Hi, I'm {personalInfo.name}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Aspiring <br />
              <span className="text-gradient-cyber">Software</span> Engineer
            </motion.h1>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-light"
          >
            {personalInfo.supportingText}
          </motion.p>

          {/* Tech Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {["Django REST", "React 19", "Spring Boot", "PostgreSQL", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-4 pt-3 items-center"
          >
            {/* View Projects */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-glow-cyan transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Download Resume */}
            <button
              onClick={onOpenResume}
              className="group px-5 py-3 rounded-xl font-mono text-sm font-medium text-slate-200 glass-panel hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Contact Me */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-5 py-3 rounded-xl font-mono text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 pt-4 border-t border-white/10 text-slate-400"
          >
            <span className="text-xs font-mono tracking-wider uppercase text-slate-500">
              Connect:
            </span>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:scale-110"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Parvathi G"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[580px] w-full relative flex items-center justify-center"
          style={{ perspective: 1000 }}
        >
          {/* Subtle Glow Ring behind Image */}
          <div className="absolute inset-0 radial-glow-cyan pointer-events-none rounded-full blur-2xl opacity-60" />

          {/* 3D Stylized Image */}
          <motion.div
            animate={{ rotateY: rotation }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            onClick={() => setRotation((prev) => prev + 360)}
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] glass-panel p-2"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img 
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
