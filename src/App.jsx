import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiArchitectureVisualizer from './components/AiArchitectureVisualizer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
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
    <div className={`min-h-screen relative font-sans ${isDark ? 'dark bg-[#08090d] text-slate-200' : 'light bg-slate-50 text-slate-800'}`}>
      
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Floating Header Navbar */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        openCmdPalette={() => setCmdPaletteOpen(true)} 
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onExploreClick={() => {
          const el = document.getElementById('architecture');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <AiArchitectureVisualizer />

        <Experience />

        <Skills />

        <Projects />

        <InteractiveTerminal />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette 
        isOpen={cmdPaletteOpen} 
        onClose={() => setCmdPaletteOpen(false)} 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

    </div>
  );
}
