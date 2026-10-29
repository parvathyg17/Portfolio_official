import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  ShoppingBag,
  HeartPulse,
  CheckCircle2
} from "lucide-react";
import { Github } from "./Icons";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const projectIcons = {
  furnicart: ShoppingBag,
  medq: HeartPulse,
};

// Interactive 3D Tilt Card using mouse coordinates
function TiltProjectCard({ project, onSelectProject }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10; // max tilt 10 deg
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const IconComp = projectIcons[project.id] || Layers;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="w-full"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
          project.featured
            ? "glass-panel-glow bg-dark-900/90 border-cyan-400/40 shadow-2xl"
            : "glass-card bg-dark-900/60 border-white/10"
        }`}
      >
        {/* Decorative dynamic ambient glow */}
        <div
          className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 -z-10 ${
            isHovered ? "opacity-25" : ""
          }`}
        />

        {/* Featured Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{
                backgroundColor: `${project.accentColor}25`,
                border: `1px solid ${project.accentColor}50`,
                color: project.accentColor,
              }}
            >
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold" style={{ color: project.accentColor }}>
                {project.featured ? "★ FEATURED STAR APPLICATION" : "FULL STACK SYSTEM"}
              </span>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300">
                {project.title}
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 hidden sm:inline">
            Production Ready
          </span>
        </div>

        {/* Subtitle & Description */}
        <p className="text-xs font-mono text-cyan-400/90 mb-2">
          {project.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
          {project.description}
        </p>

        {/* Key Features Quick Peek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {(project.featured ? project.features.slice(0, 6) : project.features.slice(0, 4)).map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => onSelectProject(project)}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn"
          >
            <span>View Architecture & Full Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Backend repo for ${project.title}`}
                title="Backend Source Code"
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Backend</span>
              </a>
            )}
            {project.frontendGithubUrl && (
              <a
                href={project.frontendGithubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Frontend repo for ${project.title}`}
                title="Frontend Source Code"
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Frontend</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold flex items-center gap-1.5 shadow-glow-cyan hover:scale-[1.02] transition-transform"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-badge mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> PRODUCTION SHOWCASE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient-cyan">Applications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Interactive project architectures crafted with modern frameworks, decoupled APIs, relational schemas, and responsive interfaces.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((proj) => (
            <TiltProjectCard
              key={proj.id}
              project={proj}
              onSelectProject={setActiveModalProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
