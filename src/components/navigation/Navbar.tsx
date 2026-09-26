import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToElement } from '../../lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    scrollToElement(id);
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 text-white group hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            title="Soham Rathod — Senior Software Engineer"
          >
            <div className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center font-mono font-bold text-xs text-white">
              {PERSONAL_INFO.monogram}
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-[#ECEFF2] group-hover:text-white transition-colors">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
          </a>

          {/* Center (Desktop): Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-full
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.04]'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}

            {/* Let's Talk Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-white/90 transition-all shadow-[0_2px_12px_rgba(255,255,255,0.15)] whitespace-nowrap group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Right: Quick Social & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#8C93A0] hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#8C93A0] hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl bg-[#0d0f18]/95 p-6 lg:hidden border border-white/15 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-medium transition-all
                      ${
                        isActive
                          ? 'bg-white/[0.1] text-white border border-white/20 font-bold'
                          : 'text-[#8C93A0] hover:bg-white/[0.04] hover:text-white'
                      }
                    `}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-[#8C93A0] hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-[#8C93A0] hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-tight"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
