"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeader from "@/components/ui/SectionHeader";

const contributions = Array.from({ length: 52 * 7 }, (_, i) => ({
  id: i,
  level: Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0,
}));

const levelColors = [
  "bg-slate-800/60",
  "bg-indigo-900/60",
  "bg-indigo-700/60",
  "bg-indigo-500/80",
  "bg-indigo-400",
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="GitHub"
          title="Follow My Coding Journey"
          subtitle="Projects, experiments, and code explorations — all on GitHub."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
              <FaGithub className="w-7 h-7 text-slate-300" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Sreekanth Rathod</p>
              <p className="text-slate-400 text-sm">@github</p>
            </div>
          </div>

          {/* Contribution graph (decorative) */}
          <div className="mb-6">
            <p className="text-slate-500 text-xs mb-3 text-left">Contribution activity (decorative)</p>
            <div
              className="grid gap-0.5 overflow-x-auto"
              style={{ gridTemplateColumns: "repeat(52, minmax(10px, 1fr))", gridTemplateRows: "repeat(7, 1fr)" }}
              aria-hidden="true"
            >
              {contributions.map((cell) => (
                <div
                  key={cell.id}
                  className={`w-2.5 h-2.5 rounded-sm ${levelColors[cell.level]} transition-all hover:scale-125`}
                />
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-2 text-right">Decorative visualization — visit GitHub for real activity</p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="github-profile-link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700/50 text-white font-semibold hover:bg-slate-700 hover:border-indigo-500/40 transition-all"
          >
            <FaGithub className="w-[18px] h-[18px]" />
            View GitHub Profile
            <ExternalLink size={14} className="text-slate-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
