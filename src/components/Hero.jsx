import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Clock, 
  FileText, 
  Mail,
  Linkedin
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      {/* Top Telemetry Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </div>

        {/* Live IST Time */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span>Gurugram, India</span>
          <span className="text-slate-300 dark:text-zinc-700">·</span>
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-slate-800 dark:text-slate-200 font-semibold">{currentTime || '09:30 AM'} IST</span>
        </div>

        {/* Experience Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>5+ Years Production Experience</span>
        </div>
      </div>

      {/* Main Full-Width Centered Heading */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
          Fullstack Developer &amp; Generative AI Systems Engineer
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.12]">
          Architecting scalable <br />
          <span className="emerald-gradient-text">
            MERN &amp; Generative AI
          </span> <br />
          ecosystems.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
          I build resilient fullstack platforms and production AI systems. Leading the architecture of production RAG pipelines, OpenSearch vector stores, high-concurrency Node.js microservices, and multi-turn voice/chatbots.
        </p>
      </div>

      {/* Centered Action CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-xs transition-all shadow-sm hover:-translate-y-0.5"
        >
          <Mail className="w-4 h-4" />
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-medium transition-all hover:-translate-y-0.5"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>Copy Address</span>
            </>
          )}
        </button>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-medium transition-all"
        >
          <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>LinkedIn</span>
        </a>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-medium transition-all"
        >
          <FileText className="w-4 h-4 text-slate-500" />
          <span>Resume (PDF)</span>
        </a>
      </div>

    </section>
  );
}
