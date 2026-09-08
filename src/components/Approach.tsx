import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Workflow,
} from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Code2,
  Rocket,
};

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Subtle backdrop */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Methodology
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Development Approach
            </h2>
            <p className="font-mono text-slate-400 text-sm sm:text-base mt-2">
              A structured 4-phase lifecycle turning business goals into robust software.
            </p>
          </div>

          {/* Workflow Sequence Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-cyan-400 font-semibold">Discover</span>
            <span>→</span>
            <span className="text-emerald-400 font-semibold">Design</span>
            <span>→</span>
            <span className="text-indigo-400 font-semibold">Develop</span>
            <span>→</span>
            <span className="text-amber-400 font-semibold">Deploy</span>
          </div>
        </div>

        {/* 4-Column Structured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {APPROACH_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Workflow;
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.step}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-950/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-slate-700 group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Phase {step.step} · {step.phase}
                  </span>

                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">
                    Key Outputs
                  </span>
                  {step.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1320] to-slate-900 border border-slate-800 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Engineering Guarantee
            </span>
            <h4 className="font-display text-xl font-bold text-white">
              Every feature starts with clean data contracts and ends with verified tests.
            </h4>
            <p className="text-xs text-slate-400">
              No guesswork—every Django model migration and React state transition is mapped systematically.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 tracking-wide transition-colors shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
