import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, ExternalLink, Terminal } from 'lucide-react';
import { PERSONAL_INFO, GITHUB_REPOS_STATIC } from '../../data/portfolioData';
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
          badge="Open Source & Codebase"
          badgeIcon={Github}
          title="Open Source &"
          gradientWord="GitHub activity."
          subtitle="Explore backend boilerplates, webhook handlers, and database toolkits crafted for the developer community."
        />

        {/* GitHub Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <GlassCard className="p-6 sm:p-8 bg-[#0a0a14]/90 border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.4)] group-hover:border-white/25 transition-all">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#ECEFF2] font-mono">
                    @i-am-soham-007
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-[#ECEFF2] border border-white/10">
                    Verified Profile
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#8C93A0] mt-1">
                  Senior Software Engineer specializing in Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <MagneticButton
                variant="glow"
                size="md"
                href={PERSONAL_INFO.github}
                external
                className="font-mono text-xs tracking-wider"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_REPOS_STATIC.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#ECEFF2] font-mono group-hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Terminal className="w-4 h-4 text-[#8C93A0]" />
                      <span>{repo.name}</span>
                    </a>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.04]"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8C93A0] leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div>
                  {/* Topics Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((top, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.025] text-[#8C93A0] border border-white/[0.06]"
                      >
                        #{top}
                      </span>
                    ))}
                  </div>

                  {/* Metadata Bar */}
                  <div className="pt-3 border-t border-dashed border-white/10 flex items-center justify-between text-xs font-mono text-[#8C93A0]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white/70" />
                      <span className="text-[#D8DCE2]">{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-[#D8DCE2]">
                        <Star className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#D8DCE2]">
                        <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
