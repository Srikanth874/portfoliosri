"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Cpu, Globe, Zap } from "lucide-react";

const exploring = [
  { label: "AI / Generative AI", icon: "🤖", color: "from-violet-500 to-purple-600" },
  { label: "Data Analytics", icon: "📊", color: "from-blue-500 to-cyan-600" },
  { label: "Web Development", icon: "🌐", color: "from-indigo-500 to-blue-600" },
  { label: "Cloud Computing", icon: "☁️", color: "from-sky-500 to-indigo-600" },
  { label: "Software Development", icon: "💻", color: "from-green-500 to-emerald-600" },
  { label: "AI Agents", icon: "⚙️", color: "from-pink-500 to-rose-600" },
];

const highlights = [
  { icon: <BookOpen size={20} />, label: "Active Learner", desc: "Always picking up new technologies and frameworks" },
  { icon: <Cpu size={20} />, label: "Tech Enthusiast", desc: "Fascinated by AI, data, and emerging technologies" },
  { icon: <Globe size={20} />, label: "Builder", desc: "Turning ideas into real-world digital experiences" },
  { icon: <Zap size={20} />, label: "Problem Solver", desc: "Approaching challenges with logic and creativity" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="Who I Am"
          subtitle="A curious CS student from Bengaluru, building one project at a time."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-base leading-relaxed">
              Hey! I&apos;m Sreekanth, a Computer Science Engineering student at{" "}
              <span className="text-indigo-400 font-semibold">
                East Point College of Engineering and Technology
              </span>{" "}
              in Bengaluru, Karnataka. I&apos;m currently in my journey of becoming a well-rounded technology professional — and honestly, it&apos;s been an exciting ride so far.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I started this journey with a genuine curiosity about how software works — how apps go from ideas to things people actually use. That curiosity pushed me into programming, then data structures, then web development, and now I find myself deep in the world of artificial intelligence and data analytics.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Right now, I&apos;m continuously building my technical foundation through hands-on projects, certifications, hackathons, workshops, and a whole lot of experimentation. I believe in learning by doing — whether that means building a platform concept at 2am or playing around with an AI agent workflow.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I&apos;m especially interested in how AI and data can solve real-world problems, and how thoughtful design can make technology more accessible. I&apos;m here to learn, grow, and contribute to something meaningful.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="text-indigo-400 mb-2 group-hover:scale-110 transition-transform w-fit">
                    {h.icon}
                  </div>
                  <p className="text-white text-sm font-semibold">{h.label}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Card */}
            <div className="rounded-2xl bg-slate-900/50 border border-indigo-500/10 backdrop-blur-sm p-8">
              <h3 className="text-white font-bold text-xl mb-2">🧭 Currently Exploring</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                These are the areas I&apos;m actively learning, experimenting with, and building in right now.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {exploring.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative group overflow-hidden rounded-xl border border-transparent p-px"
                    style={{
                      background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
                    }}
                  >
                    <div className="relative rounded-xl bg-[#0d1117] p-4 h-full">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-slate-300 text-sm font-medium mt-2 leading-snug">{item.label}</p>
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education quick card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-indigo-500/15 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <p className="text-white font-bold text-base">East Point College of Engineering</p>
                  <p className="text-indigo-400 text-sm font-medium">Computer Science Engineering</p>
                  <p className="text-slate-500 text-xs mt-1">2022 – Present · Bengaluru, Karnataka</p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <blockquote className="border-l-2 border-indigo-500/50 pl-4 italic text-slate-400 text-sm leading-relaxed">
              &ldquo;The best way to learn is to build something you&apos;re genuinely curious about. Every project teaches you something no tutorial ever will.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
