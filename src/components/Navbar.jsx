import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/profile360.png";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume, theme = "dark", onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none px-4 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl flex items-center justify-between px-5 py-3 ${
          scrolled
            ? "glass-panel bg-dark-900/80 border border-cyan-500/20 shadow-xl shadow-cyan-950/20 backdrop-blur-xl"
            : "glass-panel bg-dark-950/40 border border-white/10 backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center p-[1px] shadow-glow-cyan transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center overflow-hidden">
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              Parvathi G
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-glow-emerald" />
            </span>
            <span className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium font-sans rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 -z-10 shadow-glow-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center justify-center shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>
          )}

          {/* Quick CV Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-3 py-2 rounded-xl text-xs font-mono font-medium border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 transition-colors hidden md:flex items-center gap-1.5 hover:border-cyan-400/40"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </button>
          )}

          {/* Contact CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="relative group px-4 py-2 rounded-xl text-xs font-mono font-medium overflow-hidden border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-all duration-300 shadow-glow-cyan flex items-center gap-1.5 hover:scale-[1.03]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-4 right-4 mt-2 p-5 rounded-2xl glass-panel bg-dark-900/95 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 lg:hidden"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Available for hire
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 mt-1 border-t border-white/10 flex gap-2">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-cyan-500" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              )}
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View CV</span>
                </button>
              )}
            </div>

            <div className="pt-1">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full block text-center py-2.5 rounded-xl text-xs font-mono font-medium bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
