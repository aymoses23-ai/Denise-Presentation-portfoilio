import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Sparkles, Layers, Info, CheckCircle2, TrendingUp, Cpu, Globe, FlaskConical 
} from 'lucide-react';
import { SLIDE_DECKS, SLIDE_THEMES } from '../data';
import { Slide, SlideTheme } from '../types';

export default function InteractiveMockup() {
  const [selectedDeckId, setSelectedDeckId] = useState(SLIDE_DECKS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);

  const activeDeck = SLIDE_DECKS.find(d => d.id === selectedDeckId) || SLIDE_DECKS[0];
  const activeSlide: Slide = activeDeck.slides[currentSlideIndex] || activeDeck.slides[0];
  const activeTheme: SlideTheme = SLIDE_THEMES.find(t => t.id === activeSlide.theme) || SLIDE_THEMES[0];

  // Auto-play timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNextSlide();
      }, 5000); // 5s slide duration
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlideIndex, activeDeck]);

  const handleNextSlide = () => {
    setCurrentSlideIndex(prev => (prev + 1) % activeDeck.slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex(prev => (prev - 1 + activeDeck.slides.length) % activeDeck.slides.length);
  };

  const selectDeck = (deckId: string) => {
    setSelectedDeckId(deckId);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
  };

  // Extract color based on theme to style pure components
  const accentHex = activeTheme.accentColor;

  return (
    <section id="mockup-player" className="bg-[#F9F7F2] border-t border-b border-black/10 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title and Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/15 pb-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5 text-rose-400" />
              <span>THE PLAYER ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
              Slide Showcase <span className="font-sans font-normal text-zinc-450 hover:text-black transition-colors">Player</span>
            </h2>
            <p className="text-zinc-700 max-w-xl text-xs sm:text-sm leading-relaxed">
              Click through interactive mockups of presentation slides Denise designed. Read her designer annotations to see the visual psychology behind each screen.
            </p>
          </div>

          {/* Deck Selectors */}
          <div className="flex flex-wrap gap-2">
            {SLIDE_DECKS.map((deck) => (
              <button
                key={deck.id}
                onClick={() => selectDeck(deck.id)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-none border transition-all cursor-pointer ${
                  selectedDeckId === deck.id
                    ? 'bg-black text-white border-black font-bold'
                    : 'bg-[#FDFCF8] text-[#121212]/60 border-black/10 hover:border-black/30 hover:text-black'
                }`}
                id={`btn-deck-${deck.id}`}
              >
                {deck.title.split(' ')[0]} Deck
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Deck Details Banner */}
        <div className="bg-[#FDFCF8] p-5 rounded-none border border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left text-[#121212]">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#121212]/40 font-mono font-bold block mb-1">
              {activeDeck.industry}
            </span>
            <h3 className="text-black font-black text-lg font-serif italic">{activeDeck.title}</h3>
            <p className="text-xs text-zinc-700 mt-1 max-w-3xl leading-relaxed">{activeDeck.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[10px] font-mono bg-[#F9F7F2] text-black rounded-none border border-black/10">
              Style: {activeTheme.name}
            </span>
          </div>
        </div>

        {/* WIDESCREEN PRESENTATION VIEWPORT EMBED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Slide Deck Player Frame */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            <div 
              className={`relative aspect-[16/9] w-full rounded-none overflow-hidden transition-all duration-300 ${
                isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-4' : 'bg-zinc-950 shadow-lg border border-black/10'
              }`}
              id="slide-player-viewport"
            >
              
              {/* Inner Widescreen Content Wrap */}
              <div className={`w-full h-full relative flex flex-col justify-between p-6 sm:p-10 select-none ${activeTheme.bgColor} ${activeTheme.textColor} transition-all duration-500`}>
                
                {/* Widescreen Subtle Grid Lines when minimalist */}
                {activeTheme.id === 'swiss-minimalist' && (
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                )}
                {activeTheme.id === 'tech-dark-neon' && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(6,182,212,0.04),transparent_50%)] pointer-events-none" />
                )}

                {/* Slide Header */}
                <div className="relative z-10 flex justify-between items-center pb-2 border-b border-current border-opacity-10">
                  <div className="flex items-center gap-2">
                    <span 
                      style={{ color: accentHex }} 
                      className="font-mono text-[9px] sm:text-xxs uppercase tracking-widest font-black"
                    >
                      {activeSlide.tagline || 'DENISE DESIGN CORE'}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] sm:text-xxs opacity-40 uppercase tracking-wider">
                    {activeSlide.category}
                  </div>
                </div>

                {/* Slide Body - Dynamic layouts based on LayoutType */}
                <div className="grow flex flex-col justify-center my-4 sm:my-6 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grow flex flex-col justify-center"
                    >
                      {/* LAYOUT 1: HERO VIEW */}
                      {activeSlide.layoutType === 'hero' && (
                        <div className="space-y-4 sm:space-y-6 text-left max-w-3xl">
                          <h1 className={`${activeTheme.fontHeading} text-2xl sm:text-3.5xl lg:text-4.5xl leading-[1.08]`} id="slide-hero-title">
                            {activeSlide.title}
                          </h1>
                          {activeSlide.subtitle && (
                            <p className={`${activeTheme.fontBody} text-xs sm:text-sm md:text-base max-w-2xl`}>
                              {activeSlide.subtitle}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {activeSlide.content.slice(0, 2).map((pt, i) => (
                              <span key={i} className="inline-flex items-center gap-1 text-[10px] font-mono opacity-80 px-2 py-0.5 bg-current bg-opacity-5 rounded">
                                <span className="w-1 h-1 rounded-full bg-rose-500" />
                                {pt.slice(0, 45)}...
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* LAYOUT 2: METRIC HIGHLIGHTS */}
                      {activeSlide.layoutType === 'metric' && (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          <div className="md:col-span-6 space-y-3 sm:space-y-4 text-left">
                            <h2 className={`${activeTheme.fontHeading} text-xl sm:text-2xl md:text-3xl leading-snug`}>
                              {activeSlide.title}
                            </h2>
                            <p className={`${activeTheme.fontBody} text-xs sm:text-sm`}>
                              {activeSlide.subtitle}
                            </p>
                            <ul className="space-y-1.5 pt-1 text-[11px] sm:text-xs opacity-80">
                              {activeSlide.content.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <CheckCircle2 style={{ color: accentHex }} className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Stat pillars */}
                          <div className="md:col-span-6 grid grid-cols-3 gap-3">
                            {activeSlide.metrics?.map((m, idx) => (
                              <div 
                                key={idx} 
                                className="p-3 rounded-lg bg-current bg-opacity-[0.03] border border-current border-opacity-10 text-center flex flex-col justify-between"
                              >
                                <span style={{ color: accentHex }} className="block text-xl sm:text-2xl font-black font-mono tracking-tight leading-none mb-1">
                                  {m.value}
                                </span>
                                <span className="block text-[8px] sm:text-[9px] font-mono uppercase tracking-wider opacity-60 leading-tight">
                                  {m.label}
                                </span>
                                {m.trend && (
                                  <span style={{ color: accentHex }} className="block text-[8px] font-mono mt-1 pt-1 border-t border-current border-opacity-[0.06] opacity-90">
                                    {m.trend}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* LAYOUT 3: SYSTEM FLOW JOURNEY */}
                      {activeSlide.layoutType === 'flow' && (
                        <div className="space-y-6 text-left">
                          <div>
                            <h2 className={`${activeTheme.fontHeading} text-lg sm:text-2xl leading-tight`}>
                              {activeSlide.title}
                            </h2>
                            <p className={`${activeTheme.fontBody} text-xs mt-1 opacity-85`}>
                              {activeSlide.subtitle}
                            </p>
                          </div>

                          {/* Dynamic 3-Part Flow Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {activeSlide.content.map((point, idx) => {
                              const [label, desc] = point.split(': ');
                              return (
                                <div 
                                  key={idx} 
                                  className="p-3.5 rounded-lg bg-current bg-opacity-[0.02] border border-current border-opacity-10 flex flex-col space-y-1.5 relative overflow-hidden"
                                >
                                  <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: accentHex }} />
                                  <span className="text-[10px] font-mono opacity-50 block">PHASE 0{idx + 1}</span>
                                  <span className="text-[11px] font-bold tracking-tight uppercase block leading-tight">
                                    {label}
                                  </span>
                                  <p className="text-[9px] sm:text-[10px] text-justify opacity-70 leading-relaxed font-sans">
                                    {desc || 'Detail process checkpoint structured for clarity and readability.'}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* LAYOUT 4: SPLIT AND HERO COMBO */}
                      {activeSlide.layoutType === 'split' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
                          <div className="space-y-3">
                            <h2 className={`${activeTheme.fontHeading} text-xl sm:text-3.5xl leading-[1.1]`}>
                              {activeSlide.title}
                            </h2>
                            <p className={`${activeTheme.fontBody} text-xs sm:text-sm`}>
                              {activeSlide.subtitle}
                            </p>
                          </div>
                          
                          <div className="p-4 sm:p-6 rounded-xl bg-current bg-opacity-[0.04] border border-current border-opacity-10 space-y-3 font-sans">
                            <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Comparative Ledger</span>
                            <div className="space-y-2 text-[10px] sm:text-xs">
                              {activeSlide.content.map((line, idx) => (
                                <div key={idx} className="flex gap-2 pb-1.5 border-b border-current border-opacity-[0.06] last:border-b-0">
                                  <span style={{ color: accentHex }} className="font-bold font-mono">0{idx + 1}.</span>
                                  <p className="opacity-80">{line}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LAYOUT 5: ELEGANT INTEGRAL QUOTE */}
                      {activeSlide.layoutType === 'quote' && (
                        <div className="space-y-5 text-left max-w-2xl mx-auto py-2">
                          <span style={{ color: accentHex }} className="text-3xl sm:text-4xl font-serif font-black select-none block leading-none">“</span>
                          <h1 className={`${activeTheme.fontHeading} text-lg sm:text-2.5xl leading-relaxed italic opacity-95`}>
                            {activeSlide.title}
                          </h1>
                          <div className="flex items-center gap-3 border-t border-current border-opacity-10 pt-3">
                            <div className="w-6 h-[1.5px]" style={{ backgroundColor: accentHex }} />
                            <p className="text-[10px] uppercase font-mono tracking-widest opacity-70">{activeSlide.subtitle}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Footer */}
                <div className="relative z-10 flex justify-between items-center text-[8px] sm:text-xxs opacity-55 font-mono pt-1 border-t border-current border-opacity-10">
                  <div className="flex gap-4">
                    <span>© Denise Design Agency</span>
                    <span className="hidden sm:inline">// Confidential Deck Pitch</span>
                  </div>
                  <div>
                    Slide {currentSlideIndex + 1} of {activeDeck.slides.length}
                  </div>
                </div>

              </div>

              {/* Watermark slide overlays inside fullscreen */}
              {isPlaying && (
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm px-2 py-1 rounded text-xxs font-mono text-zinc-400 border border-zinc-800 transition-all pointer-events-none z-20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  <span>PLAYING SLIDE CYCLE (5s)</span>
                </div>
              )}
            </div>

            {/* Controller Ribbon Bar */}
            <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-805 flex items-center justify-between">
              
              {/* Playback Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 bg-[#F9F7F2] hover:bg-zinc-200/50 border border-black/10 rounded-none text-neutral-800 transition-all cursor-pointer"
                  title="Previous Slide"
                  id="btn-slide-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2 rounded-none transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${
                    isPlaying 
                      ? 'bg-black text-white border border-black' 
                      : 'bg-[#F9F7F2] hover:bg-zinc-200/50 border border-black/10 text-neutral-800'
                  }`}
                  id="btn-slide-autoplay"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5 animate-pulse text-black" />}
                  <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Autoplay'}</span>
                </button>

                <button
                  onClick={handleNextSlide}
                  className="p-2 bg-[#F9F7F2] hover:bg-zinc-200/50 border border-black/10 rounded-none text-neutral-800 transition-all cursor-pointer"
                  title="Next Slide"
                  id="btn-slide-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Progress Tracker Slider dots */}
              <div className="flex items-center gap-2">
                {activeDeck.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentSlideIndex(i); setIsPlaying(false); }}
                    className={`h-2 transition-all cursor-pointer ${
                      currentSlideIndex === i ? 'w-5 bg-black' : 'w-2 bg-black/15 hover:bg-black/35'
                    }`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Toggle controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAnnotations(!showAnnotations)}
                  className={`p-2 rounded-none text-xs font-mono transition-all border flex items-center gap-1.5 cursor-pointer ${
                    showAnnotations 
                      ? 'bg-black text-white border-black' 
                      : 'bg-[#F9F7F2] text-neutral-600 border-black/10 hover:text-black'
                  }`}
                  title="Toggle Designer Explanations"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Designer Notes</span>
                </button>

                <button
                  onClick={() => {
                    if (!document.fullscreenElement) {
                      const docEl = document.getElementById('slide-player-viewport');
                      docEl?.requestFullscreen?.();
                      setIsFullscreen(true);
                    } else {
                      document.exitFullscreen?.();
                      setIsFullscreen(false);
                    }
                  }}
                  className="p-2 bg-[#F9F7F2] hover:bg-zinc-200/50 border border-black/10 rounded-none text-neutral-800 transition-all cursor-pointer"
                  title="Expand Mockup"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Designer Annotations Panel */}
          <div className="lg:col-span-4 h-full flex flex-col gap-4 text-left">
            
            {/* Visual Checklist Column */}
            <div className="bg-[#FDFCF8] p-6 rounded-none border border-black/10 space-y-5">
              <h4 className="text-black font-serif italic font-black text-sm tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                <span>Visual Blueprint</span>
              </h4>
              <p className="text-xs text-zinc-700 font-sans leading-relaxed">
                Slides design is mathematical pacing. This mockup highlights Denise's strict engineering layout specs:
              </p>
              
              <hr className="border-t border-black/10" />

              <div className="space-y-4 text-xs font-sans text-neutral-800">
                <div className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 flex items-center justify-center bg-black text-white font-mono text-xxs font-bold shrink-0">
                    01
                  </span>
                  <div>
                    <h5 className="text-black font-bold font-serif italic">The 60-30-10 Color Rule</h5>
                    <p className="text-zinc-650 text-[11px] mt-0.5 leading-relaxed">
                      60% background canvas spacing, 30% structural text weight, 10% highly focused key accents to capture visual interest instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 flex items-center justify-center bg-black text-white font-mono text-xxs font-bold shrink-0">
                    02
                  </span>
                  <div>
                    <h5 className="text-black font-bold font-serif italic">Asymmetric Alignments</h5>
                    <p className="text-zinc-650 text-[11px] mt-0.5 leading-relaxed">
                      Grid setups that leverage standard European Z-reading vector paths, steering the eye directly from headings down to focal metrics data boxes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 flex items-center justify-center bg-black text-white font-mono text-xxs font-bold shrink-0">
                    03
                  </span>
                  <div>
                    <h5 className="text-black font-bold font-serif italic">Sub-headline Pillars</h5>
                    <p className="text-zinc-650 text-[11px] mt-0.5 leading-relaxed">
                      Every high impact headline gets immediate logical support, letting investors digest primary objectives in under 1.5 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Annotation Annotation Bubble */}
            <AnimatePresence mode="wait">
              {showAnnotations && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black text-[#F9F7F2] p-5 rounded-none space-y-2.5 border border-neutral-900 shadow-md"
                >
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Info className="w-4 h-4 text-[#F9F7F2]/80 shrink-0" />
                    <span className="text-xxs font-mono uppercase tracking-wider font-bold">Denise's Annotation Note</span>
                  </div>
                  
                  <p className="text-xs text-zinc-200 leading-relaxed font-sans italic">
                    {activeSlide.layoutType === 'hero' && 
                      "Hero slides should never hold lists. This layout is a billboard. It sets a massive focal anchor using Space Grotesk so VCs sit straight to listen."
                    }
                    {activeSlide.layoutType === 'metric' && 
                      "By placing key metrics inside high-contrast blocks on the right Column, they hold visual weight equal to the main thesis. Perfect for showcasing hockey sticks."
                    }
                    {activeSlide.layoutType === 'flow' && 
                      "Flow structures usually are hideous horizontal arrows. Instead, I align minimal process pillars on separate, top-bordered accent cards. Keeps routing beautiful."
                    }
                    {activeSlide.layoutType === 'split' && 
                      "A strategic comparison layout. Left-heavy titles build emotional tension, while the neat data table on the right delivers quick structural resolutions."
                    }
                    {activeSlide.layoutType === 'quote' && 
                      "Keynotes require space to breathe. This quote format uses a beautiful serif typeface to slow down client pacing and build profound narrative emphasis before the big announcement."
                    }
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
