import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, DollarSign, Clock, CheckCircle2, Bookmark, 
  MessageSquare, Star, ArrowRight, Quote, ShieldCheck 
} from 'lucide-react';
import { TESTIMONIALS, SERVICE_PACKAGES } from '../data';

interface PortfolioShowcaseProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenBookingWithPackage: (packageName: string) => void;
}

export default function PortfolioShowcase({ onScrollToSection, onOpenBookingWithPackage }: PortfolioShowcaseProps) {
  const [hoveredPackageId, setHoveredPackageId] = useState<string | null>(null);

  return (
    <section id="pricing" className="bg-[#FDFCF8] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-black/10">

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Testimonials Block */}
        <div className="space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
              <Users className="w-3.5 h-3.5 text-rose-455" />
              <span>CLIENT TESTIMONIALS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
              What Founders & <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors">CSOs Are Saying</span>
            </h2>
            <p className="text-zinc-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Read recommendations from founders who raised venture capital using slides structured and designed by Denise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-[#F9F7F2] w-full p-6 sm:p-8 rounded-none border border-black/10 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-black/25 transition-all text-left shadow-sm"
              >
                {/* Quote Icon watermark */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-black opacity-[0.03] group-hover:scale-110 transition-transform" />
                
                <div className="space-y-4">
                  {/* Stars Row */}
                  <div className="flex gap-1 text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-zinc-805 leading-relaxed font-sans italic">
                    "{t.quote}"
                  </p>
                </div>

                <hr className="border-t border-black/10" />

                <div className="flex items-center gap-3">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.clientName} 
                    className="w-10 h-10 rounded-full object-cover border border-black/10 grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{t.clientName}</h4>
                    <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">{t.role} // {t.company}</p>
                    <span className="inline-block mt-1 text-[8px] font-black text-black font-mono bg-white px-2 py-0.5 rounded-none border border-black/10">
                      {t.deckType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Pricing / Packages Block */}
        <div className="space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
              <Bookmark className="w-3.5 h-3.5 text-rose-450" />
              <span>STRUCTURED COLLABORATION</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
              Design Solutions <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors">& Packages</span>
            </h2>
            <p className="text-zinc-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Straightforward pricing modeled for speed, fidelity, and bullet-free presentation impact. No multi-month agency overheads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pack) => (
              <div
                key={pack.id}
                onMouseEnter={() => setHoveredPackageId(pack.id)}
                onMouseLeave={() => setHoveredPackageId(null)}
                className={`relative p-6 sm:p-8 rounded-none border transition-all flex flex-col justify-between space-y-6 text-left ${
                  pack.badge 
                    ? 'bg-[#F9F7F2] border-black text-black shadow-md' 
                    : 'bg-white border-black/10 text-neutral-800 hover:border-black/25'
                }`}
                id={`pack-card-${pack.id}`}
              >
                {pack.badge && (
                  <span className="absolute top-0 right-6 translate-y-[-50%] px-3.5 py-1 bg-black font-mono text-[9px] font-black uppercase tracking-widest text-white rounded-none">
                    {pack.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-black italic text-black tracking-widest uppercase">
                      {pack.name}
                    </h3>
                    <p className="text-xxs text-zinc-500 mt-0.5 font-mono uppercase tracking-wider">{pack.description}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-black">
                      {pack.price}
                    </span>
                    <span className="text-[9px] text-[#121212]/50 uppercase font-mono tracking-widest">/ Project</span>
                  </div>

                  {/* Delivery stats */}
                  <div className="flex items-center gap-1.5 text-xxs font-mono text-zinc-800 bg-[#F9F7F2] px-2.5 py-1.5 rounded-none border border-black/10 w-fit">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    <span>Average turnaround: {pack.delivery}</span>
                  </div>

                  <hr className="border-t border-black/10" />

                  {/* Highlights list */}
                  <ul className="space-y-2 text-xs text-zinc-650 font-sans">
                    {pack.includes.map((inc, id) => (
                      <li key={id} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBookingWithPackage(pack.name)}
                  className={`w-full py-3 text-xs font-mono font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pack.badge
                      ? 'bg-black hover:bg-neutral-800 text-white'
                      : 'bg-white hover:bg-[#F9F7F2] text-black border border-black/15'
                  }`}
                  id={`btn-select-package-${pack.id}`}
                >
                  <span>Select & Book Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Quick SLA certification banner */}
          <div className="bg-[#F9F7F2] border border-black/10 p-6 rounded-none flex flex-col sm:flex-row justify-between items-center gap-6 text-left max-w-4xl mx-auto shadow-sm">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-8 h-8 text-neutral-900 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-widest font-mono">Denise Core Design SLA Guarantee</h4>
                <p className="text-xxs text-zinc-600 mt-1 max-w-xl leading-relaxed font-sans">
                  Client data and pitch details are strictly protected by mutual NDAs upon engagement. Denise runs a secure sandbox isolated from AI training nodes, keeping critical market theories confidential.
                </p>
              </div>
            </div>
            <button 
              onClick={() => onScrollToSection('contact')}
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-xxs font-mono text-white transition-all uppercase tracking-widest shrink-0 cursor-pointer rounded-none font-bold"
            >
              Request Custom NDA (PDF)
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
