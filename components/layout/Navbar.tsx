"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/90 backdrop-blur-xl border-b border-indigo-500/10 shadow-lg shadow-indigo-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav("#home")}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                SR
              </div>
              <span className="hidden sm:block text-white font-semibold text-sm">
                Sreekanth<span className="text-indigo-400"> Rathod</span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 8).map(({ label, href }) => {
                const id = href.slice(1);
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${
                      active === id
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {active === id && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95"
              >
                Let&apos;s Connect
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0a0f24]/95 backdrop-blur-xl border-l border-indigo-500/10 flex flex-col pt-20 px-6 pb-8 gap-2"
          >
            {navItems.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-indigo-500/10 rounded-lg transition-all text-sm font-medium"
              >
                {label}
              </button>
            ))}
            <div className="mt-auto pt-6 border-t border-indigo-500/10">
              <button
                onClick={() => handleNav("#contact")}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold"
              >
                Let&apos;s Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
