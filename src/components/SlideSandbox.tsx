import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Check, RefreshCw, Layers, Copy, 
  Layout, Palette, Type, CheckCircle, Flame 
} from 'lucide-react';
import { SLIDE_THEMES } from '../data';
import { SlideTheme } from '../types';

interface PresetOption {
  name: string;
  category: string;
  title: string;
  subtitle: string;
  bullets: string;
  themeId: string;
  layout: 'billboard' | 'pillars' | 'stat';
  statValue?: string;
  statLabel?: string;
}

const PRESETS: PresetOption[] = [
  {
    name: '🚀 AI SaaS Launch',
    category: 'Startup Pitch',
    title: 'We are engineering the absolute fastest inference engine on planet Earth.',
    subtitle: 'Our proprietary compiler strips model redundancy dynamically at runtime.',
    bullets: 'Reduces server cold-start delays to under 12ms\nOptimizes average memory utilization metrics by 45%\nEnables massive cross-cluster edge prediction caching',
    themeId: 'tech-dark-neon',
    layout: 'pillars'
  },
  {
    name: '☕ Specialty Coffee Shop',
    category: 'Business Proposition',
    title: 'Chalk & Oak: Locally roasted, globally conscious specialty brewing.',
    subtitle: 'Fostering tight community hubs centered around artisanal visual hospitality.',
    bullets: 'Direct-trade sourcing guarantees farmers get 250% over market rate\nCarbon-negative roasting minimizes environmental impact footprints\nProjected 28% internal rate of return in under 18 operational months',
    themeId: 'warm-editorial',
    layout: 'stat',
    statValue: '28%',
    statLabel: 'Year-One IRR Retours'
  },
  {
    name: '💼 Enterprise Strategy',
    category: 'Internal Keynote',
    title: 'Transforming Legacy Logistics into Intelligent Global Flow Systems.',
    subtitle: 'Consolidating isolated warehousing assets over a single coordination hub.',
    bullets: 'Consolidation of 18 regional distribution hubs under a cohesive ERP\nAutomating real-time inventory tracking logs on a secure local mesh\nSub-second delivery matching reduces shipping errors by 98.4%',
    themeId: 'corporate-prestige',
    layout: 'billboard'
  }
];

export default function SlideSandbox() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [slideTitle, setSlideTitle] = useState(PRESETS[0].title);
  const [slideSubtitle, setSlideSubtitle] = useState(PRESETS[0].subtitle);
  const [slideBulletsText, setSlideBulletsText] = useState(PRESETS[0].bullets);
  const [selectedThemeId, setSelectedThemeId] = useState(PRESETS[0].themeId);
  const [selectedLayout, setSelectedLayout] = useState<'billboard' | 'pillars' | 'stat'>(PRESETS[0].layout);
  
  // Custom Stat inputs when in 'stat' layout mode
  const [statValue, setStatValue] = useState('42x');
  const [statLabel, setStatLabel] = useState('Computing speed multiplier achieved');

  const [copiedLink, setCopiedLink] = useState(false);

  const activeTheme = SLIDE_THEMES.find(t => t.id === selectedThemeId) || SLIDE_THEMES[0];
  const listPoints = slideBulletsText.split('\n').filter(p => p.trim() !== '');

  const applyPreset = (preset: PresetOption) => {
    setSlideTitle(preset.title);
    setSlideSubtitle(preset.subtitle);
    setSlideBulletsText(preset.bullets);
    setSelectedThemeId(preset.themeId);
    setSelectedLayout(preset.layout);
    if (preset.statValue) setStatValue(preset.statValue);
    if (preset.statLabel) setStatLabel(preset.statLabel);
  };

  const copySlideSummary = () => {
    const summaryText = `[Slide Mockup]\nLayout: ${selectedLayout}\nTheme: ${activeTheme.name}\nTitle: "${slideTitle}"\nSubtitle: "${slideSubtitle}"\nPoints:\n${listPoints.map(p => `- ${p}`).join('\n')}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const resetToDefault = () => {
    applyPreset(PRESETS[0]);
  };

  return (
    <section id="sandbox" className="bg-[#FDFCF8] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-black/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
            <Layout className="w-3.5 h-3.5 text-rose-400" />
            <span>PLAYGROUND EXPERIMENT</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-black tracking-tight italic">
            The Interactive <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors">Slide Sandbox</span>
          </h2>
          
          <p className="text-zinc-700 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            Test Denise's design formulas live. Type your startup pitch copy on the left and see it dynamically format into a beautiful presentation slide mockup instantly!
          </p>
        </div>

        {/* Quick Presets Ribbon */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto p-2 bg-[#F9F7F2] rounded-none border border-black/10 text-neutral-800">
          <span className="text-xxs font-mono text-neutral-500 pr-2 pt-2.5 pl-2 uppercase tracking-wide">Preloaded Presets:</span>
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => { applyPreset(preset); setActivePresetIndex(idx); }}
              className={`px-3 py-1.5 rounded-none text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                slideTitle === preset.title
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-[#FDFCF8] text-neutral-600 border border-black/10 hover:text-black hover:border-black/30'
              }`}
              id={`preset-${idx}`}
            >
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Main Sandbox Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left, Span 5) */}
          <div className="lg:col-span-5 bg-[#F9F7F2] rounded-none border border-black/10 p-6 sm:p-8 space-y-6 text-left shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-black/10">
              <h3 className="text-sm font-bold font-mono text-neutral-800 uppercase tracking-widest flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-black" />
                <span>Sandbox Editor</span>
              </h3>
              <button 
                onClick={resetToDefault}
                className="text-xxs font-mono text-zinc-505 hover:text-black flex items-center gap-1 cursor-pointer transition-all"
                title="Reset Workspace"
              >
                <RefreshCw className="w-3 h-3 text-zinc-500" />
                <span>Reset</span>
              </button>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              
              {/* Category tag */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Mockup Category Tag</label>
                <span className="block px-3 py-1.5 bg-white text-xs font-mono text-zinc-800 rounded-none border border-black/10">
                  {slideTitle ? "Denise Live Sandbox Play" : "Generic Template"}
                </span>
              </div>

              {/* Title Header */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Main Slide Headline (Max 120 chars)</label>
                <textarea
                  value={slideTitle}
                  onChange={(e) => setSlideTitle(e.target.value)}
                  className="w-full min-h-[72px] p-3 text-xs bg-white border border-black/10 rounded-none focus:outline-none focus:border-black text-neutral-900 resize-none font-sans"
                  placeholder="Type your hero bulletless headline here..."
                  maxLength={160}
                />
              </div>

              {/* Subtitle */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Core Premise / Subheading Description</label>
                <input
                  type="text"
                  value={slideSubtitle}
                  onChange={(e) => setSlideSubtitle(e.target.value)}
                  className="w-full p-3 text-xs bg-white border border-black/10 rounded-none focus:outline-none focus:border-black text-neutral-900 font-sans"
                  placeholder="Enter supporting structural details..."
                />
              </div>

              {/* Layout select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Slide Layout Structural Pattern</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['billboard', 'pillars', 'stat'] as const).map((lType) => (
                    <button
                      key={lType}
                      onClick={() => setSelectedLayout(lType)}
                      className={`py-2 text-[10px] font-mono rounded-none border transition-all cursor-pointer text-center uppercase tracking-wider ${
                        selectedLayout === lType
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-white text-zinc-600 border-black/10 hover:text-black hover:border-black/35'
                      }`}
                      id={`btn-layout-${lType}`}
                    >
                      {lType}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bullets box */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Slide Content Lines (One per line)
                </label>
                <textarea
                  value={slideBulletsText}
                  onChange={(e) => setSlideBulletsText(e.target.value)}
                  className="w-full min-h-[96px] p-3 text-xs bg-white border border-black/10 rounded-none focus:outline-none focus:border-black text-neutral-900 resize-y font-sans"
                  placeholder="Line 1&#10;Line 2&#10;Line 3..."
                />
              </div>

              {/* Custom stats inputs (if layout is 'stat') */}
              <AnimatePresence>
                {selectedLayout === 'stat' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-3 pt-2"
                  >
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Stat Metric</label>
                      <input
                        type="text"
                        value={statValue}
                        onChange={(e) => setStatValue(e.target.value)}
                        className="w-full p-2 text-xs bg-white border border-black/10 rounded-none focus:outline-none focus:border-black text-neutral-900 font-mono"
                        placeholder="e.g. 28%"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Stat Descriptor</label>
                      <input
                        type="text"
                        value={statLabel}
                        onChange={(e) => setStatLabel(e.target.value)}
                        className="w-full p-2 text-xs bg-white border border-black/10 rounded-none focus:outline-none focus:border-black text-neutral-900"
                        placeholder="e.g. Year-One IRR"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Theme Selector UI */}
              <div className="space-y-1.5 pt-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Denise Design Presets Theme</label>
                <div className="grid grid-cols-2 gap-2">
                  {SLIDE_THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedThemeId(theme.id)}
                      className={`p-2.5 rounded-none border text-left transition-all cursor-pointer flex justify-between items-center ${
                        selectedThemeId === theme.id
                          ? 'border-black bg-white text-black font-bold'
                          : 'border-black/10 bg-white/60 text-zinc-600 hover:border-black/35 hover:text-black'
                      }`}
                      id={`theme-btn-${theme.id}`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-xxs font-bold">{theme.name}</span>
                        <div className="flex gap-1">
                          <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: theme.id === 'swiss-minimalist' ? '#F4F4F5' : theme.id === 'tech-dark-neon' ? '#020617' : theme.id === 'warm-editorial' ? '#FDFBF7' : '#0F172A' }} />
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                        </div>
                      </div>
                      {selectedThemeId === theme.id && <Check className="w-3.5 h-3.5 text-black" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Slide Live Preview Panel (Right, Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Top info and download code shortcut buttons */}
            <div className="flex justify-between items-center text-xs text-zinc-500">
              <span className="font-mono text-[9px] tracking-widest text-[#121212]/50 uppercase">
                🎯 16:9 SCREEN RATIO LIVE VECTOR RENDER
              </span>
              <button
                onClick={copySlideSummary}
                className="flex items-center gap-1.5 text-xxs font-mono px-3 py-1 bg-[#F9F7F2] hover:bg-zinc-200/50 border border-black/10 text-neutral-800 rounded-none transition-all cursor-pointer"
                id="btn-copy-sandbox"
              >
                {copiedLink ? <CheckCircle className="w-3 h-3 text-emerald-650 animate-pulse" /> : <Copy className="w-3 h-3" />}
                <span>{copiedLink ? 'Copied Details!' : 'Copy Specs'}</span>
              </button>
            </div>

            {/* REAL Slide Container Mockup */}
            <div 
              className="relative aspect-[16/9] w-full rounded-none overflow-hidden shadow-lg border border-black/15 transition-shadow"
              id="sandbox-live-viewport"
            >
              <div className={`w-full h-full relative flex flex-col justify-between p-6 sm:p-10 select-none ${activeTheme.bgColor} ${activeTheme.textColor} transition-all duration-300`}>
                
                {/* Embedded Grid overlay in Swiss theme */}
                {activeTheme.id === 'swiss-minimalist' && (
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                )}
                {/* Tech digital glow in Cyber theme */}
                {activeTheme.id === 'tech-dark-neon' && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(6,182,212,0.04),transparent_50%)] pointer-events-none" />
                )}

                {/* Live Slide Header */}
                <div className="relative z-10 flex justify-between items-center pb-2 border-b border-current border-opacity-10">
                  <div className="flex items-center gap-1.5">
                    <span 
                      style={{ color: activeTheme.accentColor }} 
                      className="font-mono text-[9px] uppercase tracking-widest font-black"
                    >
                      DENISE SANDBOX STUDIO // MODEL PROPOSAL
                    </span>
                  </div>
                  <div className="font-mono text-[9px] opacity-40 uppercase tracking-wider">
                    {selectedLayout} Layout
                  </div>
                </div>

                {/* Live Slide Body */}
                <div className="grow flex flex-col justify-center my-3 sm:my-5 relative z-10 text-left">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={`${selectedLayout}-${selectedThemeId}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grow flex flex-col justify-center"
                    >
                      {/* Billboard Layout */}
                      {selectedLayout === 'billboard' && (
                        <div className="space-y-4 max-w-2xl">
                          <h1 className={`${activeTheme.fontHeading} text-xl sm:text-2.5xl lg:text-3.5xl leading-[1.12]`}>
                            {slideTitle || 'Slide Headline Unspecified'}
                          </h1>
                          {slideSubtitle && (
                            <p className={`${activeTheme.fontBody} text-xxs sm:text-xs md:text-sm max-w-xl`}>
                              {slideSubtitle}
                            </p>
                          )}
                          
                          {/* Mini checklist dots */}
                          {listPoints.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {listPoints.slice(0, 3).map((item, id) => (
                                <span key={id} className="inline-flex items-center gap-1.5 text-[9px] font-mono opacity-80 px-2 py-0.5 bg-current bg-opacity-[0.04] rounded-md border border-current border-opacity-[0.06]">
                                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeTheme.accentColor }} />
                                  {item.slice(0, 35)}...
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Pillars Layout */}
                      {selectedLayout === 'pillars' && (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                          <div className="md:col-span-5 space-y-3">
                            <h2 className={`${activeTheme.fontHeading} text-base sm:text-xl md:text-2xl leading-snug`}>
                              {slideTitle || 'Slide Headline Unspecified'}
                            </h2>
                            <p className={`${activeTheme.fontBody} text-[10px] sm:text-xs opacity-90`}>
                              {slideSubtitle}
                            </p>
                          </div>

                          <div className="md:col-span-7 flex flex-col gap-2">
                            {listPoints.slice(0, 3).map((point, id) => (
                              <div 
                                key={id} 
                                className="p-2 sm:p-3 rounded-lg bg-current bg-opacity-[0.03] border border-current border-opacity-[0.06] flex items-start gap-2 text-left"
                              >
                                <span 
                                  style={{ color: activeTheme.accentColor }} 
                                  className="font-mono text-xxs font-bold mt-0.5"
                                >
                                  0{id + 1}.
                                </span>
                                <p className="text-[10px] opacity-80 leading-snug">{point}</p>
                              </div>
                            ))}
                            {listPoints.length === 0 && (
                              <div className="text-center p-4 border border-dashed border-current border-opacity-20 rounded-lg text-xxs opacity-40">
                                Enter your bullets in the editor to populate columns.
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Stat Highlight Layout */}
                      {selectedLayout === 'stat' && (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          
                          {/* Stat Big Block */}
                          <div className="md:col-span-4 text-center md:text-left">
                            <div className="inline-flex flex-col items-center md:items-start">
                              <span 
                                style={{ color: activeTheme.accentColor }} 
                                className="block text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tighter leading-none"
                              >
                                {statValue || '00'}
                              </span>
                              <span className="block text-[8px] sm:text-[9px] font-mono uppercase tracking-widest opacity-60 mt-1.5 text-center md:text-left leading-tight">
                                {statLabel || 'METRIC LABELED'}
                              </span>
                            </div>
                          </div>

                          {/* Stat explanation Column */}
                          <div className="md:col-span-8 space-y-3.5">
                            <div>
                              <h3 className={`${activeTheme.fontHeading} text-base sm:text-xl`}>
                                {slideTitle || 'Slide Headline Unspecified'}
                              </h3>
                              <p className={`${activeTheme.fontBody} text-[10px] sm:text-xs italic mt-0.5`}>
                                {slideSubtitle}
                              </p>
                            </div>

                            <hr className="border-t border-current border-opacity-10" />

                            <div className="space-y-1 text-left">
                              {listPoints.slice(0, 2).map((item, id) => (
                                <div key={id} className="flex gap-2 text-[10px] leading-relaxed">
                                  <span style={{ color: activeTheme.accentColor }} className="font-mono">✓</span>
                                  <p className="opacity-80">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Live Slide Footer */}
                <div className="relative z-10 flex justify-between items-center text-[8px] opacity-55 font-mono pt-1 border-t border-current border-opacity-10">
                  <div className="flex gap-4">
                    <span>Designed inside Denise Slide Playground</span>
                    <span className="hidden sm:inline">// Interactive Template Engine</span>
                  </div>
                  <div>
                    Vector Mock Version 4.1.2
                  </div>
                </div>

              </div>
            </div>

            {/* Sandbox Pro-Tip annotation card */}
            <div className="bg-[#F9F7F2] border border-black/10 p-5 rounded-none flex items-start gap-3 text-left">
              <span className="p-1 px-[7px] text-white font-mono text-[9px] bg-black shrink-0">
                ADVICE
              </span>
              <p className="text-xxs text-zinc-700 leading-relaxed font-sans">
                <span className="text-black font-black uppercase font-mono mr-1">Denise's advice:</span>
                "When reviewing the live preview, look at how the spacing responds when you delete half the word length. High-end slides depend on aggressive breathing space. If your message requires text paragraphs, let's ship a corporate handbook instead."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
