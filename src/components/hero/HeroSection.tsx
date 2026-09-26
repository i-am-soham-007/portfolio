import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToElement } from '../../lib/utils';
import { TechTicker } from './TechTicker';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassCard } from '../ui/GlassCard';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#06070a] flex flex-col justify-between overflow-hidden pt-28 pb-0 lg:pt-36"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-8 sm:py-12 w-full">
          
          {/* Typography, Badges, CTAs, Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            {/* Status Pill Badge */}
            <div className="bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6 hover:border-white/20 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-default">
              <span className="text-xs sm:text-sm font-mono text-[#8C93A0]">
                Senior Software Engineer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-[#ECEFF2] leading-[1.04] tracking-tight mb-6 max-w-3xl">
              <span className="text-gradient-offwhite">
                Node.js & TypeScript
              </span>{' '}
              Expert
            </h1>

            {/* Sub-headline / Manifesto */}
            <p className="text-base sm:text-lg text-[#8C93A0] max-w-xl leading-relaxed mb-8">
              Specialized in building high-throughput <strong className="text-[#ECEFF2] font-medium">Node.js & TypeScript</strong> backends, 
              robust <strong className="text-[#ECEFF2] font-medium">Express & MongoDB</strong> systems, 
              and scalable, resilient REST APIs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <MagneticButton
                variant="glow"
                size="lg"
                onClick={() => scrollToElement('projects')}
                className="rounded-full text-sm"
              >
                <span>View Production Systems</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => scrollToElement('contact')}
                className="rounded-full text-sm"
              >
                <span>Get in Touch</span>
              </MagneticButton>
            </div>

          </motion.div>

          {/* Right Side: Live Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex w-full h-full justify-center items-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-lg">
              <GlassCard className="p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-transform duration-300" glowOnHover={true}>
                <div className="text-4xl sm:text-5xl font-bold font-display text-[#ECEFF2] mb-2">5+ Years</div>
                <div className="text-sm text-[#8C93A0]">Professional Experience</div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-transform duration-300" glowOnHover={true}>
                <div className="text-4xl sm:text-5xl font-bold font-display text-cyan-400 mb-2">Node + TS</div>
                <div className="text-sm text-[#8C93A0]">Main Tech Stack</div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8 sm:col-span-2 flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-transform duration-300" glowOnHover={true}>
                <div className="text-4xl sm:text-5xl font-bold font-display text-[#ECEFF2] mb-2">REST APIs</div>
                <div className="text-sm text-[#8C93A0]">Core Architecture Focus</div>
              </GlassCard>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Tech Ticker Strip */}
      <div className="relative z-10 w-full mt-8">
        <TechTicker />
      </div>
    </section>
  );
};
