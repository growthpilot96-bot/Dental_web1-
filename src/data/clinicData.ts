export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  duration: string;
  suitableFor: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  date: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export const CLINIC_INFO = {
  name: "Nivora Dental Studio",
  brandName: "Nivora",
  brandSubtitle: "Dental Studio",
  tagline: "Modern Dentistry. Thoughtful Care. Confident Smiles.",
  primaryMessage: "Dental care that puts your comfort, confidence and long-term oral health first.",
  location: "Kunjibettu, Udupi, Karnataka, India",
  address: {
    line1: "2nd Floor, Aster Square, Coastal Avenue",
    line2: "Kunjibettu, Udupi, Karnataka 576102",
    country: "India",
    fullAddress: "Nivora Dental Studio 2nd Floor, Aster Square, Coastal Avenue, Kunjibettu, Udupi, Karnataka 576102, India",
  },
  phone: "+91 80000 48271",
  phoneRaw: "+918000048271",
  whatsAppNumber: "918000048271",
  whatsAppDisplay: "+91 80000 48271",
  email: "hello@nivoradental.example",
  website: "nivoradental.example",
  instagram: "@nivoradentalstudio",
  openingHours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:30 PM",
    saturday: "Saturday: 9:00 AM – 4:00 PM",
    sunday: "Sunday: Closed",
    schedule: [
      { day: "Monday", hours: "9:00 AM - 6:30 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:30 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:30 PM" },
      { day: "Thursday", hours: "9:00 AM - 6:30 PM" },
      { day: "Friday", hours: "9:00 AM - 6:30 PM" },
      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  stats: {
    rating: "4.9/5",
    reviews: "286+",
    patients: "4,000+",
    experienceYears: "11+",
  },
  isDemo: true,
  demoNotice: "Demo Website — Fictional information created for demonstration purposes.",
  googleMapsQuery: "https://www.google.com/maps/search/?api=1&query=Kunjibettu+Udupi+Karnataka+576102+India",
};

export const DOCTOR_INFO = {
  name: "Dr. Arjun Devika",
  title: "Founder & Lead Dentist",
  qualifications: "BDS, MDS - Conservative Dentistry & Endodontics",
  specialisation: "Conservative Dentistry & Endodontics",
  experience: "11+ Years of Clinical Experience",
  stats: {
    patients: "4,000+",
    experienceYears: "11+",
    reviews: "286+",
    rating: "4.9/5",
  },
  bio: "Dr. Arjun Devika believes that good dentistry begins with listening. His approach combines careful diagnosis, modern treatment techniques and clear communication to help patients make confident decisions about their oral health.",
  philosophy: "Care Led By Experience, Precision And Empathy.",
  quote: "“Good dentistry begins with listening. Combining careful diagnosis, modern treatment techniques and clear communication helps patients make confident decisions about their oral health.”",
  specialInterests: [
    "Root Canal Treatment",
    "Restorative Dentistry",
    "Cosmetic Dentistry",
    "Preventive Dental Care",
  ],
  credentials: [
    "Bachelor of Dental Surgery (BDS)",
    "Master of Dental Surgery (MDS) – Conservative Dentistry & Endodontics",
    "Founder & Lead Dentist – Nivora Dental Studio",
    "Specialist in Microscopic Endodontics & Aesthetic Restorations",
  ],
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
};

export const TRUST_INDICATORS = [
  { label: "11+ Years", sublabel: "Clinical Experience" },
  { label: "4,000+", sublabel: "Patients Cared For" },
  { label: "4.9 ★ (286+)", sublabel: "Google Rating" },
  { label: "Class-B", sublabel: "Sterilisation Protocol" },
  { label: "100%", sublabel: "Patient-Focused Care" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    category: "General Dentistry",
    shortDesc: "Comprehensive dental checkups, professional cleanings, precision tooth-colored fillings, and preventive care.",
    fullDesc: "Our general dentistry services form the bedrock of your long-term oral wellness. Using high-resolution intraoral cameras and gentle ultrasonic hygiene tools, we ensure early detection, painless preventive cleans, and proactive enamel protection.",
    highlights: [
      "Dental Checkups & Digital Assessment",
      "Professional Ultrasonic Cleaning & Polishing",
      "Tooth-Coloured Dental Fillings",
      "Preventive Fluoride & Enamel Treatments",
    ],
    duration: "30 - 45 mins",
    suitableFor: "Routine checkups, preventive wellness, and everyday dental health.",
    icon: "ShieldCheck",
  },
  {
    id: "restorative-dentistry",
    name: "Restorative Dentistry",
    category: "Restorative Dentistry",
    shortDesc: "Pain-free root canal treatment, high-strength dental crowns, precision bridges, and tooth restorations.",
    fullDesc: "Restore the complete strength, anatomy, and chewing functionality of damaged or missing teeth. Dr. Arjun Devika specializes in advanced rotary endodontics and custom ceramic crowns with seamless biological integration.",
    highlights: [
      "Painless Rotary Root Canal Treatment",
      "Custom High-Strength Ceramic Dental Crowns",
      "Fixed Dental Bridges for Missing Teeth",
      "Conservative Tooth Restoration & Inlays/Onlays",
    ],
    duration: "45 - 60 mins",
    suitableFor: "Severe toothache, broken teeth, tooth decay, or missing tooth spaces.",
    icon: "Zap",
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    category: "Cosmetic Dentistry",
    shortDesc: "Clinical laser teeth whitening, smile enhancement, and handcrafted cosmetic restorations.",
    fullDesc: "Elevate your smile aesthetics with bespoke cosmetic treatments. We combine safe in-office teeth whitening and tailored cosmetic restorations to deliver radiant, natural-looking results.",
    highlights: [
      "Advanced In-Office Teeth Whitening",
      "Smile Enhancement & Digital Smile Design",
      "Cosmetic Porcelain & Composite Restorations",
      "Enamel Micro-Contouring & Re-Shaping",
    ],
    duration: "45 - 60 mins",
    suitableFor: "Discoloured, chipped, unevenly spaced, or worn teeth.",
    icon: "Sparkles",
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    category: "Orthodontics",
    shortDesc: "Traditional braces, transparent clear aligners, and custom retainers for aligned, functional smiles.",
    fullDesc: "Achieve harmonious dental alignment and bite correction through modern orthodontic solutions. From discreet clear aligners to proven traditional braces, we create custom alignment roadmaps.",
    highlights: [
      "Custom Clear Aligners (Invisalign & Equivalent)",
      "Traditional & Ceramic Aesthetic Braces",
      "Post-Treatment Retention & Clear Retainers",
      "Bite Correction & Arch Alignment",
    ],
    duration: "Roadmap based on consultation",
    suitableFor: "Crowding, gaps, overbites, underbites, and aesthetic misalignment.",
    icon: "Smile",
  },
  {
    id: "implant-dentistry",
    name: "Implant Dentistry",
    category: "Implant Dentistry",
    shortDesc: "Permanent single tooth implants and implant-supported restorations with 3D guided precision.",
    fullDesc: "Permanent, bio-compatible titanium and zirconia implants that feel, look, and perform just like natural teeth. Computer-guided surgical templates ensure minimal recovery time and lasting stability.",
    highlights: [
      "Single Tooth Titanium & Zirconia Implants",
      "Implant-Supported Crowns & Bridges",
      "3D Computer-Guided Implant Surgery",
      "Jawbone Preservation & Emergence Profile",
    ],
    duration: "1 - 2 hours per session",
    suitableFor: "Single or multiple missing teeth seeking permanent replacement.",
    icon: "Anchor",
  },
  {
    id: "oral-surgery",
    name: "Oral Surgery",
    category: "Oral Surgery",
    shortDesc: "Gentle wisdom tooth removal, pain-free dental extractions, and minor oral surgical care.",
    fullDesc: "Comfortable, atraumatic surgical extractions performed under gentle local anaesthesia. We prioritize tissue preservation and fast recovery for impacted wisdom teeth and non-restorable teeth.",
    highlights: [
      "Painless Wisdom Tooth Removal",
      "Atraumatic Dental Extractions",
      "Pre-Surgical 3D Radiographic Diagnostics",
      "Rapid Healing & Post-Op Guidance",
    ],
    duration: "30 - 60 mins",
    suitableFor: "Impacted wisdom teeth, severe dental trauma, or crowded extractions.",
    icon: "Gem",
  },
  {
    id: "childrens-dentistry",
    name: "Children's Dentistry",
    category: "Children's Dentistry",
    shortDesc: "Delightful, fear-free children's dental checkups and nurturing preventive dental care.",
    fullDesc: "We create a warm, delightful, and fear-free environment for young smiles. From early dental checkups to fluoride varnishes and sealants, our team helps children develop positive dental habits.",
    highlights: [
      "Nurturing Children's Dental Checkups",
      "Preventive Pit & Fissure Sealants",
      "Gentle Fluoride Treatments",
      "Positive Dental Education & Habit Guidance",
    ],
    duration: "30 mins",
    suitableFor: "Infants, children, and teens for preventive oral wellness.",
    icon: "HeartHandshake",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Thoughtful, Listening Care",
    desc: "Good dentistry begins with listening. We understand your concerns and never rush your appointments.",
    icon: "UserCheck",
  },
  {
    title: "Modern Clinical Techniques",
    desc: "Digital 3D intraoral diagnostics, motorized precision rotary systems, and low-radiation imaging.",
    icon: "Cpu",
  },
  {
    title: "Calm & Comfortable Environment",
    desc: "A boutique studio ambiance crafted to put your mind at ease with gentle, fear-free dental techniques.",
    icon: "Coffee",
  },
  {
    title: "Clear Communication & Transparency",
    desc: "Careful diagnosis and clear explanation of every treatment step so you make confident oral health decisions.",
    icon: "Eye",
  },
  {
    title: "Rigorous Sterilisation Protocol",
    desc: "Hospital-grade Class-B autoclave sterilisation, sealed sterile instrument packs, and uncompromising hygiene.",
    icon: "ShieldAlert",
  },
  {
    title: "11+ Years of Clinical Leadership",
    desc: "Led by Dr. Arjun Devika (BDS, MDS - Conservative Dentistry & Endodontics) with 4,000+ happy patients.",
    icon: "Award",
  },
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "Book Consultation",
    desc: "Schedule your visit seamlessly online or message our clinic concierge directly on WhatsApp.",
  },
  {
    step: "02",
    title: "Meet Dr. Arjun Devika",
    desc: "Experience an unhurried, listening consultation with comprehensive digital diagnosis.",
  },
  {
    step: "03",
    title: "Get Your Care Roadmap",
    desc: "Receive clear, transparent explanations and customized treatment recommendations with upfront clarity.",
  },
  {
    step: "04",
    title: "Achieve Confident Smiles",
    desc: "Enjoy gentle, precise, and lasting treatment in our modern, relaxing Kunjibettu dental studio.",
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: "case-1",
    title: "Aesthetic Tooth Restoration & Whitening",
    treatment: "Cosmetic Restoration + Whitening",
    duration: "2 Sessions",
    description: "Correction of enamel discoloration and cosmetic restoration of anterior tooth contours.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "case-2",
    title: "Clear Aligner Alignment",
    treatment: "Clear Aligners",
    duration: "7 Months",
    description: "Correction of anterior dental crowding and spacing for a harmonious smile line.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "case-3",
    title: "Single Tooth Implant & Crown",
    treatment: "Implant + Ceramic Crown",
    duration: "3 Months Healing",
    description: "Permanent replacement of a damaged tooth with seamless natural shade matching.",
    beforeImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=700&auto=format&fit=crop",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Priya N.",
    treatment: "Consultation & Restorative Care",
    rating: 5,
    date: "Verified Patient",
    content: "The clinic felt very comfortable and the doctor explained every step clearly. I really appreciated how patiently my questions were answered.",
  },
  {
    id: "test-2",
    name: "Rahul K.",
    treatment: "Dental Treatment & Cleaning",
    rating: 5,
    date: "Verified Patient",
    content: "Very clean clinic and a professional experience from consultation to treatment. The entire process was explained clearly.",
  },
  {
    id: "test-3",
    name: "Meera S.",
    treatment: "Preventive Care",
    rating: 5,
    date: "Verified Patient",
    content: "I was quite nervous before my appointment, but the team made me feel comfortable throughout the visit.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment at Nivora Dental Studio?",
    answer: "You can easily request an appointment through our online booking form on this website, message us directly on WhatsApp at +91 80000 48271, or call our reception desk. Our team will promptly confirm your scheduled slot.",
  },
  {
    id: "faq-2",
    question: "What are the clinic opening hours?",
    answer: "We are open Monday through Friday from 9:00 AM to 6:30 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays.",
  },
  {
    id: "faq-3",
    question: "What treatments does Dr. Arjun Devika specialize in?",
    answer: "Dr. Arjun Devika (BDS, MDS) specializes in Conservative Dentistry & Endodontics. His special clinical interests include Root Canal Treatment, Restorative Dentistry, Cosmetic Dentistry, and Preventive Dental Care.",
  },
  {
    id: "faq-4",
    question: "Is root canal treatment painful?",
    answer: "Not at all. Dr. Arjun Devika utilizes modern rotary endodontic equipment and gentle anaesthesia techniques to ensure root canal treatments are comfortable, precise, and completely pain-free.",
  },
  {
    id: "faq-5",
    question: "Where is the clinic located?",
    answer: "Nivora Dental Studio is located at 2nd Floor, Aster Square, Coastal Avenue, Kunjibettu, Udupi, Karnataka 576102, India.",
  },
  {
    id: "faq-6",
    question: "Do you provide dental care for children?",
    answer: "Yes, we provide gentle children's dentistry, including regular pediatric checkups, cavity prevention, fluoride applications, and dental sealants in a fear-free environment.",
  },
  {
    id: "faq-7",
    question: "How can I contact the clinic directly?",
    answer: "You can reach us by phone or WhatsApp at +91 80000 48271, or by email at hello@nivoradental.example.",
  },
];

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export const SERVICE_OPTIONS = [
  "General Dentistry (Checkup / Cleaning / Fillings)",
  "Restorative Dentistry (Root Canal / Crowns / Bridges)",
  "Cosmetic Dentistry (Whitening / Smile Enhancement)",
  "Orthodontics (Braces / Clear Aligners)",
  "Implant Dentistry (Single Tooth / Restorations)",
  "Oral Surgery (Wisdom Tooth / Extractions)",
  "Children's Dentistry (Checkups / Preventive Care)",
  "General Consultation",
  "Other",
];
