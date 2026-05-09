import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'modern-villa-baner',
    title: 'Modern Villa in Baner',
    category: 'residential',
    location: 'Baner, Pune',
    year: 2024,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: 'A stunning modern villa featuring minimalist design principles with warm textures and natural light. This 4-bedroom home showcases our expertise in creating elegant, functional living spaces that reflect the homeowners\' contemporary lifestyle.',
    details: {
      client: 'Private Client',
      size: '3,500 sq ft',
    },
  },
  {
    id: '2',
    slug: 'corporate-office-hinjewadi',
    title: 'Corporate Office in Hinjewadi',
    category: 'commercial',
    location: 'Hinjewadi, Pune',
    year: 2025,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    ],
    description: 'A modern tech company office designed to foster collaboration and productivity. Open-plan workspaces, vibrant breakout areas, and sophisticated meeting rooms create an inspiring work environment.',
    details: {
      client: 'Tech Solutions Pvt Ltd',
      size: '8,000 sq ft',
    },
  },
  {
    id: '3',
    slug: 'luxury-modular-kitchen-aundh',
    title: 'Luxury Modular Kitchen in Aundh',
    category: 'modular-kitchen',
    location: 'Aundh, Pune',
    year: 2024,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
    ],
    description: 'A chef-grade modular kitchen featuring premium German hardware, marble countertops, and intelligent storage solutions. This design maximizes space utilization while maintaining aesthetic elegance.',
    details: {
      client: 'Residential Client',
      size: '250 sq ft',
    },
  },
  {
    id: '4',
    slug: 'boutique-hotel-koregaon-park',
    title: 'Boutique Hotel in Koregaon Park',
    category: 'hospitality',
    location: 'Koregaon Park, Pune',
    year: 2024,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=1200&q=80',
    ],
    description: 'A 15-room boutique hotel blending contemporary design with local artistic influences. Each space tells a story, creating memorable experiences for guests.',
    details: {
      client: 'Hospitality Group',
      size: '12,000 sq ft',
    },
  },
  {
    id: '5',
    slug: 'minimalist-apartment-kharadi',
    title: 'Minimalist Apartment in Kharadi',
    category: 'residential',
    location: 'Kharadi, Pune',
    year: 2025,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80',
    ],
    description: 'A serene 2-bedroom apartment embracing minimalist aesthetics. Clean lines, neutral palette, and thoughtful storage create a calming urban retreat.',
    details: {
      client: 'Private Client',
      size: '1,200 sq ft',
    },
  },
  {
    id: '6',
    slug: 'tech-startup-office-viman-nagar',
    title: 'Tech Startup Office in Viman Nagar',
    category: 'commercial',
    location: 'Viman Nagar, Pune',
    year: 2025,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    ],
    description: 'A dynamic workspace for a growing startup. Flexible seating arrangements, creative zones, and energizing colors promote innovation and team collaboration.',
    details: {
      client: 'Startup Inc',
      size: '3,000 sq ft',
    },
  },
  {
    id: '7',
    slug: 'penthouse-kalyani-nagar',
    title: 'Luxury Penthouse in Kalyani Nagar',
    category: 'residential',
    location: 'Kalyani Nagar, Pune',
    year: 2024,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    description: 'An opulent 5-bedroom penthouse with panoramic city views. Luxurious materials, custom furniture, and smart home integration create ultimate urban living.',
    details: {
      client: 'Private Client',
      size: '4,500 sq ft',
    },
  },
  {
    id: '8',
    slug: 'contemporary-modular-kitchen-wakad',
    title: 'Contemporary Kitchen in Wakad',
    category: 'modular-kitchen',
    location: 'Wakad, Pune',
    year: 2025,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80',
    ],
    description: 'A functional and stylish modular kitchen with modern appliances and smart storage. Perfect blend of aesthetics and practicality for everyday living.',
    details: {
      client: 'Residential Client',
      size: '180 sq ft',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
