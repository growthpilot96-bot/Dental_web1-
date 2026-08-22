import React from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingContactProps {
  onBookClick: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onBookClick }) => {
  const whatsAppUrl = `https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Nivora Dental Studio, I would like to book an appointment.")}`;

  return (
    <>
      {/* Desktop Floating Action Widget (Bottom-Right) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
        {/* Floating Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          aria-label="Call Nivora Dental Studio"
          className="w-13 h-13 p-3.5 rounded-full bg-white text-brand-dark hover:text-brand-teal-700 shadow-floating hover:shadow-2xl border border-brand-border flex items-center justify-center transition-all duration-200 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
        >
          <Phone className="w-5 h-5 text-brand-teal-700 group-hover:scale-110 transition-transform" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-brand-dark group-hover:pl-2">
            Call Clinic
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-floating hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-white group-hover:pl-2">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Fixed, respects Safe Area) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border/90 px-4 py-2.5 shadow-2xl pb-safe">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
          
          {/* Call Button */}
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-cream hover:bg-brand-ivory text-brand-dark transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-teal-700 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={onBookClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-teal-700 hover:bg-brand-teal-800 text-white shadow-sm transition-colors"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Book</span>
          </button>

        </div>
      </div>
    </>
  );
};
