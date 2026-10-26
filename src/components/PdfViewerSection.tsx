import React, { useState } from 'react';
import { Download, ExternalLink, Maximize2, Minimize2, FileText, CheckCircle2, Award, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/resumeData';

export const PdfViewerSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'embedded' | 'structured'>('embedded');
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="resume-viewer" className="pt-16 pb-20 border-b border-slate-800/80 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Verified Documentation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Curriculum Vitae & Document Viewer
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Directly view, search, or download Ilham Fadhli's official resume document in native high-resolution PDF format.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* View Mode Toggle */}
            <div className="p-1 bg-[#0f172a] border border-slate-800 rounded-lg flex items-center">
              <button
                onClick={() => setViewMode('embedded')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'embedded'
                    ? 'bg-slate-800 text-slate-100 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PDF Reader
              </button>
              <button
                onClick={() => setViewMode('structured')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'structured'
                    ? 'bg-slate-800 text-slate-100 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Text Summary
              </button>
            </div>

            {/* Direct Download */}
            <a
              href={PERSONAL_INFO.pdfPath}
              download="Ilham_Fadhli_CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              href={PERSONAL_INFO.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Viewer Frame Container */}
        {viewMode === 'embedded' ? (
          <div className="relative bg-[#0d1424] border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xl">
            {/* Top Toolbar */}
            <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-slate-300">Ilham_Fadhli_CV.pdf</span>
                <span className="text-slate-600">·</span>
                <span>Original Attachment</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 hover:text-slate-200 text-slate-400 rounded transition-colors"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Native PDF Embed Object */}
            <div
              className={`w-full transition-all duration-300 rounded-xl overflow-hidden bg-slate-900 ${
                isFullscreen
                  ? 'fixed inset-4 z-50 bg-[#0b0f17] border border-slate-700 p-4 shadow-2xl flex flex-col'
                  : 'h-[750px] sm:h-[880px]'
              }`}
            >
              {isFullscreen && (
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-mono text-slate-300">Fullscreen PDF Inspection Mode</span>
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="px-3 py-1 bg-slate-800 text-slate-200 rounded hover:bg-slate-700"
                  >
                    Close Fullscreen
                  </button>
                </div>
              )}

              <iframe
                src={`${PERSONAL_INFO.pdfPath}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full rounded-lg border-0 bg-slate-950"
                title="Ilham Fadhli Resume PDF"
              />
            </div>

            {/* Mobile / Fallback Note */}
            <div className="mt-3 px-3 py-2 bg-slate-850 border border-slate-800 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>
                If the PDF reader does not display on your mobile device, switch to <strong>Text Summary</strong> or download directly.
              </span>
              <a
                href={PERSONAL_INFO.pdfPath}
                download="Ilham_Fadhli_CV.pdf"
                className="text-cyan-400 hover:text-cyan-300 underline font-medium"
              >
                Direct Download (PDF)
              </a>
            </div>
          </div>
        ) : (
          /* Scannable Structured Text Resume View */
          <div className="bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 max-w-4xl mx-auto shadow-xl">
            {/* CV Title Header */}
            <div className="border-b border-slate-800 pb-6 space-y-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-slate-400">
                <span>{PERSONAL_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">{PERSONAL_INFO.availability}</span>
                <span aria-hidden="true">·</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-400">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400">
                Professional Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400">
                Technical Skills
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-semibold text-slate-200 shrink-0 w-52">
                      {cat.title}:
                    </span>
                    <span className="font-mono text-slate-400">
                      {cat.skills.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2 border-l border-slate-800 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-bold text-slate-100 text-sm">
                        {exp.role} <span className="font-normal text-slate-400">|</span> <span className="text-cyan-400">{exp.company}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-500 tabular-nums">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="list-disc list-inside leading-relaxed text-slate-400">
                          {r}
                        </li>
                      ))}
                    </ul>

                    {exp.keyAchievement && (
                      <div className="text-xs text-amber-300/90 font-medium pt-1">
                        🏆 Key Achievement: {exp.keyAchievement}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
