"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-indigo-500/10 bg-[#050816]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo + tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                SR
              </div>
              <span className="text-white font-bold text-lg">Sreekanth Rathod</span>
            </div>
            <p className="text-indigo-400 text-sm font-medium tracking-wide">
              Building. Learning. Creating.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["#about", "#skills", "#projects", "#certifications", "#experience", "#contact"].map((href) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-slate-400 hover:text-white text-sm capitalize transition-colors"
              >
                {href.slice(1)}
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sreekanth-rathod-06367930b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-400/50 hover:bg-slate-700/50 transition-all"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:sreekanth@example.com"
              aria-label="Send email"
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs">
            © 2026 Sreekanth Rathod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
