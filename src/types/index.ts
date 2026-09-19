export type ProjectCategory = 'all' | 'backend' | 'fullstack' | 'api' | 'integration';

export interface Project {
  id: string;
  title: string;
  category: 'backend' | 'fullstack' | 'api' | 'integration';
  categoryLabel: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  integrations: string[];
  features: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status?: 'completed' | 'in_progress' | 'live';
  clientName?: string;
  review?: {
    author: string;
    role: string;
    company: string;
    rating: number;
    comment: string;
    avatar?: string;
    verified: boolean;
  };
  architectureSteps: {
    title: string;
    description: string;
    tech: string;
    type: 'client' | 'gateway' | 'service' | 'database' | 'third-party';
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  projectTitle: string;
  projectUrl?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  tags: string[];
}

export interface SkillItem {
  name: string;
  category: 'mern' | 'backend' | 'php' | 'frontend' | 'database';
  categoryLabel: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  proficiency: number; // percentage e.g. 96, 92, 88
  years: string; // e.g. "5+ Yrs"
  highlight?: boolean;
  description: string;
  clientImpact: string; // concise business & architectural outcome for clients
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface PhilosophyStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface IntegrationNode {
  id: string;
  title: string;
  subtitle: string;
  type: 'client' | 'api' | 'auth' | 'logic' | 'service' | 'webhook' | 'db';
  codeSnippet?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  url: string;
}
