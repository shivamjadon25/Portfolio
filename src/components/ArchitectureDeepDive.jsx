import React from 'react';
import { Cpu, Database, Network, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDeepDive() {
  const steps = [
    {
      num: "01",
      title: "Data Ingestion & Chunking",
      subtitle: "Dense Embeddings & Vector Prep",
      icon: Network,
      desc: "Ingesting dynamic campus & enterprise knowledge base documents into 512-token overlapping chunks with dense vector embeddings.",
      features: ["Token-aware boundary chunking", "Embedding generation", "Metadata enrichment"]
    },
    {
      num: "02",
      title: "OpenSearch Vector Store",
      subtitle: "kNN Search & Cosine Scoring",
      icon: Database,
      desc: "Sub-50ms vector retrieval across vectorized documents using HNSW graph algorithms and cross-encoder reranking.",
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
    <section id="architecture" className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>System Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Production AI &amp; Fullstack Architecture
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          A blueprint of the high-throughput, low-latency architectures I design for conversational chatbots, RAG pipelines, and enterprise integrations.
        </p>
      </div>

      {/* 4-Step Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="surface-card p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    STAGE {step.num}
                  </span>
                  <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>

                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-white/[0.04]">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
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
