import React from 'react';
import { Cpu, Server, Network, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function SpecialtySpotlight() {
  const pillars = [
    {
      icon: Cpu,
      title: "Generative AI & RAG",
      tag: "Production",
      desc: "End-to-end RAG pipelines with OpenSearch vector search, dense embeddings chunking, token optimization, and intelligent guardrails."
    },
    {
      icon: Server,
      title: "MERN Stack Architecture",
      tag: "5+ Years",
      desc: "Scalable Node.js & Express backends with Redis pub/sub caching, MongoDB data modeling, and performance-optimized React UIs."
    },
    {
      icon: Network,
      title: "Enterprise Integrations",
      tag: "Mission Critical",
      desc: "Deep API integrations across Salesforce CRM, Workday, Ellucian Banner SIS, Canvas LMS, and Twilio voice telephony."
    }
  ];

  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Core Engineering Pillars
        </h2>
        <span className="text-xs font-mono text-zinc-500">End-to-End Systems</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="bento-card p-5 rounded-2xl border border-white/[0.07] hover:border-emerald-500/30 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400/90 bg-emerald-500/10 border border-emerald-500/20">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
