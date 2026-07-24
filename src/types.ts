export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'security' | 'facility' | 'manpower' | 'surveillance' | 'specialized';
  iconName: string;
  badge?: string;
  image?: string;
  features: string[];
  specs: {
    deploymentTime: string;
    supervision: string;
    compliance: string;
    trainedIn: string[];
  };
  bentoSpan?: string; // CSS grid col/row span helper
  bgGradient?: string;
}

export interface QuoteFormData {
  serviceType: string;
  propertyType: string;
  scaleSize: string; // e.g. "5,000 - 20,000 sq.ft" or "10 - 25 Guards"
  shiftRequirement: string; // "24/7 Round Clock", "Day Shift", "Night Shift", "Event Based"
  location: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  additionalNotes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  quote: string;
  metrics: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
