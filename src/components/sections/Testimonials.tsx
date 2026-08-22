import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/clinicData';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sand/70 border border-brand-border text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Loved By Our Patients, <br />
            <span className="text-brand-teal-700 italic font-normal">Trusted For Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            Hear from people who transformed their oral health and smile confidence at Lumière Dental Studio.
          </p>
        </div>

        {/* Testimonial Cards Grid for Desktop / Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-7 shadow-sm border border-brand-border/80 hover:border-brand-teal-200 transition-all duration-300 hover:shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-teal-200" />
                </div>

                {/* Content */}
                <p className="text-brand-slate text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-brand-dark flex items-center">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-1.5" />
                  </h4>
                  <span className="text-xs text-brand-teal-700 font-semibold">{testimonial.treatment}</span>
                </div>
                <span className="text-[11px] text-brand-muted font-medium">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo note */}
        <div className="text-center">
          <p className="text-xs text-brand-muted">
            Representative feedback from patient experience records and satisfaction surveys.
          </p>
        </div>

      </div>
    </section>
  );
};
