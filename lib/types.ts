export interface Project {
  slug: string;
  title: string;
  category: ('ai' | 'web' | 'python' | 'oop')[];
  description: string;
  status: 'In Development' | 'Completed';
  year: string;
  role: string;
  features: string[];
  tech: string[];
  impact?: string[];
  challenges?: string;
  image?: string;
}

export interface Skill {
  name: string;
  value: number; // 0-100
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
  modules?: { name: string; grade: string }[];
  simpleModules?: string[];
}
