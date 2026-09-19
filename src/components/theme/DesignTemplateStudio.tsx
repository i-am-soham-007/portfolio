import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  X, 
  Check, 
  Copy, 
  Sparkles, 
  Layers, 
  Code2, 
  Eye, 
  Sliders, 
  Terminal, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { TemplateId, DesignTemplate } from '../../types/theme';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';

export const DesignTemplateStudio: React.FC = () => {
  const { currentTemplateId, setTemplate, isStudioOpen, closeStudio, allTemplates } = useTheme();
  const [activeTab, setActiveTab] = useState<'templates' | 'tokens' | 'compare'>('templates');
  const [selectedPreviewTemplate, setSelectedPreviewTemplate] = useState<TemplateId>(currentTemplateId);
  const [copiedCode, setCopiedCode] = useState(false);

  const previewTemplate = allTemplates.find(t => t.id === selectedPreviewTemplate) || allTemplates[0];

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(previewTemplate.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isStudioOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeStudio}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-6xl max-h-[90vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#090912] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-white my-auto"
        >
          {/* Studio Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0c0c17]/90 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Design Templates & Theme Studio
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-violet-950/60 border border-violet-500/30 text-violet-300">
                    6 Templates Available
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Switch the portfolio's entire visual system, inspect design tokens, or export CSS themes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Navigation */}
              <div className="hidden sm:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06] text-xs">
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'templates'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  All Templates
                </button>
                <button
                  onClick={() => setActiveTab('tokens')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'tokens'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Design Tokens
                </button>
                <button
                  onClick={() => setActiveTab('compare')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'compare'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Comparison Matrix
                </button>
              </div>

              <button
                type="button"
                onClick={closeStudio}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors ml-2"
                aria-label="Close Studio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* TAB 1: ALL TEMPLATES GRID & LIVE PREVIEW */}
            {activeTab === 'templates' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {allTemplates.map((template) => {
                    const isCurrent = currentTemplateId === template.id;
                    const isSelected = selectedPreviewTemplate === template.id;

                    return (
                      <div
                        key={template.id}
                        onClick={() => setSelectedPreviewTemplate(template.id)}
                        className={`
                          relative p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group
                          ${
                            isCurrent
                              ? 'bg-[#101020] border-violet-500/80 shadow-[0_0_25px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/40'
                              : isSelected
                              ? 'bg-white/[0.04] border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                              : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03]'
                          }
                        `}
                      >
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                            isCurrent
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-white/5 text-zinc-400 border border-white/5'
                          }`}>
                            {isCurrent ? '● Active Live Theme' : template.badge}
                          </span>

                          <span className="text-[10px] font-mono text-zinc-400">
                            {template.archetype.split('&')[0]}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-4">
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span>{template.name}</span>
                          </h3>
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                            {template.tagline}
                          </p>
                        </div>

                        {/* Visual Color Palette Swatches */}
                        <div className="space-y-2 mb-4">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                            Color Architecture
                          </div>
                          <div className="flex items-center gap-1.5">
                            {template.palette.map((swatch, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex-1 h-6 rounded-md border border-white/10 relative group/swatch transition-transform hover:scale-105"
                                style={{ backgroundColor: swatch.hex }}
                                title={`${swatch.name} (${swatch.hex}): ${swatch.role}`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTemplate(template.id);
                            }}
                            className={`
                              w-full py-2 px-3 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-all
                              ${
                                isCurrent
                                  ? 'bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 cursor-default'
                                  : 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-md cursor-pointer'
                              }
                            `}
                          >
                            {isCurrent ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Applied to App</span>
                              </>
                            ) : (
                              <>
                                <Zap className="w-3.5 h-3.5" />
                                <span>Apply Template</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Template Detailed Spotlight */}
                <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          Design System Spotlight
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs font-bold text-white">
                          {previewTemplate.name}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white">
                        {previewTemplate.tagline}
                      </h4>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {previewTemplate.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {previewTemplate.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                      <MagneticButton
                        variant="glow"
                        size="md"
                        onClick={() => setTemplate(previewTemplate.id)}
                        className="w-full"
                      >
                        <Zap className="w-4 h-4" />
                        <span>Apply "{previewTemplate.name}"</span>
                      </MagneticButton>

                      <MagneticButton
                        variant="secondary"
                        size="sm"
                        onClick={handleCopyTokens}
                        className="w-full"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'CSS Variables Copied!' : 'Copy CSS Tokens'}</span>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: DESIGN TOKENS INSPECTOR */}
            {activeTab === 'tokens' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Design Tokens & Variable Registry: {previewTemplate.name}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Standardized CSS variables for background surfaces, text contrast, glow radii, and typography.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={selectedPreviewTemplate}
                      onChange={(e) => setSelectedPreviewTemplate(e.target.value as TemplateId)}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-mono text-white focus:outline-none"
                    >
                      {allTemplates.map((t) => (
                        <option key={t.id} value={t.id} className="bg-[#090912] text-white">
                          {t.name}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={handleCopyTokens}
                      className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy CSS</span>
                    </button>
                  </div>
                </div>

                {/* Token Table */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Token Values Table */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-400 font-bold">
                        <span>Token Variable</span>
                        <span>Computed Value</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--bg-primary</span>
                        <span className="text-white flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-white/20 inline-block" style={{ backgroundColor: previewTemplate.tokens.bgPrimary }} />
                          {previewTemplate.tokens.bgPrimary}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--accent-primary</span>
                        <span className="text-white flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-white/20 inline-block" style={{ backgroundColor: previewTemplate.tokens.accentPrimary }} />
                          {previewTemplate.tokens.accentPrimary}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--accent-secondary</span>
                        <span className="text-white flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-white/20 inline-block" style={{ backgroundColor: previewTemplate.tokens.accentSecondary }} />
                          {previewTemplate.tokens.accentSecondary}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--font-display</span>
                        <span className="text-zinc-300 truncate max-w-[200px]">{previewTemplate.tokens.fontFamilyDisplay.split(',')[0]}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--card-radius</span>
                        <span className="text-zinc-300">{previewTemplate.tokens.borderRadiusCard}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400">--pill-radius</span>
                        <span className="text-zinc-300">{previewTemplate.tokens.borderRadiusPill}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Code Block */}
                  <div>
                    <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-zinc-300 relative">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-zinc-400">
                        <span>tailwind.theme.css</span>
                        <span className="text-[10px] text-cyan-400">Live Injectable</span>
                      </div>
                      <pre className="overflow-x-auto text-emerald-400 whitespace-pre">
                        {previewTemplate.codeSnippet}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: COMPARISON MATRIX */}
            {activeTab === 'compare' && (
              <div className="space-y-4 overflow-x-auto">
                <div className="min-w-[700px]">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-zinc-400">
                        <th className="pb-3 px-3">Template Name</th>
                        <th className="pb-3 px-3">Target Persona</th>
                        <th className="pb-3 px-3">Primary Colors</th>
                        <th className="pb-3 px-3">Corner Style</th>
                        <th className="pb-3 px-3">Aesthetic Vibe</th>
                        <th className="pb-3 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {allTemplates.map((template) => {
                        const isCurrent = currentTemplateId === template.id;
                        return (
                          <tr key={template.id} className={`hover:bg-white/[0.02] ${isCurrent ? 'bg-violet-950/20' : ''}`}>
                            <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                              {isCurrent && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                              <span>{template.name}</span>
                            </td>
                            <td className="py-3 px-3 text-cyan-300">{template.archetype.split('&')[0]}</td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1">
                                {template.palette.slice(0, 3).map((p, i) => (
                                  <span key={i} className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: p.hex }} title={p.name} />
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-zinc-300">{template.tokens.borderRadiusCard} (Cards)</td>
                            <td className="py-3 px-3 text-zinc-400">{template.vibe}</td>
                            <td className="py-3 px-3 text-right">
                              <button
                                onClick={() => setTemplate(template.id)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                                  isCurrent
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : 'bg-white/5 hover:bg-violet-600 text-zinc-300 hover:text-white border border-white/10'
                                }`}
                              >
                                {isCurrent ? 'Active' : 'Apply'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

          {/* Studio Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#0c0c17] flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Current Live Template: <strong className="text-white">{previewTemplate.name}</strong></span>
            </div>
            <button
              onClick={closeStudio}
              className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Done
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
