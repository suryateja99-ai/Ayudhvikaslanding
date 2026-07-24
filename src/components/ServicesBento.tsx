import React, { useState } from 'react';
import { 
  ShieldCheck, Video, Building2, Users, Crown, Sparkles, 
  ArrowRight, Check, Clock, Shield, Filter, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';

interface ServicesBentoProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ 
  onSelectService, 
  onOpenQuoteModal 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'security', label: 'Security & Guarding' },
    { id: 'surveillance', label: 'Tech & CCTV' },
    { id: 'facility', label: 'Facility Management' },
    { id: 'manpower', label: 'Corporate Manpower' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory || (activeCategory === 'facility' && s.category === 'specialized'));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'Video': return <Video className="w-6 h-6 text-red-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-blue-800" />;
      case 'Users': return <Users className="w-6 h-6 text-red-600" />;
      case 'Crown': return <Crown className="w-6 h-6 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-800" />;
      default: return <Shield className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <span>🛡️ INTEGRATED SOLUTIONS PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Security &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-red-600">
              Facility Services
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Deploy trained security officers, electronic CCTV surveillance, janitorial teams, and administrative support with guaranteed SLAs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 my-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 via-red-500 to-blue-900 text-white shadow-md shadow-red-600/20 border border-red-500/30'
                  : 'bg-white text-slate-700 hover:text-blue-900 border border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 ${
                  service.bentoSpan || 'col-span-1'
                }`}
              >
                {/* Background Card Gradient Accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/40 via-transparent to-red-50/20 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  {/* Service Card Image Banner */}
                  {service.image && (
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-5 border border-slate-200/80 group-hover:border-blue-400 transition-colors shadow-sm">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      {/* Icon overlay on top right */}
                      <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-md">
                        {getIcon(service.iconName)}
                      </div>

                      {/* Badge overlay on top left */}
                      {service.badge && (
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-md border border-red-400/50">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  )}

                  {!service.image && (
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-200/80 shadow-inner group-hover:border-blue-400 transition-colors">
                        {getIcon(service.iconName)}
                      </div>

                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-950 border border-red-300">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer spec bar & Action Buttons */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Deployment: <strong className="text-slate-800">{service.specs.deploymentTime}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-blue-800" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.id)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 shadow-md shadow-red-600/20 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Operations Poster & Registration Credentials Banner */}
        <div className="mt-16 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-500/50 text-red-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>OFFICIAL AYUDH VIKAS SERVICES POSTER & REGISTRATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Verified Telangana Security & Facility Operations Poster
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Licensed under Reg. No. 417/2025, Telangana. We deliver comprehensive physical security guarding, housekeeping, deep cleaning, civil cleaning, and pre-vetted corporate manpower with guaranteed 24/7 helpline desk assistance.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>🏢 Warangal Regional Office Helpline</span>
                  <span className="text-red-400 font-mono">0870 412 0820 / 9000045073</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Address: # 12-8-287, KM Complex, Hunter Road, Opp: Kasam Janata Sale, Warangal - 506002.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Request Custom Service Package</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group w-full max-w-sm">
                <div className="relative h-72 bg-slate-950 overflow-hidden">
                  <img
                    src={brandPosterImg}
                    alt="Official Ayudh Vikas Business Services Poster Flyer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center bg-slate-950 border-t border-slate-800 text-xs font-bold text-slate-300">
                  AYUDH VIKAS Official Operations Poster
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
