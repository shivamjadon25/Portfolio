import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ExternalLink,
  Layers,
  Award,
  ChevronRight,
  Code
} from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Proven Career Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Work Experience & Impact
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
          Over 5+ years of engineering evolution: from Google Dialogflow NLP expert and Frontend Architect to leading MERN and Generative AI systems.
        </p>
      </div>

      {/* Main Experience Grid: Left Timeline Nav & Right Deep-Dive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Role Selector */}
        <div className="lg:col-span-5 space-y-3">
          {profileData.experiences.map((exp, idx) => {
            const isSelected = selectedExp === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedExp(idx);
                }}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-start justify-between group ${
                  isSelected
                    ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                    : 'glass-card hover:bg-white/[0.04] border-white/[0.08]'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {exp.company}
                    </span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {exp.duration}
                    </span>
                  </div>
                  <div className={`font-semibold text-sm font-sans ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {exp.role}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {exp.period}
                  </div>
                </div>

                <div className={`p-2 rounded-lg mt-1 transition-all ${
                  isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/[0.03] text-slate-500 group-hover:text-slate-300'
                }`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Experience Card */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  {profileData.experiences[selectedExp].company}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                  {profileData.experiences[selectedExp].role}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {profileData.experiences[selectedExp].period}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profileData.experiences[selectedExp].location}
                </span>
              </div>
            </div>

            {/* Role Overview */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {profileData.experiences[selectedExp].description}
            </p>

            {/* Key Deliverables & Responsibilities */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Key Contributions & Architecture
              </div>
              <div className="space-y-2.5">
                {profileData.experiences[selectedExp].responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used in this Role */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                Tech Stack & Tooling
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.experiences[selectedExp].technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Education & Academic Roots */}
      <div className="mt-16 pt-12 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-6">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          Education & Engineering Foundation
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.education.map((edu, eIdx) => (
            <div key={eIdx} className="glass-card p-5 rounded-xl border border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 font-semibold">{edu.period}</span>
                <span className="text-[10px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded bg-white/[0.04]">Degree</span>
              </div>
              <h4 className="font-bold text-base text-white font-display">{edu.institution}</h4>
              <p className="text-xs font-mono text-slate-300">{edu.degree}</p>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
