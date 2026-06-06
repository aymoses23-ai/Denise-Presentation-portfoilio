import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Presentation, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import { DENISE_AVATAR } from '../data';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F9F7F2] text-[#121212] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Editorial Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/5" />
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-black/[0.03] hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-black/[0.03] hidden lg:block" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FDFCF8] border border-black/10 text-[10px] font-mono tracking-widest text-[#121212]/60 uppercase w-fit"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span>Presentation Architect v.04</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight leading-[1.08] italic text-black"
                id="hero-headline"
              >
                I redesign pitch decks that <span className="text-zinc-400 font-normal">raise millions.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-xl font-sans"
                id="hero-paragraph"
              >
                Hi, I'm <strong className="text-black font-semibold">Denise</strong>. I kill boring bullet-point walls. I structure high-stakes tech narratives and render hyper-polished presentation systems. Discover visual strategy for teams that hate low-effort templates.
              </motion.p>
            </div>

            {/* Quick CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
              id="hero-actions"
            >
              <button 
                onClick={() => onScrollToSection('sandbox')}
                className="group flex items-center gap-2.5 px-6 py-4 bg-black hover:bg-neutral-900 text-white font-mono text-xs tracking-widest uppercase transition-all shadow-md cursor-pointer rounded-none"
                id="cta-sandbox"
              >
                <span>Interactive Sandbox</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => onScrollToSection('mockup-player')}
                className="flex items-center gap-2.5 px-6 py-4 bg-[#FDFCF8] hover:bg-zinc-100/50 text-[#121212] border border-black rounded-none font-mono text-xs tracking-widest uppercase transition-all cursor-pointer"
                id="cta-portfolio"
              >
                <Presentation className="w-4 h-4 text-black" />
                <span>Explore Showcase</span>
              </button>
            </motion.div>

            {/* Micro Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10 max-w-xl"
              id="hero-stats"
            >
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-black italic tracking-tight text-black">$145M+</p>
                <p className="text-[9px] uppercase tracking-widest text-[#121212]/40 font-mono mt-1">Raised by Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-black italic tracking-tight text-black">350+</p>
                <p className="text-[9px] uppercase tracking-widest text-[#121212]/40 font-mono mt-1">Bespoke Decks</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-black italic tracking-tight text-black">100%</p>
                <p className="text-[9px] uppercase tracking-widest text-[#121212]/40 font-mono mt-1">Bullet-Free SLA</p>
              </div>
            </motion.div>
          </div>

          {/* Portrait & Custom Slider Card Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-80 h-[26rem] sm:w-[350px] sm:h-[450px] overflow-hidden bg-[#FDFCF8] border border-black/10 shadow-lg p-3"
              id="hero-biocard"
            >
              <div className="relative w-full h-full overflow-hidden border border-black/5 bg-zinc-50">
                {/* Profile Image */}
                <img 
                  src={DENISE_AVATAR}
                  alt="Denise Presentation Designer Headshot"
                  className="w-full h-full object-cover grayscale opacity-95 transition-all duration-[750ms] hover:grayscale-0 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#121212]/20 to-transparent pointer-events-none" />

                {/* Floating Designer Stat Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#FDFCF8] border border-black/5 space-y-3 shadow-md text-left text-neutral-900">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black flex items-center justify-center text-white font-serif font-black italic text-base">
                      D
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black tracking-wide font-mono uppercase">Denise Creative</h4>
                      <p className="text-[10px] text-zinc-500 font-mono uppercase mt-0.5">Presentation Director</p>
                    </div>
                  </div>
                  
                  <hr className="border-t border-black/5" />
                  
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1.5 text-zinc-700 font-sans">
                      <Award className="w-3.5 h-3.5 text-rose-500" />
                      <span>60-30-10 Color Master</span>
                    </div>
                    <span className="font-mono text-zinc-400 uppercase tracking-widest">Active Q4</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
