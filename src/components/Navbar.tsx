import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, ArrowUpRight, Code2, Sparkles, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'approach', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Approach', href: '#approach' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLElement> | null, href: string) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 76;
      const rect = element.getBoundingClientRect();
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const targetTop = Math.max(0, rect.top + currentScroll - navOffset);

      // Perform primary smooth scroll
      try {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      } catch {
        window.scrollTo(0, targetTop);
      }

      // Also trigger scrollIntoView for iframe/mobile webview compatibility
      try {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } catch {
        // Fallback handled
      }

      // Re-verify after 100ms in case mobile drawer closing shifted the document layout
      setTimeout(() => {
        const freshRect = element.getBoundingClientRect();
        if (Math.abs(freshRect.top - navOffset) > 35) {
          const freshScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo({
            top: Math.max(0, freshRect.top + freshScroll - navOffset),
            behavior: 'smooth',
          });
        }
      }, 100);

      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'py-3 bg-[#0b0f17]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-2.5 sm:gap-3.5 text-left min-w-0"
          id="brand-logo-link"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors shadow-inner">
            <span className="font-mono text-xs font-bold tracking-wider text-cyan-400 group-hover:text-cyan-300">
              DS
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0b0f17]" />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors truncate">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wide uppercase truncate">
              Full Stack · BCA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-slate-800 border border-slate-700/80 -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Tablet compact navigation (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-1 px-2 py-1 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium tracking-tight transition-all ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Availability Status Pill - desktop only */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono">Available for Hire</span>
          </div>

          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white text-xs font-medium border border-slate-700/70 transition-all cursor-pointer"
            title="View Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            id="nav-contact-cta"
            className="hidden sm:flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            id="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 cursor-pointer active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop for easy closing - strictly behind drawer */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[56px] sm:top-[64px] bg-black/70 backdrop-blur-sm z-40 cursor-pointer"
              aria-hidden="true"
            />

            {/* Drawer menu - strictly in front of backdrop */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="fixed top-[56px] sm:top-[64px] left-0 right-0 z-50 bg-[#0b0f17]/98 border-b border-slate-800/90 backdrop-blur-2xl overflow-hidden px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1 mb-4 pt-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer touch-manipulation active:scale-[0.98] ${
                        isActive
                          ? 'bg-slate-800/90 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50' : 'bg-slate-600'}`} />
                        <span>{link.name}</span>
                      </span>
                      <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>BCA Graduate · Available for new roles</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-100 text-xs font-semibold active:scale-95 transition-all cursor-pointer touch-manipulation"
                  >
                    <FileDown className="w-4 h-4 text-cyan-400" />
                    <span>Resume</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold active:scale-95 transition-all cursor-pointer touch-manipulation"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
