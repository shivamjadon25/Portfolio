import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, FileText, Mail, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="space-y-8">
      {/* Top Status & Quick Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="inline-flex items-center gap-2 text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <button
            onClick={handleCopy}
            className="hover:text-white transition-colors flex items-center gap-1.5"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied email</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </>
            )}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-600" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-zinc-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-600" />
          </a>
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          {profile.name}
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {profile.title} <span className="text-zinc-600">·</span> {profile.location}
        </p>
      </div>

      {/* Bio Narrative */}
      <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
        {profile.bio.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </header>
  );
}
