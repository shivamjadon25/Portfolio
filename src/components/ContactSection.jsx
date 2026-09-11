import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Linkedin, FileText, GraduationCap, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="space-y-12 pt-12 border-t border-white/[0.08]">
      
      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
          Academic Background
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="bento-card p-4 rounded-xl border border-white/[0.07] space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 block">{edu.period}</span>
              <h3 className="font-semibold text-sm text-white font-sans">{edu.degree}</h3>
              <p className="text-xs text-zinc-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connect & Contact Lounge */}
      <div className="bento-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6 relative overflow-hidden">
        {/* Background glow corner */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
            Let's Collaborate
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
            Ready to build something impactful?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Whether you have an ambitious fullstack project, a high-throughput Generative AI/RAG requirement, or a key role on your engineering team, let's talk.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-semibold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{profile.email}</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-950/70" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.08] text-xs font-mono transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Download CV</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>

    </section>
  );
}
