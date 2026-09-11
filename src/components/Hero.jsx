import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Clock, 
  FileText, 
  Terminal, 
  Cpu, 
  Database, 
  Zap, 
  Server,
  Layers,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function Hero({ onExploreClick }) {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [activeTab, setActiveTab] = useState('rag');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const codeSnippets = {
    rag: `// Production RAG Pipeline Node (OpenSearch + Embeddings)
async function retrieveAugmentedContext(query, topK = 5) {
  const queryVector = await embeddings.embedQuery(query);
  const searchResults = await openSearchClient.search({
    index: 'enterprise-knowledge-base',
    body: {
      size: topK,
      query: {
        knn: { vector_field: { vector: queryVector, k: topK } }
      }
    }
  });
  return rerankAndPrune(searchResults.hits.hits);
}`,
    chatbot: `// Multi-Turn Dialogflow & LLM Agent Router
class ConversationEngine {
  async handleTurn({ sessionId, message, metadata }) {
    const intent = await dialogflowNLU.detectIntent(message);
    if (intent.confidence > 0.88) {
      return this.executeWebhookFulfillment(intent, metadata);
    }
    return this.fallbackToGenAIRAG(sessionId, message);
  }
}`,
    mern: `// High-Concurrency Node.js API with Redis Caching
router.get('/v1/analytics/stream', async (req, res) => {
  const cached = await redis.get(\`metrics:\${req.user.tenantId}\`);
  if (cached) return res.json(JSON.parse(cached));
  
  const metrics = await AggregateMetrics.find({ tenantId: req.user.tenantId })
    .hint({ tenantId: 1, timestamp: -1 })
    .lean();
  await redis.setex(\`metrics:\${req.user.tenantId}\`, 60, JSON.stringify(metrics));
  res.json(metrics);
});`
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background radial glow */}
      <div className="glow-mesh" />

      {/* Top Telemetry & Status Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profileData.status}</span>
        </div>

        {/* Live IST Time & Location */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Gurugram, India</span>
          <span className="text-white/20">|</span>
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-200">{currentTime || '09:30 AM'} IST</span>
        </div>

        {/* Experience Pill */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>5+ Years Production Experience</span>
        </div>
      </div>

      {/* Main Grid: Left Value Proposition & Right Interactive Code Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading & Pitch */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="font-mono text-xs text-emerald-400 tracking-wider uppercase font-semibold flex items-center gap-2">
              <span className="w-6 h-[1px] bg-emerald-500/50"></span>
              Fullstack & Generative AI Systems
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Engineering scalable <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">
                MERN & Generative AI
              </span> <br />
              ecosystems.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Hi, I’m <span className="text-white font-semibold">Shivam Jadon</span>. I architect high-concurrency Node.js & React platforms, production RAG pipelines with OpenSearch vector search, and mission-critical enterprise voice/chatbots.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            
            {/* View Architecture CTA */}
            <a
              href="#architecture"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_32px_rgba(16,185,129,0.45)] hover:-translate-y-0.5"
            >
              <Cpu className="w-4 h-4" />
              Explore AI Architecture
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-mono text-sm border border-white/[0.1] hover:border-white/[0.2] transition-all hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/shivam-jadon-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playSuccess()}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 font-mono text-sm border border-white/[0.06] transition-all"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              CV (PDF)
            </a>
          </div>

          {/* Quick Technical Highlights Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]">
            {profileData.stats.map((stat, i) => (
              <div key={i} className="glass-pill p-3 rounded-xl border border-white/[0.06]">
                <div className="font-mono text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Code & Architecture Inspector */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.1] shadow-2xl relative overflow-hidden group">
            
            {/* Ambient corner glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600"></span>
                <span className="font-mono text-xs text-slate-400 ml-2 font-medium">shivam-core-engine.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE PIPELINE
              </div>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center gap-1.5 mb-3 bg-black/40 p-1 rounded-lg border border-white/[0.06]">
              <button
                onClick={() => { sound.playClick(); setActiveTab('rag'); }}
                className={`flex-1 py-1 px-2.5 rounded text-xs font-mono transition-all ${
                  activeTab === 'rag' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                RAG Pipeline
              </button>
              <button
                onClick={() => { sound.playClick(); setActiveTab('chatbot'); }}
                className={`flex-1 py-1 px-2.5 rounded text-xs font-mono transition-all ${
                  activeTab === 'chatbot' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI Agent Router
              </button>
              <button
                onClick={() => { sound.playClick(); setActiveTab('mern'); }}
                className={`flex-1 py-1 px-2.5 rounded text-xs font-mono transition-all ${
                  activeTab === 'mern' 
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                MERN Backend
              </button>
            </div>

            {/* Code Box */}
            <div className="bg-black/60 rounded-xl p-3.5 border border-white/[0.04] overflow-x-auto">
              <pre className="font-mono-code text-[11.5px] leading-relaxed text-slate-300 whitespace-pre">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Live Pipeline Telemetry Footer */}
            <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vector Index: <strong className="text-slate-200">OpenSearch kNN</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>p99 Latency: <strong className="text-emerald-400">&lt;45ms</strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="flex justify-center mt-12">
        <a 
          href="#architecture" 
          onClick={() => sound.playClick()}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-emerald-400">
            System Architecture
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400/70" />
        </a>
      </div>

    </section>
  );
}
