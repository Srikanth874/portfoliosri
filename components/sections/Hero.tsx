"use client";

import { motion } from "framer-motion";
import { ChevronDown, Terminal, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { useState, useEffect } from "react";

const roles = [
  "Computer Science Student",
  "Aspiring Software Developer",
  "AI & Data Enthusiast",
  "Technology Learner",
  "Problem Solver",
];

const codeLines = [
  { indent: 0, content: "const sreekanth = {", color: "text-indigo-300" },
  { indent: 1, content: 'name: "Sreekanth Rathod",', color: "text-slate-300" },
  { indent: 1, content: 'role: "CSE Student",', color: "text-slate-300" },
  { indent: 1, content: 'passion: ["AI", "WebDev", "Data"],', color: "text-green-400" },
  { indent: 1, content: 'location: "Bengaluru, India",', color: "text-slate-300" },
  { indent: 1, content: "learning: true,", color: "text-yellow-400" },
  { indent: 1, content: "building: true,", color: "text-yellow-400" },
  { indent: 1, content: "openToOpportunities: true,", color: "text-emerald-400" },
  { indent: 0, content: "};", color: "text-indigo-300" },
  { indent: 0, content: "", color: "" },
  { indent: 0, content: "sreekanth.connect(); // Let's build!", color: "text-purple-400" },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayText.length < target.length) {
        timeout = setTimeout(() => setDisplayText(target.slice(0, displayText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, roleIdx]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeLines.length) { i++; setVisibleLines(i); }
      else clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Internships & Opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p className="text-slate-400 text-lg font-medium mb-2">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Sreekanth{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Rathod
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="h-8 flex items-center"
            >
              <span className="text-indigo-400 font-mono text-lg font-semibold">
                {displayText}
                <span className="animate-pulse text-violet-400">|</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug max-w-lg"
            >
              Computer Science Student{" "}
              <span className="text-indigo-400">Building My Future</span>{" "}
              With Technology
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-slate-400 text-base leading-relaxed max-w-lg"
            >
              Passionate about software development, artificial intelligence, data, and modern
              technology. I enjoy learning new technologies, building projects, solving problems,
              and turning ideas into practical digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button
                id="hero-view-projects"
                onClick={() => scrollTo("#projects")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2"
              >
                <Code2 size={18} />
                View My Projects
              </button>
              <button
                id="hero-connect"
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 rounded-xl border border-indigo-500/30 text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 font-semibold transition-all flex items-center gap-2"
              >
                Let&apos;s Connect
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://www.linkedin.com/in/sreekanth-rathod-06367930b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                id="hero-linkedin"
                className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all hover:scale-110"
              >
                <FaLinkedin className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                id="hero-github"
                className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-400/40 hover:bg-slate-700/40 transition-all hover:scale-110"
              >
                <FaGithub className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:sreekanth@example.com"
                aria-label="Email"
                id="hero-email"
                className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all hover:scale-110"
              >
                <FaEnvelope className="w-[18px] h-[18px]" />
              </a>
              <span className="text-slate-600 text-sm">Bengaluru, India 📍</span>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-3xl blur-2xl" />

              {/* Terminal card */}
              <div className="relative bg-[#0d1117]/90 backdrop-blur-xl border border-indigo-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22]/80 border-b border-indigo-500/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="flex items-center gap-2 ml-3 text-slate-500 text-xs">
                    <Terminal size={12} />
                    sreekanth.ts
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-7 min-h-[320px]">
                  {codeLines.slice(0, visibleLines).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${line.color} flex`}
                    >
                      <span className="text-slate-600 select-none w-6 shrink-0 text-right mr-4 text-xs leading-7">
                        {i + 1}
                      </span>
                      <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                        {line.content}
                      </span>
                    </motion.div>
                  ))}
                  {visibleLines < codeLines.length && (
                    <span className="animate-pulse text-indigo-400">█</span>
                  )}
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: "Python", top: "-top-4", left: "-left-4", color: "bg-blue-500/20 border-blue-500/30 text-blue-300" },
                { label: "AI/ML", top: "top-8", left: "-left-10", color: "bg-violet-500/20 border-violet-500/30 text-violet-300" },
                { label: "Next.js", top: "-top-4", right: "-right-4", color: "bg-slate-500/20 border-slate-500/30 text-slate-300" },
                { label: "Cloud", top: "top-8", right: "-right-10", color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300" },
                { label: "Data", bottom: "bottom-8", left: "-left-10", color: "bg-green-500/20 border-green-500/30 text-green-300" },
                { label: "UI/UX", bottom: "-bottom-4", right: "-right-4", color: "bg-pink-500/20 border-pink-500/30 text-pink-300" },
              ].map(({ label, color, ...pos }, i) => (
                <motion.span
                  key={label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute px-3 py-1 rounded-full text-xs font-semibold border ${color} backdrop-blur-sm ${Object.values(pos).join(" ")}`}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollTo("#about")}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={28} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
