import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Database, 
  Send, 
  Sparkles, 
  Layers, 
  Network, 
  CheckCircle2, 
  Activity, 
  Share2, 
  Server, 
  Bot, 
  Flame, 
  Play, 
  RefreshCw,
  Zap,
  PhoneCall,
  Lock,
  ArrowRight
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function AiArchitectureVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [customQuery, setCustomQuery] = useState('');
  const [liveMetrics, setLiveMetrics] = useState({
    latency: '36ms',
    vectorScore: '0.964',
    tokensPruned: '42%',
    pipelineStatus: 'STANDBY'
  });

  const sampleScenarios = [
    {
      title: "Enterprise RAG & OpenSearch Retrieval",
      query: "Retrieve academic policy guidelines and draft a personalized response for a student.",
      latency: "42ms",
      similarity: "0.982",
      nodesActive: [1, 2, 3, 4, 5],
      result: "Context retrieved from OpenSearch vector index (4 chunks matched, similarity 0.982). Context injected into LLM with guardrails enabled. Generated 142 tokens in 380ms with 0 hallucination."
    },
    {
      title: "Twilio VoiceBot + Telephony NLU",
      query: "Student calls helpdesk asking to reset SIS portal credentials via voice turn.",
      latency: "68ms",
      similarity: "0.951",
      nodesActive: [1, 2, 4, 5],
      result: "Twilio Media Stream captured -> Dialogflow intent 'auth.reset_password' identified -> Triggered secure webhook to Workday/SIS API -> Generated natural voice synthesis response."
    },
    {
      title: "High-Concurrency MERN Ingestion",
      query: "Ingest and vectorize 2,500 updated campus knowledge base articles via background worker.",
      latency: "19ms",
      similarity: "1.000",
      nodesActive: [1, 2, 3],
      result: "Node.js cluster chunked markdown files into 512-token segments, computed dense embeddings, and bulk indexed into OpenSearch cluster with Redis queue pacing."
    }
  ];

  const handleRunSimulation = (index = selectedPromptIndex) => {
    sound.playClick();
    setIsSimulating(true);
    setActiveStep(1);
    setLiveMetrics(prev => ({ ...prev, pipelineStatus: 'PROCESSING' }));

    const scenario = sampleScenarios[index];

    // Step 1: Input
    setTimeout(() => {
      sound.playBeep();
      setActiveStep(2);
    }, 450);

    // Step 2: Vector Search
    setTimeout(() => {
      sound.playBeep();
      setActiveStep(3);
    }, 900);

    // Step 3: LLM Inference
    setTimeout(() => {
      sound.playBeep();
      setActiveStep(4);
    }, 1350);

    // Step 4: Integration
    setTimeout(() => {
      sound.playSuccess();
      setActiveStep(5);
      setIsSimulating(false);
      setLiveMetrics({
        latency: scenario.latency,
        vectorScore: scenario.similarity,
        tokensPruned: '38%',
        pipelineStatus: 'SUCCESS (200 OK)'
      });
    }, 1800);
  };

  const pipelineStages = [
    {
      id: 1,
      name: "1. Omnichannel Gateway",
      subtitle: "React UI / Twilio Voice / Webhook",
      icon: PhoneCall,
      color: "emerald",
      desc: "Handles concurrent socket streams, audio buffers, and REST payloads with authentication & rate-limiting."
    },
    {
      id: 2,
      name: "2. Vector & Semantic Ingestion",
      subtitle: "Dense Embeddings & Token Chunking",
      icon: Network,
      color: "cyan",
      desc: "Converts queries and enterprise documents into 1536-dim vector embeddings with contextual overlap."
    },
    {
      id: 3,
      name: "3. OpenSearch Vector Store",
      subtitle: "kNN Search & Cosine Reranking",
      icon: Database,
      color: "violet",
      desc: "Queries millions of document vectors in sub-50ms using HNSW indices and cross-encoder reranking."
    },
    {
      id: 4,
      name: "4. LLM Agent & Guardrails",
      subtitle: "Context Pruning & Prompt Routing",
      icon: Cpu,
      color: "emerald",
      desc: "Fuses augmented context with system prompts, enforces strict safety guardrails, and minimizes token overhead."
    },
    {
      id: 5,
      name: "5. Enterprise Fulfillment",
      subtitle: "Salesforce / Workday / SIS / Twilio",
      icon: Server,
      color: "amber",
      desc: "Executes CRM updates, triggers telephony audio response, or delivers streaming markdown to React client."
    }
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Production GenAI & RAG Pipeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            A real-world blueprint of the enterprise AI systems and conversational microservices I architect daily. Click any scenario below to trigger a live pipeline trace.
          </p>
        </div>

        {/* Live Metrics Pill */}
        <div className="glass-card p-3 rounded-xl border border-white/10 flex items-center gap-4 text-xs font-mono">
          <div>
            <div className="text-slate-500 text-[10px] uppercase">Retrieval Latency</div>
            <div className="text-emerald-400 font-bold">{liveMetrics.latency}</div>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
            <div className="text-slate-500 text-[10px] uppercase">Vector Cosine</div>
            <div className="text-cyan-400 font-bold">{liveMetrics.vectorScore}</div>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
            <div className="text-slate-500 text-[10px] uppercase">Status</div>
            <div className="text-amber-400 font-bold">{liveMetrics.pipelineStatus}</div>
          </div>
        </div>
      </div>

      {/* Scenario Selector Chips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {sampleScenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedPromptIndex(index);
              handleRunSimulation(index);
            }}
            className={`p-4 rounded-xl text-left transition-all border ${
              selectedPromptIndex === index
                ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                : 'glass-card hover:bg-white/[0.04] border-white/[0.08]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-mono font-semibold ${selectedPromptIndex === index ? 'text-emerald-300' : 'text-slate-300'}`}>
                {scenario.title}
              </span>
              <Play className={`w-3.5 h-3.5 ${selectedPromptIndex === index ? 'text-emerald-400 fill-emerald-400' : 'text-slate-500'}`} />
            </div>
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">
              "{scenario.query}"
            </p>
          </button>
        ))}
      </div>

      {/* Main Interactive Pipeline Diagram */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        
        {/* Animated Background Flow Line */}
        <div className="hidden lg:block absolute top-[90px] left-12 right-12 h-[2px] bg-white/10 z-0" />
        
        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
          {pipelineStages.map((stage) => {
            const isCurrent = activeStep === stage.id;
            const isCompleted = activeStep > stage.id || activeStep === 5;
            const Icon = stage.icon;

            return (
              <div
                key={stage.id}
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between relative ${
                  isCurrent
                    ? 'bg-emerald-500/20 border-emerald-400 scale-[1.03] shadow-[0_0_25px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400'
                    : isCompleted
                    ? 'bg-white/[0.04] border-emerald-500/30 text-slate-200'
                    : 'bg-black/30 border-white/[0.06] text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-lg ${
                      isCurrent 
                        ? 'bg-emerald-500 text-slate-950 font-bold' 
                        : isCompleted 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-white/[0.05] text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isCurrent && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                    {isCompleted && !isCurrent && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>

                  <h3 className="font-mono text-xs font-bold text-white mb-1">
                    {stage.name}
                  </h3>
                  <div className="text-[11px] font-mono text-emerald-400/80 mb-2">
                    {stage.subtitle}
                  </div>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500">STAGE 0{stage.id}</span>
                  <span className={isCurrent ? 'text-emerald-300 font-bold' : isCompleted ? 'text-slate-400' : 'text-slate-600'}>
                    {isCurrent ? 'ACTIVE' : isCompleted ? 'PASSED' : 'IDLE'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Execution Trace / Output Box */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="bg-black/70 rounded-xl p-4 sm:p-5 border border-white/[0.06] font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-slate-400">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-slate-200">Execution Telemetry Stream</span>
              </div>
              <button
                disabled={isSimulating}
                onClick={() => handleRunSimulation(selectedPromptIndex)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>Re-run Trace</span>
              </button>
            </div>

            <div className="space-y-2 text-slate-300 leading-relaxed font-mono-code">
              <div className="text-slate-500">
                &gt; Query: <span className="text-white">"{sampleScenarios[selectedPromptIndex].query}"</span>
              </div>
              <div className="text-emerald-400/90 pl-3 border-l-2 border-emerald-500/40">
                &gt; Result: {sampleScenarios[selectedPromptIndex].result}
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
