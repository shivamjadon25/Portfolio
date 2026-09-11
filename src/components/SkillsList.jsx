import React from 'react';
import { Code2, Cpu, Server, Network } from 'lucide-react';
import { profile } from '../data/profile';

export default function SkillsList() {
  const categoryIcons = {
    "AI & Intelligent Systems": Cpu,
    "Fullstack & Backend": Server,
    "Enterprise & Infrastructure": Network,
  };

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-emerald-400" />
          Technical Matrix
        </h2>
        <span className="text-xs font-mono text-zinc-500">Production Tooling</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(profile.skills).map(([category, items], idx) => {
          const Icon = categoryIcons[category] || Code2;

          return (
            <div
              key={idx}
              className="bento-card p-5 rounded-2xl border border-white/[0.07] space-y-4 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-mono text-xs font-bold text-white tracking-wide">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-sans text-zinc-300 bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
