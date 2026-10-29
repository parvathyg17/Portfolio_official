import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

// UI Components
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Education from "./components/Education";
import DsaSection from "./components/DsaSection";
import CodingActivity from "./components/CodingActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });

  // Keep <html> dark or light class in sync
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Top progress bar tracking scroll depth
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Scroll Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 origin-left z-[100] shadow-glow-cyan"
            style={{ scaleX }}
          />

          {/* Custom Mouse Cursor for Desktop */}
          <CustomCursor />

          {/* Floating Glassmorphic Navbar */}
          <Navbar
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="relative">
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <Skills />
            <Architecture />
            <Experience />
            <Projects />
            <DsaSection />
            <CodingActivity />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Resume Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
            currentTheme={theme}
          />
        </motion.div>
      )}
    </div>
  );
}
