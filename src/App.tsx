import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryThemeBar } from './components/IndustryThemeBar';
import { CaseStudies } from './components/CaseStudies';
import { TestPipelineSimulator } from './components/TestPipelineSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { PdfViewerSection } from './components/PdfViewerSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<
    'all' | 'enterprise-foodtech' | 'retail-ecommerce' | 'mobile-gaming'
  >('all');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenPdf = () => {
    const el = document.getElementById('resume-viewer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 1-Row 3-Zone Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPdf={handleOpenPdf}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Split View & Full-Width KPI strip */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenPdf={handleOpenPdf}
        />

        {/* Industry Domain Switcher & Case Studies */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <IndustryThemeBar
            selectedIndustry={selectedIndustry}
            onSelectIndustry={setSelectedIndustry}
          />
        </div>

        {/* Interactive Case Studies (Enterprise FoodTech, E-Commerce, Mobile) */}
        <CaseStudies selectedIndustry={selectedIndustry} />

        {/* Live Automated Smoke Test Runner / QA Simulator */}
        <TestPipelineSimulator />

        {/* 10-Year Career History Timeline (All 4 Positions) */}
        <ExperienceTimeline />

        {/* Comprehensive Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Official PDF Document & Scannable Resume Viewer */}
        <PdfViewerSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Recruiter Quick Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
