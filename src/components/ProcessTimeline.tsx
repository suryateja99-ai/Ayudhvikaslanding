import React, { useState } from 'react';
import { 
  SearchCheck, FileText, Zap, Activity, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

interface ProcessTimelineProps {
  onOpenQuoteModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuoteModal }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-blue-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-red-300">
            <Clock className="w-3.5 h-3.5 text-red-400" />
            <span>48-HOUR ONBOARDING WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Onboard Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-500">
              Facility in 4 Steps
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            From initial site vulnerability audit to full police-verified guard deployment in 24 to 48 hours.
          </p>
        </div>

        {/* Step Selector Horizontal Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setSelectedStep(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-red-500 shadow-xl shadow-red-500/10'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStepLine"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-900 rounded-t-2xl"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${
                    isSelected ? 'text-red-400' : 'text-slate-600'
                  }`}>
                    {step.number}
                  </span>

                  <div className={`p-2 rounded-xl border ${
                    isSelected ? 'bg-blue-950 border-red-500/40' : 'bg-slate-900 border-slate-800'
                  }`}>
                    {getIcon(step.icon)}
                  </div>
                </div>

                <h3 className={`text-sm sm:text-base font-bold ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {step.title}
                </h3>

                <span className="text-[11px] text-slate-400 block mt-1">
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded Showcase */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Detail Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-red-300 text-xs font-mono font-bold border border-blue-800">
                  STEP {PROCESS_STEPS[selectedStep].number} OF 04
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {PROCESS_STEPS[selectedStep].title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {PROCESS_STEPS[selectedStep].description}
                </p>

                {/* Key Deliverables */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Expected Phase Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROCESS_STEPS[selectedStep].deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 text-white font-bold text-xs shadow-lg hover:shadow-red-500/25 transition-all cursor-pointer"
                  >
                    <span>Schedule Step 1 Site Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-slate-400">DEPLOYMENT STATUS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 font-mono font-bold">
                      READY TO LAUNCH
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Vulnerability Risk Score</span>
                      <span className="font-bold text-red-400">Audited & Mitigated</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Statutory Approvals</span>
                      <span className="font-bold text-blue-400">100% Verified</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>On-Site Supervisor</span>
                      <span className="font-bold text-white">Assigned On Call</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-[11px] text-red-200 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Deployment Timeline Guarantee: 24 to 48 Hours max.</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
