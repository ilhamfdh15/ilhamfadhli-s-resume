import React, { useState } from 'react';
import { Download, Mail, Menu, X, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPdf: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPdf }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Career History', href: '#experience' },
    { label: 'Test Simulator', href: '#simulator' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Resume PDF', href: '#resume-viewer' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#overview"
          className="group flex items-baseline gap-2.5 text-slate-100 font-bold tracking-tight text-lg whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
            SDET / QA Lead
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line links with zero pill enclosures) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPdf}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>View PDF</span>
          </button>

          <a
            href={PERSONAL_INFO.pdfPath}
            download="Ilham_Fadhli_CV.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors whitespace-nowrap shrink-0 font-semibold focus-visible:outline-2 focus-visible:outline-cyan-400 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 focus-visible:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0d131f] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 px-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.pdfPath}
              download="Ilham_Fadhli_CV.pdf"
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-md"
            >
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-800 rounded-md border border-slate-700"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              Recruiter Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
