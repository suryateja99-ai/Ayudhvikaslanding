import React, { useState } from 'react';
import { Star, Quote, Building, CheckCircle2, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-red-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>500+ VERIFIED ENTERPRISE CLIENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Operations Directors Say About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-500">
              Ayudh Vikas
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Read authentic reviews from IT park managers, industrial plant heads, and commercial facility directors across South India.
          </p>
        </div>

        {/* Testimonial Showcase Carousel Card */}
        <div className="my-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
            
            {/* Top Quote Icon Accent */}
            <div className="absolute top-6 right-8 text-blue-500/10 pointer-events-none">
              <Quote className="w-28 h-28" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6"
              >
                {/* Star rating & Industry badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-red-300 border border-blue-800">
                    {current.industry}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed italic">
                  "{current.quote}"
                </blockquote>

                {/* Metric Highlight */}
                <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-red-400">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Key Result: {current.metrics}</span>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-500/50"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{current.name}</h4>
                    <p className="text-xs text-slate-400">{current.designation} • <strong className="text-slate-300">{current.company}</strong></p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-800/80 mt-6">
              <div className="flex items-center gap-1">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-red-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Client Logo Ticker Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted Across Premier Commercial & Industrial Estates
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center hover:border-blue-500/40 transition-colors"
              >
                <span className="text-xs font-bold text-slate-300 block truncate">{client.name}</span>
                <span className="text-[10px] text-slate-500 block truncate">{client.type}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
