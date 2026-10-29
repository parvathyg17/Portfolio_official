import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Cpu,
  Trophy,
  Award,
  Users,
  ExternalLink,
  Sun,
  Moon
} from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/personal";

export default function ResumeModal({ isOpen, onClose, currentTheme = "dark" }) {
  const [docThemeOverride, setDocThemeOverride] = useState(null);

  if (!isOpen) return null;

  const docTheme = docThemeOverride || currentTheme;

  const handlePrint = () => {
    window.print();
  };

  const toggleDocTheme = () => {
    setDocThemeOverride((prev) => {
      const active = prev || currentTheme;
      return active === "dark" ? "light" : "dark";
    });
  };

  const isLight = docTheme === "light";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-4xl rounded-3xl border p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] overflow-y-auto transition-colors duration-300 print:bg-white print:text-black print:p-0 print:border-none ${
            isLight
              ? "cv-light-theme bg-white text-slate-900 border-slate-200 shadow-slate-200/50"
              : "glass-panel bg-dark-900/95 text-slate-100 border-cyan-500/40"
          }`}
        >
          {/* Top Actions Bar (Hidden on print) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 print:hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleDocTheme}
                title="Toggle CV light/dark preview"
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-white/10"
              >
                {isLight ? <Moon className="w-3.5 h-3.5 text-cyan-500" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
                <span>{isLight ? "Dark Preview" : "Light Document"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-white/10"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 1. Resume Header */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  PARVATHI G
                </h1>
                <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold mt-1">
                  Python Backend Developer | Full Stack Developer | Software Developer
                </p>
                <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>Kerala, India</span>
                  <span>•</span>
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 90374 15018</span>
                </p>
              </div>

              {/* Contact & Social Links */}
              <div className="text-xs font-mono space-y-1.5 sm:text-right">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center sm:justify-end gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </a>
                <div className="flex items-center sm:justify-end gap-3 pt-1">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://portfolio-official-ytxm-gold.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Professional Summary */}
          <div className="py-6 border-b border-white/10 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {personalInfo.cvSummary}
            </p>
          </div>

          {/* 3. Technical Skills */}
          <div className="py-6 border-b border-white/10 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-cyan-400 block mb-0.5">
                  Programming:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.programming}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-violet-400 block mb-0.5">
                  Backend:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.backend}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-cyan-300 block mb-0.5">
                  Frontend:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.frontend}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-blue-400 block mb-0.5">
                  Databases:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.databases}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-emerald-400 block mb-0.5">
                  Authentication & Security:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.security}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-amber-400 block mb-0.5">
                  Cloud & Deployment:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.cloud}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 sm:col-span-2">
                <span className="font-mono font-bold text-pink-400 block mb-0.5">
                  Engineering & Practices:
                </span>
                <span className="text-slate-300">{personalInfo.cvSkills.engineering}</span>
              </div>
            </div>
          </div>

          {/* 4. Professional Experience */}
          <div className="py-6 border-b border-white/10 space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" /> Professional Experience
            </h2>

            {/* Wahy Lab */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <span className="font-display font-bold text-white text-base">
                    Java Developer Intern
                  </span>
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm ml-2">
                    — Wahy Lab
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Jan 2025 – Jun 2025 | Kerala, India
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed font-light pl-4 list-disc marker:text-cyan-400">
                <li>Developed Java Spring Boot backend modules following Object-Oriented Programming principles and modular application design.</li>
                <li>Built and integrated RESTful API endpoints for data processing, request validation, and application business logic.</li>
                <li>Implemented PostgreSQL CRUD operations and database integration, supporting reliable data persistence across backend services.</li>
                <li>Performed API testing, debugging, and maintenance using Git-based development workflows.</li>
              </ul>
            </div>

            {/* Syneffo Lab Solutions */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <span className="font-display font-bold text-white text-base">
                    Python Full Stack Developer Intern
                  </span>
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm ml-2">
                    — Syneffo Lab Solutions
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Mar 2023 – Dec 2023 | Kerala, India
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed font-light pl-4 list-disc marker:text-cyan-400">
                <li>Developed web application features using Python, Django, Django REST Framework, React, JavaScript, HTML, and CSS.</li>
                <li>Implemented REST APIs with CRUD functionality, request validation, business logic, and JSON responses.</li>
                <li>Designed relational database models and queries using Django ORM for application data management.</li>
                <li>Integrated React components with Django APIs and supported functional testing and debugging.</li>
              </ul>
            </div>
          </div>

          {/* 5. Projects */}
          <div className="py-6 border-b border-white/10 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5" /> Featured Projects
            </h2>

            {/* FurniCart */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-display font-bold text-white text-base">
                    FurniCart – Full Stack E-Commerce Platform
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <a
                    href="https://furnicart.parvathi.online/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                  >
                    <span>Live Application</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Python, Django, DRF, PostgreSQL, React, Redux Toolkit, Vite, JWT, Razorpay, AWS EC2, Nginx
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed font-light pl-4 list-disc marker:text-cyan-400">
                <li>Architected and developed a full-stack furniture e-commerce application with Django REST Framework, PostgreSQL, React, and Redux Toolkit.</li>
                <li>Implemented REST APIs for OTP-based registration, login, profiles, product variants, advanced catalog filtering, cart, wishlist, checkout, and orders.</li>
                <li>Secured authentication using HTTP-only JWT cookies, token rotation, CSRF protection, and role-based authorization for administrative features.</li>
                <li>Integrated Razorpay payments with server-side verification, COD, wallet payments, discount coupons, GST calculations, shipping rules, cancellation, returns, and refunds.</li>
                <li>Designed PostgreSQL relational models for products, inventory, orders, payments, promotions, and return requests, ensuring consistent transaction workflows.</li>
                <li>Developed administrative modules for user management, inventory, order processing, promotional campaigns, and sales analytics.</li>
                <li>Deployed Django on AWS EC2 using Gunicorn, Nginx, systemd, and HTTPS; deployed React on Vercel with secure cross-origin API integration.</li>
              </ul>
            </div>

            {/* MedQ */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-display font-bold text-white text-base">
                    MedQ – Medical Equipment E-Commerce Platform
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Django REST Framework + React
                </div>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Python, Django, DRF, React, PostgreSQL, Tailwind CSS, REST APIs
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed font-light pl-4 list-disc marker:text-cyan-400">
                <li>Built a specialized medical equipment purchasing platform for doctors and dealers using Django REST Framework, React, and PostgreSQL.</li>
                <li>Implemented a product catalog with technical specifications, category-based filtering, and detailed equipment information.</li>
                <li>Developed doctor and dealer authentication with role-based purchasing workflows and account access.</li>
                <li>Built persistent wishlist, shopping cart, and checkout features with address and order validation.</li>
                <li>Implemented order tracking and return management, integrating frontend workflows with backend REST APIs and Django ORM models.</li>
              </ul>
            </div>
          </div>

          {/* 6. Data Structures & Algorithms */}
          <div className="py-6 border-b border-white/10 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> Data Structures & Algorithms
            </h2>
            <div className="space-y-2 text-xs leading-relaxed">
              <p className="text-slate-300">
                <strong className="text-cyan-400 font-mono">Coding Practice:</strong> Solved 100+ LeetCode problems in Python, focusing on efficient time and space complexity.
              </p>
              <p className="text-slate-300">
                <strong className="text-violet-400 font-mono">Data Structures:</strong> Arrays, Strings, Linked Lists, Stacks, Queues, Hash Tables, Binary Trees, Binary Search Trees, Heaps, Tries, Graphs.
              </p>
              <p className="text-slate-300">
                <strong className="text-emerald-400 font-mono">Algorithms:</strong> Binary Search, Recursion, Backtracking, Merge Sort, Quick Sort, Heap Sort, BFS, DFS, Topological Sort, Dijkstra, Prim, Kruskal, Disjoint Set Union.
              </p>
              <p className="text-slate-300">
                <strong className="text-amber-400 font-mono">Concepts:</strong> Tree Traversals, Graph Traversals, Big-O Analysis, Time and Space Complexity.
              </p>
            </div>
          </div>

          {/* 7. Education */}
          <div className="py-6 border-b border-white/10 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" /> Education
            </h2>

            <div className="space-y-3">
              {/* Brototype */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white">Software Development Student</span>
                  <span className="text-cyan-400 font-mono text-xs">Oct 2025 – Present | Kerala, India</span>
                </div>
                <div className="text-xs font-mono text-slate-400">Brototype / Brocamp</div>
                <p className="text-xs text-slate-300 leading-relaxed font-light pt-1">
                  Pursuing intensive project-based training in Python, Django, DRF, React, PostgreSQL, and full-stack development. Developing practical applications and participating in coding assessments, technical evaluations, peer code reviews, and software architecture discussions.
                </p>
              </div>

              {/* MCA & BCA in clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs sm:text-sm font-bold text-white">Master of Computer Applications (MCA)</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">APJ Abdul Kalam Technological University</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">2023 – 2025 • Grade: <strong>80%</strong></div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs sm:text-sm font-bold text-white">Bachelor of Computer Applications (BCA)</div>
                  <div className="text-xs font-mono text-violet-400 mt-0.5">University of Kerala</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">2020 – 2023 • Grade: <strong>72%</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Leadership & Volunteering */}
          <div className="py-6 border-b border-white/10 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Users className="w-3.5 h-3.5" /> Leadership & Volunteering
            </h2>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white">Communication Coordinator — Brototype</span>
                <span className="text-cyan-400 font-mono text-xs">Sep 2026 – Oct 2026</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300 leading-relaxed font-light pl-4 list-disc marker:text-cyan-400">
                <li>Led English communication sessions, workshops, group discussions, and interactive speaking activities to improve students’ professional fluency.</li>
                <li>Organized debates, impromptu speaking challenges, and presentation activities focused on communication and technical interview readiness.</li>
              </ul>
            </div>
          </div>

          {/* 9. Achievements & Coding Profiles */}
          <div className="py-6 border-b border-white/10 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Achievements & Coding Profiles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-amber-500/[0.03] border border-amber-500/20 space-y-1">
                <div className="font-display font-bold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Best NSS Volunteer Award (IHRD Level, 2023)</span>
                </div>
                <div className="text-[11px] font-mono text-amber-300/90 font-semibold">
                  Awarded by the Education Minister of Kerala
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Recognized at the state/IHRD level for exemplary volunteering, community service, and youth leadership initiatives.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/20 space-y-1">
                <div className="font-display font-bold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>National Integration Camp (NIC) Participant</span>
                </div>
                <div className="text-[11px] font-mono text-cyan-300/90 font-semibold">
                  National NSS Integration Camp
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Participated representing the state and institution in national-level integration camps, cultural exchanges, and socio-educational activities.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono font-bold text-violet-400 block">LeetCode Profile</span>
                  <span className="text-[11px] text-slate-400 font-mono">leetcode.com/u/parvathig17/</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-300 font-bold">
                  100+ Solved
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono font-bold text-cyan-400 block">GitHub Profile</span>
                  <span className="text-[11px] text-slate-400 font-mono">github.com/parvathyg17</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 font-bold">
                  Full-Stack Repos
                </span>
              </div>
            </div>
          </div>

          {/* 10. Certifications */}
          <div className="pt-6 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Certifications
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {personalInfo.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
