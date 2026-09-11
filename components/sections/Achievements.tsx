"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import SectionHeader from "@/components/ui/SectionHeader";

const categoryColors: Record<string, string> = {
  certification: "from-amber-500/20 to-yellow-500/10 border-amber-500/20",
  hackathon: "from-violet-500/20 to-purple-500/10 border-violet-500/20",
  workshop: "from-blue-500/20 to-cyan-500/10 border-blue-500/20",
  learning: "from-indigo-500/20 to-blue-500/10 border-indigo-500/20",
  project: "from-green-500/20 to-emerald-500/10 border-green-500/20",
};

const categoryLabels: Record<string, string> = {
  certification: "🏅 Certification",
  hackathon: "⚡ Hackathon",
  workshop: "🔬 Workshop",
  learning: "📚 Learning",
  project: "🚀 Project",
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Achievements"
          title="Milestones & Highlights"
          subtitle="Recognition, learning milestones, and things I'm proud of from my tech journey so far."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              id={`achievement-${item.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${categoryColors[item.category]} border backdrop-blur-sm p-6 overflow-hidden transition-all duration-300`}
            >
              {/* Background glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: item.color }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-4 relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* Category label */}
              <p className="text-xs font-semibold text-slate-500 mb-2 relative z-10">
                {categoryLabels[item.category]}
              </p>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2 relative z-10 leading-snug group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
