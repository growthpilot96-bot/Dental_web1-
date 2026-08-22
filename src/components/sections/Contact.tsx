import React from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { MapPin, Phone, Mail, Clock, Navigation, Sparkles, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Visit Our Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Location & <span className="text-brand-teal-700 italic font-normal">Contact Information</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            Conveniently situated at Aster Square in Kunjibettu, Udupi with patient-friendly access.
          </p>
        </div>

        {/* 2-Column Contact Info & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-brand-cream/60 rounded-3xl p-6 border border-brand-border/80 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-6 h-6 text-brand-gold-200" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">Our Clinic Studio</h4>
                <p className="text-sm text-brand-slate leading-relaxed">
                  <strong>{CLINIC_INFO.name}</strong><br />
                  {CLINIC_INFO.address.line1}<br />
                  {CLINIC_INFO.address.line2}<br />
                  {CLINIC_INFO.address.country}
                </p>
                <a
                  href={CLINIC_INFO.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand-teal-700 hover:text-brand-teal-900 mt-3 group"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1 group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-brand-cream/60 rounded-3xl p-6 border border-brand-border/80 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6 text-brand-gold-200" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">Direct Contact</h4>
                <p className="text-sm text-brand-slate mb-1">
                  Phone: <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-semibold text-brand-dark hover:text-brand-teal-700">{CLINIC_INFO.phone}</a>
                </p>
                <p className="text-sm text-brand-slate mb-1">
                  Email: <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-brand-dark hover:text-brand-teal-700">{CLINIC_INFO.email}</a>
                </p>
                <p className="text-sm text-brand-slate mb-2">
                  Instagram: <span className="font-semibold text-brand-teal-700">{CLINIC_INFO.instagram}</span>
                </p>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Nivora Dental Studio, I would like to make an enquiry.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                  <span>Chat on WhatsApp ({CLINIC_INFO.whatsAppDisplay})</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-brand-cream/60 rounded-3xl p-6 border border-brand-border/80 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6 text-brand-gold-200" />
              </div>
              <div className="w-full">
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">Opening Hours</h4>
                <div className="text-xs text-brand-slate space-y-1.5">
                  <div className="flex justify-between border-b border-brand-border/50 pb-1">
                    <span className="font-medium text-brand-dark">Mon – Fri</span>
                    <span>9:00 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-border/50 pb-1">
                    <span className="font-medium text-brand-dark">Saturday</span>
                    <span>9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-brand-dark">Sunday</span>
                    <span className="text-red-500 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Styled Map Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-brand-border/80 h-full min-h-[380px] bg-brand-ivory flex flex-col justify-between p-6 sm:p-8">
              
              {/* Decorative Map Pattern Graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1E584F_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-brand-dark text-xs font-bold shadow-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Interactive Studio Location</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  Nivora Dental Studio, Udupi
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate mt-1 max-w-md">
                  2nd Floor, Aster Square, Coastal Avenue, Kunjibettu, Udupi 576102
                </p>
              </div>

              {/* Center Landmark Marker Graphic */}
              <div className="relative z-10 my-auto py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal-700 text-white flex items-center justify-center mx-auto shadow-elevated border-4 border-white animate-pulse-subtle">
                  <MapPin className="w-8 h-8 text-brand-gold-200" />
                </div>
                <span className="inline-block mt-3 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-brand-dark shadow-sm border border-brand-border">
                  Aster Square • Kunjibettu, Udupi
                </span>
              </div>

              {/* Bottom Actions on Map */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/70">
                <div className="text-xs text-brand-slate text-center sm:text-left">
                  <span>Reserved parking & elevator available</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md transition-all space-x-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
