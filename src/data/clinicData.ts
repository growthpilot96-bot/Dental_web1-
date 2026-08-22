export interface ServiceItem {
  id: string;
  name: string;
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
  name: "Lumière Dental Studio",
  brandName: "Dental Studio",
  tagline: "Confident Smiles. Exceptional Care.",
  location: "Manipal, Karnataka, India",
  address: {
    line1: "12 Ocean View Road",
    line2: "Manipal, Karnataka 576104",
    country: "India",
  },
  phone: "+91 9999996666",
  phoneRaw: "+919999996666",
  whatsAppNumber: "919999996666",
  whatsAppDisplay: "+91 9999996666",
  email: "hello@lumieredental.in",
  openingHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 6:00 PM",
    sunday: "Sunday: Closed (Emergency on-call only)",
  },
  googleMapsQuery: "https://www.google.com/maps/search/?api=1&query=Manipal+Karnataka+India",
};

export const DOCTOR_INFO = {
  name: "Dr. Ananya Rao",
  title: "Lead Cosmetic & Restorative Dental Surgeon",
  qualifications: "BDS, MDS (Cosmetic & Restorative Dentistry)",
  specialisation: "Cosmetic & Restorative Dentistry",
  experience: "12+ Years",
  stats: {
    patients: "5,000+",
    experienceYears: "12+",
    satisfaction: "99.4%",
    successRate: "99.8%",
  },
  bio: "Dr. Ananya Rao is an esteemed cosmetic and restorative dental surgeon with over 12 years of clinical expertise. She specializes in minimally invasive aesthetic dentistry, digital smile design, and precision prosthodontics. Her patient-first philosophy combines cutting-edge dental technology with a gentle, reassuring touch, ensuring every visit is comfortable, unhurried, and transformative.",
  philosophy: "Care Led By Experience, Precision And Empathy.",
  quote: "“We believe exceptional dental care is not just about clinical perfection—it is about understanding each patient's aspirations, easing their anxieties, and crafting radiant smiles in a serene, respectful environment.”",
  credentials: [
    "Master of Dental Surgery (MDS) – Conservative Dentistry & Endodontics",
    "Bachelor of Dental Surgery (BDS)",
    "Fellowship in Aesthetic & Digital Smile Design",
    "Active Member, Indian Dental Association (IDA)",
  ],
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
};

export const TRUST_INDICATORS = [
  { label: "12+ Years", sublabel: "Clinical Experience" },
  { label: "5,000+", sublabel: "Smiles Cared For" },
  { label: "Advanced 3D", sublabel: "Digital Diagnostics" },
  { label: "Class-B", sublabel: "Sterilisation Protocol" },
  { label: "100%", sublabel: "Patient-Centred Care" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    shortDesc: "Comprehensive oral examinations, digital cavity diagnostics, gentle cleanings, and preventive care.",
    fullDesc: "Our general dentistry services form the bedrock of your long-term oral wellness. Using high-resolution intraoral cameras and gentle ultrasonic hygiene tools, we ensure early detection, painless preventive cleans, and proactive gum care.",
    highlights: ["Detailed 3D intraoral camera assessment", "Gentle ultrasonic scaling & polishing", "Fluoride & enamel remineralisation", "Custom night guards for bruxism"],
    duration: "30 - 45 mins",
    suitableFor: "Routine check-ups, preventive wellness, and everyday dental health.",
    icon: "ShieldCheck",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    shortDesc: "Clinical-grade in-office laser whitening and custom home trays for radiant, stain-free brightness.",
    fullDesc: "Safely lighten deep coffee, tea, and aging stains up to 8 shades in a single comfortable session. Our advanced pH-balanced formulations protect your enamel while eliminating post-treatment sensitivity.",
    highlights: ["In-office chairside laser whitening (1 hour)", "Customized take-home maintenance kits", "Desensitizing post-treatment glaze", "Up to 8 shades lighter"],
    duration: "45 - 60 mins",
    suitableFor: "Discolored teeth, special occasions, and instant smile brightening.",
    icon: "Sparkles",
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Precision titanium and zirconia implants with 3D guided placement for lifelong natural tooth replacement.",
    fullDesc: "Regain the natural look, feel, and bite strength of your teeth. We employ computer-guided 3D surgical templates to place world-class Swiss and German implants with sub-millimeter accuracy and accelerated healing.",
    highlights: ["Computer-guided 3D surgical placement", "Premium bio-compatible titanium & zirconia", "Preserves jawbone density & facial structure", "Lifetime implant fixture warranty options"],
    duration: "1 - 2 hours per session",
    suitableFor: "Single missing teeth, multiple gaps, or full arch restoration.",
    icon: "Anchor",
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    shortDesc: "Single-sitting, gentle rotary endodontics with microscopic magnification for pain-free tooth preservation.",
    fullDesc: "Eliminate deep toothache and infection without discomfort. Using precision rotary systems, electronic apex locators, and warm thermoplastic obturation, we preserve your natural tooth structure in as little as one painless visit.",
    highlights: ["Single-sitting painless procedure", "High-magnification illumination", "Digital rotary precision systems", "High-strength ceramic crown restoration"],
    duration: "45 - 60 mins",
    suitableFor: "Severe toothache, deep decay, dental trauma, or tooth infection.",
    icon: "Zap",
  },
  {
    id: "clear-aligners",
    name: "Invisalign / Clear Aligners",
    shortDesc: "Discrete, customized transparent aligners for comfortable teeth straightening without metal wires.",
    fullDesc: "Straighten your teeth discreetly with virtually invisible clear aligners. We map out your entire tooth movement virtually using 3D digital simulation before your first set of trays is even manufactured.",
    highlights: ["Custom 3D digital smile simulation", "Removable for easy eating & brushing", "Virtually invisible clear aligners", "No painful metal brackets or wires"],
    duration: "6 - 18 months average",
    suitableFor: "Crowding, gaps, overbites, and subtle orthodontic refinement.",
    icon: "Smile",
  },
  {
    id: "porcelain-veneers",
    name: "Porcelain Veneers",
    shortDesc: "Ultra-thin, handcrafted ceramic laminates designed to correct gaps, chips, and discoloration.",
    fullDesc: "Individually sculpted by master dental ceramists, our ultra-thin porcelain veneers are bonded to the front surface of your teeth to correct shade, shape, spacing, and minor alignment with lifelike translucency.",
    highlights: ["Ultra-thin, conservative tooth preparation", "Custom shade matching & translucency", "Stain-resistant high-density ceramic", "Long-lasting durability (15+ years)"],
    duration: "2 - 3 visits",
    suitableFor: "Chipped, worn, discolored, or unevenly spaced teeth.",
    icon: "Gem",
  },
  {
    id: "smile-makeovers",
    name: "Smile Makeovers",
    shortDesc: "Holistic, digitally simulated smile design combining veneers, alignment, and aesthetic gum contouring.",
    fullDesc: "A bespoke smile transformation tailored to your unique facial contours, lips, and personality. Through digital smile design (DSD), you preview and test your new smile before any permanent work begins.",
    highlights: ["Full-face aesthetic proportion analysis", "Digital smile simulation preview", "Multi-disciplinary treatment synergy", "Natural, balanced aesthetic results"],
    duration: "Personalised treatment roadmap",
    suitableFor: "Comprehensive aesthetic enhancement and complete smile rejuvenation.",
    icon: "Crown",
  },
  {
    id: "paediatric-dentistry",
    name: "Paediatric Dentistry",
    shortDesc: "Nurturing, fear-free dental care for children, focusing on prevention and positive oral hygiene habits.",
    fullDesc: "We create a warm, delightful, and fear-free environment for young smiles. From early orthodontic tracking to fluoride applications and cavity prevention, our team helps children build lifelong healthy dental habits.",
    highlights: ["Warm, child-friendly gentle approach", "Pit & fissure sealants for cavity prevention", "Fluoride varnish applications", "Early habit counseling & bite guidance"],
    duration: "30 mins",
    suitableFor: "Infants, children, and teenagers for preventive and restorative dental care.",
    icon: "HeartHandshake",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Personalised Treatment",
    desc: "Every treatment plan is custom-crafted around your anatomical needs, aesthetic goals, and timeline.",
    icon: "UserCheck",
  },
  {
    title: "Modern Technology",
    desc: "Low-radiation 3D digital imaging, intraoral 3D scanners, and painless motorized rotary systems.",
    icon: "Cpu",
  },
  {
    title: "Comfort First",
    desc: "A calm, boutique clinic environment, gentle anaesthesia techniques, and an unhurried, reassuring touch.",
    icon: "Coffee",
  },
  {
    title: "Transparent Care",
    desc: "Clear treatment explanations, live digital diagnostics, and open upfront fee conversations without hidden surprises.",
    icon: "Eye",
  },
  {
    title: "Sterilisation Standards",
    desc: "Hospital-grade Class-B autoclave sterilisation, sealed single-use surgical kits, and strict hygiene protocols.",
    icon: "ShieldAlert",
  },
  {
    title: "Experienced Dental Team",
    desc: "12+ years of senior clinical mastery led by Dr. Ananya Rao (BDS, MDS) and specialized dental clinicians.",
    icon: "Award",
  },
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "Book Consultation",
    desc: "Schedule your visit effortlessly via WhatsApp or our instant online request form with your preferred date and time.",
  },
  {
    step: "02",
    title: "Meet Your Dentist",
    desc: "Enjoy an unhurried consultation with Dr. Ananya Rao featuring high-definition 3D intraoral digital imaging.",
  },
  {
    step: "03",
    title: "Get Your Treatment Plan",
    desc: "Receive a clear, transparent digital roadmap detailing proposed treatments, visual previews, and transparent pricing.",
  },
  {
    step: "04",
    title: "Begin Your Smile Journey",
    desc: "Relax in our comfortable clinic suites while our expert team delivers precise, gentle, and lasting dental care.",
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: "case-1",
    title: "Full Porcelain Smile Rejuvenation",
    treatment: "6 Porcelain Veneers & Whitening",
    duration: "2 Weeks",
    description: "Correction of severe enamel fluorosis staining, minor central gap, and asymmetrical incisal edges.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "case-2",
    title: "Clear Aligner Alignment & Whitening",
    treatment: "Invisalign + Laser Whitening",
    duration: "8 Months",
    description: "Resolution of moderate anterior lower crowding and upper midline spacing without tooth extractions.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "case-3",
    title: "Single Anterior Guided Implant",
    treatment: "3D Guided Implant & Zirconia Crown",
    duration: "3 Months Healing",
    description: "Replaced a fractured central incisor with seamless gingival emergence profile and perfect color match.",
    beforeImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=700&auto=format&fit=crop",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Priya M.",
    treatment: "Smile Makeover & Veneers",
    rating: 5,
    date: "July 2026",
    content: "The entire experience felt calm, professional and reassuring. Dr. Rao explained everything clearly and made me feel comfortable throughout. My veneers look so natural!",
  },
  {
    id: "test-2",
    name: "Rajesh K.",
    treatment: "Dental Implants",
    rating: 5,
    date: "June 2026",
    content: "I had two implants placed. The 3D scan and guided surgery made it completely painless. The final crowns feel and chew exactly like my natural teeth.",
  },
  {
    id: "test-3",
    name: "Neha S.",
    treatment: "Clear Aligners",
    rating: 5,
    date: "May 2026",
    content: "Completed my aligners in 7 months! The studio feels more like a serene wellness retreat than a dental clinic. Exceptional staff punctuality and bedside manner.",
  },
  {
    id: "test-4",
    name: "Arjun V.",
    treatment: "Single-Sitting Root Canal",
    rating: 5,
    date: "April 2026",
    content: "I used to have severe dental anxiety regarding root canals. Dr. Ananya Rao's single-sitting procedure was completely pain-free. Truly grateful for her gentle touch!",
  },
  {
    id: "test-5",
    name: "Meera N.",
    treatment: "Laser Teeth Whitening",
    rating: 5,
    date: "March 2026",
    content: "Got my teeth whitened before my sister's wedding. The shade change was brilliant and natural with zero sensitivity during or after. Highly recommend Lumière!",
  },
  {
    id: "test-6",
    name: "Dr. Rohan D.",
    treatment: "Porcelain Veneers",
    rating: 5,
    date: "February 2026",
    content: "As a fellow healthcare professional, I deeply appreciate their stringent sterilisation standards and precision cosmetic artistry. Top-notch dental clinic in Manipal.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment?",
    answer: "You can easily request an appointment online through our booking form on this website, send us a message directly via WhatsApp at +91 9999996666, or call our reception. Our team will promptly get in touch to confirm your chosen slot.",
  },
  {
    id: "faq-2",
    question: "Do you accept walk-in patients?",
    answer: "While we always prioritize scheduled appointments to give each patient dedicated, unhurried time, we do accommodate urgent dental emergencies and walk-ins based on operatory availability.",
  },
  {
    id: "faq-3",
    question: "How long does a consultation take?",
    answer: "An initial comprehensive consultation typically takes 30 to 45 minutes. This includes a full digital intraoral scan, high-resolution photographs, diagnostic assessment, and a transparent discussion of your treatment options.",
  },
  {
    id: "faq-4",
    question: "Do you offer cosmetic dentistry?",
    answer: "Yes, cosmetic dentistry is one of our flagship specialities. We offer bespoke smile makeovers, ultra-thin porcelain veneers, composite bonding, in-office laser whitening, and clear aligners.",
  },
  {
    id: "faq-5",
    question: "Do you provide emergency dental care?",
    answer: "Yes. If you are experiencing severe toothache, dental trauma, a broken restoration, or swelling, please call our clinic line at +91 9999996666 immediately for priority care.",
  },
  {
    id: "faq-6",
    question: "What should I bring to my first appointment?",
    answer: "Please bring any previous dental records or X-rays if available, a list of current medications or relevant medical history, and a valid photo ID.",
  },
  {
    id: "faq-7",
    question: "How can I contact the clinic?",
    answer: "You can reach us by phone or WhatsApp at +91 9999996666, email us at hello@lumieredental.in, or visit our studio at 12 Ocean View Road, Manipal, Karnataka 576104.",
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
];

export const SERVICE_OPTIONS = [
  "General Consultation",
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Clear Aligners",
  "Veneers",
  "Smile Makeover",
  "Other",
];
