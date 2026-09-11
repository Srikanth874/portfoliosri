"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Certifications"
          title="Learning, Verified"
          subtitle="Certifications I've earned as part of my continuous technical learning journey."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              id={`cert-${cert.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm overflow-hidden hover:border-indigo-500/30 transition-all duration-300 p-6"
            >
              {/* Left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/30 text-slate-400">
                  <Award size={10} />
                  {cert.year}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-indigo-300 transition-colors">
                {cert.name}
              </h3>
              <p className="text-slate-400 text-xs font-medium mb-4" style={{ color: cert.color }}>
                {cert.issuer}
              </p>

              {/* Credential link */}
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <ExternalLink size={11} />
                  View Credential
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Award size={11} />
                  Verified Certificate
                </span>
              )}
            </motion.div>
          ))}

          {/* Placeholder for future certs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: certifications.length * 0.1 }}
            className="rounded-2xl border border-dashed border-slate-700/50 p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[160px]"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800/40 flex items-center justify-center text-xl">
              ✨
            </div>
            <p className="text-slate-500 text-sm font-medium">More coming soon</p>
            <p className="text-slate-600 text-xs">Always learning, always earning</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          📌 View all certifications on my{" "}
          <a
            href="https://www.linkedin.com/in/sreekanth-rathod-06367930b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
          >
            LinkedIn profile
          </a>
        </motion.p>
      </div>
    </section>
  );
}
