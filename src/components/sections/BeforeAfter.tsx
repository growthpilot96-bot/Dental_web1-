import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../../data/clinicData';
import { Sparkles, Info, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const offsetX = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <section id="results" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Real Clinical Outcomes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Smile Transformations <span className="text-brand-teal-700 italic font-normal">& Artistry</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            Explore authentic before-and-after smile results achieved through meticulous aesthetic and restorative planning.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCaseIndex === idx
                  ? 'bg-brand-teal-700 text-white shadow-md'
                  : 'bg-brand-cream text-brand-slate hover:bg-brand-ivory border border-brand-border'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-brand-cream rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Split Comparison Slider */}
            <div className="lg:col-span-7">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-brand-charcoal cursor-ew-resize select-none border-2 border-white"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER Image (Full Background) */}
                <img
                  src={activeCase.afterImg}
                  alt={`After: ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
                <span className="absolute bottom-3 right-3 bg-brand-teal-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md z-10">
                  AFTER
                </span>

                {/* BEFORE Image (Clipped with width % based on sliderPosition) */}
                <div 
                  className="absolute inset-0 overflow-hidden select-none pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`Before: ${activeCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
                    style={{ width: '100%', height: '100%' }}
                    draggable={false}
                  />
                  <span className="absolute bottom-3 left-3 bg-brand-dark/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md z-10">
                    BEFORE
                  </span>
                </div>

                {/* Vertical Divider Line & Draggable Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 -ml-3.5 rounded-full bg-brand-teal-700 text-white shadow-2xl border-2 border-white flex items-center justify-center text-xs">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Slider Hint */}
              <p className="text-center text-xs text-brand-muted mt-3 flex items-center justify-center">
                <ArrowLeftRight className="w-3 h-3 mr-1 text-brand-teal-700" />
                Drag slider or swipe to compare Before & After
              </p>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-teal-700 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal-600" />
                <span>{activeCase.treatment}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
                {activeCase.title}
              </h3>

              <p className="text-sm text-brand-slate leading-relaxed mb-6">
                {activeCase.description}
              </p>

              <div className="bg-white rounded-2xl p-4 border border-brand-border space-y-2 mb-6 text-xs text-brand-slate">
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Procedure Time:</span>
                  <span className="font-bold text-brand-dark">{activeCase.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Lead Surgeon:</span>
                  <span className="font-bold text-brand-dark">Dr. Ananya Rao</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Anesthesia:</span>
                  <span className="font-bold text-brand-teal-700">Gentle Local / Painless</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-brand-muted bg-brand-cream px-4 py-2 rounded-xl border border-brand-border/60">
            <Info className="w-3.5 h-3.5 text-brand-slate shrink-0" />
            <span>Results vary by patient. Images shown are for illustrative and clinical demonstration purposes only.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
