import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Code2, 
  Cpu, 
  Layers, 
  Box, 
  Database, 
  Globe, 
  PlugZap, 
  CreditCard, 
  Shield, 
  HardDrive, 
  Sparkles,
  LayoutGrid,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Zap,
  Repeat
} from 'lucide-react';
import { SERVICES_LIST, WHY_WORK_WITH_ME } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const ServicesSection: React.FC = () => {
  const serviceIcons: Record<string, React.ElementType> = {
    Server,
    Code2,
    Cpu,
    Layers,
    Box,
    Database,
    Globe,
    PlugZap,
    CreditCard,
    Shield,
    HardDrive,
    Sparkles,
  };

  const whyIcons: Record<string, React.ElementType> = {
    LayoutGrid,
    TrendingUp,
    Briefcase,
    CheckCircle2,
    Zap,
    Repeat,
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Core Capabilities"
          badgeIcon={Server}
          title="What I can build for"
          gradientWord="your product."
          subtitle="From zero-to-one backend architecture and webhook integrations to full-scale Next.js and MongoDB web applications."
        />

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-24">
          {SERVICES_LIST.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Server;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              >
                <GlassCard className="p-5 h-full flex flex-col justify-between group hover:border-white/20">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#ECEFF2] mb-1.5 group-hover:text-white transition-colors font-display">
                      {service.title}
                    </h4>
                    <p className="text-xs text-[#8C93A0] leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-dashed border-white/10 text-[10px] font-mono text-[#9CA3AF]">
                    {service.tech}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* "Why Work With Me" Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D8DCE2] uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/[0.03] border border-dashed border-white/15">
              Value Proposition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ECEFF2] mt-3 font-display">
              Why Work With Me
            </h3>
            <p className="text-xs sm:text-sm text-[#8C93A0] mt-2">
              Engineering discipline focused on long-term maintainability and business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((item, idx) => {
              const Icon = whyIcons[item.icon] || CheckCircle2;
              return (
                <GlassCard key={idx} className="p-6 flex flex-col justify-between group hover:border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#ECEFF2] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#ECEFF2] mb-1 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
