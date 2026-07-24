import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, ArrowRight, Star, Activity, Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';
import securityHeroBg from '../assets/images/security_hero_bg_1784715806151.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onSelectTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const [livePulse, setLivePulse] = useState(true);

  // Live ping effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] py-16 sm:py-24 flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Security Service Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={securityHeroBg} 
          alt="Ayudh Vikas Security Personnel On Duty in Hanamkonda Warangal Kazipet"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-85 contrast-105"
        />
        {/* Balanced overlay gradient to keep security officers visible while ensuring high contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/85" />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center flex flex-col items-center space-y-8">
        
        {/* Top Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/90 border border-red-500/50 shadow-lg backdrop-blur-md"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className={`absolute w-3 h-3 rounded-full bg-red-500/50 ${livePulse ? 'animate-ping' : ''}`} />
          </div>
          <span className="text-xs sm:text-sm font-bold text-blue-100 tracking-wide">
            🛡️ Ayudh Vikas Manpower Solutions | <span className="text-red-400 font-bold">3,500+ Personnel Active</span>
          </span>
        </motion.div>

        {/* Promotional Quote Headline for Manpower Solutions */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]"
        >
          “Empowering Businesses with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-amber-300">
            Disciplined Security Personnel
          </span>{' '}
          &amp; Exemplary Deep Cleaning Solutions”
        </motion.h1>

        {/* Core Offerings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-950/90 border border-red-500/40 shadow-md text-xs sm:text-sm font-extrabold text-slate-200 backdrop-blur-md"
        >
          <span className="text-red-400">Core Services:</span>
          <span className="text-white font-black">Manned Physical Security</span>
          <span className="text-slate-400">&amp;</span>
          <span className="text-blue-300 font-black">Professional Deep Cleaning</span>
        </motion.div>

        {/* Subheadline with Local SEO Keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
        >
          Delivering police-verified physical security guards, industrial &amp; residential deep cleaning, electronic CCTV surveillance, and facility manpower across <strong className="text-white font-semibold">Hanamkonda, Warangal, and Kazipet</strong>.
        </motion.p>

        {/* Dual CTAs - Red & Blue combo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
        >
          <button
            onClick={onOpenQuoteModal}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 shadow-xl shadow-red-950/60 transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>Request 24-Hour Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onSelectTab ? onSelectTab('services') : null}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-blue-950/80 hover:bg-blue-900 border border-blue-500/60 rounded-2xl transition-all duration-300 shadow-sm cursor-pointer backdrop-blur-md"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-blue-300" />
          </button>
        </motion.div>

        {/* Micro-Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-800/80 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-300"
        >
          <div className="flex items-center justify-center gap-2 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <span className="font-bold text-white">{COMPANY_INFO.rating}</span>
              <span className="text-slate-400 ml-1">({COMPANY_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-sm">
            <div className="p-1.5 rounded-lg bg-red-950 text-red-400 border border-red-800/50">
              <Activity className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white">24/7 Emergency</span>
              <span className="block text-[11px] text-slate-400">Command Center Active</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 shadow-sm">
            <div className="p-1.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/50">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white">100% Police Verified</span>
              <span className="block text-[11px] text-slate-400">Vetted Staff Deployment</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
