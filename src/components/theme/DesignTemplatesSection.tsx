import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Sparkles, 
  Check, 
  Sliders, 
  Zap, 
  ArrowUpRight, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Code2 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';

export const DesignTemplatesSection: React.FC = () => {
  const { currentTemplateId, currentTemplate, setTemplate, openStudio, allTemplates } = useTheme();

  return (
    <section id="design-templates" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Design System Architectures"
          badgeIcon={Palette}
          title="Modular portfolio"
          gradientWord="design templates."
          subtitle="Explore all 6 handcrafted design templates and aesthetic paradigms. Switch themes dynamically across the entire website with zero reload."
        />

        {/* Action Header Banner */}
        <div className="mb-12">
          <GlassCard className="p-6 sm:p-8 bg-[#090b14]/90 border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-[#ECEFF2] shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                <Sliders className="w-6 h-6 text-[#ECEFF2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#ECEFF2] font-display">
                    Active System Theme: <span className="text-[#D8DCE2] font-mono">{currentTemplate.name}</span>
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-[#D8DCE2] border border-white/15">
                    Live Reactive
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#8C93A0] mt-1">
                  Click any template card below to switch the portfolio's color scheme, liquid background, borders, and typography tokens.
                </p>
              </div>
            </div>

            <MagneticButton
              variant="glow"
              size="md"
              onClick={openStudio}
              className="font-mono text-xs tracking-wider uppercase font-semibold"
            >
              <Sliders className="w-4 h-4" />
              <span>Launch Theme Studio</span>
            </MagneticButton>
          </GlassCard>
        </div>

        {/* 6 Templates Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTemplates.map((template, idx) => {
            const isCurrent = currentTemplateId === template.id;

            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard
                  className={`
                    p-6 h-full flex flex-col justify-between group transition-all cursor-pointer
                    ${
                      isCurrent
                        ? 'border-white/30 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.06)] ring-1 ring-white/20 bg-[#0b0d18]/95'
                        : 'hover:border-white/20'
                    }
                  `}
                >
                  <div>
                    {/* Header Top info */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'
                          : 'bg-white/5 text-zinc-400 border border-white/5'
                      }`}>
                        {isCurrent ? '● Active Live Theme' : template.badge}
                      </span>

                      <span className="text-[11px] font-mono text-zinc-400">
                        Template 0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {template.name}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {template.tagline}
                    </p>

                    {/* Mini Color Swatches */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        Core Palette
                      </div>
                      <div className="flex items-center gap-1.5">
                        {template.palette.map((swatch, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex-1 h-5 rounded-md border border-white/10 transition-transform group-hover:scale-105"
                            style={{ backgroundColor: swatch.hex }}
                            title={`${swatch.name} (${swatch.hex}): ${swatch.role}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Vibe / Target Archetype */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-mono space-y-1 mb-5">
                      <div className="text-zinc-400 text-[11px]">Archetype:</div>
                      <div className="text-cyan-300 font-semibold text-[11px] truncate">
                        {template.archetype}
                      </div>
                    </div>

                    {/* Key Tokens preview */}
                    <div className="space-y-1 text-xs text-zinc-300 font-sans mb-4">
                      {template.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setTemplate(template.id)}
                      className={`
                        w-full py-2.5 px-4 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all
                        ${
                          isCurrent
                            ? 'bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 cursor-default'
                            : 'bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 text-zinc-300 hover:text-white border border-white/10 cursor-pointer shadow-sm'
                        }
                      `}
                    >
                      {isCurrent ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Active Theme</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5" />
                          <span>Apply "{template.name}"</span>
                        </>
                      )}
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
