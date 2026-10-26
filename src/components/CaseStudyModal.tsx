import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Terminal, Cpu, GitBranch } from 'lucide-react';
import { CaseStudy } from '../data/resumeData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const getThemeColor = (industryId: string) => {
    switch (industryId) {
      case 'enterprise-foodtech':
        return { text: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-950/20' };
      case 'retail-ecommerce':
        return { text: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-950/20' };
      case 'mobile-gaming':
        return { text: 'text-violet-400', border: 'border-violet-500/40', bg: 'bg-violet-950/20' };
      default:
        return { text: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-950/20' };
    }
  };

  const theme = getThemeColor(caseStudy.industryId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 bg-[#0d1322]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className={theme.text}>{caseStudy.company}</span>
                <span aria-hidden="true">·</span>
                <span>{caseStudy.role}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{caseStudy.period}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                {caseStudy.title}
              </h2>
              <p className="text-sm text-slate-400">
                {caseStudy.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Quantitative Impact Row */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Measurable Engineering Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="p-4 bg-[#141e33] border border-slate-800 rounded-xl space-y-1">
                  <div className={`text-2xl font-bold font-mono tabular-nums ${theme.text}`}>
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {m.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-normal">
                    {m.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#111a2e] border border-slate-800/90 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-rose-300">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 bg-[#111a2e] border border-slate-800/90 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SDET Architecture & Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Technical QA Strategy & Architecture Spec */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              QA Strategy & Execution Pipeline
            </h3>
            <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-5 space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 block mb-1">Automation Framework:</span>
                  <span className="text-slate-200 font-sans text-xs">{caseStudy.qaArchitecture.framework}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">CI/CD Pipeline Integration:</span>
                  <span className="text-slate-200 font-sans text-xs">{caseStudy.qaArchitecture.cicd}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Test Management & Traceability:</span>
                  <span className="text-slate-200 font-sans text-xs">{caseStudy.qaArchitecture.testManagement}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Execution Scope & Coverage:</span>
                  <span className="text-slate-200 font-sans text-xs">{caseStudy.qaArchitecture.executionScope}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Engineering Deliverables */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Contributions & Highlights
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {caseStudy.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <ArrowRight className={`w-4 h-4 shrink-0 mt-0.5 ${theme.text}`} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Verified Testing Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-md text-xs font-mono text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-[#0d1322] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Ilham Fadhli · Senior QA Engineer & SDET
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
