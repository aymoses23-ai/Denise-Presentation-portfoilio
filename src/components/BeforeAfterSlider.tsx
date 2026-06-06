import { useState, useRef, PointerEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data';

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  // Touch handlers for mobile devices
  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="transformations" className="bg-[#F9F7F2] border-b border-black/10 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/15 pb-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
              <ArrowLeftRight className="w-3.5 h-3.5 text-rose-400" />
              <span>THE IMPACT SHIFT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
              Before & After <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors">Transformations</span>
            </h2>
            <p className="text-zinc-700 max-w-xl text-xs sm:text-sm leading-relaxed">
              Drag the interactive slider divider left-and-right to compare boring, raw text-heavy slide bullets with Denise's clean visual layouts.
            </p>
          </div>

          {/* Case selectors */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => { setActiveCaseIndex(idx); setSliderPosition(50); }}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-none border transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-black text-white border-black font-bold'
                    : 'bg-[#FDFCF8] text-[#121212]/60 border-black/10 hover:border-black/30 hover:text-black'
                }`}
                id={`btn-case-${item.id}`}
              >
                Case 0{idx + 1}: {item.slideName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge & Remedy Specs Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#FDFCF8] p-5 rounded-none border border-black/10 flex gap-3 h-full">
            <span className="p-1 px-1.5 text-red-650 font-mono text-[9px] bg-red-50 border border-red-200 shrink-0 h-fit font-bold">
              Dull Problem
            </span>
            <div>
              <h4 className="text-black font-bold text-xs tracking-wider uppercase font-mono mb-1">
                Typical Slide Friction
              </h4>
              <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                {activeCase.problem}
              </p>
            </div>
          </div>

          <div className="bg-[#FDFCF8] p-5 rounded-none border border-black/10 flex gap-3 h-full">
            <span className="p-1 px-[7px] text-white font-mono text-[9px] bg-black shrink-0 h-fit font-bold">
              Denise Formula
            </span>
            <div>
              <h4 className="text-black font-bold text-xs tracking-wider uppercase font-mono mb-1">
                Visual Architecture Solution
              </h4>
              <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                {activeCase.solution}
              </p>
            </div>
          </div>
        </div>

        {/* SLIDING INTERACTIVE VIEWER CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          
          <div 
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] w-full rounded-none overflow-hidden bg-zinc-950 shadow-lg border border-black/15 select-none cursor-ew-resize"
            id="slider-container"
          >
            
            {/* BACKGROUND: THE "BEFORE" SLIDE (Times New Roman, Blue/White, Bullet Wall) */}
            <div className="absolute inset-0 w-full h-full p-6 sm:p-10 bg-white font-serif flex flex-col justify-between text-zinc-900 text-left">
              
              <div className="pb-2 border-b border-zinc-250 flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold">RAW DRAFT // SECTION 4</span>
                <span className="text-[10px] font-mono text-zinc-400">Page 14 of 90</span>
              </div>

              <div className="grow flex flex-col justify-center space-y-4 max-w-4xl py-4">
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-950">
                  {activeCase.before.title}
                </h3>
                
                <ul className="space-y-1.5 list-disc pl-5 text-xxs sm:text-xs text-zinc-650 leading-relaxed max-w-3xl">
                  {activeCase.before.bullets.map((b, idx) => (
                    <li key={idx} className="marker:text-zinc-400">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center text-[9px] text-zinc-400 font-mono pt-1.5 border-t border-zinc-150">
                <span>© Corporate Logistics Systems. All rights protected.</span>
                <span>Version 1.0 Draft</span>
              </div>
            </div>

            {/* OVERLAY: THE "AFTER" SLIDE (Dynamic clipping based on slider position) */}
            <div 
              className="absolute inset-0 w-full h-full p-6 sm:p-10 flex flex-col justify-between text-left transition-all duration-75 pointer-events-none select-none"
              style={{ 
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                backgroundColor: activeCase.after.layoutType === 'metric' ? '#09090b' : '#020617',
                color: '#f4f4f5'
              }}
            >
              {/* Header */}
              <div className="pb-2 border-b border-zinc-800 flex justify-between items-center">
                <span className="text-[9px] font-mono tracking-widest" style={{ color: activeCase.after.accentColor }}>
                  {activeCase.after.tagline || 'DENISE PORTFOLIO BLUEPRINT'}
                </span>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide">
                  Style: {activeCase.after.layoutType} Model
                </span>
              </div>

              {/* Slide Core Content */}
              <div className="grow flex flex-col justify-center py-4">
                
                {activeCase.after.layoutType === 'metric' ? (
                  // Metric layout
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    <div className="md:col-span-6 space-y-3">
                      <h3 className="text-base sm:text-xl md:text-2.5xl font-black font-sans text-white tracking-tight leading-snug">
                        {activeCase.after.title}
                      </h3>
                      <ul className="space-y-1.5 text-[10px] text-zinc-400 font-sans">
                        {activeCase.after.content.map((pt, id) => (
                          <li key={id} className="flex gap-1.5 items-start">
                            <span className="text-white font-bold shrink-0">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-6 grid grid-cols-3 gap-2">
                      {activeCase.after.metrics?.map((m, id) => (
                        <div key={id} className="p-3 bg-zinc-900 border border-zinc-800 rounded-none text-center flex flex-col justify-between">
                          <span className="block text-base sm:text-lg font-black font-mono" style={{ color: activeCase.after.accentColor }}>
                            {m.value}
                          </span>
                          <span className="block text-[8px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Flow layout
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-xl md:text-2.5xl font-semibold uppercase tracking-wide font-mono text-white leading-tight">
                      {activeCase.after.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeCase.after.content.map((item, id) => {
                        const [ph, desc] = item.split(': ');
                        return (
                          <div key={id} className="p-3 bg-slate-900 border border-slate-800 rounded-none space-y-1">
                            <span className="text-[9px] font-mono text-cyan-400 tracking-widest font-black block">
                              {ph.toUpperCase()}
                            </span>
                            <p className="text-[9px] text-slate-400 font-sans leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-[8px] text-zinc-503 font-mono pt-1.5 border-t border-zinc-850">
                <span>© Redesigned by Denise Slide Studio</span>
                <span>Case Proof V2</span>
              </div>
            </div>

            {/* DRAGGABLE SLIDER HANDLE DIVIDER */}
            <div 
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-0.5 bg-black z-30 flex items-center justify-center cursor-ew-resize transition-all duration-75"
            >
              <div className="w-8 h-8 rounded-full bg-black text-white hover:bg-neutral-900 shadow-xl flex items-center justify-center shrink-0 border border-black z-40 select-none">
                <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ marginLeft: '-2.2px' }} />
              </div>
            </div>

            {/* Labels floating overlay */}
            <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#F9F7F2] text-[9px] font-mono text-zinc-800 border border-black/10 select-none z-10 pointer-events-none uppercase tracking-widest font-bold">
              Before draft
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 bg-black text-[9px] font-mono text-white select-none z-10 pointer-events-none uppercase tracking-widest font-bold">
              Denise Redesign
            </div>

          </div>

          <div className="text-center text-xxs font-mono text-zinc-500 mt-4 uppercase tracking-widest flex items-center justify-center gap-1.5 select-none">
            <ArrowLeftRight className="w-3.5 h-3.5 text-neutral-450" />
            <span>Hold and drag the center line to compare the difference</span>
          </div>

        </div>

      </div>
    </section>
  );
}
