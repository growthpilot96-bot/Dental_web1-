import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FeaturedTreatmentProps {
  onBookClick: () => void;
}

export const FeaturedTreatment: React.FC<FeaturedTreatmentProps> = ({ onBookClick }) => {
  const benefits = [
    {
      title: "Digital Smile Simulation",
      desc: "Preview your exact smile aesthetics and facial proportions with 3D digital imaging before any work starts.",
    },
    {
      title: "Natural-Looking Aesthetics",
      desc: "Ultra-thin, handcrafted porcelain veneers with lifelike translucency and shade gradient tailored to your complexion.",
    },
    {
      title: "Conservative & Pain-Free",
      desc: "Micro-preparation techniques that protect your natural tooth structure and ensure zero discomfort.",
    },
    {
      title: "Long-Lasting Confidence",
      desc: "High-density ceramic restorations backed by rigorous clinical planning for 15+ years of enduring radiance.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with gold border accent */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold-500/30 aspect-[4/3] bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop"
                  alt="Cosmetic Dentistry and Smile Makeover at Lumière Dental Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-brand-charcoal/90 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-white/10 max-w-[220px]">
                <div className="flex items-center space-x-2 text-brand-gold-500 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Digital Smile Design</span>
                </div>
                <p className="text-xs text-white/80 leading-snug">
                  Personalised aesthetic planning with sub-millimeter precision.
                </p>
              </div>

              <div className="absolute -top-4 -right-4 sm:-right-6 bg-emerald-950/80 backdrop-blur-md text-emerald-200 border border-emerald-500/30 rounded-2xl p-3.5 shadow-xl hidden sm:flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">100% Biocompatible</div>
                  <div className="text-[10px] text-emerald-300">Swiss & German Ceramics</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Feature Info */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-gold-200 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>Signature Cosmetic Spotlight</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Transform Your Smile <br />
              <span className="text-brand-gold-200 italic font-normal">With Confidence.</span>
            </h2>

            <p className="text-white/80 text-base leading-relaxed mb-8">
              A bespoke smile makeover is an artistic harmony between facial balance and biological health. We craft every veneer and restorative element to elevate your natural beauty without creating an artificial or generic appearance.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{b.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onBookClick}
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-brand-dark bg-brand-gold-500 hover:bg-brand-gold-200 shadow-xl transition-all duration-200 group active:scale-95"
              >
                <span>Explore Smile Makeovers</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
