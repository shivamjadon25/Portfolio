import React from 'react';
import { Cpu, Server, Activity, ShieldCheck } from 'lucide-react';

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "5+ Years",
      label: "Enterprise Experience",
      subtext: "MERN Stack, GenAI & Cloud",
      icon: Server,
    },
    {
      value: "< 50ms",
      label: "RAG Vector Latency",
      subtext: "OpenSearch kNN & Embeddings",
      icon: Cpu,
    },
    {
      value: "50k+ / mo",
      label: "Bot Sessions Handled",
      subtext: "Dialogflow & Twilio Telephony",
      icon: Activity,
    },
    {
      value: "6+ Systems",
      label: "Enterprise Connectors",
      subtext: "Salesforce, Workday, SIS & LMS",
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="surface-card p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {m.value}
                </span>
                <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {m.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {m.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
