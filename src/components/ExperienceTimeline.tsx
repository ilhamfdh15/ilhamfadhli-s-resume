import React, { useState } from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { Award, Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filterCompany, setFilterCompany] = useState<string>('all');

  const filteredExperiences =
    filterCompany === 'all'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.id === filterCompany);

  const getIndustryBadgeColor = (id: string) => {
    switch (id) {
      case 'enterprise-foodtech':
        return {
          text: 'text-emerald-400',
          border: 'border-emerald-500/30',
          bg: 'bg-emerald-950/30',
          label: 'Enterprise FoodTech & AI',
        };
      case 'retail-ecommerce':
        return {
          text: 'text-blue-400',
          border: 'border-blue-500/30',
          bg: 'bg-blue-950/30',
          label: 'Retail & E-Commerce / POS',
        };
      case 'mobile-gaming':
        return {
          text: 'text-violet-400',
          border: 'border-violet-500/30',
          bg: 'bg-violet-950/30',
          label: 'Mobile & PC Gaming QA',
        };
      default:
        return {
          text: 'text-cyan-400',
          border: 'border-cyan-500/30',
          bg: 'bg-cyan-950/30',
          label: 'Quality Engineering',
        };
    }
  };

  return (
    <section id="experience" className="pt-16 pb-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Professional Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              10-Year Career History & Milestones
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Complete career progression across all 4 engineering organizations, from Jr. Quality Tester to Sr. QA Supervisor and Lead SDET.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
            Total Positions: <span className="text-cyan-400 font-bold">{EXPERIENCES.length} Verified Roles</span>
          </div>
        </div>

        {/* Company Quick-Filter Tabs (Buttons with click handlers) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0e1626] border border-slate-800 rounded-xl">
          <button
            onClick={() => setFilterCompany('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filterCompany === 'all'
                ? 'bg-slate-800 text-slate-100 border border-slate-700 shadow-sm ring-1 ring-cyan-400/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Experiences ({EXPERIENCES.length})
          </button>

          {EXPERIENCES.map((exp) => {
            const isSelected = filterCompany === exp.id;
            const badge = getIndustryBadgeColor(exp.industryId);
            return (
              <button
                key={exp.id}
                onClick={() => setFilterCompany(exp.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-800 text-slate-100 border border-slate-700 shadow-sm ring-1 ring-cyan-400/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={badge.text}>{exp.company}</span>
              </button>
            );
          })}
        </div>

        {/* Career Timeline Stack */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const badge = getIndustryBadgeColor(exp.industryId);
            return (
              <div
                key={exp.id}
                className="bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 transition-all hover:border-slate-700 shadow-sm"
              >
                {/* Header Row: Company, Industry Subtitle, Role, Period, Location */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className={`font-bold text-sm ${badge.text}`}>{exp.company}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{badge.label}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-cyan-400 font-semibold tabular-nums shrink-0 sm:text-right bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                    {exp.period}
                  </div>
                </div>

                {/* Award Highlight if present */}
                {exp.keyAchievement && (
                  <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-200 leading-relaxed">
                      <strong className="text-amber-300 font-semibold block mb-0.5">
                        Consecutive Excellence Recognition:
                      </strong>
                      {exp.keyAchievement}
                    </div>
                  </div>
                )}

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Engineering Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Environment & Tools:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-slate-300 px-2.5 py-1 bg-slate-800/80 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
