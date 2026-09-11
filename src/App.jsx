import React from 'react';
import InteractiveBackdrop from './components/InteractiveBackdrop';
import Header from './components/Header';
import SpecialtySpotlight from './components/SpecialtySpotlight';
import ExperienceList from './components/ExperienceList';
import SkillsList from './components/SkillsList';
import ProjectsList from './components/ProjectsList';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050609] text-zinc-200 selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      {/* Subtle Interactive Particle Canvas */}
      <InteractiveBackdrop />

      {/* Main Container */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
        <Header />
        <SpecialtySpotlight />
        <ExperienceList />
        <SkillsList />
        <ProjectsList />
        <ContactSection />
        
        {/* Discreet Modern Footer */}
        <footer className="pt-12 pb-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Shivam Jadon · Gurugram, India</span>
          </div>
          <div className="text-zinc-600">
            © {new Date().getFullYear()} · Built with React &amp; Tailwind CSS
          </div>
        </footer>
      </main>
    </div>
  );
}
