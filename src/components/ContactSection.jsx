import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Let’s Build Something Exceptional
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
          Available for Senior Fullstack engineering roles, Generative AI architecture consulting, and enterprise system builds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="surface-card p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Direct Email
              </span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                Primary
              </span>
            </div>

            <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-white break-all">
              {profile.email}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 text-xs font-mono border border-slate-200 dark:border-white/[0.08] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 hover:bg-emerald-700 transition-all"
                title="Open Email App"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all flex items-center justify-between group block"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</div>
                <div className="font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-display">
                  Shivam Jadon
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500" />
          </a>

          {/* Location Card */}
          <div className="surface-card p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">Gurugram, Haryana, India</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">Open for Remote / Hybrid</div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">Curriculum Vitae (PDF)</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Complete 2-page detailed CV</div>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 text-white dark:text-slate-950 font-mono font-semibold text-xs transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>

        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="surface-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-600 dark:text-emerald-400">{formData.name}</strong>. I will get back to you shortly. You can also write directly to <a href={`mailto:${profile.email}`} className="text-emerald-600 dark:text-emerald-400 underline">{profile.email}</a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200 dark:border-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your team, system requirements, or upcoming project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-xs font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-mono font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
