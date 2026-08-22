import React from 'react';
import { DOCTOR_INFO, CLINIC_INFO } from '../../data/clinicData';
import { Award, GraduationCap, Sparkles, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface DoctorProfileProps {
  onBookClick: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookClick }) => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sand/70 border border-brand-border text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Clinical Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Care Led By <span className="text-brand-teal-700 italic font-normal">Experience, Precision And Empathy.</span>
          </h2>
        </div>

        {/* Doctor Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-brand-border/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Doctor Portrait & Quick Credentials */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-brand-ivory mb-6">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-brand-dark/70 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
                  <span className="font-bold block text-sm">{DOCTOR_INFO.name}</span>
                  <span className="text-white/80 text-[11px]">{DOCTOR_INFO.qualifications}</span>
                </div>
              </div>

              <div className="w-full max-w-xs sm:max-w-sm grid grid-cols-2 gap-3 text-center">
                <div className="bg-brand-cream rounded-xl p-3 border border-brand-border">
                  <div className="font-serif text-xl font-bold text-brand-dark">{DOCTOR_INFO.stats.experienceYears}</div>
                  <div className="text-[11px] text-brand-muted font-medium">Experience</div>
                </div>
                <div className="bg-brand-cream rounded-xl p-3 border border-brand-border">
                  <div className="font-serif text-xl font-bold text-brand-teal-700">{DOCTOR_INFO.stats.patients}</div>
                  <div className="text-[11px] text-brand-muted font-medium">Patients Treated</div>
                </div>
              </div>
            </div>

            {/* Right: Bio, Credentials & Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-brand-teal-900 bg-brand-teal-100">
                  {DOCTOR_INFO.specialisation}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-brand-slate bg-brand-ivory border border-brand-border">
                  11+ Years Clinical Experience
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                {DOCTOR_INFO.name}
              </h3>
              <p className="text-sm font-medium text-brand-teal-700 mb-6">
                {DOCTOR_INFO.title} • {DOCTOR_INFO.qualifications}
              </p>

              {/* Bio Statement */}
              <p className="text-brand-slate text-sm sm:text-base leading-relaxed mb-6">
                {DOCTOR_INFO.bio}
              </p>

              {/* Doctor's Quote */}
              <blockquote className="border-l-4 border-brand-teal-600 pl-4 py-2 my-2 bg-brand-teal-50/50 rounded-r-xl italic text-brand-charcoal text-xs sm:text-sm leading-relaxed mb-6">
                {DOCTOR_INFO.quote}
              </blockquote>

              {/* Special Clinical Interests */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-brand-teal-700" />
                  Special Clinical Interests
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DOCTOR_INFO.specialInterests.map((interest, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-brand-slate font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-600 shrink-0 mt-0.5" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications / Credentials */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-brand-teal-700" />
                  Credentials & Accreditations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DOCTOR_INFO.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-brand-slate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-border/70">
                <button
                  onClick={onBookClick}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-sm hover:shadow-card transition-all duration-200"
                >
                  Consult Dr. Arjun
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Dr. Arjun, I would like to schedule a dental consultation at Nivora Dental Studio.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Doctor's Desk</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
