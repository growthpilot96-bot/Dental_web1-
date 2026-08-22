import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICE_OPTIONS, TIME_SLOTS } from '../../data/clinicData';
import { Calendar, Clock, User, Phone, Mail, FileText, Send, Sparkles, AlertCircle, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

interface BookingFormProps {
  initialTreatment?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  treatment?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialTreatment }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    treatment: initialTreatment || 'General Consultation',
    preferredDate: '',
    preferredTime: '10:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');
  const [rawPayload, setRawPayload] = useState('');

  // Calculate minimum selectable date (Today) in YYYY-MM-DD
  const todayString = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // Phone number validation (Indian numbers, 10 digits or with optional +91)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation (optional, but must be valid if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Treatment validation
    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or service.';
    }

    // Date validation
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else if (formData.preferredDate < todayString) {
      newErrors.preferredDate = 'Preferred date cannot be in the past.';
    }

    // Time validation
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (data: FormState): string => {
    // Exact schema requested:
    // New Appointment Request
    // Name: [Full Name]
    // Phone: [Phone]
    // Email: [Email]
    // Treatment: [Treatment]
    // Preferred Date: [Date]
    // Preferred Time: [Time]
    // Message: [Additional Message]
    // Please confirm the appointment with the patient.
    
    return [
      'New Appointment Request',
      `Name: ${data.fullName.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Email: ${data.email.trim() || 'Not provided'}`,
      `Treatment: ${data.treatment}`,
      `Preferred Date: ${data.preferredDate}`,
      `Preferred Time: ${data.preferredTime}`,
      `Message: ${data.message.trim() || 'None'}`,
      '',
      'Please confirm the appointment with the patient.',
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageText = constructWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${CLINIC_INFO.whatsAppNumber}?text=${encodedMessage}`;

    setRawPayload(messageText);
    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFillTestData = () => {
    // Test dataset specified in requirements:
    // Name: Rahul Sharma
    // Phone: 9999996666
    // Email: rahul@example.com
    // Treatment: Teeth Whitening
    // Date: 7 days in future
    // Time: 3:00 PM
    // Message: I would like to know the treatment duration.
    
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const futureDateStr = futureDate.toISOString().split('T')[0];

    setFormData({
      fullName: 'Rahul Sharma',
      phone: '9999996666',
      email: 'rahul@example.com',
      treatment: 'Teeth Whitening',
      preferredDate: futureDateStr,
      preferredTime: '3:00 PM',
      message: 'I would like to know the treatment duration.',
    });
    setErrors({});
  };

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal-100/70 border border-brand-teal-200 text-brand-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Priority Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Request Your <span className="text-brand-teal-700 italic font-normal">Appointment</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate mt-4">
            Fill in your preferred details below. Your request will be instantly formatted and forwarded directly to our clinic concierge via WhatsApp.
          </p>
        </div>

        {/* Main Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-brand-border/80 relative">
          
          {/* Test Fill Helper */}
          <div className="flex justify-end mb-6">
            <button
              type="button"
              onClick={handleFillTestData}
              className="text-xs font-medium text-brand-teal-700 hover:text-brand-teal-900 bg-brand-teal-50 hover:bg-brand-teal-100 px-3 py-1.5 rounded-lg border border-brand-teal-200 transition-colors"
            >
              Fill Sample Demo Data (Rahul Sharma)
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium bg-brand-cream/30 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal-600 ${
                        errors.fullName ? 'border-red-400 focus:ring-red-500' : 'border-brand-border'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-muted">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. 9999996666"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium bg-brand-cream/30 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal-600 ${
                        errors.phone ? 'border-red-400 focus:ring-red-500' : 'border-brand-border'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Row 2: Email & Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Email (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Email Address <span className="text-xs text-brand-muted lowercase font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-muted">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium bg-brand-cream/30 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal-600 ${
                        errors.email ? 'border-red-400 focus:ring-red-500' : 'border-brand-border'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Treatment / Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm font-medium bg-brand-cream/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal-600 transition-all"
                  >
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Row 3: Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      min={todayString}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-brand-cream/30 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal-600 ${
                        errors.preferredDate ? 'border-red-400 focus:ring-red-500' : 'border-brand-border'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Preferred Time Dropdown */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm font-medium bg-brand-cream/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal-600 transition-all"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Row 4: Additional Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                  Additional Message <span className="text-xs text-brand-muted lowercase font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your dental concern or any specific preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm font-medium bg-brand-cream/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal-600 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full text-base font-semibold text-white bg-brand-teal-700 hover:bg-brand-teal-800 shadow-md hover:shadow-card-hover transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal-600 active:scale-95"
                >
                  <Send className="w-4 h-4 mr-1" />
                  <span>Request Appointment via WhatsApp</span>
                </button>
              </div>

              {/* Form Disclaimer */}
              <p className="text-center text-xs text-brand-muted">
                <strong>Please Note:</strong> This generates a direct appointment request to our clinic desk. Our concierge team will review operatory availability and confirm your appointment with you.
              </p>

            </form>
          ) : (
            /* Success / Confirmation State */
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                Your appointment request is ready!
              </h3>
              <p className="text-brand-slate text-sm max-w-md mx-auto mb-6">
                Continue to WhatsApp to send your request directly to Dr. Arjun Devika's clinical desk for prompt confirmation.
              </p>

              {/* Preview of the formatted payload */}
              <div className="bg-brand-cream rounded-2xl p-5 border border-brand-border text-left max-w-lg mx-auto mb-6 font-mono text-xs text-brand-slate whitespace-pre-line shadow-inner">
                {rawPayload}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      treatment: 'General Consultation',
                      preferredDate: '',
                      preferredTime: '10:00 AM',
                      message: '',
                    });
                  }}
                  className="px-5 py-3 rounded-full text-sm font-medium text-brand-slate hover:bg-brand-ivory transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
