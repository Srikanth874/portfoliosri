"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import GitHubSection from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen bg-[#050816]">
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, width: "100%" }}
      />

      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Education />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
