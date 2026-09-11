import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, Cpu, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Shivam Jadon Interactive CLI [Version 2.4.0]" },
    { type: 'system', text: "Type 'help' to view available system commands or click the shortcut chips below.\n" }
  ]);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    sound.playBeep();

    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • about       - Overview & core specialization
  • skills      - Production tech stack & proficiencies
  • experience  - Career timeline & enterprise impact
  • rag-demo    - Vector search & RAG pipeline telemetry
  • contact     - Email & LinkedIn connection info
  • download-cv - Download Shivam's official PDF resume
  • clear       - Clear terminal window`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `SHIVAM JADON — Fullstack & AI Systems Engineer
Location: Gurugram, Haryana, India
Experience: 5+ Years
Focus: MERN Stack, Production RAG Pipelines, OpenSearch, Dialogflow NLP, VoiceBots, Enterprise CRM integrations (Salesforce, Workday).`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `CORE TECHNICAL STACK:
[AI / RAG]:      OpenSearch kNN, Vector Embeddings, LLMs, Dialogflow, Twilio
[BACKEND]:       Node.js, Express.js, MongoDB, Redis, Elasticsearch, REST APIs
[FRONTEND]:      React.js, Modern JS/TS, Tailwind CSS, Dynamic Conversational UI
[CLOUD/DEVOPS]:  AWS, Docker, Microservices, CI/CD, Nginx, Linux`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `CAREER SUMMARY:
1. BlackBeltHelp (March 2025 - Present): Software Engineer (MERN & GenAI)
   - Architected production RAG pipelines, OpenSearch vector stores, React data ingestion UIs.
2. BlackBeltHelp (Sept 2022 - March 2025): Frontend Developer
   - Scaled conversational UI components and Student Information Systems.
3. BlackBeltHelp (March 2021 - August 2022): Google Dialogflow Expert
   - Built NLP conversational trees & telephony fulfillment webhooks.`
        });
        break;

      case 'rag-demo':
        newHistory.push({
          type: 'output',
          text: `[SIMULATION] Executing RAG Semantic Pipeline:
  [1/4] Embedding generated (1536 dims) ............ 12ms
  [2/4] OpenSearch kNN Vector Search ............. 28ms (Cosine: 0.984)
  [3/4] Context Pruning & Guardrail Ingestion ...... 6ms
  [4/4] LLM Token Stream Initialized ............. 34ms
  Status: 200 OK | Total Pipeline Latency: 80ms`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONTACT CHANNELS:
  Email:    shivamjadon71@gmail.com
  LinkedIn: https://www.linkedin.com/in/shivam-jadon
  Location: Gurugram, India`
        });
        break;

      case 'download-cv':
        newHistory.push({
          type: 'output',
          text: `Initiating download of Shivam_Jadon_CV.pdf...`
        });
        window.open('/shivam-jadon-cv.pdf', '_blank');
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: '${cmd}'. Type 'help' for valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  const chips = ['help', 'skills', 'experience', 'rag-demo', 'contact', 'download-cv'];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive CLI Interface</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Developer Terminal
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
          Explore system diagnostics, query background telemetry, or inspect my stack via the command line.
        </p>
      </div>

      {/* Terminal Box */}
      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Terminal Titlebar */}
        <div className="bg-black/60 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="font-mono text-xs text-slate-400 ml-2 font-medium">shivam@production-node:~$</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setHistory([]);
            }}
            className="p-1.5 rounded text-slate-400 hover:text-rose-400 hover:bg-white/[0.05] transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Terminal Content Area */}
        <div className="p-4 sm:p-6 bg-black/80 font-mono-code text-xs leading-relaxed min-h-[300px] max-h-[420px] overflow-y-auto space-y-2">
          {history.map((item, idx) => (
            <div key={idx} className={`whitespace-pre-wrap ${
              item.type === 'user' ? 'text-emerald-400 font-bold' :
              item.type === 'system' ? 'text-slate-500' :
              item.type === 'error' ? 'text-rose-400' :
              'text-slate-300'
            }`}>
              {item.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Shortcuts Bar */}
        <div className="bg-black/90 px-4 py-2 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono uppercase text-slate-500 shrink-0">Quick Run:</span>
          {chips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleCommand(chip)}
              className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/[0.08] hover:border-emerald-500/30 text-[11px] font-mono shrink-0 transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleSubmit} className="bg-black px-4 py-3 border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-xs">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'help', 'rag-demo', 'contact')..."
            className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

    </section>
  );
}
