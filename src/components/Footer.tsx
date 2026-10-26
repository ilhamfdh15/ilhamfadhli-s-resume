import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Download, ExternalLink, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080d16] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-2 max-w-sm">
            <div className="text-base font-bold text-slate-100">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Senior Quality Assurance Engineer and SDET driving zero-defect deployments across enterprise APIs, retail e-commerce, and high-traffic mobile systems.
            </p>
            <div className="text-xs font-mono text-cyan-400/90 pt-1">
              {PERSONAL_INFO.availability}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-10 text-xs">
            <div className="space-y-2.5">
              <div className="font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Navigation
              </div>
              <ul className="space-y-2">
                <li><a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a></li>
                <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Career History</a></li>
                <li><a href="#simulator" className="hover:text-cyan-400 transition-colors">Test Simulator</a></li>
                <li><a href="#resume-viewer" className="hover:text-cyan-400 transition-colors">Resume PDF</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Direct Contact
              </div>
              <ul className="space-y-2">
                <li>
                  <button onClick={onOpenContact} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>Recruiter Message</span>
                  </button>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-400 transition-colors font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Document
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={PERSONAL_INFO.pdfPath}
                    download="Ilham_Fadhli_CV.pdf"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-400"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV (PDF)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    View in New Tab
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All professional rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
