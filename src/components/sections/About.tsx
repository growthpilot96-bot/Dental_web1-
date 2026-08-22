import React, { useState } from 'react';
import { DOCTOR_INFO } from '../../data/clinicData';
import { CheckCircle2, ChevronRight, Sparkles, HeartHandshake, Shield, Stethoscope } from 'lucide-react';

interface AboutProps {
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookClick }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  const pillars = [
    {
      icon: HeartHandshake,
      title: "Patient-First Philosophy",
      desc: "Every appointment begins with listening. We never rush consultations and craft care plans tailored to individual comfort.",
    },
    {
      icon: Shield,
      title: "Zero Compromise on Safety",
      desc: "Strict Class-B autoclave sterilisation and disposable barrier protocols ensuring 100% sterile clinical environments.",
    },
    {
      icon: Stethoscope,
      title: "Minimally Invasive Dentistry",
      desc: "We focus on preserving your natural enamel and tooth structure through precise, conservative dental techniques.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sand/60 border border-brand-border text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Modern Dentistry. <span className="text-brand-teal-700 italic font-normal">Thoughtful Care.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            We believe that good dentistry begins with listening. At Nivora Dental Studio, modern clinical techniques meet gentle, patient-focused care.
          </p>
        </div>

        {/* Two Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] bg-brand-ivory">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop"
                  alt="Modern Dental Operatory at Nivora Dental Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-floating border-4 border-white aspect-[4/3] hidden sm:block bg-brand-ivory">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop"
                  alt="Patient consultation and digital smile evaluation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-brand-teal-800 text-white rounded-2xl p-4 shadow-xl max-w-[190px]">
                <p className="text-2xl font-serif font-bold text-brand-gold-200">11+ Years</p>
                <p className="text-xs text-brand-teal-100 font-medium leading-tight mt-0.5">Of dedicated clinical experience in Kunjibettu, Udupi</p>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-5 leading-snug">
              Transforming how patients experience oral wellness.
            </h3>
            
            <p className="text-brand-slate text-base leading-relaxed mb-4">
              Founded on the principle that dental care should put your comfort, confidence and long-term oral health first, Nivora Dental Studio combines careful diagnosis with modern treatment techniques.
            </p>

            <p className="text-brand-slate text-base leading-relaxed mb-6">
              Under the clinical leadership of <strong>{DOCTOR_INFO.name}</strong>, our studio provides clear communication and unhurried consultations to help you make confident decisions about your oral health.
            </p>

            {/* Expandable Story Detail */}
            {showFullStory && (
              <div className="bg-brand-ivory/60 rounded-2xl p-5 border border-brand-border/80 mb-6 text-sm text-brand-slate space-y-3 animate-fade-in">
                <p>
                  <strong>Our Technology Commitment:</strong> We invest in high-magnification illumination, rotary precision tools, and 3D computer-guided planning templates to reduce treatment times and accelerate tissue recovery.
                </p>
                <p>
                  <strong>Empowered Decision Making:</strong> We explain the 'why' behind every procedure, displaying real-time HD intraoral scans so you have total clarity before making any dental investment.
                </p>
              </div>
            )}

            {/* Key Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal-100/80 text-brand-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{pillar.title}</h4>
                      <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center text-sm font-bold text-brand-teal-700 hover:text-brand-teal-800 focus:outline-none group"
              >
                <span>{showFullStory ? 'Show Less' : 'Learn More About Our Clinic'}</span>
                <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${showFullStory ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>

              <button
                onClick={onBookClick}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-teal-900 bg-brand-teal-100 hover:bg-brand-teal-200 transition-colors"
              >
                Schedule a Visit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
