import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Star, 
  Globe, 
  Clock, 
  ShieldCheck,
} from 'lucide-react';
import { Project } from '../../types';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <GlassCard className="p-6 sm:p-8 group hover:border-white/20 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Project Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              {/* Category, Status & Verification Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-[#ECEFF2]">
                  {project.categoryLabel}
                </span>

                {project.status === 'live' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live in Production
                  </span>
                )}

                {project.status === 'in_progress' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
                    <Clock className="w-3 h-3 text-amber-400" />
                    Active Milestone
                  </span>
                )}

                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono text-violet-300 bg-violet-500/10 border border-violet-500/20">
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#ECEFF2] group-hover:text-white transition-colors tracking-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#8C93A0] mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Client Testimonial Box if attached to this project */}
            {project.review && (
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1">
                    {[...Array(project.review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-mono font-bold text-[#ECEFF2] ml-1">
                      {project.review.rating}.0 / 5.0
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified Client
                  </span>
                </div>
                
                <p className="text-xs text-[#8C93A0] italic leading-relaxed">
                  "{project.review.comment}"
                </p>
                
                <div className="text-[11px] text-[#8C93A0] mt-2 flex items-center gap-2">
                  <strong className="text-[#ECEFF2] font-semibold">{project.review.author}</strong>
                  <span>—</span>
                  <span>{project.review.role}, {project.review.company}</span>
                </div>
              </div>
            )}

            {/* Metrics Chips if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2.5 pt-1">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs">
                    <span className="text-[#8C93A0] text-[11px]">{m.label}: </span>
                    <span className="font-bold text-[#ECEFF2] font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono text-[#8C93A0] bg-white/[0.03] border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-2.5 py-1 rounded-full text-xs font-mono text-[#8C93A0] bg-white/[0.02] border border-white/5">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-dashed border-white/10">
              {project.liveUrl && (
                <MagneticButton
                  variant="glow"
                  size="sm"
                  href={project.liveUrl}
                  external
                  className="rounded-full text-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </MagneticButton>
              )}

              <MagneticButton
                variant={project.liveUrl ? 'secondary' : 'glow'}
                size="sm"
                onClick={() => onInspect(project)}
                className="rounded-full text-xs"
              >
                <span>Architecture Flow</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>

              {project.githubUrl && (
                <MagneticButton
                  variant="secondary"
                  size="sm"
                  href={project.githubUrl}
                  external
                  className="rounded-full text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </MagneticButton>
              )}
            </div>
          </div>

          {/* Right: Technical Diagram Preview (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div 
              onClick={() => onInspect(project)}
              className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] cursor-pointer overflow-hidden transition-all"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-dashed border-white/10 text-xs font-mono text-[#8C93A0]">
                <span className="flex items-center gap-1.5 text-[#ECEFF2] font-medium">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>System Architecture</span>
                </span>
                <span className="text-[10px] text-white/50 hover:text-white">Click to inspect</span>
              </div>

              {/* Pipeline Steps Preview */}
              <div className="space-y-2 font-mono text-xs">
                {project.architectureSteps.slice(0, 4).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span className="text-[#ECEFF2] font-medium text-[11px] truncate">
                        {step.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8C93A0] shrink-0">
                      {step.tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pipeline Live Signal Bar */}
              <div className="mt-3 pt-3 border-t border-dashed border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8C93A0]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status === 'in_progress' ? 'Active In-Progress' : 'Production Verified'}
                </span>
                <span className="text-[#ECEFF2] group-hover:text-white flex items-center gap-1 font-semibold">
                  Inspect Spec <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
};
