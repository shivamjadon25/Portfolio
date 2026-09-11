import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  Cpu, 
  Server, 
  Layout, 
  ShieldCheck, 
  Sparkles,
  Eye,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Production Systems &amp; Case Studies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Engineered architectures across Generative AI, RAG pipelines, web intelligence, and document parsing.
        </p>
      </div>

      {/* Projects Grid of Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="surface-card rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-sm"
          >
            {/* Screenshot Header with Hover Overlay */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-white/[0.06]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-64 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 cursor-pointer p-4"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold text-xs shadow-lg hover:bg-slate-100 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>View Details</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-lg hover:bg-emerald-500 transition-all"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {project.subtitle}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights Summary */}
                {project.highlights && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Tags & Action Buttons */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-lg text-xs text-slate-500 dark:text-slate-400">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-white/[0.08] transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>View Full Details</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs shadow-sm transition-all"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Full Details Modal Popup Window */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f1117] rounded-2xl border border-slate-200 dark:border-white/15 shadow-2xl overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold text-xs shadow-sm hover:bg-emerald-700 transition-all"
                  >
                    <span>Open Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05] transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Full Screenshot Banner */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[420px] object-cover object-top"
                />
              </div>

              {/* Metrics Bar */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(selectedProject.metrics).map(([key, val], mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] text-center"
                    >
                      <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                        {key}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Comprehensive Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                  Project Overview &amp; Architecture
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Key Highlights & Capabilities */}
              {selectedProject.highlights && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Key Capabilities &amp; Features</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Breakdown */}
              {selectedProject.techBreakdown && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Technical Architecture &amp; Implementation</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedProject.techBreakdown).map(([category, items], cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] space-y-2.5"
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-white capitalize pb-1.5 border-b border-slate-200 dark:border-white/[0.06]">
                          {category.replace('_', ' / ')}
                        </div>
                        <div className="space-y-2">
                          {items.map((item, iIdx) => (
                            <div key={iIdx} className="text-xs">
                              <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                              <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{item.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Tags */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">All Technologies Used</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 font-semibold text-xs border border-slate-200 dark:border-white/10 hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs shadow-sm transition-all"
                >
                  <span>Launch Live Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
