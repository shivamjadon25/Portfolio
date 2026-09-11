import React from 'react';
import { ArrowUpRight, Github, Layers, PlusCircle, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectsList() {
  const hasProjects = projectsData && projectsData.length > 0;

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          Featured Projects
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          {hasProjects ? `${projectsData.length} Case Studies` : 'Deployment Ready'}
        </span>
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((project, idx) => (
            <div
              key={project.id || idx}
              className="bento-card p-6 rounded-2xl border border-white/[0.07] hover:border-emerald-500/40 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {project.subtitle || "Fullstack & AI"}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.tags && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]"
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
        <div className="bento-card p-8 rounded-2xl border border-white/[0.07] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
            <Layers className="w-6 h-6" />
          </div>

          <div className="space-y-1.5 max-w-md mx-auto">
            <h3 className="font-display font-bold text-base text-white">
              Projects Showcase Ready
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              The project grid is prepared and connected. Add your project objects into <code className="text-emerald-400 font-mono bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.08]">src/data/projects.js</code> to display them here automatically.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
