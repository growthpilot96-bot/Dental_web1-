import React from 'react';
import { Award, Cpu, Heart, ShieldCheck, Users } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: '11+ Years Experience',
      desc: 'Expert clinical leadership in restorative & endodontic care',
    },
    {
      icon: Users,
      title: '4,000+ Patients',
      desc: 'Trusted by families in Kunjibettu and across Udupi',
    },
    {
      icon: ShieldCheck,
      title: '4.9 ★ Google Rating',
      desc: '286+ positive verified patient testimonials',
    },
    {
      icon: Cpu,
      title: 'Class-B Sterilisation',
      desc: 'Hospital-grade autoclaves & 100% sealed surgical packs',
    },
    {
      icon: Heart,
      title: 'Patient-First Care',
      desc: 'Gentle, unhurried treatment designed around your comfort',
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
