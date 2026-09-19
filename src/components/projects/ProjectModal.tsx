import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Server, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Layers, 
  Cpu,
  Star,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../../types';
import { MagneticButton } from '../ui/MagneticButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0b14] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                  {project.categoryLabel}
                </span>

                {project.status === 'live' && (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Production Deployment
                  </span>
                )}
                {project.status === 'in_progress' && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30">
                    Active Development
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-8">
            
            {/* Live Client Verification Callout if available */}
            {project.review && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-cyan-950/20 to-white/[0.02] border border-emerald-500/30">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(project.review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      {project.review.rating}.0 / 5.0 Rating
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Client Feedback
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base font-medium text-white italic font-sans py-1">
                  "{project.review.comment}"
                </blockquote>

                <div className="text-xs font-mono text-zinc-400 mt-2 flex flex-wrap items-center gap-2">
                  <strong className="text-cyan-300 font-semibold">{project.review.author}</strong>
                  <span>—</span>
                  <span>{project.review.role}, {project.review.company}</span>
                </div>
              </div>
            )}

            {/* System Architecture Visual Flow */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>System Architecture & Data Flow</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 rounded-xl bg-[#121220] border border-white/[0.08] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                          Step 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {step.tech}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-1">
                        {step.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-snug">
                        {step.description}
                      </p>
                    </div>

                    {/* Step indicator arrow for all except last */}
                    {idx < project.architectureSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-cyan-600/60 flex items-center justify-center text-white text-[10px]">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-rose-500/20">
                <h5 className="text-sm font-bold text-rose-300 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  The Architectural Challenge
                </h5>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-emerald-500/20">
                <h5 className="text-sm font-bold text-emerald-300 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Engineering Solution
                </h5>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features & Role */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Engineering Highlights</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Integrations Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div>
                <div className="text-xs font-mono text-zinc-400 mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 mb-2">Integrations</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.integrations.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role Disclaimer */}
            <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-zinc-300">
              <strong className="text-cyan-300">Role & Scope:</strong> {project.role}
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <MagneticButton
                  variant="glow"
                  size="sm"
                  href={project.liveUrl}
                  external
                  className="bg-emerald-500/20 border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/30"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Open Live Portal ({project.liveUrl.replace('https://', '')})</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </MagneticButton>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <MagneticButton
                  variant="secondary"
                  size="sm"
                  href={project.githubUrl}
                  external
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </MagneticButton>
              )}

              <MagneticButton
                variant="primary"
                size="sm"
                onClick={onClose}
              >
                <span>Close View</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
