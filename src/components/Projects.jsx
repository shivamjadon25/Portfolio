import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Code, 
  PlusCircle, 
  Eye, 
  FolderGit2 
} from 'lucide-react';
import { projectsData, sampleProjectTemplate } from '../data/projects';
import { sound } from '../utils/sound';

export default function Projects() {
  const [showPreview, setShowPreview] = useState(false);

  // If projects are present in projectsData, display them. Otherwise show empty state or toggle preview.
  const hasProjects = projectsData && projectsData.length > 0;
  const displayProjects = hasProjects ? projectsData : (showPreview ? [sampleProjectTemplate] : []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Projects & System Blueprints
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            Scalable fullstack web architectures, RAG implementations, and intelligent agent workflows.
          </p>
        </div>

        {/* Action button if empty */}
        {!hasProjects && (
          <button
            onClick={() => {
              sound.playClick();
              setShowPreview(!showPreview);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-emerald-300 bg-white/[0.04] hover:bg-white/[0.08] border border-emerald-500/30 transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            {showPreview ? "Hide Card Template Preview" : "Preview Project Card Layout"}
          </button>
        )}
      </div>

      {/* When Projects exist or preview is active */}
      {displayProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.subtitle || "Fullstack & AI Engineering"}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 transition-colors"
                        title="View Live System"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags & Metrics */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 pt-1">
                    {Object.entries(project.metrics).map(([key, val], mIdx) => (
                      <span key={mIdx}>
                        {key}: <strong className="text-emerald-400">{val}</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State: Architecturally Designed Placeholder */
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          
          {/* Background grid accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <FolderGit2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Curating Project Showcase
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white">
                Projects Pipeline Ready for Deployment
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                The projects section architecture is fully wired and modular. When you're ready, simply add your project details into <code className="text-emerald-400 font-mono bg-white/[0.05] px-2 py-0.5 rounded border border-white/10">src/data/projects.js</code> to populate your showcase automatically.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setShowPreview(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-semibold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <Eye className="w-4 h-4" />
                Preview Card Layout
              </button>

              <a
                href="#contact"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 font-mono text-xs border border-white/[0.08] transition-all"
              >
                Discuss Custom Project
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
