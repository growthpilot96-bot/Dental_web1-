import React from 'react';
import { PATIENT_JOURNEY } from '../../data/clinicData';
import { CalendarCheck, Stethoscope, FileText, Smile, Sparkles, ArrowRight } from 'lucide-react';

interface PatientJourneyProps {
  onBookClick: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onBookClick }) => {
  const stepIcons = [CalendarCheck, Stethoscope, FileText, Smile];

  return (
    <section className="py-20 lg:py-28 bg-brand-ivory/60 border-t border-brand-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sand/70 border border-brand-border text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Seamless Patient Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Your Four-Step <span className="text-brand-teal-700 italic font-normal">Smile Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            A simple, transparent, and comforting pathway from your initial query to your complete smile confidence.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PATIENT_JOURNEY.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-7 shadow-sm border border-brand-border hover:border-brand-teal-300 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between relative group"
              >
                {/* Step Number Watermark */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-brand-teal-700/80 group-hover:text-brand-teal-800 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                  Step {index + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md transition-all active:scale-95 group"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
