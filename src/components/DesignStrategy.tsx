import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, CheckCircle, HelpCircle, Layers, 
  Lightbulb, Eye, Flame, BookOpen, AlertTriangle 
} from 'lucide-react';

interface PrincipleItem {
  id: string;
  title: string;
  concept: string;
  metric: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  accent: string;
  icon: any;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: 'p-color',
    title: 'The 60-30-10 Color Ratio',
    concept: 'Visual Hierarchy Control',
    metric: '3.4x higher comprehension rate',
    beforeLabel: 'Standard Template: Random colors mixed together distract from the main points.',
    afterLabel: 'Denise Ratio: 60% clean slate spacing, 30% deep structural weights, 10% highly saturated accent calls.',
    description: 'Human cognition shuts down when confronted with high-contrast rainbow templates. By keeping 90% of the canvas neutral, we force the audience to focus on the 10% accent color highlighting key metrics.',
    accent: '#E11D48',
    icon: Layers
  },
  {
    id: 'p-bullets',
    title: 'Kill the Bullet Walls',
    concept: 'Asymmetric Split Grids',
    metric: '92% higher slide retention',
    beforeLabel: 'Boring Bullets: "We do security." "We are compliant." "We are modern."',
    afterLabel: 'Sovereign Pillars: Styled grid columns with massive statistical highlights.',
    description: 'Bullet points are for checklists, not presentations. Reading text off slides is cognitively exhausting for an audience listening to you speak. We convert laundry lists of phrases into clear, asymmetric pillars.',
    accent: '#06B6D4',
    icon: Flame
  },
  {
    id: 'p-flow',
    title: 'Cinematic Storyboard Flow',
    concept: 'Psychological Tension Loop',
    metric: 'Secures venture attention',
    beforeLabel: 'Dull Chronology: Standard chronological slides that feel flat and long.',
    afterLabel: 'The Pitch Journey: Problem, Tension Building, The Eureka Reveal, Scaling Metrics.',
    description: "A great pitch deck operates like a movie. It starts by introducing a severe bottleneck, builds high narrative tension, and then introduces your startup as the elegant resolution. Slides act as high-octane background scenes.",
    accent: '#D97706',
    icon: BookOpen
  }
];

export default function DesignStrategy() {
  const [activePrincipleId, setActivePrincipleId] = useState(PRINCIPLES[0].id);
  const activePrin = PRINCIPLES.find(p => p.id === activePrincipleId) || PRINCIPLES[0];

  return (
    <section id="strategy" className="bg-[#FDFCF8] border-t border-b border-black/10 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
            <Lightbulb className="w-3.5 h-3.5 text-rose-400" />
            <span>DESIGN METHODOLOGY</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
            The Denise <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors">Design Formula</span>
          </h2>
          <p className="text-zinc-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Great presentations do not depend on styling decorators; they are built on robust cognitive psychology.
          </p>
        </div>

        {/* Dynamic Selector bento block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Principles selector column (Left 5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PRINCIPLES.map((prin) => {
              const IconComp = prin.icon;
              return (
                <button
                  key={prin.id}
                  onClick={() => setActivePrincipleId(prin.id)}
                  className={`p-5 rounded-none border text-left transition-all cursor-pointer flex gap-4 ${
                    activePrincipleId === prin.id
                      ? 'bg-black border-black text-white shadow-sm'
                      : 'bg-[#F9F7F2] border-black/10 text-neutral-800 hover:border-black/30'
                  }`}
                  id={`btn-strategy-${prin.id}`}
                >
                  <div 
                    className="w-10 h-10 rounded-none flex items-center justify-center shrink-0"
                    style={{ backgroundColor: activePrincipleId === prin.id ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.03)' }}
                  >
                    <IconComp className="w-5 h-5" style={{ color: activePrincipleId === prin.id ? '#FFF' : '#121212' }} />
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono block uppercase tracking-widest ${activePrincipleId === prin.id ? 'text-rose-300' : 'text-neutral-500'}`}>{prin.concept}</span>
                    <h3 className={`text-sm font-bold block ${activePrincipleId === prin.id ? 'text-white' : 'text-neutral-900'}`}>{prin.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Principle explanation sheet (Right 7) */}
          <div className="lg:col-span-7 bg-[#F9F7F2] p-6 sm:p-8 rounded-none border border-black/10 text-left min-h-[380px] flex flex-col justify-between space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePrin.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xxs font-mono uppercase tracking-widest text-[#E11D48] block font-bold">
                      {activePrin.concept}
                    </span>
                    <h3 className="text-neutral-900 font-serif text-xl font-black italic mt-1 tracking-tight animate-fade">
                      {activePrin.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 text-xxs font-mono bg-black text-white rounded-none tracking-widest">
                    {activePrin.metric}
                  </span>
                </div>

                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  {activePrin.description}
                </p>

                <hr className="border-t border-black/10" />

                {/* Practical Comparison Boxes */}
                <div className="space-y-3 pt-1 text-xxs sm:text-xs">
                  
                  {/* Before */}
                  <div className="p-4 bg-white border border-black/10 rounded-none flex gap-3 text-left">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono text-zinc-400 uppercase tracking-widest [font-size:9px] mb-0.5 font-bold">THE WRONG WAY</h4>
                      <p className="text-zinc-650 font-sans leading-relaxed">{activePrin.beforeLabel}</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-4 bg-[#FDFCF8] border border-black/10 rounded-none flex gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono uppercase tracking-widest [font-size:9px] mb-0.5 font-bold" style={{ color: activePrin.accent }}>THE DENISE WAY</h4>
                      <p className="text-black font-sans leading-relaxed font-bold">{activePrin.afterLabel}</p>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-4 border-t border-black/10 select-none">
              <Eye className="w-4 h-4 text-zinc-700" />
              <span>Tested across over 350 successful venture presentation pitches.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
