import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileCode2,
  Server,
  Cpu,
  Component,
  Code2,
  Layout,
  Palette,
  Smartphone,
  Repeat,
  Layers,
  Binary,
  GitBranch,
  Sparkles,
  ShieldCheck,
  Database,
  Network,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';
import { SKILL_CATEGORIES, CODE_SNIPPET_SAMPLES } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  FileCode2,
  Server,
  Cpu,
  Component,
  Code2,
  Layout,
  Palette,
  Smartphone,
  Repeat,
  Layers,
  Binary,
  GitBranch,
  Sparkles,
  ShieldCheck,
  Database,
  Network,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCodeTab, setActiveCodeTab] = useState<'backend' | 'frontend'>('backend');
  const [codeCopied, setCodeCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'strengths', label: 'Core Strengths' },
  ];

  const handleCopyCode = () => {
    const code = CODE_SNIPPET_SAMPLES[activeCodeTab].code;
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Technical Stack
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Skills & Architecture
            </h2>
            <p className="font-mono text-slate-400 text-sm sm:text-base mt-2">
              Mastery across Python, Django, DRF, React, and database-driven full-stack design.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12 mb-20 text-left">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2.5">
                    <span>{category.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{category.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {category.skills.length} Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-slate-700/90 transition-all shadow-lg hover:shadow-cyan-950/20 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-slate-800 transition-colors shadow-inner">
                          <Icon className="w-5 h-5" />
                        </div>
                        {skill.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 uppercase tracking-wider">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                        {skill.name}
                      </h4>

                      <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
                        <span>{skill.experience}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{skill.level}</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Code Craft Showcase: Backend vs Frontend */}
        <div className="mt-16 text-left">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                    Code Architecture
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  How I Write Clean Software
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Inspect real architectural patterns from my Django REST Framework and React implementations.
                </p>
              </div>

              {/* Code Toggle Tabs & Copy */}
              <div className="flex items-center gap-2">
                <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => setActiveCodeTab('backend')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                      activeCodeTab === 'backend'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python / DRF
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('frontend')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                      activeCodeTab === 'frontend'
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    React Hook / TypeScript
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  id="copy-code-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 cursor-pointer transition-colors"
                  title="Copy code snippet"
                >
                  {codeCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="mt-6 rounded-2xl bg-[#070a10] border border-slate-800/80 p-4 sm:p-5 overflow-x-auto">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
                <span className="text-slate-300 font-medium">
                  {CODE_SNIPPET_SAMPLES[activeCodeTab].title}
                </span>
                <span className="uppercase text-slate-500">
                  {CODE_SNIPPET_SAMPLES[activeCodeTab].language}
                </span>
              </div>

              <pre className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto">
                <code>{CODE_SNIPPET_SAMPLES[activeCodeTab].code}</code>
              </pre>
            </div>

            {/* Key takeaways */}
            <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-cyan-400">Key Highlights:</span>
              {activeCodeTab === 'backend' ? (
                <>
                  <span className="text-slate-300">✓ Prevents N+1 database queries</span>
                  <span className="text-slate-300">✓ Token permission checking</span>
                  <span className="text-slate-300">✓ Strict JSON response schemas</span>
                </>
              ) : (
                <>
                  <span className="text-slate-300">✓ Type-safe generic data state</span>
                  <span className="text-slate-300">✓ Graceful network error handling</span>
                  <span className="text-slate-300">✓ Re-fetching & memoization support</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
