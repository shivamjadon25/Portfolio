import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  Briefcase, 
  Code2, 
  Layers, 
  Terminal, 
  Mail, 
  FileText, 
  Sun, 
  Moon, 
  Volume2, 
  Copy, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { profileData } from '../data/profile';
import { sound } from '../utils/sound';

export default function CommandPalette({ isOpen, onClose, isDark, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: 'arch',
      title: 'Navigate to AI & RAG Architecture',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        window.location.hash = 'architecture';
        onClose();
      }
    },
    {
      id: 'exp',
      title: 'Navigate to Work Experience (BlackBeltHelp)',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        window.location.hash = 'experience';
        onClose();
      }
    },
    {
      id: 'skills',
      title: 'Navigate to Skills Matrix',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        window.location.hash = 'skills';
        onClose();
      }
    },
    {
      id: 'projects',
      title: 'Navigate to Projects Showcase',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        window.location.hash = 'projects';
        onClose();
      }
    },
    {
      id: 'terminal',
      title: 'Open Interactive Developer CLI',
      category: 'Interactive',
      icon: Terminal,
      action: () => {
        window.location.hash = 'terminal';
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Get in Touch / Contact Shivam',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.hash = 'contact';
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${profileData.email})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(profileData.email);
        sound.playSuccess();
        onClose();
      }
    },
    {
      id: 'download-resume',
      title: 'Download Curriculum Vitae (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        window.open('/shivam-jadon-cv.pdf', '_blank');
        sound.playSuccess();
        onClose();
      }
    },
    {
      id: 'toggle-theme',
      title: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`,
      category: 'Preferences',
      icon: isDark ? Sun : Moon,
      action: () => {
        toggleTheme();
        sound.playClick();
        onClose();
      }
    }
  ];

  const filtered = actions.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Modal Dialog */}
      <div className="w-full max-w-xl glass-card rounded-2xl border border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-black/50">
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Results */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sound.playClick();
                    item.action();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-emerald-500/15 hover:text-emerald-300 text-slate-300 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/[0.05] group-hover:bg-emerald-500/20 text-slate-400 group-hover:text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-medium">{item.title}</div>
                      <div className="text-[10px] font-mono text-slate-500">{item.category}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400" />
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands for "{query}"
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Navigate with click or arrow keys</span>
          <span>ESC to close</span>
        </div>

      </div>

    </div>
  );
}
