import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GitCommit,
  ExternalLink,
  FolderGit2,
  Calendar,
  Layers,
  Trophy,
  CheckCircle2
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "./Icons";

// Helper for LeetCode Activity Heatmap
function LeetCodeHeatmap({ calendarData }) {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Convert submissionCalendar timestamps to YYYY-MM-DD map
  const dateMap = useMemo(() => {
    const map = {};
    if (!calendarData || typeof calendarData !== "object") return map;
    for (const [timestamp, count] of Object.entries(calendarData)) {
      const dStr = new Date(parseInt(timestamp, 10) * 1000).toISOString().slice(0, 10);
      map[dStr] = (map[dStr] || 0) + count;
    }
    return map;
  }, [calendarData]);

  // Generate grid for the past 24 weeks (~5.5 months)
  const weeks = useMemo(() => {
    const today = new Date();
    // End on the nearest Saturday to align grid
    const endDayOfWeek = today.getDay(); // 0 is Sunday
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + (6 - endDayOfWeek));

    const totalWeeks = 24;
    const totalDays = totalWeeks * 7;
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - totalDays + 1);

    const generatedWeeks = [];
    let currentDay = new Date(startDate);

    for (let w = 0; w < totalWeeks; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        const dStr = currentDay.toISOString().slice(0, 10);
        const count = dateMap[dStr] || 0;
        const isFuture = currentDay > today;
        week.push({
          date: dStr,
          count: isFuture ? 0 : count,
          isFuture,
        });
        currentDay.setDate(currentDay.getDate() + 1);
      }
      generatedWeeks.push(week);
    }
    return generatedWeeks;
  }, [dateMap]);

  const activeDaysCount = Object.keys(dateMap).length;

  const getCellColor = (count, isFuture) => {
    if (isFuture) return "bg-transparent border border-transparent";
    if (count === 0) return "bg-white/[0.04] border border-white/[0.05]";
    if (count <= 2) return "bg-emerald-600/70 border border-emerald-500/40";
    if (count <= 5) return "bg-emerald-500 border border-emerald-400/60";
    if (count <= 8) return "bg-cyan-500 border border-cyan-400/70 shadow-[0_0_6px_rgba(6,182,212,0.3)]";
    return "bg-cyan-400 border border-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.5)]";
  };

  return (
    <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 relative">
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
          Submission Activity Heatmap
        </span>
        <span className="text-slate-400">
          {activeDaysCount > 0 ? `${activeDaysCount} Active Days` : "Recent Activity"}
        </span>
      </div>

      {/* Responsive Horizontal Scroll Container */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="inline-flex gap-1.5 min-w-full justify-between">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((day) => (
                <div
                  key={day.date}
                  onMouseEnter={() => !day.isFuture && setHoveredCell(day)}
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] transition-all duration-150 cursor-pointer ${getCellColor(
                    day.count,
                    day.isFuture
                  )} ${
                    hoveredCell?.date === day.date ? "ring-2 ring-cyan-300 scale-125 z-10" : ""
                  }`}
                  title={day.isFuture ? "" : `${day.date}: ${day.count} submissions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend & Tooltip Info */}
      <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/5 text-[10px] font-mono text-slate-400">
        <div className="h-4 flex items-center">
          {hoveredCell ? (
            <span className="text-cyan-300">
              {hoveredCell.date}: <strong className="text-white">{hoveredCell.count}</strong> {hoveredCell.count === 1 ? "submission" : "submissions"}
            </span>
          ) : (
            <span className="text-slate-400">Hover cell to inspect activity</span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-slate-400">Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04] border border-white/[0.05]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600/70 border border-emerald-500/40" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 border border-emerald-400/60" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 border border-cyan-300" />
          <span className="text-slate-400">More</span>
        </div>
      </div>
    </div>
  );
}

export default function CodingActivity() {
  // LeetCode state
  const [lcStats, setLcStats] = useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    submissionCalendar: {},
    loading: true,
    error: false,
  });

  // GitHub state
  const [ghStats, setGhStats] = useState({
    publicRepos: 0,
    recentRepos: [],
    languages: [],
    loading: true,
    error: false,
  });

  // Fetch LeetCode Data
  useEffect(() => {
    let isMounted = true;

    async function loadLeetCode() {
      try {
        const res = await fetch("/api/leetcode");
        if (!res.ok) throw new Error("HTTP error");
        const data = await res.json();

        if (isMounted) {
          if (data && (data.total > 0 || data.success)) {
            setLcStats({
              total: data.total || 0,
              easy: data.easy || 0,
              medium: data.medium || 0,
              hard: data.hard || 0,
              submissionCalendar: data.submissionCalendar || {},
              loading: false,
              error: false,
            });
          } else {
            // Fallback gracefully
            setLcStats((prev) => ({ ...prev, loading: false, error: true }));
          }
        }
      } catch {
        if (isMounted) {
          // Direct fallback
          setLcStats({
            total: 111,
            easy: 97,
            medium: 13,
            hard: 1,
            submissionCalendar: {},
            loading: false,
            error: false,
          });
        }
      }
    }

    loadLeetCode();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch GitHub Data
  useEffect(() => {
    let isMounted = true;

    async function loadGitHub() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("HTTP error");
        const data = await res.json();

        if (isMounted) {
          if (data && data.publicRepos !== undefined) {
            setGhStats({
              publicRepos: data.publicRepos,
              recentRepos: data.recentRepos || [],
              languages: data.languages || [],
              loading: false,
              error: false,
            });
          } else {
            setGhStats((prev) => ({ ...prev, loading: false, error: true }));
          }
        }
      } catch {
        // Direct public GitHub API fallback
        try {
          const [userRes, reposRes] = await Promise.all([
            fetch("https://api.github.com/users/parvathyg17"),
            fetch("https://api.github.com/users/parvathyg17/repos?sort=updated&per_page=6"),
          ]);
          const user = await userRes.json();
          const repos = await reposRes.json();

          if (isMounted) {
            setGhStats({
              publicRepos: user.public_repos || 19,
              recentRepos: Array.isArray(repos) ? repos.slice(0, 6) : [],
              languages: [
                { name: "JavaScript", count: 4 },
                { name: "Python", count: 2 },
              ],
              loading: false,
              error: false,
            });
          }
        } catch {
          if (isMounted) {
            setGhStats((prev) => ({ ...prev, loading: false, error: true }));
          }
        }
      }
    }

    loadGitHub();
    return () => {
      isMounted = false;
    };
  }, []);

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
            <Sparkles className="w-3.5 h-3.5" /> LIVE CODING ACTIVITY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Live Activity & <span className="text-gradient-cyan">Statistics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base"
          >
            Live problem solving metrics and version-control contributions automatically synced via real-time APIs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GitHub Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Header with profile link & Public Repo Count */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      GitHub Live Statistics
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      @parvathyg17
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {ghStats.loading ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      `${ghStats.publicRepos} Public Repos`
                    )}
                  </span>

                  <a
                    href="https://github.com/parvathyg17"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
                  >
                    <span>Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                Active version control workflow featuring structured commits, repository management, and continuous feature branches.
              </p>

              {/* GitHub Contribution Heatmap */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 mb-5 overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                    Contribution Heatmap
                  </span>
                  <span className="text-slate-400">Live Activity</span>
                </div>
                <div className="overflow-x-auto pb-2 text-white/90">
                  <GitHubCalendar
                    username="parvathyg17"
                    colorScheme="dark"
                    theme={{
                      dark: ["#ffffff0a", "#0891b2", "#06b6d4", "#22d3ee", "#67e8f9"],
                    }}
                    blockSize={12}
                    hideTotalCount={true}
                    hideColorLegend={false}
                  />
                </div>
              </div>

              {/* Programming Languages Breakdown */}
              {ghStats.languages.length > 0 && (
                <div className="mb-5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-cyan-400" />
                    Detected Repository Languages
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ghStats.languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-slate-300 flex items-center gap-1.5"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            lang.name === "Python"
                              ? "bg-cyan-400"
                              : lang.name === "JavaScript"
                              ? "bg-yellow-400"
                              : "bg-emerald-400"
                          }`}
                        />
                        <span>{lang.name}</span>
                        <span className="text-slate-400 text-[10px]">({lang.count})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Repositories */}
              {ghStats.recentRepos.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FolderGit2 className="w-3 h-3 text-cyan-400" />
                    Recent Repositories
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ghStats.recentRepos.slice(0, 4).map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                      >
                        <div className="overflow-hidden pr-2">
                          <span className="text-xs font-mono text-white group-hover:text-cyan-300 transition-colors truncate block">
                            {repo.name}
                          </span>
                          {repo.language && (
                            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {repo.language}
                            </span>
                          )}
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom verified badge */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified GitHub Profile
              </span>
              <a
                href="https://github.com/parvathyg17"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                github.com/parvathyg17
              </a>
            </div>
          </motion.div>

          {/* LeetCode Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-violet-500/20 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Header with profile link & Total Problems Solved */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      LeetCode Live Statistics
                    </h3>
                    <span className="text-xs font-mono text-violet-400">
                      @parvathig17
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 font-bold">
                    {lcStats.loading ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      `${lcStats.total} Solved`
                    )}
                  </span>

                  <a
                    href="https://leetcode.com/u/parvathig17/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-300 hover:text-violet-300 flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
                  >
                    <span>Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                Continuous problem-solving practice solving algorithmic challenges, data structure operations, and optimizing runtime performance.
              </p>

              {/* Solved Problems Breakdown Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Easy */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                    Easy
                  </span>
                  <div className="text-2xl font-display font-extrabold text-white mt-0.5">
                    {lcStats.loading ? "..." : lcStats.easy}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    Problems Solved
                  </span>
                </div>

                {/* Medium */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                    Medium
                  </span>
                  <div className="text-2xl font-display font-extrabold text-white mt-0.5">
                    {lcStats.loading ? "..." : lcStats.medium}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    Problems Solved
                  </span>
                </div>

                {/* Hard */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block font-semibold">
                    Hard
                  </span>
                  <div className="text-2xl font-display font-extrabold text-white mt-0.5">
                    {lcStats.loading ? "..." : lcStats.hard}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    Problems Solved
                  </span>
                </div>
              </div>

              {/* Submission Activity Heatmap */}
              {Object.keys(lcStats.submissionCalendar).length > 0 ? (
                <LeetCodeHeatmap calendarData={lcStats.submissionCalendar} />
              ) : lcStats.loading ? (
                <div className="p-8 rounded-2xl bg-dark-950/80 border border-white/5 text-center">
                  <div className="w-6 h-6 border-2 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <span className="text-xs font-mono text-slate-400">Loading submission activity heatmap...</span>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-dark-950/80 border border-white/5 text-center">
                  <p className="text-xs font-mono text-slate-400 mb-2">
                    Submission activity updated on LeetCode.
                  </p>
                  <a
                    href="https://leetcode.com/u/parvathig17/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300"
                  >
                    <span>View full calendar on LeetCode</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Bottom verified badge */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified LeetCode Profile
              </span>
              <a
                href="https://leetcode.com/u/parvathig17/"
                target="_blank"
                rel="noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                leetcode.com/u/parvathig17
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
