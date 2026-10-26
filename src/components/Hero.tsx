import React, { useState } from 'react';
import { Download, Mail, Phone, ExternalLink, Award, CheckCircle2, Copy, Check, Terminal, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, KPI_METRICS } from '../data/resumeData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenPdf: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenPdf }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <section id="overview" className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero: Left Column Typography, Right Column QA Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Header (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400/90 tracking-wide">
              <span>{PERSONAL_INFO.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{PERSONAL_INFO.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15] text-balance">
              Architecting zero-defect automated test pipelines & enterprise reliability.
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Action CTAs & Verified Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.pdfPath}
                download="Ilham_Fadhli_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Recruiter Message</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span className="underline decoration-slate-700 underline-offset-4 hover:decoration-cyan-400">
                  {PERSONAL_INFO.linkedinDisplay}
                </span>
              </a>
            </div>

            {/* Fast Copy Contact Details */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex items-center gap-2 hover:text-slate-200 transition-colors py-1 group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copiedField === 'email' ? (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center gap-2 hover:text-slate-200 transition-colors py-1 group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
                {copiedField === 'phone' ? (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 5 Cols - QA Leadership & Verification Snapshot */}
          <div className="lg:col-span-5 bg-[#0f172a]/70 rounded-xl border border-slate-800 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-tight">
                  QA Competence Snapshot
                </h3>
                <p className="text-xs text-slate-400">
                  Verified experience across 3 industry domains
                </p>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Achievement Highlight */}
            <div className="bg-[#131f37]/80 rounded-lg p-3.5 border border-slate-800/90 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>3x Tabsquare Extra-Mile Award Winner</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Awarded consecutively in 2022, 2023, and 2024 for outstanding technical problem-solving, defect triage, and cross-functional engineering dedication.
              </p>
            </div>

            {/* Core Verification Pillars */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100 font-medium">Enterprise API & POS Reliability:</strong> Automated smoke & regression suites preventing release regressions for high-volume transactions.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100 font-medium">E-Commerce & Retail Scale:</strong> Directed QA strategy for iBox.co.id and eraspace.com with TestRail test plans and JMeter load stress testing.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100 font-medium">Mobile Gaming Matrix:</strong> End-to-end device testing across 50+ phone models for Cash, Inc. (10M+ downloads) and Icon Pop Quiz 2.
                </div>
              </div>
            </div>

            {/* Inspect PDF quick action */}
            <div className="pt-2">
              <button
                onClick={onOpenPdf}
                className="w-full py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md border border-slate-700/80 flex items-center justify-center gap-2 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Inspect Full PDF CV & Career Credentials</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative KPI Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {KPI_METRICS.map((kpi) => (
              <div key={kpi.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 tracking-tight tabular-nums">
                  {kpi.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {kpi.label}
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  {kpi.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
