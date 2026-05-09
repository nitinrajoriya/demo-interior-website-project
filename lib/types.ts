export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'commercial' | 'modular-kitchen' | 'hospitality';
  location: string;
  year: number;
  featured: boolean;
  thumbnail: string;
  images: string[];
  description: string;
  details: {
    client?: string;
    size?: string;
    budget?: string;
  };
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  included: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  relatedProjects: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  projectType: string;
  quote: string;
  rating?: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
