import React from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Cpu, Terminal, GitFork, CheckSquare } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 2:
        return <GitFork className="w-5 h-5 text-violet-400" />;
      default:
        return <CheckSquare className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="pt-16 pb-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            Technical Competence & Tooling
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            SDET Skills & QA Methodologies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Core technical competencies developed over a decade of hands-on automated and manual test engineering.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-lg hover:border-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
