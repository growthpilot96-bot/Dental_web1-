import React from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../../data/clinicData';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28">
      {/* Background Soft Subtle Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-teal-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-gold-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal-100/70 border border-brand-teal-200/60 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider w-fit mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Modern Dentistry • Thoughtful Care • Kunjibettu, Udupi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Modern Dentistry.{' '}
              <span className="relative inline-block text-brand-teal-700 italic font-normal">
                Thoughtful Care.
                <svg className="absolute -bottom-1.5 left-0 w-full text-brand-gold-500/60" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C40 2 120 1.5 199 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-brand-slate max-w-2xl font-normal leading-relaxed mb-8">
              Dental care that puts your comfort, confidence and long-term oral health first. Led by Dr. Arjun Devika in Kunjibettu, Udupi with a gentle, patient-focused approach.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md hover:shadow-card-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal-600 active:scale-95 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold text-brand-dark bg-brand-ivory hover:bg-brand-sand/80 border border-brand-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
              >
                Explore Treatments
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-brand-border/80 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">11+ Years</div>
                <div className="text-xs font-medium text-brand-muted mt-0.5">Clinical Experience</div>
              </div>
              <div className="border-l border-brand-border/80 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">4,000+</div>
                <div className="text-xs font-medium text-brand-muted mt-0.5">Patients Cared For</div>
              </div>
              <div className="border-l border-brand-border/80 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-teal-700 flex items-center">
                  <span>4.9 ★</span>
                </div>
                <div className="text-xs font-medium text-brand-muted mt-0.5">286+ Google Reviews</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visuals */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Organic Frame Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal-700/10 via-brand-gold-500/10 to-brand-cream rounded-3xl -rotate-2 transform scale-105" />
              
              {/* Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-ivory">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Dental Consultation Room at Nivora Dental Studio"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-brand-dark/60 backdrop-blur-md rounded-xl p-3 border border-white/10 hidden sm:block">
                  <p className="font-semibold text-white/95">State-of-the-Art Clinic in Kunjibettu, Udupi</p>
                  <p className="text-white/75 text-[11px]">Equipped with low-radiation 3D imaging & calming suites.</p>
                </div>
              </div>

              {/* Floating Trust Card 1: Doctor Info */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-floating border border-brand-border/60 max-w-[210px] hidden sm:flex items-center space-x-3 animate-fade-in">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-brand-teal-600/30">
                  <img
                    src={DOCTOR_INFO.image}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-dark leading-tight">{DOCTOR_INFO.name}</div>
                  <div className="text-[10px] text-brand-teal-700 font-semibold">{DOCTOR_INFO.qualifications}</div>
                  <div className="flex items-center text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 2: Pain-free guarantee */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-floating border border-brand-border/60 flex items-center space-x-3 animate-fade-in">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-brand-dark">Patient-First Care</div>
                  <div className="text-[11px] text-brand-slate font-medium">Gentle & Fear-Free</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
