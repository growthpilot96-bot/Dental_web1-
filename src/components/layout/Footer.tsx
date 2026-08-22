import React from 'react';
import { CLINIC_INFO, SERVICES } from '../../data/clinicData';
import { Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About Lumière', href: '#about' },
    { label: 'Our Treatments', href: '#treatments' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Dr. Ananya Rao', href: '#doctor' },
    { label: 'Smile Transformations', href: '#results' },
    { label: 'Patient Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Book Appointment', href: '#book-appointment' },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-28 md:pb-16 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-teal-700 flex items-center justify-center text-brand-gold-100 shadow-inner">
                <Sparkles className="w-5 h-5 text-brand-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Lumière
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold-200 mt-0.5">
                  Dental Studio
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              {CLINIC_INFO.tagline} Delivering bespoke cosmetic and restorative dental excellence in Manipal, Karnataka.
            </p>

            {/* Social Links with Accessible SVG Icons */}
            <div className="flex items-center space-x-3">
              {/* Instagram */}
              <a
                href="#contact"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-teal-700 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#contact"
                aria-label="Facebook Profile"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-teal-700 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#contact"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-teal-700 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-200 mb-4">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#treatments" className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-200 mb-4">
              Clinic Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                <span>12 Ocean View Road, Manipal, Karnataka 576104</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 space-y-4 md:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-white/40 text-[11px]">
              Disclaimer: Content provided on this website is for informational purposes and does not substitute professional clinical diagnosis.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Care</a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-teal-700 text-white/80 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
