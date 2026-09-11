import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Clock, 
  FileText, 
  Cpu, 
  Database, 
  Zap, 
  Server,
  Layers,
  CheckCircle2,
  Mail,
  Linkedin
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
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
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const codeSnippets = {
    rag: `// Production RAG Pipeline (OpenSearch + Dense Embeddings)
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
    <section className="pt-32 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Telemetry Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </div>

        {/* Live IST Time */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span>Gurugram, India</span>
          <span className="text-slate-300 dark:text-zinc-700">|</span>
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-slate-800 dark:text-slate-200">{currentTime || '09:30 AM'} IST</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          <span>5+ Years Enterprise Experience</span>
        </div>
      </div>

      {/* Main 12-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Heading & Introduction */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
              Shivam Jadon · Fullstack &amp; Generative AI Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.08]">
              Architecting scalable <br className="hidden sm:block" />
              <span className="emerald-gradient-text">
                MERN &amp; Generative AI
              </span> <br className="hidden sm:block" />
              ecosystems.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
            I build resilient fullstack platforms and production AI systems. Currently at <strong className="text-slate-900 dark:text-white font-semibold">BlackBeltHelp</strong>, leading the architecture of production RAG pipelines, OpenSearch vector stores, high-concurrency Node.js microservices, and multi-turn voice/chatbots.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-mono font-semibold text-xs transition-all shadow-md hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-mono transition-all hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-mono transition-all"
            >
              <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] text-xs font-mono transition-all"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Resume (PDF)</span>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive System Architecture & Live Code Hub */}
        <div className="lg:col-span-5">
          <div className="surface-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 shadow-lg relative overflow-hidden">
            
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.08] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 ml-2 font-medium">production-system.ts</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                ● LIVE STACK
              </span>
            </div>

            {/* Interactive Scenario Tabs */}
            <div className="flex items-center gap-1.5 mb-3 bg-slate-100 dark:bg-black/40 p-1 rounded-lg border border-slate-200 dark:border-white/[0.06]">
              <button
                onClick={() => setActiveTab('rag')}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-mono font-medium transition-all ${
                  activeTab === 'rag' 
                    ? 'bg-white dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 shadow-sm border border-slate-200 dark:border-emerald-500/30 font-bold' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                RAG Pipeline
              </button>
              <button
                onClick={() => setActiveTab('chatbot')}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-mono font-medium transition-all ${
                  activeTab === 'chatbot' 
                    ? 'bg-white dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-cyan-500/30 font-bold' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                AI Agent
              </button>
              <button
                onClick={() => setActiveTab('mern')}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-mono font-medium transition-all ${
                  activeTab === 'mern' 
                    ? 'bg-white dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 shadow-sm border border-slate-200 dark:border-violet-500/30 font-bold' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                MERN API
              </button>
            </div>

            {/* Code Box */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 overflow-x-auto text-slate-100">
              <pre className="font-mono text-[11.5px] leading-relaxed whitespace-pre">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Telemetry Footer */}
            <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Vector: <strong className="text-slate-900 dark:text-slate-200 font-semibold">OpenSearch kNN</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>p99 Latency: <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt;45ms</strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
