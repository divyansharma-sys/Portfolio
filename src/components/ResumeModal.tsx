import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  MapPin,
  ExternalLink,
  Linkedin,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, TIMELINE_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainTextResume = () => {
    const text = `
DIVYANSH SHARMA
Full Stack Developer | BCA Graduate
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFILE SUMMARY:
${PERSONAL_INFO.detailedBio}

TECHNICAL SKILLS:
- Backend: Python, Django, Django REST Framework (DRF), REST APIs, JWT Auth
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
- Core Strengths: Database Normalization, Query Optimization, API Architecture, Git

EDUCATION:
Bachelor of Computer Applications (BCA) — 2021 - 2024
Key Coursework: Data Structures & Algorithms, DBMS, OOP, Web Technologies

FEATURED PROJECTS:
${PROJECTS_DATA.map((p) => `- ${p.title} (${p.technologies.join(', ')}): ${p.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer print:hidden"
        />

        {/* Resume Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0c1017] border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[92vh] overflow-y-auto print:max-h-none print:border-none print:bg-white print:text-black print:p-8 text-left"
        >
          {/* Action Bar (Hidden when printing) */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 print:hidden mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Curriculum Vitae
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400">Divyansh Sharma</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/Divyansh_Sharma_Resume.md"
                download="Divyansh_Sharma_Resume.md"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono border border-cyan-500/30 cursor-pointer transition-colors"
                title="Download Resume Markdown file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .MD</span>
              </a>

              <a
                href="/Divyansh_Sharma_Resume.txt"
                download="Divyansh_Sharma_Resume.txt"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 cursor-pointer transition-colors"
                title="Download Plain Text file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .TXT</span>
              </a>

              <button
                onClick={copyPlainTextResume}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 cursor-pointer transition-colors"
                title="Copy Plain Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide cursor-pointer transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close resume"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700 ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Body */}
          <div className="space-y-8 font-sans">
            {/* Header Info */}
            <div className="border-b border-slate-800 pb-6 print:border-slate-300">
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
                DIVYANSH SHARMA
              </h1>
              <p className="font-mono text-cyan-400 print:text-blue-600 text-sm font-semibold tracking-wide uppercase mt-1">
                Full Stack Developer · BCA Graduate
              </p>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 mt-2 max-w-2xl leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              {/* Contact meta */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-slate-400 print:text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                  India (Remote Available)
                </span>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 print:text-blue-700 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/divyansh-sharma-a6bb48434</span>
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-600 font-bold mb-2">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                {PERSONAL_INFO.detailedBio}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-600 font-bold mb-3">
                Core Competencies & Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 print:text-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    Backend Architecture:
                  </span>
                  <span>Python, Django, Django REST Framework (DRF), RESTful API Design, JWT Authentication, Object-Relational Mapping (ORM).</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    Frontend Engineering:
                  </span>
                  <span>HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Web Design, Tailwind CSS, State Management.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    Database & Performance:
                  </span>
                  <span>PostgreSQL, SQLite, Schema Normalization, Relational Modeling, Query Optimization (select_related).</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    Development Workflow:
                  </span>
                  <span>Git, GitHub Version Control, Agile Sprints, API Documentation (OpenAPI/Swagger), Postman.</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-600 font-bold mb-3">
                Education
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 print:bg-transparent print:border-none print:p-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                    2021 — 2024
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-slate-600 mb-2">
                  Undergraduate Degree in Computer Applications
                </p>
                <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                  Focus on Data Structures, Algorithms, Relational Database Management Systems (DBMS), Object-Oriented Programming, and Web Engineering.
                </p>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-600 font-bold mb-3">
                Key Engineering Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 print:bg-transparent print:border-b print:border-slate-200 print:p-0 print:pb-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm text-white print:text-black">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 print:text-blue-600">
                        {proj.completionYear}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400 print:text-slate-600 mb-2">
                      {proj.subtitle} | Technologies: {proj.technologies.join(', ')}
                    </p>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed mb-2">
                      {proj.description}
                    </p>
                    <ul className="text-[11px] text-slate-400 print:text-slate-700 space-y-1 pl-4 list-disc">
                      {proj.backendHighlights.map((bh, idx) => (
                        <li key={idx}>{bh}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
