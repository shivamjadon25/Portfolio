import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, Code2, Layers, Mail, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram & Tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm">
            SJ
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-white">Shivam Jadon</div>
            <div className="text-[11px] text-slate-400 font-mono">Fullstack Engineer · MERN & GenAI / RAG</div>
          </div>
        </div>

        {/* Center System Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.02] px-3.5 py-1.5 rounded-full border border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>System Status: 100% Operational · Gurugram (IST)</span>
        </div>

        {/* Back to top button & LinkedIn */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 border border-white/[0.08] transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-emerald-400 text-xs font-mono border border-white/[0.08] transition-all"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} Shivam Jadon. Built with React, Tailwind CSS & production-grade architecture.
      </div>
    </footer>
  );
}
