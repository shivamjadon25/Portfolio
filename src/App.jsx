import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import ArchitectureDeepDive from './components/ArchitectureDeepDive';
import Experience from './components/Experience';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Default to light theme as requested
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      // Default light mode
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('portfolio_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('portfolio_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${
      isDark ? 'dark bg-[#08090d] text-slate-100' : 'bg-[#fcfdfd] text-slate-900'
    }`}>
      
      {/* Subtle Ambient Background Pattern */}
      <div className="fixed inset-0 bg-ambient-pattern pointer-events-none opacity-80 z-0" />

      {/* Floating Modern Navbar with Active Item Indicator */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Full-Width Content Container with Snug Spacing */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        <Hero />
        <ImpactMetrics />
        <ArchitectureDeepDive />
        <Experience />
        <SkillsMatrix />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

    </div>
  );
}
