"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, Cpu, Brain, Wrench, Palette } from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={16} />,
  Cpu: <Cpu size={16} />,
  Brain: <Brain size={16} />,
  Wrench: <Wrench size={16} />,
  Palette: <Palette size={16} />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Skills"
          title="Technologies & Tools"
          subtitle="Technologies, tools, and concepts I'm actively learning and working with."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-blue-600/80 to-violet-600/80 text-white border border-indigo-500/30 shadow-lg shadow-indigo-500/20"
                  : "bg-slate-800/40 text-slate-400 border border-slate-700/30 hover:text-white hover:border-indigo-500/20 hover:bg-slate-700/40"
              }`}
            >
              {iconMap[cat.icon]}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm p-5 flex flex-col items-center gap-3 cursor-default hover:border-indigo-500/40 transition-all"
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px ${skill.color}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 transparent";
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}12 0%, transparent 70%)`,
                  }}
                />

                <span className="text-3xl relative z-10">{skill.icon}</span>
                <p className="text-slate-300 text-xs font-semibold text-center leading-snug relative z-10">
                  {skill.name}
                </p>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 relative z-10">
                  Learning
                </span>

                {/* Color accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: skill.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learning note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          💡 These represent technologies I&apos;m actively learning and building with — always growing, always exploring.
        </motion.p>
      </div>
    </section>
  );
}
