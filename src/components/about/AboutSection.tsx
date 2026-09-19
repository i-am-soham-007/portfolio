import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  CreditCard,
  Code2
} from 'lucide-react';
import { PHILOSOPHY_STEPS, PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from '../ui/SectionWrapper';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Layers,
    Cpu,
    Zap,
  };

  const focusPoints = [
    { title: "Backend-First Resilience", desc: "Crafting scalable Node.js & Express systems with clean MVC patterns and robust error isolation.", icon: Server },
    { title: "RESTful API Architecture", desc: "Semantic endpoints with predictable contracts, DTO validation, and standardized JSON payloads.", icon: Layers },
    { title: "Database Engineering", desc: "High-performance MongoDB aggregation pipelines, compound indexing, and relational schemas.", icon: Database },
    { title: "Payment & Webhook Ingestion", desc: "Cryptographic signature validation, deduplication locks, and idempotent event listeners.", icon: CreditCard },
    { title: "Modern Full-Stack Delivery", desc: "Connecting fast backends with responsive, accessible Next.js & React client interfaces.", icon: Code2 },
    { title: "AI-Assisted Engineering", desc: "Leveraging generative tools to accelerate prototyping, test coverage, and architecture reviews.", icon: Sparkles },
  ];

  return (
    <SectionWrapper id="about" theme="terminal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Engineering Mindset"
          badgeIcon={Compass}
          title="More than just"
          gradientWord="writing code."
          subtitle="A systems-level philosophy prioritizing operational stability, clean API contracts, and scalable backend architecture."
        />

        {/* Story / Architecture Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Manifesto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-4 text-sm sm:text-base text-[#8C93A0] leading-relaxed relative z-10">
                <p>
                  I'm <strong className="text-[#ECEFF2] font-semibold">{PERSONAL_INFO.name}</strong>, a Senior Software Engineer who approaches development with an unwavering <strong className="text-[#ECEFF2] font-semibold">backend-first mindset</strong>.
                </p>
                <p>
                  While I build complete full-stack applications with <strong className="text-[#ECEFF2] font-semibold">Next.js and React</strong>, 
                  my core expertise is focused on <strong className="text-[#ECEFF2] font-semibold">Node.js, Express.js, and MongoDB</strong> distributed backend systems. 
                  I architect the invisible foundations that make applications fast, secure, and resilient under real traffic.
                </p>
                <p>
                  My engineering philosophy is rooted in building deterministic systems: robust database schema design, bulletproof error handling, secure token-based authentication, and payment flows that never lose state.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8C93A0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Production Mindset</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>5+ Years Specialized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero-Downtime Releases</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Metrics / Focus Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusPoints.slice(0, 4).map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="p-5 h-full flex flex-col justify-between hover:border-white/20 transition-all">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] mb-3">
                      <pt.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-display text-[#ECEFF2] mb-1">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-[#8C93A0] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4-Step Engineering Delivery Philosophy */}
        <div className="mt-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#ECEFF2]">
                Engineering Delivery Lifecycle
              </h3>
              <p className="text-xs text-[#8C93A0]">
                How complex requirements transform into battle-tested production services
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#8C93A0] hidden sm:inline">
              ISO-Standard Patterns
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] || Zap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                >
                  <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-[#8C93A0]">
                          PHASE_0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-base font-bold font-display text-[#ECEFF2] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#8C93A0] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-dashed border-white/10">
                      <span className="text-[11px] font-mono text-[#8C93A0]">
                        {step.tagline}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
