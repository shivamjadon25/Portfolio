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
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work Experience &amp; Impact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Career Journey at BlackBeltHelp
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
          5+ years of continuous engineering evolution: from Google Dialogflow NLP expert and Frontend Architect to leading MERN and Generative AI systems.
        </p>
      </div>

      {/* 12-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Interactive Role Selector */}
        <div className="lg:col-span-5 space-y-3">
          {profile.experiences.map((exp, idx) => {
            const isSelected = selectedExp === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedExp(idx)}
                className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all border flex items-start justify-between group ${
                  isSelected
                    ? 'bg-emerald-500/10 border-emerald-500/40 shadow-sm dark:bg-emerald-500/15'
                    : 'surface-card hover:bg-slate-50 dark:hover:bg-white/[0.03] border-slate-200 dark:border-white/[0.08]'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {exp.company}
                    </span>
                    <span className="text-slate-300 dark:text-zinc-700">·</span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <div className={`font-semibold text-sm sm:text-base font-sans ${isSelected ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                    {exp.role}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {exp.location}
                  </div>
                </div>

                <div className={`p-2 rounded-xl mt-1 transition-all ${
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
          <div className="surface-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 relative overflow-hidden">
            
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-white/[0.08] mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                  {profile.experiences[selectedExp].company}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display mt-0.5">
                  {profile.experiences[selectedExp].role}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {profile.experiences[selectedExp].period}
                </span>
              </div>
            </div>

            {/* Role Overview */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {profile.experiences[selectedExp].description}
            </p>

            {/* Key Deliverables & Architecture */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Key Contributions &amp; Architectural Impact
              </div>
              <div className="space-y-2.5">
                {profile.experiences[selectedExp].highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Tech Stack &amp; Tooling
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.experiences[selectedExp].tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Academic Background */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-6">
          <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          Academic Foundation
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.education.map((edu, eIdx) => (
            <div key={eIdx} className="surface-card p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] space-y-1">
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">{edu.period}</span>
              <h4 className="font-bold text-base text-slate-900 dark:text-white font-display">{edu.degree}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
