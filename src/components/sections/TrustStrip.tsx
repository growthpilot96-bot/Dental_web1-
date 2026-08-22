import React from 'react';
import { Award, Cpu, Heart, ShieldCheck, Users } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: '12+ Years Experience',
      desc: 'Expert clinical mastery in restorative & cosmetic dentistry',
    },
    {
      icon: Cpu,
      title: 'Advanced 3D Tech',
      desc: 'Low-radiation intraoral scans & digital smile simulations',
    },
    {
      icon: Heart,
      title: 'Patient-First Approach',
      desc: 'Gentle, unhurried treatment designed around your comfort',
    },
    {
      icon: ShieldCheck,
      title: 'Class-B Sterilisation',
      desc: 'Hospital-grade autoclaves & 100% sealed surgical packs',
    },
    {
      icon: Users,
      title: '5,000+ Happy Patients',
      desc: 'Trusted by families and professionals across Karnataka',
    },
  ];

  return (
    <section className="bg-brand-ivory/70 border-y border-brand-border/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start space-x-3.5 p-2 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border/80 flex items-center justify-center text-brand-teal-700 shadow-sm shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark leading-tight">{item.title}</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-snug hidden sm:block">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
