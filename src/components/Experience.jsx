import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ChevronRight, 
  Code 
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work Experience &amp; Impact</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Work Experience &amp; Impact
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          5+ years of continuous engineering evolution: leading MERN applications, production RAG pipelines, and conversational AI systems.
        </p>
      </div>

      {/* 12-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        
        {/* Left Column: Interactive Role Selector */}
        <div className="lg:col-span-5 space-y-2.5">
          {profile.experiences.map((exp, idx) => {
            const isSelected = selectedExp === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedExp(idx)}
                className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start justify-between group ${
                  isSelected
                    ? 'bg-emerald-500/10 border-emerald-500/40 shadow-sm dark:bg-emerald-500/15'
                    : 'surface-card hover:bg-slate-50 dark:hover:bg-white/[0.03] border-slate-200 dark:border-white/[0.08]'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      {exp.company}
                    </span>
                    <span className="text-slate-300 dark:text-zinc-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className={`text-sm sm:text-base ${isSelected ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300 font-medium'}`}>
                    {exp.role}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {exp.location}
                  </div>
                </div>

                <div className={`p-1.5 rounded-xl mt-1 transition-all ${
                  isSelected ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold' : 'bg-slate-100 dark:bg-white/[0.04] text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white'
                }`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Experience Card */}
        <div className="lg:col-span-7">
          <div className="surface-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 relative">
            
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08] mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                  {profile.experiences[selectedExp].company}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display mt-0.5">
                  {profile.experiences[selectedExp].role}
                </h3>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-600 dark:text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {profile.experiences[selectedExp].period}
              </span>
            </div>

            {/* Role Overview */}
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {profile.experiences[selectedExp].description}
            </p>

            {/* Key Deliverables & Architecture */}
            <div className="space-y-2 mb-5">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Key Contributions &amp; Architectural Impact</span>
              </div>
              <div className="space-y-2">
                {profile.experiences[selectedExp].highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2.5 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Tech Stack &amp; Tooling</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {profile.experiences[selectedExp].tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Academic Background - Tight, Snug Layout with No Extra Bottom Space */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4">
          <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Academic Foundation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {profile.education.map((edu, eIdx) => (
            <div key={eIdx} className="surface-card p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] space-y-0.5">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block">{edu.period}</span>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-display">{edu.degree}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
