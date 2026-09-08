import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Code2,
  Terminal,
  Database,
  Layers,
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  Camera,
  Sparkles,
  ExternalLink,
  UploadCloud,
  CheckCircle2,
  Loader2,
  Trash2,
  FileDown,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  optimizeAndStoreImage,
  loadStoredProfilePhoto,
  removeStoredProfilePhoto,
} from '../utils/imageStorage';
import defaultProfilePic from '../assets/profile-pic.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(defaultProfilePic);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadStoredProfilePhoto()
      .then((saved) => {
        if (saved) {
          setCustomPhoto(saved);
        }
      })
      .catch((err) => console.warn('Failed to load profile photo:', err));
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setFeedback({ text: 'Please select an image (JPEG, PNG, WebP)', type: 'error' });
      setTimeout(() => setFeedback(null), 3000);
      return;
    }

    setIsProcessing(true);
    setFeedback(null);

    // Immediate preview for instant user feedback
    const objectUrl = URL.createObjectURL(file);
    setCustomPhoto(objectUrl);

    try {
      // Compress and persist safely across reloads in localStorage & IndexedDB
      const savedUrl = await optimizeAndStoreImage(file);
      setCustomPhoto(savedUrl);
      setFeedback({ text: 'Profile photo updated successfully!', type: 'success' });
      setTimeout(() => setFeedback(null), 3200);
    } catch (err) {
      console.warn('Optimization notice:', err);
      setFeedback({ text: 'Photo loaded for this session.', type: 'success' });
      setTimeout(() => setFeedback(null), 3000);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
    // Clear input value so selecting the same file again triggers onChange
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemovePhoto = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await removeStoredProfilePhoto();
    setCustomPhoto(defaultProfilePic);
    setFeedback({ text: 'Custom photo removed, restored to default.', type: 'success' });
    setTimeout(() => setFeedback(null), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-950/25 via-blue-900/15 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Strong Positioning & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Editorial Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 w-fit mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
                {PERSONAL_INFO.subTagline}
              </span>
            </div>

            {/* Main Heading Hierarchy */}
            <div className="space-y-1 mb-6">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                Hi, I'm
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                DIVYANSH <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">SHARMA</span>
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[2px] w-8 bg-cyan-400"></span>
                <h2 className="font-mono text-base sm:text-xl font-bold tracking-widest text-slate-300 uppercase">
                  FULL STACK DEVELOPER
                </h2>
              </div>
            </div>

            {/* Strong Positioning Statement */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                Building thoughtful web experiences with{' '}
                <span className="text-cyan-300 font-semibold">Python</span>,{' '}
                <span className="text-emerald-300 font-semibold">Django</span>,{' '}
                <span className="text-indigo-300 font-semibold">DRF</span> &{' '}
                <span className="text-sky-300 font-semibold">React</span>.
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs & Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                id="hero-explore-projects-cta"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-contact-cta"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/90 transition-all"
              >
                <span>Get in Touch</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                id="hero-resume-download-cta"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 font-semibold text-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all cursor-pointer"
                title="View and Download Resume / CV"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={copyEmail}
                id="hero-copy-email-btn"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-cta"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-mono border border-slate-700/80 transition-all cursor-pointer group"
                title="Open Divyansh's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Core Stack:</span>
              {[
                { name: 'Python', color: 'text-amber-300 border-amber-500/30 bg-amber-950/20' },
                { name: 'Django & DRF', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/20' },
                { name: 'React.js', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/20' },
                { name: 'JavaScript ES6+', color: 'text-yellow-300 border-yellow-500/30 bg-yellow-950/20' },
                { name: 'REST APIs', color: 'text-sky-300 border-sky-500/30 bg-sky-950/20' },
                { name: 'PostgreSQL', color: 'text-blue-300 border-blue-500/30 bg-blue-950/20' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-md border font-mono ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Hero Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative background glow that complements his photo's warm light */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-60" />

              {/* Main Portrait Glass Composition Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c121e] border border-slate-700/80 p-3 shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Header bar inside frame */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 text-[11px]">divyansh.portrait</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px]">
                      BCA 2024
                    </span>
                  </div>
                </div>

                {/* Portrait Container with Drag & Drop & Upload support */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 border transition-all duration-300 group ${
                    isDragging
                      ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-500/20'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Photo Display if available */}
                  {customPhoto ? (
                    <>
                      <img
                        src={customPhoto}
                        alt="Divyansh Sharma — Full Stack Developer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Subtle dark vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-65 pointer-events-none" />

                      {/* Top Action Controls on Hover */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <label
                          htmlFor="photo-upload-change"
                          className="px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700/80 cursor-pointer flex items-center gap-1.5 backdrop-blur-md shadow-md transition-colors"
                          title="Choose a different photo"
                        >
                          <Camera className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Change</span>
                        </label>
                        <input
                          id="photo-upload-change"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="p-1.5 rounded-md bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs border border-rose-800/80 cursor-pointer backdrop-blur-md shadow-md transition-colors"
                          title="Reset to default"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Default Stylized Developer Portrait & Dropzone */
                    <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#1b1f2b] via-[#10141f] to-[#0a0d14] text-center relative">
                      {/* Ambient Warm light accent */}
                      <div className="absolute top-6 right-6 w-24 h-36 rounded-full bg-gradient-to-b from-amber-400/25 to-amber-600/5 blur-xl pointer-events-none" />

                      {/* Editorial grid texture */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                      <div className="relative z-10 pt-4">
                        <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 border-2 border-cyan-400/40 p-1 flex items-center justify-center shadow-xl shadow-cyan-950/50 group-hover:border-cyan-400 transition-colors">
                          <div className="w-full h-full rounded-xl bg-[#0d121d] flex flex-col items-center justify-center">
                            <Code2 className="w-9 h-9 text-cyan-400 mb-1" />
                            <span className="font-display text-sm font-bold text-white tracking-wider">DS</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 backdrop-blur-md">
                        <p className="font-display font-bold text-white text-base">Divyansh Sharma</p>
                        <p className="font-mono text-xs text-cyan-400 mb-1">Full Stack Developer & BCA</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed mb-3.5">
                          Python · Django · DRF · React.js
                        </p>

                        <label
                          htmlFor="photo-upload-main"
                          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs cursor-pointer transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98]"
                        >
                          <Camera className="w-4 h-4" />
                          <span>Select Profile Photo</span>
                        </label>
                        <input
                          id="photo-upload-main"
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <p className="mt-2 text-[10px] font-mono text-slate-500">
                          Click to browse or drag & drop photo here
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Processing Overlay */}
                  {isProcessing && (
                    <div className="absolute inset-0 z-30 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-cyan-300">
                      <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                      <span className="text-xs font-mono">Optimizing photo...</span>
                    </div>
                  )}

                  {/* Drag and Drop Active Overlay */}
                  {isDragging && (
                    <div className="absolute inset-0 z-30 bg-cyan-950/85 backdrop-blur-sm border-2 border-dashed border-cyan-400 flex flex-col items-center justify-center gap-2 text-cyan-200">
                      <UploadCloud className="w-10 h-10 animate-bounce text-cyan-300" />
                      <span className="text-xs font-semibold">Drop photo to upload</span>
                      <span className="text-[10px] text-cyan-400/80 font-mono">JPG, PNG, WebP</span>
                    </div>
                  )}

                  {/* Status / Feedback Pill */}
                  <AnimatePresence>
                    {feedback && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`absolute top-3 inset-x-3 z-40 p-2 rounded-lg text-xs font-medium backdrop-blur-md flex items-center justify-center gap-1.5 shadow-lg ${
                          feedback.type === 'success'
                            ? 'bg-emerald-950/90 border border-emerald-500/40 text-emerald-200'
                            : 'bg-rose-950/90 border border-rose-500/40 text-rose-200'
                        }`}
                      >
                        {feedback.type === 'success' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : null}
                        <span>{feedback.text}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Floating Badge 1: Backend Architecture */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 shadow-lg pointer-events-none">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono text-slate-200">Django & DRF</span>
                  </div>

                  {/* Floating Badge 2: Quick Status Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 border border-slate-800/90 backdrop-blur-md flex items-center justify-between shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Divyansh Sharma</span>
                      <span className="text-[10px] font-mono text-cyan-400">Full Stack Engineer</span>
                    </div>
                    <label
                      htmlFor="photo-upload-bottom"
                      title="Upload or change profile photo"
                      className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </label>
                    <input
                      id="photo-upload-bottom"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Footer specs inside card */}
                <div className="mt-3 pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Ready for Production
                  </span>
                  <span>REST · DRF · React</span>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/90 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Specialization</span>
                  <span className="text-xs font-semibold text-slate-100">REST APIs & Full Stack</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
