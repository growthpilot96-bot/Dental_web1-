import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../../data/clinicData';
import { 
  ShieldCheck, 
  Sparkles, 
  Anchor, 
  Zap, 
  Smile, 
  Gem, 
  Crown, 
  HeartHandshake, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  X, 
  Calendar 
} from 'lucide-react';

interface ServicesProps {
  onBookTreatment: (treatmentName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookTreatment }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'Anchor': return Anchor;
      case 'Zap': return Zap;
      case 'Smile': return Smile;
      case 'Gem': return Gem;
      case 'Crown': return Crown;
      case 'HeartHandshake': return HeartHandshake;
      default: return Sparkles;
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Comprehensive Dental Solutions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Bespoke Treatments, <span className="text-brand-teal-700 italic font-normal">Expertly Delivered</span>
            </h2>
          </div>
          <p className="text-brand-slate text-sm sm:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
            From routine preventative maintenance to complex full-arch smile rehabilitations, every treatment is tailored with high-precision digital dentistry.
          </p>
        </div>

        {/* Treatment 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = getIcon(service.icon);
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-brand-cream/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-border/70 hover:border-brand-teal-300 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon & Arrow Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-teal-700 text-brand-teal-700 group-hover:text-white border border-brand-border/60 group-hover:border-brand-teal-700 flex items-center justify-center transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-transparent group-hover:bg-brand-teal-50 text-brand-slate group-hover:text-brand-teal-700 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-teal-800 transition-colors mb-2.5">
                    {service.name}
                  </h3>
                  <p className="text-brand-slate text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-muted font-medium">
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-teal-600" />
                    {service.duration}
                  </span>
                  <span className="text-brand-teal-700 font-semibold group-hover:underline">
                    View Details
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/50 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 border border-brand-border relative overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-brand-slate hover:text-brand-dark hover:bg-brand-ivory focus:outline-none transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Icon */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-700 text-white flex items-center justify-center shadow-md">
                {React.createElement(getIcon(selectedService.icon), { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-teal-700">Treatment Overview</span>
                <h3 id="service-modal-title" className="font-serif text-2xl font-bold text-brand-dark">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Key Clinical Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">Key Treatment Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-brand-slate">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration & Suitability Info Card */}
            <div className="bg-brand-cream rounded-2xl p-4 border border-brand-border/70 mb-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-slate">
              <div>
                <span className="font-bold text-brand-dark block">Estimated Duration:</span>
                <span>{selectedService.duration}</span>
              </div>
              <div className="sm:border-l sm:border-brand-border sm:pl-4">
                <span className="font-bold text-brand-dark block">Recommended For:</span>
                <span>{selectedService.suitableFor}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-brand-border">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-brand-slate hover:bg-brand-ivory transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedService.name;
                  setSelectedService(null);
                  onBookTreatment(name);
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book This Treatment
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
