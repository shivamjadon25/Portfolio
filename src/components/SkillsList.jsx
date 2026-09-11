import React from 'react';
import { profile } from '../data/profile';

export default function SkillsList() {
  return (
    <section className="space-y-6 pt-12 border-t border-white/[0.08]">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
        Stack &amp; Capabilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(profile.skills).map(([category, items], idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs font-mono font-medium text-emerald-400">
              {category}
            </h3>
            <ul className="space-y-1.5">
              {items.map((skill, sIdx) => (
                <li key={sIdx} className="text-xs sm:text-sm text-zinc-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
