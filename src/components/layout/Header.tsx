import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { Phone, MessageSquare, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Doctor', href: '#doctor' },
    { label: 'Results', href: '#results' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-dark text-white/90 text-xs py-2 px-4 border-b border-brand-charcoal hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-brand-gold-200">Kunjibettu, Udupi • Dental Studio</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">Dr. Arjun Devika (BDS, MDS)</span>
            <span className="text-white/40">|</span>
            <span className="px-2 py-0.5 rounded-full bg-brand-gold-500/20 text-brand-gold-300 text-[10px] font-semibold border border-brand-gold-500/30">
              Demo Website
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`} 
              className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Nivora Dental Studio, I would like to enquire about an appointment.")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/80 py-3.5' 
            : 'bg-brand-cream/90 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-brand-teal-500 rounded-lg p-1">
            <div className="w-10 h-10 rounded-full bg-brand-teal-700 flex items-center justify-center text-brand-gold-100 shadow-inner group-hover:bg-brand-teal-800 transition-colors">
              <Sparkles className="w-5 h-5 text-brand-gold-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-dark leading-none">
                Nivora
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-teal-700 mt-0.5">
                Dental Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-brand-slate hover:text-brand-teal-700 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal-700 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-sm hover:shadow-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal-600 active:scale-95"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-teal-700 text-white shadow-sm"
              aria-label="Book an Appointment"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-sand/50 focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-brand-dark/40 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-teal-700 flex items-center justify-center text-brand-gold-100">
                    <Sparkles className="w-4 h-4 text-brand-gold-500" />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-brand-dark block leading-tight">Nivora</span>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-teal-700">Dental Studio</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-brand-slate hover:bg-brand-ivory focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-brand-dark hover:text-brand-teal-700 py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md transition-colors"
              >
                Book an Appointment
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello Dr. Arjun, I would like to enquire about a dental appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-brand-dark bg-brand-ivory hover:bg-brand-sand flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-teal-700" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
