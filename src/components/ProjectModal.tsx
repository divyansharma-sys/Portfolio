import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  Server,
  Layout,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Database,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0d121d] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              {project.category.toUpperCase()} PROJECT
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.completionYear}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-400 mb-5">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack pills */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Architecture Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Backend Architecture */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90">
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-semibold text-xs font-mono uppercase">
                <Server className="w-4 h-4" />
                <span>Backend & Database Layer</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.backendHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend Architecture */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90">
              <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-xs font-mono uppercase">
                <Layout className="w-4 h-4" />
                <span>Frontend & UI Layer</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.frontendHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 mb-8">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Core Functional Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-[10px] mt-0.5">0{idx + 1}.</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
