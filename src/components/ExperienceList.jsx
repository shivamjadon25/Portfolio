import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function ExperienceList() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
          Work Experience
        </h2>
        <span className="text-xs font-mono text-zinc-500">BlackBeltHelp &amp; Engineering Roots</span>
      </div>

      <div className="space-y-3">
        {profile.experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className="bento-card rounded-2xl border border-white/[0.07] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full p-5 text-left flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-600" />
                      {exp.period}
                    </span>
                    <span className="text-zinc-700">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-white/[0.03] text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all mt-0.5">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-6 space-y-4 pt-1 border-t border-white/[0.04] text-xs sm:text-sm text-zinc-300">
                  <p className="leading-relaxed text-zinc-400 font-sans">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-zinc-300">
                        <span className="text-emerald-400 mt-1 font-mono text-xs font-bold">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
