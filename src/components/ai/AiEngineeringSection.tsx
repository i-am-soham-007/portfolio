import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, UserCheck, Bot, Zap, ArrowRight, CheckCircle2, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const AiEngineeringSection: React.FC = () => {
  const aiPillars = [
    {
      title: "Rapid Prototyping & Vibe Coding",
      description: "Combining intuitive software design instincts with LLM synthesis to iterate on frontend ideas and architectural POCs in record time.",
      tag: "Velocity"
    },
    {
      title: "Edge-Case & Test Scaffolding",
      description: "Automating comprehensive unit and integration test matrices across weird payload boundaries, timeouts, and network drops.",
      tag: "Quality"
    },
    {
      title: "Architecture Brainstorming",
      description: "Stress-testing schema designs, comparing caching strategies, and exploring RFC specifications before implementing backend services.",
      tag: "Strategy"
    },
    {
      title: "Living Documentation & OpenAPI",
      description: "Instant generation of standardized OpenAPI specs, curl examples, and technical documentation from clean TypeScript interfaces.",
      tag: "Clarity"
    }
  ];

  return (
    <section id="ai-workflow" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Modern Developer Velocity"
          badgeIcon={Sparkles}
          title="Engineering with"
          gradientWord="AI & Vibe Coding."
          subtitle="How I leverage generative AI not as a replacement for software engineering fundamentals, but as a 10x force multiplier for architecture exploration and delivery."
        />

        {/* Visual Multiplier Equation Box */}
        <div className="mb-12">
          <GlassCard className="p-6 sm:p-10 bg-[#090b14]/90 border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Formula Steps */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono text-[#8C93A0] uppercase tracking-widest">
                  The Productivity Multiplier Formula
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#ECEFF2] font-display">
                  Senior Domain Judgment + AI Acceleration
                </h3>
                <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed">
                  Real engineering lies in knowing <strong className="text-[#ECEFF2]">what to build, how data should flow, and how systems fail</strong>. 
                  By integrating generative agents and LLMs into daily development, boilerplate disappears, feedback loops shorten, and focus stays on mission-critical business logic.
                </p>

                {/* Workflow Equation Graphic */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[#D8DCE2]">
                    <UserCheck className="w-4 h-4 text-[#ECEFF2]" />
                    <span>Human Architecture</span>
                  </div>
                  <span className="text-[#8C93A0] text-lg font-bold">+</span>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[#D8DCE2]">
                    <Bot className="w-4 h-4 text-[#ECEFF2]" />
                    <span>AI Synthesis</span>
                  </div>
                  <span className="text-[#8C93A0] text-lg font-bold">→</span>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.07] border border-dashed border-white/20 text-[#ECEFF2] font-semibold">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>High-Velocity Production Delivery</span>
                  </div>
                </div>
              </div>

              {/* Stat Highlights Card */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-black/50 border border-dashed border-white/10 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[#8C93A0]">Scaffolding Speed:</span>
                  <span className="text-[#ECEFF2] font-bold">5x Faster</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[#8C93A0]">Test Coverage:</span>
                  <span className="text-[#ECEFF2] font-bold">Comprehensive</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[#8C93A0]">Engineering Focus:</span>
                  <span className="text-[#ECEFF2] font-bold">System Quality</span>
                </div>
              </div>

            </div>
          </GlassCard>
        </div>

        {/* AI Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiPillars.map((pillar, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col justify-between group hover:border-white/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#D8DCE2] border border-white/10">
                    {pillar.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#8C93A0] group-hover:text-[#ECEFF2] transition-colors" />
                </div>
                <h4 className="text-base font-bold text-[#ECEFF2] mb-2 font-display">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Integrated in Workflow</span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
