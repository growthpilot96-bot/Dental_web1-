import React from 'react';
import { WHY_CHOOSE_US } from '../../data/clinicData';
import { UserCheck, Cpu, Coffee, Eye, ShieldAlert, Award, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'Cpu': return Cpu;
      case 'Coffee': return Coffee;
      case 'Eye': return Eye;
      case 'ShieldAlert': return ShieldAlert;
      case 'Award': return Award;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>The Lumière Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Why Patients Choose <br />
            <span className="text-brand-teal-700 italic font-normal">Lumière Dental Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4 leading-relaxed">
            We hold ourselves to rigorous clinical standards, transparent ethics, and genuine patient empathy at every touchpoint.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={index}
                className="bg-brand-cream/50 hover:bg-white rounded-3xl p-8 border border-brand-border/80 hover:border-brand-teal-200 transition-all duration-300 hover:shadow-card-hover group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-brand-teal-700 text-brand-teal-700 group-hover:text-white border border-brand-border/80 group-hover:border-brand-teal-700 flex items-center justify-center transition-colors shadow-sm mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-teal-800 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
