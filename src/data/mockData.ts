import { ServiceItem, Testimonial, ProcessStep, FAQItem } from '../types';

import serviceSecurityGuardImg from '../assets/images/service_security_guard_1784719456979.jpg';
import serviceCctvSurveillanceImg from '../assets/images/service_cctv_surveillance_1784719468230.jpg';
import serviceFacilityManagementImg from '../assets/images/service_facility_management_1784719479580.jpg';
import serviceCorporateStaffingImg from '../assets/images/service_corporate_staffing_1784719493174.jpg';
import serviceVipEventSecurityImg from '../assets/images/service_vip_event_security_1784719506450.jpg';
import serviceDeepCleaningImg from '../assets/images/service_deep_cleaning_1784719519754.jpg';

export const COMPANY_INFO = {
  name: "Ayudh Vikas",
  fullName: "Ayudh Vikas Manpower Solutions",
  tagline: "Physical Security & Professional Deep Cleaning Solutions",
  phone: "+91 9000045073",
  phoneDisplay: "9000045073",
  email: "support@ayudhvikas.com",
  whatsappUrl: "https://wa.me/919000045073?text=Hi%20Ayudh%20Vikas%20Manpower%20Solutions,%20I%20am%20interested%20in%20a%20custom%20quote.",
  address: "Km Complex, Hunter Road, Warangal Railway Gate, Opposite Kasam Janata Sale, Warangal - 506002, Telangana, India",
  shortAddress: "Km Complex, Hunter Road, Warangal Railway Gate, Warangal - 506002",
  landmark: "Opposite Kasam Janata Sale",
  coreOfferings: "Physical Security & Professional Deep Cleaning",
  experienceYears: "10+",
  activeGuards: "3,500+",
  clientsServed: "500+",
  rating: "4.8 / 5",
  reviewCount: "350+",
  responseWindow: "24-48 Hours Deployment",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'security-guarding',
    title: 'Physical Security & Guarding',
    shortDesc: 'Vetted, police-verified security personnel and executive protection for corporate & industrial assets.',
    fullDesc: 'Complete manned guarding solutions tailored to your operational needs. Our security officers undergo background checks, physical fitness tests, biometric verification, and rigorous training in fire safety, emergency response, and access management.',
    category: 'security',
    iconName: 'ShieldCheck',
    badge: 'Popular',
    image: serviceSecurityGuardImg,
    features: [
      'Police-verified & biometric-tracked guards',
      '24/7 Supervisor surprise inspection patrols',
      'Visitor log digitalization & access control',
      'Emergency response & fire safety trained',
      'Armed & unarmed specialized guards available'
    ],
    specs: {
      deploymentTime: '24 - 48 Hours',
      supervision: '24/7 Mobile Patrolling Team',
      compliance: 'PSARA Certified, PF & ESI Compliant',
      trainedIn: ['Access Management', 'CCTV Protocol', 'First Aid & Fire Drills', 'Conflict De-escalation']
    },
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bgGradient: 'from-blue-900/40 via-slate-900 to-slate-950'
  },
  {
    id: 'tech-surveillance',
    title: 'AI Tech Surveillance & CCTV',
    shortDesc: 'Smart IP camera monitoring, biometric access control, and motion alert integrations.',
    fullDesc: 'Transform your physical facility with smart, automated electronic security. We install, calibrate, and monitor high-definition CCTV systems, smart perimeter alarms, automatic gate barriers, and facial recognition access control.',
    category: 'surveillance',
    iconName: 'Video',
    badge: 'Smart Tech',
    image: serviceCctvSurveillanceImg,
    features: [
      '24/7 Remote Central Monitoring Feed',
      'AI Motion & Perimeter Intrusion Alerts',
      'Biometric & RFID Smart Door Locks',
      'Automatic Number Plate Recognition (ANPR)',
      'Cloud Backup & Incident Footage Retrieval'
    ],
    specs: {
      deploymentTime: '1 - 3 Business Days',
      supervision: 'Central Command Center Feed',
      compliance: 'ISO/IEC 27001 Data Privacy Compliant',
      trainedIn: ['IP Camera Calibration', 'AI Alert Triage', 'Footage Archiving', 'Perimeter Alarm Protocol']
    },
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgGradient: 'from-cyan-950/50 via-slate-900 to-slate-950'
  },
  {
    id: 'facility-management',
    title: 'Integrated Facility Management',
    shortDesc: 'End-to-end commercial property upkeep, electrical/plumbing maintenance, and janitorial services.',
    fullDesc: 'Keep your workplace operating seamlessly. We combine routine office cleaning, technical electro-mechanical upkeep, HVAC filter maintenance, plumbing solutions, and eco-friendly waste management into a unified SLA contract.',
    category: 'facility',
    iconName: 'Building2',
    badge: 'Full SLA',
    image: serviceFacilityManagementImg,
    features: [
      'Daily office & IT park maintenance',
      'HVAC, Electrical & Plumbing preventive upkeep',
      'Eco-friendly cleaning supplies & machinery',
      'Floor scrubbing, polishing & facade washing',
      'Dedicated facility manager on site'
    ],
    specs: {
      deploymentTime: '48 Hours',
      supervision: 'On-site Facility Operations Manager',
      compliance: 'ISO 9001:2015 Quality Standard',
      trainedIn: ['Industrial Scrubbers', 'High-Rise Facade Safety', 'Chemical Handling', 'Preventive Upkeep']
    },
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgGradient: 'from-emerald-950/40 via-slate-900 to-slate-950'
  },
  {
    id: 'corporate-manpower',
    title: 'Corporate Manpower & Staffing',
    shortDesc: 'Verified front-desk staff, office boys, pantry helpers, and operational support staff.',
    fullDesc: 'Deploy pre-screened, courteous corporate support staff. We manage payroll, statutory compliance, health check-ups, and replacement guarantees so your management can focus on business growth.',
    category: 'manpower',
    iconName: 'Users',
    badge: 'Pre-Vetted',
    image: serviceCorporateStaffingImg,
    features: [
      'Receptionists & front-office executives',
      'Pantry attendants & office boys',
      'Warehouse & logistics support staff',
      '100% Statutory compliance (PF, ESI, Minimum Wages)',
      'Instant replacement guarantee for absentees'
    ],
    specs: {
      deploymentTime: '24 - 72 Hours',
      supervision: 'HR Operations Supervisor',
      compliance: 'Labour Code & EPF/ESIC Compliant',
      trainedIn: ['Corporate Etiquette', 'Pantry Hygiene', 'Document Handling', 'Customer Relations']
    },
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bgGradient: 'from-indigo-950/40 via-slate-900 to-slate-950'
  },
  {
    id: 'event-vip-security',
    title: 'Event & VIP Security Escort',
    shortDesc: 'Specialized crowd control, VIP bouncers, metal detectors, and event venue perimeter security.',
    fullDesc: 'Ensure smooth, secure corporate galas, political summits, concerts, and high-profile private events. Our elite security detail handles vehicle access, ticket verification, VIP close protection, and crowd dynamics.',
    category: 'specialized',
    iconName: 'Crown',
    badge: 'Elite Force',
    image: serviceVipEventSecurityImg,
    features: [
      'High-stature VIP escorts & close protection officers',
      'Door frame metal detectors (DFMD) & hand scanners',
      'Crowd control barricade management',
      'Valet & parking traffic management',
      'Direct liaison with local police authorities'
    ],
    specs: {
      deploymentTime: 'Within 12 - 24 Hours',
      supervision: 'Senior Event Security Captain',
      compliance: 'Police Permission & Safety Protocol Compliant',
      trainedIn: ['Tactical Escort', 'Crowd De-escalation', 'Emergency Evacuation', 'VIP Liaison']
    },
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bgGradient: 'from-amber-950/30 via-slate-900 to-slate-950'
  },
  {
    id: 'deep-cleaning-sanitization',
    title: 'Deep Cleaning & Sanitization',
    shortDesc: 'Medical-grade disinfection, carpet shampooing, facade glass restoration, and industrial deep cleaning.',
    fullDesc: 'Deep sanitation services using heavy-duty industrial single-disc scrubbing machines, UV-C equipment, high-pressure washers, and non-toxic bio-degradable chemicals for commercial kitchens, IT complexes, and residential towers.',
    category: 'facility',
    iconName: 'Sparkles',
    badge: 'Pro Grade',
    image: serviceDeepCleaningImg,
    features: [
      'Commercial carpet & upholstery hot water extraction',
      'High-pressure exterior facade glass cleaning',
      'Hospital-grade anti-viral fogging & sanitization',
      'Marble floor polishing & crystallization',
      'Post-construction deep cleanup'
    ],
    specs: {
      deploymentTime: 'Same Day / Next Day',
      supervision: 'Master Cleaning Supervisor',
      compliance: 'Eco-Certified Green Cleaning Standards',
      trainedIn: ['Taski Machine Operation', 'Facade Harness Protocols', 'Hospital Disinfection']
    },
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    bgGradient: 'from-blue-950/40 via-slate-900 to-slate-950'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Site Audit',
    subtitle: 'Comprehensive Assessment',
    description: 'Our security and facility engineers perform an on-site audit to map vulnerability points, high-traffic zones, equipment requirements, and manpower density.',
    deliverables: ['Vulnerability Assessment Matrix', 'Manpower & Tech Allocation Plan', 'Custom SLA Outline'],
    icon: 'SearchCheck'
  },
  {
    number: '02',
    title: 'Tailored Strategy & SLA',
    subtitle: 'Custom Blueprint Design',
    description: 'We construct a customized security schedule and facility management framework matching your operating hours, budget constraints, and statutory requirements.',
    deliverables: ['Transparent Cost Breakdown', 'Standard Operating Procedures (SOP)', 'Guard Duty Roster'],
    icon: 'FileText'
  },
  {
    number: '03',
    title: 'Rapid Personnel Deployment',
    subtitle: 'Vetted Team Onboarding',
    description: 'Within 24 to 48 hours, our police-verified, uniformed staff arrive on site equipped with digital attendance tools, radios, and supervisor briefing.',
    deliverables: ['Verified ID Badges & Uniforms', 'Digital Attendance Setup', 'On-Site Orientation'],
    icon: 'Zap'
  },
  {
    number: '04',
    title: '24/7 Operations & Surveillance',
    subtitle: 'Continuous Supervision',
    description: 'Round-the-clock supervisor visits, live GPS patrol tracking, quick response team (QRT) readiness, and monthly performance report reviews.',
    deliverables: ['24/7 Command Center Support', 'Surprise Patrol Inspections', 'Monthly Incident & Audit Reports'],
    icon: 'Activity'
  }
];

export const STATS_LIST = [
  { value: '3,500+', label: 'Deployed Personnel', sub: 'Police-verified & uniformed', icon: 'Shield' },
  { value: '500+', label: 'Commercial Clients', sub: 'IT Parks, Malls & Factories', icon: 'Building' },
  { value: '10+ Yrs', label: 'Industry Excellence', sub: 'Proven operational record', icon: 'Award' },
  { value: '24/7/365', label: 'Operations Center', sub: 'Instant emergency QRT response', icon: 'Clock' },
];

export const WHY_AZS4S_ITEMS = [
  {
    title: "100% Background & Police Verified",
    desc: "Every security guard and facility staff member undergoes biometric verification, local police clearance, and address verification.",
    icon: "UserCheck",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "ISO 9001:2015 & PSARA Certified",
    desc: "Fully compliant with Indian security regulations (PSARA), EPF, ESIC, Minimum Wages Act, and international quality standards.",
    icon: "BadgeCheck",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Smart App & GPS Supervisor Tracking",
    desc: "Real-time patrol tagging via NFC/QR checkpoints and mobile attendance tracking ensure zero duty lapses.",
    icon: "Smartphone",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "24/7 Quick Response Team (QRT)",
    desc: "Dedicated mobile supervisor units on standby to handle emergencies, unexpected absenteeism, or perimeter alerts within minutes.",
    icon: "Siren",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Transparent & Zero Hidden Fees",
    desc: "Upfront pricing schedules with clear breakdowns of statutory benefits, management fees, and equipment charges.",
    icon: "Receipt",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Single Point Account Manager",
    desc: "No call center delays. You receive a dedicated operations manager assigned directly to your site for immediate resolution.",
    icon: "Headphones",
    color: "from-emerald-400 to-emerald-600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajeshwar Rao',
    designation: 'General Manager - Operations',
    company: 'Apex Tech Park, Hyderabad',
    industry: 'IT & Commercial Real Estate',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Ayudh Vikas Manpower Solutions transformed our tech park security and facility management. Their guards are exceptionally well-disciplined, and the 24/7 supervisor visits give us total peace of mind. Deployment was seamless within 24 hours.',
    metrics: 'Zero security breaches in 3+ years'
  },
  {
    id: '2',
    name: 'Srinivas Reddy',
    designation: 'Plant Head',
    company: 'Siri Pharma Industries, Warangal',
    industry: 'Manufacturing & Industrial',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Managing industrial perimeter security and heavy material gate logs was complex until Ayudh Vikas brought in AI camera surveillance combined with manned security officers. Outstanding compliance and service!',
    metrics: '100% gate log accuracy'
  },
  {
    id: '3',
    name: 'Priyanka Sharma',
    designation: 'Facility Director',
    company: 'St. Mary Healthcare Institute',
    industry: 'Healthcare & Hospitals',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'We required specialized deep cleaning and strict sanitization staff trained in hospital-grade hygiene protocols. Ayudh Vikas provided polite, well-trained manpower with full statutory compliance.',
    metrics: '99.8% Sanitation Quality Score'
  },
  {
    id: '4',
    name: 'K. Venkatesh',
    designation: 'Managing Director',
    company: 'Grand Regency Malls',
    industry: 'Retail & Hospitality',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'From managing weekend crowd influx to professional deep cleaning overnight, Ayudh Vikas is our most dependable service partner across all 4 of our retail destinations.',
    metrics: '3,500+ daily visitors secured'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Tech Parks', type: 'Commercial IT' },
  { name: 'Siri Pharma', type: 'Manufacturing' },
  { name: 'St. Mary Health', type: 'Hospital' },
  { name: 'Grand Regency', type: 'Retail Mall' },
  { name: 'Vanguard Infra', type: 'Construction' },
  { name: 'Kakatiya University Zone', type: 'Education' },
  { name: 'Heritage Heights', type: 'Residential Gated' },
  { name: 'Telangana Logistics', type: 'Warehousing' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can Ayudh Vikas deploy security personnel or deep cleaning staff to our site?",
    answer: "We offer emergency deployment within 24 to 48 hours for physical security personnel and professional deep cleaning staff across Telangana and South India. For large-scale industrial or custom setups, deployment typically takes 3 to 5 business days following site audit.",
    category: "Deployment"
  },
  {
    question: "Are your security and cleaning personnel background-checked and police-verified?",
    answer: "Yes, 100%. Every employee undergoes mandatory biometric identification, address checks, local police station verification, and health check-ups before being posted to any client facility.",
    category: "Verification"
  },
  {
    question: "What statutory compliance standards does Ayudh Vikas follow?",
    answer: "Ayudh Vikas strictly complies with PSARA regulations, EPF (Provident Fund), ESIC (Health Insurance), Minimum Wages Act, Bonus Act, and Labour License guidelines. We provide monthly statutory remittance proofs alongside client billing.",
    category: "Compliance"
  },
  {
    question: "Can we request a combined quote for Physical Security & Professional Deep Cleaning?",
    answer: "Absolutely! Physical Security & Professional Deep Cleaning are our primary core offerings. We specialize in integrated manpower packages bundling physical guarding, deep cleaning & sanitization, and facility maintenance into a single cost-effective SLA contract with a dedicated Account Manager.",
    category: "Pricing"
  },
  {
    question: "How do you handle unexpected guard absenteeism or emergency replacements?",
    answer: "Our 24/7 Operations Command Center maintains a reserve QRT (Quick Response Team) roster. If an assigned guard is absent, a substitute officer is dispatched within 60 minutes to ensure zero unstaffed hours.",
    category: "Operations"
  },
  {
    question: "Where is Ayudh Vikas Manpower Solutions headquartered, and what areas do you serve?",
    answer: "Our central office is located at Km Complex, Hunter Road, Warangal Railway Gate, Opposite Kasam Janata Sale, Warangal - 506002, Telangana. We provide comprehensive services across Hanamkonda, Warangal, and Kazipet.",
    category: "Location"
  }
];
