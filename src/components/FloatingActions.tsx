import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Sparkles, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white/90 border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Quote Trigger Pill */}
      {showScrollTop && (
        <button
          onClick={onOpenQuoteModal}
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white font-bold text-xs shadow-xl shadow-red-600/30 border border-red-400/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Get Quote</span>
        </button>
      )}

      {/* WhatsApp Quick Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative p-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-2xl shadow-red-600/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp Direct Inquiry (${COMPANY_INFO.phoneDisplay})`}
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white" />

        {/* Hover tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          WhatsApp Us ({COMPANY_INFO.phoneDisplay})
        </span>
      </a>

      {/* Direct Emergency Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="pointer-events-auto p-3.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-2xl shadow-blue-900/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Call 24/7 Helpline"
        title={`Call 24/7 Operations Desk (${COMPANY_INFO.phoneDisplay})`}
      >
        <Phone className="w-5 h-5" />

        {/* Hover tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Call 24/7 Operations ({COMPANY_INFO.phoneDisplay})
        </span>
      </a>

    </div>
  );
};
