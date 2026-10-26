import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/resumeData';
import { CaseStudyModal } from './CaseStudyModal';
import { ChevronRight, ArrowUpRight, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CaseStudiesProps {
  selectedIndustry: string;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ selectedIndustry }) => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    selectedIndustry === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.industryId === selectedIndustry);

  const getThemeStyles = (industryId: string) => {
    switch (industryId) {
      case 'enterprise-foodtech':
        return {
          accent: 'text-emerald-400',
          badgeText: 'text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/50',
          indicator: 'bg-emerald-400',
          buttonBg: 'hover:bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
        };
      case 'retail-ecommerce':
        return {
          accent: 'text-blue-400',
          badgeText: 'text-blue-400',
          hoverBorder: 'hover:border-blue-500/50',
          indicator: 'bg-blue-400',
          buttonBg: 'hover:bg-blue-950/40 text-blue-300 border-blue-500/30',
        };
      case 'mobile-gaming':
        return {
          accent: 'text-violet-400',
          badgeText: 'text-violet-400',
          hoverBorder: 'hover:border-violet-500/50',
          indicator: 'bg-violet-400',
          buttonBg: 'hover:bg-violet-950/40 text-violet-300 border-violet-500/30',
        };
      default:
        return {
          accent: 'text-cyan-400',
          badgeText: 'text-cyan-400',
          hoverBorder: 'hover:border-cyan-500/50',
          indicator: 'bg-cyan-400',
          buttonBg: 'hover:bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
        };
    }
  };

  return (
    <section id="case-studies" className="pt-16 pb-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header with Natural Editorial Title */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            Engineered Quality & Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Interactive Project Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Detailed breakdowns of production test strategies, automated smoke suites, and measurable defect reduction across high-stakes domains.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => {
            const styles = getThemeStyles(study.industryId);
            return (
              <div
                key={study.id}
                className={`bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${styles.hoverBorder} group space-y-6 shadow-sm`}
              >
                {/* Header Information (Unboxed Metadata) */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className={`font-semibold ${styles.badgeText}`}>{study.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{study.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.role}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Quantitative Impact Micro-Grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
                  {study.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="p-2.5 bg-[#121c32] rounded-lg">
                      <div className={`text-lg font-bold font-mono tabular-nums ${styles.accent}`}>
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tools Applied */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Verified Tooling
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tools.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {study.tools.length > 5 && (
                      <span className="px-2 py-1 text-xs font-mono text-slate-500">
                        +{study.tools.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Inspect Case Study Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalStudy(study)}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg border bg-slate-800/70 ${styles.buttonBg} flex items-center justify-center gap-2 transition-all`}
                  >
                    <span>Inspect QA Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Inspection Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
};
