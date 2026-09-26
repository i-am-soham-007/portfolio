import React from 'react';
import { motion } from 'motion/react';
import { Cpu, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { SectionWrapper } from '../ui/SectionWrapper';

interface TechSkill {
  name: string;
  category: string;
  proficiency: number;
  years: string;
  level: string;
  gradient?: string;
  isFeatured?: boolean;
}

// Unified progress bar gradient copied directly from PHP & CodeIgniter
const PROGRESS_BAR_GRADIENT = 'linear-gradient(90deg, #64748b 0%, #94a3b8 50%, #cbd5e1 100%)';

const TECH_SKILLS: TechSkill[] = [
  {
    name: 'Node.js & Express.js',
    category: 'Backend & High-Throughput APIs',
    proficiency: 98,
    years: '5+ Yrs',
    level: 'Expert',
    gradient: PROGRESS_BAR_GRADIENT,
    isFeatured: true,
  },
  {
    name: 'TypeScript (Strict Type-Safety & DTOs)',
    category: 'Backend Type-Safety & Contracts',
    proficiency: 94,
    years: '4+ Yrs',
    level: 'Expert',
    gradient: PROGRESS_BAR_GRADIENT,
    isFeatured: true,
  },
  {
    name: 'MongoDB (Mongoose, Aggregates & Sharding)',
    category: 'NoSQL Database Engineering',
    proficiency: 95,
    years: '5+ Yrs',
    level: 'Expert',
    gradient: PROGRESS_BAR_GRADIENT,
    isFeatured: true,
  },
  {
    name: 'REST API Architecture & Microservices',
    category: 'Backend Protocol & Design',
    proficiency: 96,
    years: '5+ Yrs',
    level: 'Expert',
    gradient: PROGRESS_BAR_GRADIENT,
    isFeatured: true,
  },
  {
    name: 'PHP & CodeIgniter',
    category: 'Server-Side Enterprise Stack',
    proficiency: 85,
    years: '4+ Yrs',
    level: 'Experienced',
    gradient: PROGRESS_BAR_GRADIENT,
    isFeatured: true,
  },
  {
    name: 'SQL Databases (PostgreSQL / MySQL)',
    category: 'Relational DB Engineering',
    proficiency: 86,
    years: '3+ Yrs',
    level: 'Advanced',
    gradient: PROGRESS_BAR_GRADIENT,
  },
  {
    name: 'Git, GitHub, CI/CD & Docker Deployment',
    category: 'DevOps & Version Control',
    proficiency: 90,
    years: '5+ Yrs',
    level: 'Advanced',
    gradient: PROGRESS_BAR_GRADIENT,
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <SectionWrapper id="skills" theme="matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Competencies"
          badgeIcon={Cpu}
          title="Skills calibrated for"
          gradientWord="scale and reliability."
          subtitle="Real-world production proficiency across Node.js backend architectures, TypeScript systems, and database engineering."
        />

        {/* Master Skills Glass Card Container */}
        <GlassCard className="p-6 sm:p-10 relative overflow-hidden bg-[#0a0c16]/80">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-dashed border-white/10 relative z-10">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#ECEFF2]">
                Engineering Stack & Runtime Matrix
              </h3>
              <p className="text-xs text-[#8C93A0]">
                Precision-engineered across 5+ years of production experience
              </p>
            </div>
            
            {/* Legend pills */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-[#ECEFF2]">
                Core Specialty
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-[#8C93A0]">
                Senior Level
              </span>
            </div>
          </div>

          {/* 2-Column Gauge Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
            {TECH_SKILLS.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {tech.isFeatured && (
                      <span className="p-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                        <Star className="w-3 h-3 fill-amber-400" />
                      </span>
                    )}
                    <span className="text-xs sm:text-sm font-semibold text-[#ECEFF2] truncate">
                      {tech.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-[#8C93A0]">
                      {tech.years}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#ECEFF2]">
                      {tech.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Precision Progress Bar */}
                <div className="relative w-full py-1">
                  <div className="relative w-full h-2 rounded-full bg-white/[0.05] border border-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.08 + index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: tech.gradient }}
                      className="h-full rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-40" />
                    </motion.div>
                  </div>
                </div>

                {/* Subtitle / Category metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8C93A0] mt-1.5">
                  <span className="truncate">{tech.category}</span>
                  <span className="text-[#ECEFF2] shrink-0 font-medium">{tech.level}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-10 pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8C93A0] relative z-10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Full-lifecycle production readiness across Node.js, TypeScript & backend architectures.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#ECEFF2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                REST & Webhooks
              </span>
              <span className="flex items-center gap-1.5 text-[#ECEFF2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                ACID & Indexes
              </span>
            </div>
          </div>
        </GlassCard>

      </div>
    </SectionWrapper>
  );
};
