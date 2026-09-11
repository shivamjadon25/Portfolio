import React, { useState } from 'react';
import { Code2, Cpu, Server, Network, Search, Sparkles, Check, Zap } from 'lucide-react';
import { profile } from '../data/profile';

export default function SkillsMatrix() {
  const [search, setSearch] = useState('');

  const icons = {
    "AI & Intelligent Systems": Cpu,
    "Fullstack & Backend": Server,
    "Enterprise & Infrastructure": Network,
  };

  return (
    <section id="skills" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            Production-tested frameworks, vector search engines, and enterprise connectors.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills (e.g. RAG, Node, React)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* 3 Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(profile.skills).map(([category, items], idx) => {
          const Icon = icons[category] || Code2;
          const filtered = items.filter(s => s.toLowerCase().includes(search.toLowerCase()));
          if (search && filtered.length === 0) return null;

          return (
            <div
              key={idx}
              className="surface-card p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {category}
                    </h3>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {items.length} competencies
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filtered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-sans text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Ecosystem Bar */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-50 dark:via-slate-900/40 to-cyan-500/10 border border-slate-200 dark:border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 justify-center sm:justify-start">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Enterprise Integration Ecosystem
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Battle-tested connectors and webhooks for enterprise data pipelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-300">
            {["Salesforce CRM", "Workday HRIS", "Ellucian Banner", "Canvas LMS", "Twilio Voice", "ServiceNow"].map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
