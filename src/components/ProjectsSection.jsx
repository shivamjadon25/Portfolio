import React, { useState } from 'react';
import { 
  Layers, 
  Github, 
  ArrowUpRight, 
  Eye, 
  FolderGit2, 
  CheckCircle2, 
  Cpu, 
  Server, 
  Layout, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectsSection() {
  const [expandedTechId, setExpandedTechId] = useState(null);

  const toggleTech = (id) => {
    setExpandedTechId(expandedTechId === id ? null : id);
  };

  return (
    <section id="projects" className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Production Systems &amp; Case Studies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Engineered architectures across web scraping, document ingestion pipelines, and intelligent cloud systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projectsData.map((project) => {
          const isTechExpanded = expandedTechId === project.id;

          return (
            <div
              key={project.id}
              className="surface-card rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                
                {/* Left Column: Visual Screenshot & Quick Links */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-sm bg-slate-100 dark:bg-slate-900">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover object-top max-h-[380px] group-hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center text-slate-400">
                        <FolderGit2 className="w-8 h-8" />
                      </div>
                    )}
                    
                    {/* Live Preview Overlay Button */}
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-lg hover:bg-emerald-500 transition-all"
                        >
                          <span>Open Live Studio</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(project.metrics).map(([key, val], mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] text-center"
                        >
                          <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                            {key}
                          </div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 truncate" title={val}>
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Details, Highlights & Action */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {project.subtitle}
                      </span>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs shadow-sm transition-all shrink-0"
                        >
                          <span>Live Website</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="space-y-2 pt-1">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech Breakdown Toggle */}
                    {project.techBreakdown && (
                      <button
                        onClick={() => toggleTech(project.id)}
                        className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/[0.06] transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>{isTechExpanded ? "Hide Full Tech Stack Breakdown" : "View Complete Architecture Breakdown"}</span>
                        </span>
                        {isTechExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Expandable Architecture Breakdown */}
              {isTechExpanded && project.techBreakdown && (
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-black/20 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    
                    {/* 1. Backend */}
                    <div className="surface-card p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/[0.06]">
                        <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>1. Backend Microservice</span>
                      </div>
                      <div className="space-y-2">
                        {project.techBreakdown.backend.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                            <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Frontend */}
                    <div className="surface-card p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/[0.06]">
                        <Layout className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>2. Frontend Studio</span>
                      </div>
                      <div className="space-y-2">
                        {project.techBreakdown.frontend.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                            <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. DevOps */}
                    <div className="surface-card p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/[0.06]">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span>3. DevOps &amp; Cloud Edge</span>
                      </div>
                      <div className="space-y-2">
                        {project.techBreakdown.devops.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                            <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

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
