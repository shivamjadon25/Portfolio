import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function ExperienceList() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          Experience
        </h2>
        <span className="text-xs font-mono text-zinc-500">5+ Years Production</span>
      </div>

      <div className="space-y-3">
        {profile.experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {exp.role}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-400">
                      {exp.company}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {exp.period} <span className="text-zinc-700">|</span> {exp.location}
                  </div>
                </div>

                <div className="p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors mt-0.5">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 space-y-4 pt-1 border-t border-white/[0.04] text-xs sm:text-sm text-zinc-300">
                  <p className="leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 text-zinc-300">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1 font-mono text-xs">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]"
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
