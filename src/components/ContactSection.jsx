import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8 pt-12 border-t border-white/[0.08]">
      
      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          Education
        </h2>
        <div className="space-y-3">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm gap-1">
              <div>
                <span className="text-white font-medium">{edu.degree}</span>
                <span className="text-zinc-500"> — {edu.institution}</span>
              </div>
              <span className="text-zinc-500 font-mono text-xs shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connect / Get In Touch */}
      <div className="pt-8 border-t border-white/[0.06] space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          Get in Touch
        </h2>
        
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-lg">
          Whether you want to discuss fullstack engineering, Generative AI &amp; RAG architectures, or open roles, feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{profile.email}</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-500/60" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
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
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-600" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] text-xs font-mono transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-600" />
          </a>
        </div>
      </div>

    </section>
  );
}
