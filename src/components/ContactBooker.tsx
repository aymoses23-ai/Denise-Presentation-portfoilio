import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Clock, DollarSign, Send, CheckCircle2, 
  Sparkles, Sliders, AlertCircle, Info, PhoneCall 
} from 'lucide-react';

interface ContactBookerProps {
  preselectedPackageName?: string;
  onClearPreselectedPackage?: () => void;
}

export default function ContactBooker({ preselectedPackageName, onClearPreselectedPackage }: ContactBookerProps) {
  // Budget Calculator State
  const [slideCount, setSlideCount] = useState(12);
  const [urgencyLevel, setUrgencyLevel] = useState<'standard' | 'rush'>('standard');
  const [calculatedCost, setCalculatedCost] = useState(1950);

  // Scheduler State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  // Intake Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deckType, setDeckType] = useState('Startup Pitch Deck');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  const [validatedError, setValidatedError] = useState('');
  const [bookingSuccessful, setBookingSuccessful] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<any[]>([]);

  // Preloaded Calendaring Dates (always relative to current date)
  const availableDates = [
    { label: 'Monday, June 8', value: '2026-06-08' },
    { label: 'Tuesday, June 9', value: '2026-06-09' },
    { label: 'Wednesday, June 10', value: '2026-06-10' },
    { label: 'Thursday, June 11', value: '2026-06-11' },
    { label: 'Friday, June 12', value: '2026-06-12' }
  ];

  const timeSlots = [
    '09:00 AM (EST)',
    '11:30 AM (EST)',
    '02:00 PM (EST)',
    '04:30 PM (EST)'
  ];

  // Recount budget estimate
  useEffect(() => {
    // Base cost is $150 per slide. If rush delivery, add 30% surcharge. 
    // Minimum base project size is 5 slides.
    const basePrice = slideCount * 160;
    const finalPrice = urgencyLevel === 'rush' ? Math.round(basePrice * 1.3) : basePrice;
    setCalculatedCost(finalPrice);
  }, [slideCount, urgencyLevel]);

  // If a package was preselected from pricing grid, prefill form!
  useEffect(() => {
    if (preselectedPackageName) {
      setDeckType(preselectedPackageName);
      if (preselectedPackageName.includes('VC Seed')) {
        setSlideCount(15);
        setUrgencyLevel('standard');
      } else if (preselectedPackageName.includes('Keynote')) {
        setSlideCount(25);
        setUrgencyLevel('standard');
      } else if (preselectedPackageName.includes('Brand System')) {
        setSlideCount(12);
        setUrgencyLevel('standard');
      }
    }
  }, [preselectedPackageName]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem('denise_portfolio_inquiries');
    if (cached) {
      try {
        setSavedInquiries(JSON.parse(cached));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleBookConsultation = (e: FormEvent) => {
    e.preventDefault();
    setValidatedError('');

    if (!clientName.trim()) {
      setValidatedError('Please provide your name so Denise knows who she is talking to.');
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      setValidatedError('Please enter a valid business email address.');
      return;
    }
    if (!selectedDate || !selectedTimeSlot) {
      setValidatedError('Please select a Date and a Time Slot for the simulated kick-off call.');
      return;
    }

    const payload = {
      id: `inq-${Date.now()}`,
      clientName,
      clientEmail,
      companyName: companyName || 'Proprietary Startup',
      deckType,
      slideCount,
      urgencyLevel,
      calculatedCost,
      selectedDate,
      selectedTimeSlot,
      additionalNotes,
      timestamp: new Date().toISOString()
    };

    const updated = [payload, ...savedInquiries];
    setSavedInquiries(updated);
    localStorage.setItem('denise_portfolio_inquiries', JSON.stringify(updated));
    setBookingSuccessful(true);
    
    // Clear preselected package link state on parent
    if (onClearPreselectedPackage) onClearPreselectedPackage();
  };

  const handleResetSuccess = () => {
    setBookingSuccessful(false);
    setClientName('');
    setClientEmail('');
    setCompanyName('');
    setAdditionalNotes('');
    setSelectedDate('');
    setSelectedTimeSlot('');
    setValidatedError('');
  };

  return (
    <section id="contact" className="bg-[#FAF8F5] border-t border-black/10 py-24 px-4 sm:px-6 lg:px-8 relative text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-black/10 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-mono tracking-widest uppercase">
            <PhoneCall className="w-3.5 h-3.5 text-rose-455" />
            <span>KICKSTART THE PITCH</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight italic">
            Book a Project <span className="font-sans font-normal text-zinc-500 hover:text-black transition-colors"> & Consultation</span>
          </h2>
          <p className="text-zinc-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Ready to redesign your slide deck? Simulate a project booking below by calculating your budget estimate and scheduling a kickoff date.
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CALCULATOR & ESTIMATOR PANEL (Left Span 5) */}
          <div className="lg:col-span-4 bg-[#F9F7F2] p-6 sm:p-8 rounded-none border border-black/10 space-y-6">
            
            <div className="space-y-1.5">
              <h3 className="text-neutral-900 font-bold text-[10px] uppercase font-mono tracking-widest flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-black animate-pulse" />
                <span>Estimate Configurator</span>
              </h3>
              <p className="text-xxs text-zinc-650 leading-relaxed font-sans font-medium">
                Adjust slides volume and delivery speeds to see Denise's estimated transparent service budgets in real-time.
              </p>
            </div>

            <hr className="border-t border-black/10" />

            <div className="space-y-6">
              {/* Slides count slider selector */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Total Requested Slides</span>
                  <span className="text-neutral-900 font-bold">{slideCount} Slides</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={slideCount}
                  onChange={(e) => setSlideCount(parseInt(e.target.value))}
                  className="w-full accent-black h-1 bg-black/10 rounded-none cursor-pointer"
                  id="slide-count-range"
                />
                <div className="flex justify-between text-[9px] font-mono text-zinc-400">
                  <span>Min: 5 slides</span>
                  <span className="font-bold text-black">Ideal seed count: 12-15 slides</span>
                  <span>Max: 40 slides</span>
                </div>
              </div>

              {/* Turnaround speed selectors */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Production SLA Haste</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setUrgencyLevel('standard')}
                    className={`p-3 text-xs font-mono rounded-none border text-center transition-all cursor-pointer ${
                      urgencyLevel === 'standard'
                        ? 'bg-black text-white border-black font-bold'
                        : 'bg-white text-zinc-500 border-black/10 hover:text-black hover:border-black/30'
                    }`}
                  >
                    <span>Regular Turnaround</span>
                    <span className={`block text-[8px] font-semibold mt-0.5 ${urgencyLevel === 'standard' ? 'text-zinc-300' : 'text-zinc-550'}`}>5-7 business days</span>
                  </button>
                  <button
                    onClick={() => setUrgencyLevel('rush')}
                    className={`p-3 text-xs font-mono rounded-none border text-center transition-all cursor-pointer ${
                      urgencyLevel === 'rush'
                        ? 'bg-black text-white border-black font-bold animate-pulse'
                        : 'bg-white text-zinc-500 border-black/10 hover:text-black hover:border-black/30'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 text-rose-455" />
                      <span>Rush SLA</span>
                    </span>
                    <span className={`block text-[8px] font-semibold mt-0.5 ${urgencyLevel === 'rush' ? 'text-zinc-300' : 'text-zinc-550'}`}>3 business days (+30%)</span>
                  </button>
                </div>
              </div>

              <hr className="border-t border-black/10" />

              {/* Price Reveal Box */}
              <div className="p-5 bg-white rounded-none border border-black/10 flex justify-between items-center shadow-sm">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">Total Estimated cost</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black font-mono text-black">
                      ${calculatedCost.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">USD</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xxs font-bold bg-neutral-900 text-white px-2.5 py-1 border border-black select-none">
                    MEMBER CONFIRMED
                  </span>
                </div>
              </div>

              {/* Booking advisor note */}
              <div className="p-3.5 bg-white border border-black/10 rounded-none flex gap-2.5 items-start">
                <Info className="w-4.5 h-4.5 text-zinc-750 shrink-0 mt-0.5" />
                <p className="text-[10px] text-zinc-650 leading-relaxed font-sans">
                  <span className="text-neutral-900 font-bold uppercase tracking-wider block mb-1 font-mono">Standard includes:</span> Storyboard draft session, complete vector typography sets, custom presentation icons, and up to 3 deep correction revisions.
                </p>
              </div>

            </div>

          </div>

          {/* INTAKE INQUIRY & CALENDAR SCHEDULER FORM (Right Span 8) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-none border border-black/10 relative shadow-sm">
            <AnimatePresence mode="wait">
              {!bookingSuccessful ? (
                <motion.form
                  key="form-workspace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBookConsultation}
                  className="space-y-5"
                >
                  <div className="border-b border-black/10 pb-3">
                    <h3 className="text-sm font-bold text-neutral-900 font-serif italic">Simulate Kick-off Booking</h3>
                    <p className="text-xxs text-zinc-505 mt-0.5 font-sans">Prefilled automatically if you selected a specific pricing level package card.</p>
                  </div>

                  {preselectedPackageName && (
                    <div className="px-3 py-2 bg-black text-white text-xxs font-mono border border-black rounded-none flex justify-between items-center animate-pulse">
                      <span>Linked package choice: <strong className="font-bold">{preselectedPackageName}</strong></span>
                      <button 
                        type="button" 
                        onClick={onClearPreselectedPackage} 
                        className="text-[10px] font-sans hover:text-zinc-300 cursor-pointer underline font-bold"
                      >
                        Reset choice
                      </button>
                    </div>
                  )}

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Denise Hayes"
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-black/10 rounded-none focus:outline-none focus:border-black text-black font-sans"
                        id="form-client-name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Work Business Email</label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="e.g. name@startup.io"
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-black/10 rounded-none focus:outline-none focus:border-black text-black font-sans"
                        id="form-client-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Company / Startup Name</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. AeroPay FinTech"
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-black/10 rounded-none focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Target Deck Goal Category</label>
                      <select
                        value={deckType}
                        onChange={(e) => setDeckType(e.target.value)}
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-black/10 rounded-none focus:outline-none focus:border-black text-black font-sans appearance-none cursor-pointer"
                      >
                        <option value="Startup Pitch Deck">Startup VC Pitch Deck</option>
                        <option value="Executive Symposium">Executive Symposium Keynote</option>
                        <option value="Sovereign Brand System">Sovereign Brand Slide Template</option>
                        <option value="Custom Technical Architecture">Technical Architecture Slides</option>
                      </select>
                    </div>
                  </div>

                  {/* Calendar booking mock section */}
                  <div className="space-y-3.5 bg-[#F9F7F2] p-4 rounded-none border border-black/10">
                    <div className="flex gap-2 items-center text-xs font-mono font-bold text-neutral-900">
                      <Calendar className="w-4 h-4 text-black" />
                      <span>Kick-off Call Scheduler (Zoom)</span>
                    </div>

                    {/* Step 1: choosing date */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Select Call Date:</span>
                      <div className="flex flex-wrap gap-2">
                        {availableDates.map((d) => (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setSelectedDate(d.value)}
                            className={`px-3 py-1.5 rounded-none text-xxs font-mono border transition-all cursor-pointer ${
                              selectedDate === d.value
                                ? 'bg-black text-white border-black font-bold'
                                : 'bg-white text-zinc-650 border-black/10 hover:text-black hover:border-black'
                            }`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: choosing timeslot */}
                    {selectedDate && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-1.5 pt-2 border-t border-black/10"
                      >
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Select Call Time:</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {timeSlots.map((ts) => (
                            <button
                              key={ts}
                              type="button"
                              onClick={() => setSelectedTimeSlot(ts)}
                              className={`py-1.5 rounded-none text-xxs font-mono border transition-all cursor-pointer text-center ${
                                selectedTimeSlot === ts
                                  ? 'bg-black text-white border-black font-bold'
                                  : 'bg-white text-zinc-505 border-black/10 hover:border-black hover:text-black'
                              }`}
                            >
                              {ts.split(' ')[0]} {/* short time visual */}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Additional description notes */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Project Specific Brief or Requirements Details</label>
                    <textarea
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="e.g. We are raising a Seed round and need to compress 15 slides of technical logistics data down to bullet-free layouts."
                      className="w-full text-xs min-h-[72px] p-3 bg-[#FAF8F5] border border-black/10 rounded-none focus:outline-none focus:border-black text-black font-sans resize-none"
                    />
                  </div>

                  {validatedError && (
                    <div className="flex gap-2 items-center p-3 rounded-none bg-rose-50 border border-rose-200 text-rose-800 text-xxs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validatedError}</span>
                    </div>
                  )}

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-neutral-900 text-white rounded-none font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-form-submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Request Design Kick-off</span>
                  </button>

                  <p className="text-center text-[9px] text-zinc-500 leading-normal max-w-md mx-auto">
                    By submitting, this app is performing a sandbox client intake system that persists your mock inquiries in local browser storage.
                  </p>
                </motion.form>
              ) : (
                // SUCCESS STATE CARD
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 py-6 text-center"
                >
                  <div className="w-16 h-16 rounded-none bg-black text-white flex items-center justify-center mx-auto border border-black">
                    <CheckCircle2 className="w-8 h-8 font-black" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif italic text-black uppercase tracking-wider">
                      Proposal Submitted!
                    </h3>
                    <p className="text-xs text-zinc-650 max-w-md mx-auto font-sans leading-relaxed">
                      A kick-off slot has been booked with Denise. Browser local storage was updated with this intake submission schema. Look forward to working together!
                    </p>
                  </div>

                  {/* Scheduler summaries ticket */}
                  <div className="p-5 bg-[#FAF8F5] rounded-none border border-black/10 max-w-md mx-auto text-left space-y-3 font-sans text-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold block pb-1 border-b border-black/10">
                      ZOOM INVITATION DETAILED
                    </span>
                    
                    <div className="flex gap-2 justify-between">
                      <span className="text-zinc-500">Contact Person:</span>
                      <span className="text-neutral-900 font-bold">{clientName}</span>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <span className="text-zinc-500">Startup:</span>
                      <span className="text-neutral-900">{companyName || 'Proprietary Project'}</span>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <span className="text-zinc-500">Requested Deck:</span>
                      <span className="text-neutral-900 font-mono text-xxs">{deckType}</span>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <span className="text-zinc-500">Estimated budget:</span>
                      <span className="text-neutral-900 font-bold font-mono">${calculatedCost.toLocaleString()}</span>
                    </div>

                    <hr className="border-t border-black/10" />

                    <div className="pb-1">
                      <span className="text-zinc-500 block text-[9px] tracking-wider uppercase font-mono">Simulated Conference Date</span>
                      <p className="text-neutral-900 font-bold mt-0.5 flex gap-1.5 items-center">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span>{selectedDate} // {selectedTimeSlot}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleResetSuccess}
                    className="px-6 py-2 bg-white hover:bg-[#FAF8F5] text-black border border-black rounded-none text-xxs font-mono uppercase tracking-widest cursor-pointer transition-all"
                  >
                    Book another mock session
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Saved Inquiries Logs (Persisted Sandbox Proof of concept) */}
        {savedInquiries.length > 0 && (
          <div className="pt-8 border-t border-black/10 text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-550 mb-4 block font-bold">
              Active Client Inquiries in Browser Sandbox Cache ({savedInquiries.length})
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-48 overflow-y-auto pr-2">
              {savedInquiries.map((inq: any) => (
                <div key={inq.id} className="p-4 bg-white rounded-none border border-black/10 flex justify-between items-center text-xs font-sans shadow-xs">
                  <div>
                    <h5 className="font-bold text-neutral-900 font-serif italic text-sm">{inq.clientName}</h5>
                    <p className="text-[10px] text-zinc-600 mt-0.5">{inq.companyName} — {inq.deckType}</p>
                    <span className="text-[9px] text-zinc-500 font-mono block mt-1">Submitted: {new Date(inq.timestamp).toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-xxs text-neutral-900 font-bold">${inq.calculatedCost}</span>
                    <span className="block text-[8px] text-zinc-505 font-mono mt-0.5">{inq.slideCount} Slides // {inq.urgencyLevel}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                localStorage.removeItem('denise_portfolio_inquiries');
                setSavedInquiries([]);
              }}
              className="text-[10px] text-zinc-500 hover:text-black font-mono tracking-wider mt-3 cursor-pointer underline flex gap-1 items-center"
            >
              Clear inquiry data logs cache
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
