import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Server, 
  Layout, 
  Cloud, 
  Search, 
  Sparkles, 
  Check, 
  Flame,
  Terminal,
  Zap
} from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = [Cpu, Server, Layout, Cloud];

  // Flatten all skills for quick search
  const allSkills = profileData.skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.title }))
  );

  const filteredSkills = searchQuery.trim() === ''
    ? profileData.skillCategories[selectedCategory].skills
    : allSkills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Skills & System Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            A comprehensive overview of tools, frameworks, vector databases, and enterprise platforms I deploy to production.
          </p>
        </div>

        {/* Skill Search Filter */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills (e.g. RAG, Redis, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
          />
        </div>
      </div>

      {/* Category Tabs (Shown when not searching) */}
      {searchQuery.trim() === '' && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {profileData.skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code2;
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(idx);
                }}
                className={`p-4 rounded-xl text-left transition-all border flex items-center gap-3 ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-white shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border-white/[0.08]'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/[0.05] text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold leading-snug">
                    {cat.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {cat.skills.length} core competencies
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, sIdx) => (
          <div
            key={sIdx}
            className="glass-card p-4 sm:p-5 rounded-xl border border-white/[0.08] hover:border-emerald-500/30 transition-all group relative overflow-hidden"
          >
            {/* Top Row: Name and Tag */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-semibold text-sm text-white font-sans group-hover:text-emerald-300 transition-colors">
                {skill.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {skill.tag}
              </span>
            </div>

            {/* Proficiency Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Proficiency</span>
                <span className="text-emerald-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-[1px]">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-300 rounded-full transition-all duration-700 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            {/* Category Subtext when search active */}
            {searchQuery.trim() !== '' && skill.category && (
              <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-slate-500">
                Domain: {skill.category}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Enterprise Ecosystem Badges */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 border border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 justify-center sm:justify-start">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Enterprise Integration Ecosystem
            </h4>
            <p className="text-xs text-slate-400">
              Battle-tested connectors, webhooks, and REST/GraphQL integrations.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-slate-300">
            {["Salesforce CRM", "Workday HRIS", "Ellucian Banner", "Canvas LMS", "Twilio Voice", "ServiceNow ITSM"].map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
