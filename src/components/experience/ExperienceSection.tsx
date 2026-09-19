import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Career Journey"
          badgeIcon={Briefcase}
          title="Engineering"
          gradientWord="experience."
          subtitle="5+ years of delivering scalable backend architectures, high-availability REST APIs, and modern full-stack web applications."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12 border-l border-white/[0.12] space-y-12 ml-2 sm:ml-4">
          
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Node Dot on Timeline Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] lg:-left-[55px] top-6 w-4 h-4 rounded-full bg-[#06080e] border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.8)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              </div>

              {/* Experience Card */}
              <GlassCard className="p-6 sm:p-8 hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b border-dashed border-white/10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#ECEFF2] font-display">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#D8DCE2] mt-0.5 font-mono">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#8C93A0]">
                    <span className="flex items-center gap-1 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#CBD5E1]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#CBD5E1]" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/15 text-[#ECEFF2]">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-[#8C93A0] uppercase tracking-wider mb-2">
                    Key Architectural Responsibilities
                  </div>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D8DCE2]">
                      <CheckCircle2 className="w-4 h-4 text-[#ECEFF2] shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-white/10">
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.025] border border-white/[0.08] text-[#ECEFF2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
