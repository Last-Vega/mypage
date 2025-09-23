// Project types
export interface Project {
  name: string;
  year: string;
  url: string;
  slideUrl: string;
  repo: string;
  projectImage: string;
  tags: string[];
  description: string;
}

// Skill types
export interface Skill {
  name: string;
  image: string;
}

// Navigation types
export interface MenuItem {
  title: string;
  el: string;
}

// Contact types
export interface SocialLink {
  icon: string;
  link: string;
  name: string;
}

// Component Props types
export interface SeparatorProps {
  color?: string;
}

export interface ProjectCardProps {
  project: Project;
}

