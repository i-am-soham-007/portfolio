import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, GitBranch, Terminal, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { SectionWrapper } from '../ui/SectionWrapper';

export const GitHubSection: React.FC = () => {
  return (
    <SectionWrapper id="github" theme="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Codebase"
          badgeIcon={Github}
          title="Official GitHub &"
          gradientWord="Repository Hub."
          subtitle="Explore all my public projects, backend boilerplates, and open-source contributions directly on my official GitHub profile."
        />

        {/* GitHub Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-6 sm:p-8 md:p-10 bg-[#0a0a14]/90 border-white/10 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              
              {/* Profile Details */}
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#ECEFF2] shrink-0 shadow-[0_4px_25px_rgba(0,0,0,0.5)] group-hover:border-white/30 group-hover:scale-105 transition-all">
                  <Github className="w-8 h-8 sm:w-10 sm:h-10 text-[#ECEFF2]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#ECEFF2] font-mono tracking-tight">
                      @i-am-soham-007
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Profile
                    </span>
                  </div>
                  <p className="text-sm text-[#8C93A0] max-w-xl leading-relaxed">
                    Senior Software Engineer specializing in scalable Node.js, Express, MongoDB, and TypeScript architectures. All personal project repositories and open-source codebases are published directly here.
                  </p>
                  
                  {/* Focus Highlights */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-[#8C93A0]">
                    <span className="flex items-center gap-1.5 text-[#D8DCE2]">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Node.js & TypeScript
                    </span>
                    <span className="flex items-center gap-1.5 text-[#D8DCE2]">
                      <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                      Production APIs
                    </span>
                    <span className="flex items-center gap-1.5 text-[#D8DCE2]">
                      <FolderGit2 className="w-3.5 h-3.5 text-violet-400" />
                      Project Repositories
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <MagneticButton
                  variant="glow"
                  size="md"
                  href={PERSONAL_INFO.github}
                  external
                  className="font-mono text-xs tracking-wider"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  size="md"
                  href={`${PERSONAL_INFO.github}?tab=repositories`}
                  external
                  className="font-mono text-xs tracking-wider"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Repositories</span>
                </MagneticButton>
              </div>
            </div>

            {/* Bottom URL Verification Bar */}
            <div className="mt-8 pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#8C93A0]">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Official URL:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  {PERSONAL_INFO.github}
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
              <span className="text-zinc-500">
                Direct access to source code, commits, and releases
              </span>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};
