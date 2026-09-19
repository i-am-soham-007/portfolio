import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, ShieldCheck, Cpu, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { scrollToElement } from '../../lib/utils';
import { HeroVisual } from './HeroVisual';
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

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6 sm:py-10">
          
          {/* Left Column: Typography, Badges, CTAs, Stats (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="bg-[#0d0f18]/80 backdrop-blur-xl border border-white/10 rounded-full p-1 pl-1 pr-4 inline-flex items-center gap-2.5 mb-6 hover:border-white/20 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-default">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available 2026
              </span>
              <span className="text-xs sm:text-sm font-mono text-[#8C93A0]">
                Senior Software Engineer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-[#ECEFF2] leading-[1.02] tracking-tight mb-6">
              Architecting Resilient{' '}
              <span className="text-gradient-offwhite">
                Backend Systems
              </span>{' '}
              & Scalable APIs.
            </h1>

            {/* Sub-headline / Manifesto */}
            <p className="text-sm sm:text-base text-[#8C93A0] max-w-2xl leading-relaxed mb-8">
              Specialized in building high-throughput <strong className="text-[#ECEFF2] font-medium">Node.js & Express</strong> backends, 
              robust <strong className="text-[#ECEFF2] font-medium">MongoDB</strong> distributed clusters, 
              idempotent payment webhook pipelines, and modern full-stack web applications.
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

            {/* Live Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl">
              <GlassCard className="p-4" glowOnHover={false}>
                <div className="text-2xl sm:text-3xl font-bold font-display text-[#ECEFF2]">5+ Years</div>
                <div className="text-xs text-[#8C93A0] mt-0.5">Professional Backend</div>
              </GlassCard>

              <GlassCard className="p-4" glowOnHover={false}>
                <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">99.99%</div>
                <div className="text-xs text-[#8C93A0] mt-0.5">Webhook Reliability</div>
              </GlassCard>

              <GlassCard className="p-4 col-span-2 sm:col-span-1" glowOnHover={false}>
                <div className="text-2xl sm:text-3xl font-bold font-display text-[#ECEFF2]">MERN & Nest</div>
                <div className="text-xs text-[#8C93A0] mt-0.5">Core Architecture</div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal IDE (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <HeroVisual />
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
