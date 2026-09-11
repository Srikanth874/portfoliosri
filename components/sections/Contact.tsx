"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, CheckCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Let's Connect"
          subtitle="Whether you have an opportunity, a project idea, or just want to say hi — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-3">Ready to connect?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m always open to conversations about internship opportunities, exciting projects,
                hackathons, or simply connecting with other tech enthusiasts. Drop me a message and
                I&apos;ll get back to you as soon as I can.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/sreekanth-rathod-06367930b"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/30 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2]">
                  <FaLinkedin className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">LinkedIn</p>
                  <p className="text-slate-400 text-xs">sreekanth-rathod-06367930b</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/30 hover:border-slate-500/40 hover:bg-slate-800/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-700/30 border border-slate-700/40 flex items-center justify-center text-slate-300">
                  <FaGithub className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">GitHub</p>
                  <p className="text-slate-400 text-xs">Explore my projects and code</p>
                </div>
              </a>

              <a
                href="mailto:sreekanth@example.com"
                id="contact-email"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/30 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-slate-400 text-xs">Send me an email directly</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/15 to-violet-600/15 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl bg-slate-900/80 border border-indigo-500/15 backdrop-blur-xl p-6 sm:p-8">
                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                  >
                    <CheckCircle size={48} className="text-green-400" />
                    <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">
                      Thanks for reaching out. I&apos;ll get back to you soon! 🙌
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                      className="text-indigo-400 text-sm hover:text-indigo-300 underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-slate-300 text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email-input" className="block text-slate-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-slate-300 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder="Hey Sreekanth, I'd love to connect about..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-all resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
