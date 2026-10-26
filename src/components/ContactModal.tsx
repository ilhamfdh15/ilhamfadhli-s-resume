import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, ExternalLink, Copy, Check, Send, Building, User, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [opportunityRole, setOpportunityRole] = useState('Senior QA Engineer / SDET');
  const [messageNote, setMessageNote] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `QA Opportunity: ${opportunityRole} at ${companyName || 'Our Company'}`
    );
    const body = encodeURIComponent(
      `Hi Ilham,\n\nI came across your QA Engineer portfolio and would like to discuss an opportunity for the ${opportunityRole} position at ${companyName || 'our team'}.\n\n${messageNote ? `Note:\n${messageNote}\n\n` : ''}Best regards,\n${recruiterName || 'Hiring Manager'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-[#0d1322] flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-100">
              Contact & Recruiter Inquiry
            </h2>
            <p className="text-xs text-slate-400">
              Direct connection to Ilham Fadhli (Bogor, ID · Open to APAC & Remote)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-100 bg-slate-800 rounded-lg transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Direct Credentials Card */}
          <div className="bg-[#131d33] border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Verified Direct Channels
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-[#0e1628] rounded-lg border border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors flex items-center gap-1.5"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#0e1628] rounded-lg border border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">{PERSONAL_INFO.phone}</span>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors flex items-center gap-1.5"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#0e1628] rounded-lg border border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span className="font-mono">{PERSONAL_INFO.linkedinDisplay}</span>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Quick Recruiter Dispatch Form */}
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Dispatch Direct Recruiter Message
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Stripe, Grab, TechCorp"
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Target Role
              </label>
              <input
                type="text"
                value={opportunityRole}
                onChange={(e) => setOpportunityRole(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Message / Opportunity Overview (Optional)
              </label>
              <textarea
                value={messageNote}
                onChange={(e) => setMessageNote(e.target.value)}
                rows={3}
                placeholder="Include brief job details, compensation range, or interview schedule..."
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose Email with Pre-Filled Details</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
