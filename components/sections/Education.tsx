"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Education"
          title="Where It All Started"
          subtitle="My academic foundation in Computer Science Engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-3xl blur-xl" />

          <div className="relative rounded-3xl bg-slate-900/80 border border-indigo-500/20 backdrop-blur-xl overflow-hidden p-8 sm:p-10">
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-500/30"
              >
                <GraduationCap size={40} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-white font-extrabold text-2xl sm:text-3xl mb-1">
                  East Point College of Engineering
                  <br />
                  <span className="text-slate-400 text-lg font-normal">&amp; Technology</span>
                </h3>

                <p className="text-indigo-400 font-bold text-lg mb-5">
                  Bachelor of Engineering – Computer Science Engineering
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={15} className="text-indigo-400" />
                    2022 – Present
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={15} className="text-indigo-400" />
                    Bengaluru, Karnataka, India
                  </div>
                </div>

                {/* Subjects/focus */}
                <div className="mt-6 pt-6 border-t border-slate-700/30">
                  <p className="text-slate-400 text-sm font-medium mb-3">Key Areas of Study</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Web Technologies",
                      "Database Management",
                      "Operating Systems",
                      "Computer Networks",
                      "Artificial Intelligence",
                      "Software Engineering",
                    ].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-400 text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
