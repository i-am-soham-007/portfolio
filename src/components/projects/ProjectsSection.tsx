import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SectionWrapper } from '../ui/SectionWrapper';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Architectures' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'api', label: 'REST APIs' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'integration', label: 'Integrations' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <SectionWrapper id="projects" theme="hologram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Selected Engineering Work"
          badgeIcon={Layers}
          title="Systems, APIs and products"
          gradientWord="I've built."
          subtitle="A showcase of production-grade backend engines, webhook processors, high-concurrency REST APIs, and full-stack web applications."
        />

        {/* Filter Pills if multiple projects */}
        {PROJECTS.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 p-1.5 rounded-2xl bg-white/[0.015] border border-dashed border-white/10 w-fit">
            {filters.map((f) => {
              const isActive = activeCategory === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveCategory(f.id)}
                  className={`
                    px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all
                    ${
                      isActive
                        ? 'bg-white/[0.09] text-[#ECEFF2] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.18)] border border-white/25 font-semibold'
                        : 'bg-transparent text-[#8C93A0] hover:text-[#ECEFF2] hover:bg-white/[0.04] border border-transparent'
                    }
                  `}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onInspect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </SectionWrapper>
  );
};
