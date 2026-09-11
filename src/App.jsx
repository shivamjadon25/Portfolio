import React from 'react';
import Header from './components/Header';
import ExperienceList from './components/ExperienceList';
import ProjectsList from './components/ProjectsList';
import SkillsList from './components/SkillsList';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 selection:bg-zinc-800 selection:text-zinc-100">
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        <Header />
        <ExperienceList />
        <SkillsList />
        <ProjectsList />
        <ContactSection />
        
        {/* Discreet Footer */}
        <footer className="pt-12 border-t border-white/[0.06] text-xs font-mono text-zinc-600 flex items-center justify-between">
          <span>Shivam Jadon · Gurugram, India</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}
