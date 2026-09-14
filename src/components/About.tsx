import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Database,
  ArrowRight,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'backend' | 'fullstack'>('philosophy');

  const principles = [
    {
      title: 'Architectural Rigor',
      desc: 'Clean database normalization, atomic transactions, and modular Django apps over quick-and-dirty hacks.',
      icon: Server,
    },
    {
      title: 'API-First Mindset',
      desc: 'Designing intuitive RESTful contracts with Django REST Framework before connecting responsive React views.',
      icon: Layers,
    },
    {
      title: 'Security & Reliability',
      desc: 'Token-based authentication, role permissions, payload validation, and defensive data access.',
      icon: ShieldCheck,
    },
    {
      title: 'BCA Foundation',
      desc: 'Deep theoretical backing in data structures, relational database management systems (DBMS), and OOP.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                About Me
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              BCA Graduate & Developer
            </h2>
            <p className="font-mono text-slate-400 text-sm sm:text-base mt-2">
              Focused on building practical, production-ready digital solutions.
            </p>
          </div>

          {/* Quick Credential Pill */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 w-fit">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <div className="text-left">
              <p className="text-xs font-semibold text-white">Bachelor of Computer Applications</p>
              <p className="text-[11px] font-mono text-slate-400">Class of 2024 · Computer Science Core</p>
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed text-left">
            <p className="text-lg text-slate-200 font-medium">
              Hello! I'm <span className="text-white font-semibold">Divyansh Sharma</span>, a passionate Full Stack Developer and BCA graduate dedicated to bridging robust backend mechanics with seamless modern interfaces.
            </p>

            <p>
              My journey began with a curiosity about what happens beneath the surface of digital products. Throughout my Bachelor of Computer Applications coursework, I honed a deep foundation in relational database management systems (DBMS), Object-Oriented Programming, and algorithmic problem-solving. This academic background naturally steered me toward Python and Django.
            </p>

            <p>
              Today, I specialize in crafting full-stack architectures. I design RESTful APIs using <span className="text-emerald-300 font-medium">Django REST Framework</span> with strict serializer validation, JWT authorization, and normalized database schemas, while orchestrating interactive frontends using <span className="text-cyan-300 font-medium">React.js</span>, modern JavaScript, and Tailwind CSS.
            </p>

            <p>
              Whether it's optimizing database queries with <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300">select_related</code>, structuring role-based permissions, or crafting accessible responsive components, I focus on engineering practical software that scales reliably.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
              {[
                { label: 'Primary Stack', val: 'Django + React' },
                { label: 'API Style', val: 'RESTful / DRF' },
                { label: 'Security', val: 'JWT / RBAC' },
                { label: 'Degree', val: 'BCA (2024)' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">{item.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 mt-1 block">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Core Pillars Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0d121c] border border-slate-800 shadow-xl text-left">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Engineering Principles</span>
              </h3>

              <div className="space-y-4">
                {principles.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote / Dedication Box */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-left">
              <p className="text-xs sm:text-sm text-cyan-200/90 italic leading-relaxed">
                "Clean code isn't just about syntax; it's about respecting the next developer and delivering an effortless experience to the end user."
              </p>
              <span className="text-[11px] font-mono text-cyan-400 block mt-2 font-medium">
                — Divyansh Sharma
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
