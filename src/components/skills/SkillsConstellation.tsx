import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Layout, Database, Wrench, Sparkles, Network, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('backend');

  const categoryIcons: Record<string, React.ElementType> = {
    backend: Server,
    frontend: Layout,
    database: Database,
    tools: Wrench,
    ai: Sparkles,
  };

  const activeCategoryData = SKILL_CATEGORIES.find(c => c.id === selectedCategory) || SKILL_CATEGORIES[0];

  return (
    <div className="rounded-2xl bg-[#090b12]/80 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8">
      {/* Category Selection Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 p-1.5 rounded-2xl bg-white/[0.015] border border-dashed border-white/10 w-fit mx-auto">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = categoryIcons[cat.id] || Server;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all
                ${
                  isSelected
                    ? 'bg-white/[0.09] text-[#ECEFF2] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.18)] border border-white/25 font-semibold'
                    : 'bg-transparent text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.04] border border-transparent'
                }
              `}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ECEFF2]' : 'text-[#8C93A0]'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Constellation Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Hub & Orbits (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[300px]">
          {/* Outer Orbit Circle */}
          <div className="absolute w-64 h-64 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-44 h-44 rounded-full border border-white/[0.05]" />

          {/* Central Monogram Core */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-24 h-24 rounded-2xl bg-white/[0.06] p-0.5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] border border-white/20 backdrop-blur-xl"
          >
            <div className="w-full h-full bg-[#080a10] rounded-2xl flex flex-col items-center justify-center border border-white/[0.05]">
              <span className="text-xl font-mono font-black text-[#ECEFF2] tracking-wider">
                SOHAM
              </span>
              <span className="text-[9px] font-mono text-[#8C93A0] tracking-widest mt-0.5">
                TECH CORE
              </span>
            </div>
          </motion.div>

          {/* Category Mini Satellite Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 z-10">
            {SKILL_CATEGORIES.map((cat) => (
              <span
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'text-[#ECEFF2] bg-white/[0.08] border border-white/20 font-semibold'
                    : 'text-[#7D8593] bg-white/[0.02] border border-dashed border-white/10 hover:text-[#ECEFF2] hover:bg-white/[0.05]'
                }`}
              >
                #{cat.id}
              </span>
            ))}
          </div>
        </div>

        {/* Selected Category Skill Matrix (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryData.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Category Info Header */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{activeCategoryData.name}</span>
                    <span className="text-xs font-mono font-normal text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-500/20">
                      {activeCategoryData.skills.length} Technologies
                    </span>
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {activeCategoryData.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {activeCategoryData.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all ${
                      skill.highlight
                        ? 'bg-violet-950/20 border-violet-500/30 hover:border-violet-500/60'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-zinc-100 font-mono">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                            : skill.level === 'Advanced'
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                            : 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-snug">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
