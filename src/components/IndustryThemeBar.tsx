import React from 'react';
import { INDUSTRIES } from '../data/resumeData';
import { Layers, Utensils, ShoppingBag, Gamepad2 } from 'lucide-react';

interface IndustryThemeBarProps {
  selectedIndustry: string;
  onSelectIndustry: (id: 'all' | 'enterprise-foodtech' | 'retail-ecommerce' | 'mobile-gaming') => void;
}

export const IndustryThemeBar: React.FC<IndustryThemeBarProps> = ({
  selectedIndustry,
  onSelectIndustry,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'enterprise-foodtech':
        return <Utensils className="w-4 h-4" />;
      case 'retail-ecommerce':
        return <ShoppingBag className="w-4 h-4" />;
      case 'mobile-gaming':
        return <Gamepad2 className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Segmented Interactive Control (Buttons with click handlers) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0e1626] border border-slate-800 rounded-xl">
        {INDUSTRIES.map((industry) => {
          const isActive = selectedIndustry === industry.id;
          return (
            <button
              key={industry.id}
              onClick={() => onSelectIndustry(industry.id)}
              className={`inline-flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-slate-800 text-slate-100 shadow-md border border-slate-700/80 ring-1 ring-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              <span
                className={
                  isActive
                    ? industry.id === 'enterprise-foodtech'
                      ? 'text-emerald-400'
                      : industry.id === 'retail-ecommerce'
                      ? 'text-blue-400'
                      : industry.id === 'mobile-gaming'
                      ? 'text-violet-400'
                      : 'text-cyan-400'
                    : 'text-slate-500'
                }
              >
                {getIcon(industry.id)}
              </span>
              <span>{industry.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Industry Context Ribbon */}
      {selectedIndustry !== 'all' && (
        <div className="px-4 py-3 bg-[#0d1527]/70 border border-slate-800 rounded-lg flex flex-wrap items-center justify-between gap-4 text-xs">
          {INDUSTRIES.filter((i) => i.id === selectedIndustry).map((active) => (
            <React.Fragment key={active.id}>
              <div className="space-y-0.5">
                <div className="font-semibold text-slate-200 flex items-center gap-2">
                  <span
                    className={`font-mono text-xs uppercase tracking-wider ${
                      active.id === 'enterprise-foodtech'
                        ? 'text-emerald-400'
                        : active.id === 'retail-ecommerce'
                        ? 'text-blue-400'
                        : 'text-violet-400'
                    }`}
                  >
                    {active.company}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{active.tagline}</span>
                </div>
                <p className="text-slate-300 max-w-3xl leading-relaxed">
                  {active.description}
                </p>
              </div>

              <button
                onClick={() => onSelectIndustry('all')}
                className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 shrink-0"
              >
                Show All Industries
              </button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
