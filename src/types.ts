export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'fullstack' | 'backend' | 'frontend';
  technologies: string[];
  features: string[];
  backendHighlights: string[];
  frontendHighlights: string[];
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
  completionYear: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    icon: string;
    description: string;
    badge?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  roleType: 'Education' | 'Experience' | 'Certification';
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  phase: 'Discover' | 'Design' | 'Develop' | 'Deploy';
  summary: string;
  keyDeliverables: string[];
  icon: string;
}
