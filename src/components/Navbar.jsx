import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Sparkles, 
  Briefcase, 
  Code2, 
  Layers, 
  Mail, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X,
  FileText,
  ExternalLink
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ isDark, toggleTheme, openCmdPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    const isM = sound.toggleMute();
    setMuted(isM);
    if (!isM) sound.playClick();
  };

  const navLinks = [
    { name: 'Architecture', href: '#architecture', icon: Sparkles },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Terminal', href: '#terminal', icon: Terminal },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#08090d]/80 dark:bg-[#08090d]/80 light:bg-white/80 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a 
          href="#" 
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-transparent border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="font-mono font-black text-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">SJ</span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="font-mono text-xs text-slate-400 tracking-wider uppercase font-semibold">Shivam Jadon</div>
            <div className="text-xs text-emerald-400/80 font-mono">Fullstack · GenAI / RAG</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sound.playClick()}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-emerald-400 rounded-full hover:bg-white/[0.04] transition-all flex items-center gap-1.5"
            >
              <link.icon className="w-3.5 h-3.5 opacity-70" />
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Tools & CTAs */}
        <div className="flex items-center gap-2">
          {/* Cmd+K Quick Search Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              openCmdPalette();
            }}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            title="Open Command Palette (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] bg-white/[0.06] px-1.5 py-0.5 rounded text-slate-300 border border-white/10">⌘K</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            title={muted ? "Unmute sound effects" : "Mute sound effects"}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              toggleTheme();
            }}
            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume CTA */}
          <a
            href="/shivam-jadon-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playSuccess()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/50 transition-all shadow-[0_0_12px_rgba(16,185,129,0.1)]"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] border border-white/[0.08]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 mt-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono text-slate-300 hover:text-emerald-400 hover:bg-white/[0.05] transition-all"
              >
                <link.icon className="w-4 h-4 text-emerald-400" />
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href="/shivam-jadon-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 w-full justify-center"
              >
                <FileText className="w-4 h-4" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
