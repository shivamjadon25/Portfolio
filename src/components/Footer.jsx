import React from 'react';
import { ArrowUp, Linkedin, FileText, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-black/30 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
            SJ
          </div>
          <div>
            <div className="font-display font-bold text-sm text-slate-900 dark:text-white">Shivam Jadon</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Fullstack Engineer &amp; AI Architect</div>
          </div>
        </div>

        {/* Live Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-white/[0.04] px-4 py-2 rounded-full border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>System Status: 100% Operational · Gurugram (IST)</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-white/[0.08] transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-mono border border-slate-200 dark:border-white/[0.08] transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.04] text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} Shivam Jadon. Engineered with React, Tailwind CSS &amp; scalable architecture.
      </div>
    </footer>
  );
}
