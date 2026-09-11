import React, { useState } from 'react';
import { Layers, Github, ArrowUpRight, Eye, FolderGit2, CheckCircle2 } from 'lucide-react';
import { projectsData, sampleProjectTemplate } from '../data/projects';

export default function ProjectsSection() {
  const [showPreview, setShowPreview] = useState(false);
  const hasProjects = projectsData && projectsData.length > 0;
  const items = hasProjects ? projectsData : (showPreview ? [sampleProjectTemplate] : []);

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Architecture
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            Scalable fullstack applications, RAG pipelines, and conversational voice/chatbots.
          </p>
        </div>

        {!hasProjects && (
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>{showPreview ? "Hide Layout Preview" : "Preview Project Card Layout"}</span>
          </button>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((project, idx) => (
            <div
              key={project.id || idx}
              className="surface-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {project.subtitle || "Fullstack & AI"}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 transition-colors"
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
                        className="p-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 hover:bg-emerald-700 transition-colors"
                        title="View Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="space-y-2 pt-2">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {project.tags && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="surface-card p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-white/[0.08] text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
            <FolderGit2 className="w-7 h-7" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              Projects Showcase Ready for Deployment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The project showcase is ready. Simply add your project items into <code className="text-emerald-600 dark:text-emerald-400 font-mono bg-slate-100 dark:bg-white/[0.06] px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">src/data/projects.js</code> to render your works automatically.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 font-mono font-medium text-xs border border-slate-200 dark:border-white/[0.08] transition-all"
            >
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Preview Card Layout</span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
