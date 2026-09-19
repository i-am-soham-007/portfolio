import React from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  CreditCard, 
  ShieldCheck, 
  RefreshCw, 
  Database, 
  CloudLightning 
} from 'lucide-react';
import { INTEGRATION_CAPABILITIES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from '../ui/SectionWrapper';

export const IntegrationsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Network,
    CreditCard,
    ShieldCheck,
    RefreshCw,
    Database,
    CloudLightning,
  };

  return (
    <SectionWrapper id="integrations" theme="circuit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Integration & Distributed Pipelines"
          badgeIcon={Network}
          title="Integrations are where"
          gradientWord="systems come alive."
          subtitle="Connecting complex distributed services with resilient webhook receivers, payment processing lifecycles, and hardened API gateways."
        />

        {/* Integration Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATION_CAPABILITIES.map((cap, index) => {
            const Icon = iconMap[cap.icon] || Network;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] mb-4 group-hover:border-white/30 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#ECEFF2] mb-2 font-display group-hover:text-white transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed mb-4">
                      {cap.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-white/10">
                    {cap.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.025] border border-white/[0.06] text-[#D8DCE2]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};
