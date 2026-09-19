import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToElement } from '../../lib/utils';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#05050a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/20 flex items-center justify-center font-mono font-bold text-[#ECEFF2] text-xs shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="text-base font-bold tracking-tight text-[#ECEFF2] font-display">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8C93A0] max-w-sm leading-relaxed">
              Senior Software Engineer specializing in Node.js, Express.js, MongoDB, REST APIs, integrations, and modern full-stack applications.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.08] border border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.08] border border-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Contact"
                className="p-2.5 rounded-xl bg-white/[0.03] text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.08] border border-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8DCE2] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement(link.href.substring(1));
                  }}
                  className="text-[#8C93A0] hover:text-[#ECEFF2] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Technical Specs Col (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8DCE2] mb-4">
              System Architecture
            </h4>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-dashed border-white/10 font-mono text-[11px] text-[#8C93A0] space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Stack:</span>
                <span className="text-[#ECEFF2]">React + Vite + Tailwind</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Animations:</span>
                <span className="text-[#ECEFF2]">Motion GPU Accelerated</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Aesthetic:</span>
                <span className="text-[#ECEFF2] font-semibold">Off-Light Glass</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
