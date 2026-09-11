import React from 'react';
import { Cpu, Database, Network, ShieldCheck, Sparkles, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDeepDive() {
  const steps = [
    {
      num: "01",
      title: "Data Ingestion & Chunking",
      subtitle: "Dense Embeddings & Vector Prep",
      icon: Network,
      desc: "Ingesting dynamic campus & enterprise knowledge base documents into 512-token overlapping chunks with 1536-dim embeddings.",
      features: ["Token-aware boundary chunking", "Embedding generation", "Metadata enrichment"]
    },
    {
      num: "02",
      title: "OpenSearch Vector Store",
      subtitle: "kNN Search & Cosine Scoring",
      icon: Database,
      desc: "Sub-50ms vector retrieval across millions of vectorized documents using HNSW graph algorithms and cross-encoder reranking.",
      features: ["HNSW index optimization", "Sub-50ms p99 latency", "Hybrid keyword + vector query"]
    },
    {
      num: "03",
      title: "LLM Agent & Guardrails",
      subtitle: "Context Pruning & Prompt Routing",
      icon: Cpu,
      desc: "Dynamic context assembly, prompt template injection, and strict safety guardrails preventing hallucinations and token bloat.",
      features: ["Context pruning & compression", "Multi-turn memory retention", "Deterministic fallback logic"]
    },
    {
      num: "04",
      title: "Enterprise Delivery",
      subtitle: "React UI, Twilio Voice & CRM",
      icon: ShieldCheck,
      desc: "Real-time streaming responses to React clients, low-latency audio stream synthesis for Twilio voicebots, and Salesforce ticket sync.",
      features: ["WebSocket token streaming", "Twilio Voice synthesis", "Salesforce & Workday sync"]
    }
  ];

  return (
    <section id="architecture" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>System Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          How I Architect Production AI &amp; Fullstack Systems
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
          A blueprint of the high-throughput, low-latency architectures I design for conversational chatbots, RAG pipelines, and enterprise integrations.
        </p>
      </div>

      {/* 4-Step Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="surface-card p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STAGE {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
