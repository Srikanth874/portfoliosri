"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import SectionHeader from "@/components/ui/SectionHeader";

const typeColors: Record<string, string> = {
  workshop: "from-blue-500 to-cyan-500",
  hackathon: "from-violet-500 to-purple-600",
  learning: "from-indigo-500 to-blue-600",
  activity: "from-amber-500 to-orange-600",
};

const typeLabels: Record<string, string> = {
  workshop: "Workshop",
  hackathon: "Hackathon / Challenge",
  learning: "Learning Experience",
  activity: "Activity",
};

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Activities & Learning"
          title="Experiences That Shaped Me"
          subtitle="Technical activities, workshops, and learning milestones — not formal jobs, but real experiences."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                id={`exp-${exp.id}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 200 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${typeColors[exp.type]} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-4">
                  <div className="rounded-2xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm p-5 sm:p-6 hover:border-indigo-500/30 transition-all group">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${typeColors[exp.type]} text-white`}
                      >
                        {typeLabels[exp.type]}
                      </span>
                      <span className="text-slate-500 text-xs">{exp.period}</span>
                    </div>

                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-indigo-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-400 text-sm font-medium mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
