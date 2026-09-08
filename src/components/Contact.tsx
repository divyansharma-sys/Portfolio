import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Full Stack Web App',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 overflow-hidden scroll-mt-20">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
              Get in Touch
            </span>
            <span className="w-6 h-[1.5px] bg-cyan-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something Remarkable Together.
          </h2>

          <p className="font-mono text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for full-time software engineering roles, contract development, and high-impact full-stack freelance projects.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Status Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-slate-800/90 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">Current Availability</h3>
                  <p className="text-xs font-mono text-emerald-400">Ready for Immediate Engagement</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a full-stack Django + React MVP, an API redesign with DRF, or a dedicated full-time developer, I am ready to contribute.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                Direct Communication
              </span>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20for%20Divyansh%20Sharma`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Open in Email Client</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Profiles</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/80"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/80"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0d1320] to-slate-950 border border-slate-800/90 shadow-2xl relative">
              <h3 className="font-display text-xl font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out your details below and I'll get back to you promptly.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-emerald-200/80 mt-0.5">
                      Thank you for reaching out. Divyansh will review your message shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                  >
                    Nature of Inquiry
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Full Stack Web App">Full Stack Application (Django + React)</option>
                    <option value="Backend / REST API">Backend Architecture & DRF APIs</option>
                    <option value="Frontend Development">Frontend Development (React.js)</option>
                    <option value="Full-Time Engineering Role">Full-Time Software Engineer Hiring</option>
                    <option value="Contract / Freelance">Freelance Collaboration</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                  >
                    Project Details or Role Description *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell me about your product requirements, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Send Project Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
