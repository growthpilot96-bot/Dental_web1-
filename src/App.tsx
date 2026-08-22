import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { FeaturedTreatment } from './components/sections/FeaturedTreatment';
import { DoctorProfile } from './components/sections/DoctorProfile';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { PatientJourney } from './components/sections/PatientJourney';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { BookingForm } from './components/sections/BookingForm';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/common/FloatingContact';

export const App: React.FC = () => {
  const [targetTreatment, setTargetTreatment] = useState<string>('General Consultation');

  const scrollToBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setTargetTreatment(treatmentName);
    }
    const bookingElement = document.getElementById('book-appointment');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const treatmentsElement = document.getElementById('treatments');
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-teal-100 selection:text-brand-teal-900 font-sans">
      {/* Header */}
      <Header onBookClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onBookClick={() => scrollToBooking()} 
          onExploreClick={scrollToTreatments} 
        />

        {/* Horizontal Trust Reassurance Strip */}
        <TrustStrip />

        {/* About / Clinical Philosophy */}
        <About onBookClick={() => scrollToBooking()} />

        {/* Comprehensive Treatments Grid */}
        <Services onBookTreatment={(treatment) => scrollToBooking(treatment)} />

        {/* Featured Signature Treatment (Smile Makeover) */}
        <FeaturedTreatment onBookClick={() => scrollToBooking('Smile Makeover')} />

        {/* Doctor Profile (Dr. Ananya Rao) */}
        <DoctorProfile onBookClick={() => scrollToBooking()} />

        {/* Why Choose Us (6 Benefit Pillars) */}
        <WhyChooseUs />

        {/* 4-Step Patient Journey */}
        <PatientJourney onBookClick={() => scrollToBooking()} />

        {/* Before / After Cosmetic Smile Showcase */}
        <BeforeAfter />

        {/* Patient Reviews & Testimonials */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FAQ />

        {/* Appointment Booking & Direct WhatsApp Generator */}
        <BookingForm initialTreatment={targetTreatment} />

        {/* Clinic Location & Operating Hours */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Actions (Desktop & Mobile) */}
      <FloatingContact onBookClick={() => scrollToBooking()} />
    </div>
  );
};

export default App;
