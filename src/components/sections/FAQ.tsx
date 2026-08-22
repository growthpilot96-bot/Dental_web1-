import React, { useState } from 'react';
import { FAQS } from '../../data/clinicData';
import { ChevronDown, Sparkles, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Common Queries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Frequently Asked <span className="text-brand-teal-700 italic font-normal">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            Everything you need to know about your consultation, treatments, and visiting our Manipal studio.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-teal-300 bg-brand-cream/60 shadow-sm' 
                    : 'border-brand-border bg-white hover:border-brand-borderDark'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-teal-600 rounded-2xl"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-brand-dark pr-4 flex items-center">
                    <span className="text-brand-teal-700 mr-3 text-sm font-sans font-semibold">0{index + 1}.</span>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-teal-700 text-white rotate-180' : 'bg-brand-ivory text-brand-slate'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'pb-6 pt-1 block opacity-100' : 'max-h-0 hidden opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-brand-slate text-sm sm:text-base leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-14 bg-brand-ivory/80 rounded-3xl p-6 sm:p-8 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal-700 text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark">Have another question?</h3>
              <p className="text-xs sm:text-sm text-brand-slate">Our concierge team is always happy to guide you.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Lumière Dental, I have a quick question regarding...")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp Help
            </a>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-dark bg-white hover:bg-brand-sand border border-brand-border transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-teal-700" />
              Call Reception
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
