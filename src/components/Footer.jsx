import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-black/30 py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Location */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs">
            SJ
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            Shivam Jadon <span className="text-slate-400 dark:text-slate-600">·</span> Gurugram, India
          </div>
        </div>

        {/* Action Controls & Copyright */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs border border-slate-200 dark:border-white/[0.08] transition-all shadow-sm font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-200/60 dark:border-white/[0.04] text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Shivam Jadon. All rights reserved.
      </div>
    </footer>
  );
}
