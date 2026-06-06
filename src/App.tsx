import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Presentation, Layers, Sliders, ArrowLeftRight, Paintbrush, 
  HelpCircle, MessageSquare, ArrowUp, Briefcase, Mail, Sparkles 
} from 'lucide-react';

import Hero from './components/Hero';
import InteractiveMockup from './components/InteractiveMockup';
import SlideSandbox from './components/SlideSandbox';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DesignStrategy from './components/DesignStrategy';
import PortfolioShowcase from './components/PortfolioShowcase';
import ContactBooker from './components/ContactBooker';

export default function App() {
  const [preselectedPackage, setPreselectedPackage] = useState<string | undefined>(undefined);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPackageAndScroll = (packageName: string) => {
    setPreselectedPackage(packageName);
    scrollToSection('contact');
  };

  const handleClearPackage = () => {
    setPreselectedPackage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#121212] selection:bg-black selection:text-white font-sans antialiased border-[12px] border-white shadow-inner">
      
      {/* GLOBAL FLOATING HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-black/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          
          {/* Logo Name */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-9 h-9 bg-black flex items-center justify-center text-white shadow-sm">
              <span className="font-serif font-black italic text-base">D.</span>
            </div>
            <div>
              <span className="font-serif font-black text-lg italic tracking-tight block leading-none text-[#121212]">Denise.</span>
              <span className="text-[9px] text-[#121212]/40 font-mono tracking-wider block mt-0.5 uppercase">Presentation Architect</span>
            </div>
          </div>

          {/* Desktop Navigation Link Anchors */}
          <nav className="hidden md:flex items-center gap-7 text-[10px] font-mono uppercase tracking-widest text-[#121212]/60">
            <button 
              onClick={() => scrollToSection('mockup-player')} 
              className="hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5 cursor-pointer"
            >
              Slide Player
            </button>
            <button 
              onClick={() => scrollToSection('sandbox')} 
              className="hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5 cursor-pointer"
            >
              Sandbox Studio
            </button>
            <button 
              onClick={() => scrollToSection('transformations')} 
              className="hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5 cursor-pointer"
            >
              Case Slider
            </button>
            <button 
              onClick={() => scrollToSection('strategy')} 
              className="hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5 cursor-pointer"
            >
              Methodology
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5 cursor-pointer"
            >
              Pricing Details
            </button>
          </nav>

          {/* Quick CTA booking trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 hover:bg-black text-[#121212] hover:text-white border border-black font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer"
              id="header-cta-contact"
            >
              Inquire
            </button>
          </div>

        </div>
      </header>

      {/* CORE SECTIONS STACK */}
      <main className="relative grow">
        
        {/* Section 1: Hero presentation bios */}
        <Hero onScrollToSection={scrollToSection} />

        {/* Section 2: Interactive slide showcase player */}
        <InteractiveMockup />

        {/* Section 3: Live customized slide sandbox */}
        <SlideSandbox />

        {/* Section 4: Before vs After comparisons range slider */}
        <BeforeAfterSlider />

        {/* Section 5: Design formulas methodology */}
        <DesignStrategy />

        {/* Section 6: Testimonials and service package tiers */}
        <PortfolioShowcase 
          onScrollToSection={scrollToSection} 
          onOpenBookingWithPackage={handleSelectPackageAndScroll} 
        />

        {/* Section 7: Budget intake inquiry & scheduler form */}
        <ContactBooker 
          preselectedPackageName={preselectedPackage} 
          onClearPreselectedPackage={handleClearPackage} 
        />

      </main>

      {/* DETAILED FOOTER PANEL */}
      <footer className="bg-[#FDFCF8] border-t border-black/10 py-16 px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-black/10 pb-12">
          
          {/* Logo brand info column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                <span className="font-serif italic font-bold text-sm">D.</span>
              </div>
              <span className="font-serif italic font-black text-base uppercase tracking-tight text-[#121212]">Denise. Studio</span>
            </div>
            <p className="text-[#121212]/60 text-xs font-sans max-w-sm leading-relaxed">
              Denise designs slides that bypass the garbage and communicate straight value. We focus on storyboarding, zero bullets, and pristine typography hierarchy.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-xxs uppercase tracking-widest text-[#121212]/40 font-bold">The Core Sandbox</h5>
            <ul className="space-y-2 text-xs font-sans text-[#121212]/70">
              <li>
                <button onClick={() => scrollToSection('sandbox')} className="hover:text-black hover:underline text-left cursor-pointer transition-all">
                  Slide Custom Editor
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('mockup-player')} className="hover:text-black hover:underline text-left cursor-pointer transition-all">
                  VC Pitch Deck Showcase
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('transformations')} className="hover:text-black hover:underline text-left cursor-pointer transition-all">
                  Before-After Slider
                </button>
              </li>
            </ul>
          </div>

          {/* Guidelines info */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-mono text-xxs uppercase tracking-widest text-[#121212]/40 font-bold">Design Formula</h5>
            <ul className="space-y-2 text-xs font-sans text-[#121212]/70">
              <li>60-30-10 Color Ratio</li>
              <li>Bullet Wall Elimination</li>
              <li>Asymmetric Grid Layouts</li>
              <li>Swiss Typography Framing</li>
            </ul>
          </div>

          {/* Active stats */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] bg-black text-white px-2 py-1">Active Agency SLA</span>
            <p className="text-[11px] text-[#121212]/80 font-serif leading-relaxed italic">
              "My promise is absolute visual clarity. If your message requires walls of words, I will politely decline design and refer you to a copywriter."
            </p>
            <span className="block text-[9px] font-mono text-[#121212]/50 mt-1 uppercase tracking-wider">
              // Active Studio Status: Booking Q4 2026
            </span>
          </div>

        </div>

        {/* Copyright strip bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#121212]/50 gap-4">
          <div>
            © 2026 Denise Slide Portfolio Agency. All rights protected. 
          </div>
          <div className="flex gap-6">
            <span>Powered by Antigravity UI Studio</span>
            <span>Local Time Ingress: UTC 2026</span>
          </div>
        </div>

      </footer>

      {/* FLOAT SCROLL BACK TO TOP CONTROL */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-black hover:bg-neutral-900 border border-transparent text-white rounded-none shadow-xl transition-all cursor-pointer"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
