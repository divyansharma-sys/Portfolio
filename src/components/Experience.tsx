import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Trajectory
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Education & Experience
            </h2>
            <p className="font-mono text-slate-400 text-sm sm:text-base mt-2">
              Academic credentials and practical software engineering milestones.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 w-fit">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>BCA Graduate · Computer Applications</span>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-slate-800/90 ml-4 sm:ml-8 space-y-12 text-left">
          {TIMELINE_DATA.map((item, index) => {
            const isEducation = item.roleType === 'Education';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Bullet */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0b0f17] border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0c111c] border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl">
                  {/* Top Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                          isEducation
                            ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                            : 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300'
                        }`}
                      >
                        {item.roleType}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 mb-4">
                    {item.organization}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                      Key Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Coursework Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
