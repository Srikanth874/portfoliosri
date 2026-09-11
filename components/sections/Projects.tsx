"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";

const statusColors: Record<string, string> = {
  concept: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
};

const statusLabels: Record<string, string> = {
  concept: "Concept",
  "in-progress": "In Progress",
  completed: "Completed",
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Things I've Built & Conceptualized"
          subtitle="A mix of ideas, experiments, and projects I've been working on — each one a learning experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              style={{ boxShadow: "0 0 0 transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(99,102,241,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
              }}
            >
              {/* Gradient banner */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 mb-2">
                        <Star size={10} fill="currentColor" /> Featured
                      </span>
                    )}
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {project.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-xs text-slate-500 pl-3.5">
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/40 text-slate-300 text-sm font-medium hover:text-white hover:border-slate-500/50 transition-all"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/20 text-slate-500 text-sm font-medium cursor-not-allowed"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Coming Soon
                    </button>
                  )}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/80 to-violet-600/80 border border-indigo-500/30 text-white text-sm font-medium hover:opacity-90 transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/10 text-slate-500 text-sm font-medium cursor-not-allowed"
                    >
                      <ExternalLink size={14} />
                      Demo Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm mb-4">
            More projects and experiments are in progress. Follow along on GitHub.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700/50 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 font-medium text-sm transition-all"
          >
            <FaGithub className="w-4 h-4" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
