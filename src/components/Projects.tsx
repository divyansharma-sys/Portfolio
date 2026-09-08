import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Server,
  Layout,
  Layers,
  ArrowRight,
  Code2,
  Cpu,
  Info,
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'frontend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Featured Work
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Projects
            </h2>
            <p className="font-mono text-slate-400 text-sm sm:text-base mt-2">
              Production-quality applications built with Python, Django, DRF, and React.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'frontend', label: 'Frontend' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0e1422] to-[#0a0e17] border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 transition-all shadow-xl hover:shadow-cyan-950/20 group relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.accentColor }}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-cyan-300 uppercase tracking-wide">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {project.completionYear}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="View Architectural Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Title and Subtitle */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architecture Highlights */}
                <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-1">
                    Architecture Highlights
                  </span>
                  {project.backendHighlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
