import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Sparkles, Check, ChevronUp, Sliders } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const TemplateFloatingPill: React.FC = () => {
  const { currentTemplate, currentTemplateId, setTemplate, openStudio, allTemplates } = useTheme();
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      <AnimatePresence>
        {isQuickMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 p-3 rounded-2xl bg-[#0b0b14]/95 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)] w-64 space-y-1.5"
          >
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10 text-xs font-mono">
              <span className="text-zinc-400">Design Template</span>
              <button
                onClick={openStudio}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
              >
                <Sliders className="w-3 h-3" />
                <span>Full Studio</span>
              </button>
            </div>

            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              {allTemplates.map((template) => {
                const isActive = currentTemplateId === template.id;
                return (
                  <button
                    key={template.id}
                    onClick={() => {
                      setTemplate(template.id);
                      setIsQuickMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left
                      ${
                        isActive
                          ? 'bg-violet-600/30 text-white border border-violet-500/40 font-semibold shadow-[0_0_10px_rgba(139,92,246,0.2)]'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-white border border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 border border-white/20"
                        style={{ backgroundColor: template.tokens.accentPrimary }}
                      />
                      <span className="truncate">{template.name}</span>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Pill Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsQuickMenuOpen(!isQuickMenuOpen)}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0b0b14]/90 backdrop-blur-xl border border-white/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-cyan-400/50 transition-all group"
      >
        <div className="flex items-center gap-1.5">
          <div className="p-1 rounded-full bg-violet-600 text-white group-hover:bg-cyan-500 transition-colors">
            <Palette className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono font-medium tracking-tight">
            Theme: <strong className="text-cyan-300 font-bold">{currentTemplate.name}</strong>
          </span>
        </div>

        <ChevronUp className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isQuickMenuOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
