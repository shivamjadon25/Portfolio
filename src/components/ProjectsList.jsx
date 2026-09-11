import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectsList() {
  const hasProjects = projectsData && projectsData.length > 0;

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          Selected Projects
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          {hasProjects ? `${projectsData.length} Works` : 'Coming Soon'}
        </span>
      </div>

      {hasProjects ? (
        <div className="space-y-4">
          {projectsData.map((project, idx) => (
            <div
              key={project.id || idx}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-base text-white">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-mono text-emerald-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-white/[0.05] transition-colors"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {project.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
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
        <div className="p-6 rounded-xl border border-dashed border-white/[0.1] bg-white/[0.01] text-center space-y-2">
          <p className="text-xs sm:text-sm text-zinc-400">
            Selected projects &amp; case studies currently being curated.
          </p>
          <p className="text-[11px] font-mono text-zinc-600">
            Easily populated via <code className="text-zinc-400">src/data/projects.js</code>
          </p>
        </div>
      )}
    </section>
  );
}
