import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, FileText, Mail, Linkedin, Sparkles, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="space-y-12">
      {/* Top Floating Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
        {/* Monogram Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            SJ
          </div>
          <div className="hidden sm:block">
            <span className="font-mono text-xs text-white font-medium tracking-wide block">Shivam Jadon</span>
            <span className="text-[11px] text-zinc-500 font-mono">Gurugram, India</span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-300">Available for Opportunities</span>
        </div>
      </div>

      {/* Main Editorial Hero */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
            Fullstack Engineer &amp; AI Architect
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
            Designing scalable web systems &amp; <span className="text-gradient-emerald">intelligent AI pipelines</span>.
          </h1>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
          I'm <span className="text-white font-medium">Shivam Jadon</span>, a Fullstack Developer with 5+ years of experience specializing in high-throughput Node.js &amp; React applications, production RAG pipelines, OpenSearch vector search, and enterprise conversational voice/chatbots.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-semibold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.08] text-xs font-mono transition-all hover:-translate-y-0.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
