import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

interface FooterProps {
  onSelectTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: string) => (e: React.MouseEvent) => {
    if (onSelectTab) {
      e.preventDefault();
      onSelectTab(tab);
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs relative overflow-hidden">
      {/* Blue-Green-Red Top Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-emerald-500 to-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" onClick={handleNav('home')} className="inline-block">
              <Logo size="md" showText={true} />
            </a>

            <p className="text-slate-600 leading-relaxed text-xs">
              Ayudh Vikas Manpower Solutions is an ISO 9001:2015 certified premier provider delivering police-verified physical security personnel, professional deep cleaning, electronic CCTV surveillance, and corporate manpower across <strong className="text-slate-900 font-semibold">Hanamkonda, Warangal, and Kazipet</strong>.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Helpline: <strong className="text-slate-900">{COMPANY_INFO.phoneDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>Email: <strong className="text-slate-900">{COMPANY_INFO.email}</strong></span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" onClick={handleNav('home')} className="hover:text-emerald-600 transition-colors">Home Page</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 transition-colors">Services Portfolio</a></li>
              <li><a href="#ayudhklin" onClick={handleNav('ayudhklin')} className="hover:text-emerald-600 transition-colors font-bold text-emerald-700">AyudhKlin Products</a></li>
              <li><a href="#why-us" onClick={handleNav('why-us')} className="hover:text-emerald-600 transition-colors">Why Ayudh Vikas</a></li>
              <li><a href="#faq" onClick={handleNav('faq')} className="hover:text-emerald-600 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" onClick={handleNav('contact')} className="hover:text-emerald-600 transition-colors">Contact Headquarters</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 font-bold text-slate-900 transition-colors">🛡️ Physical Security &amp; Guarding</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 font-bold text-slate-900 transition-colors">✨ Professional Deep Cleaning</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 transition-colors">CCTV &amp; AI Surveillance</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 transition-colors">Integrated Facility Management</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 transition-colors">Corporate Support Staff</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="hover:text-emerald-600 transition-colors">Event &amp; VIP Escort</a></li>
            </ul>
          </div>

          {/* Col 5: Registered Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="text-slate-600 leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Km Complex, Hunter Road, Warangal Railway Gate, Warangal - 506002, Telangana, India.
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-[11px]">
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                <span>Opposite Kasam Janata Sale</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" /> Verified & Compliant Agency
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Web-Devs Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#compliance" className="hover:text-slate-800 transition-colors">Statutory Compliance</a>
            <a href="#sitemap" className="hover:text-slate-800 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
