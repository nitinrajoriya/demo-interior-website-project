import { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    shortDescription: 'Transform your kitchen into a chef\'s paradise with our custom modular kitchen solutions.',
    fullDescription: 'Our modular kitchen designs combine functionality with aesthetic appeal, creating spaces that inspire culinary creativity. We specialize in space-efficient layouts, premium materials, and smart storage solutions that make cooking a pleasure. Each kitchen is tailored to your lifestyle, whether you\'re a passionate home cook or need a practical family kitchen.',
    icon: 'kitchen',
    heroImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
    included: [
      'Comprehensive space planning and 3D visualization',
      'Premium quality materials and hardware (German/Italian)',
      'Customized storage solutions and organizers',
      'Professional installation by skilled craftsmen',
      'Integrated appliances and lighting design',
      '5-year warranty on hardware and materials',
      'Post-installation support and maintenance',
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Requirements',
        description: 'Understanding your cooking style, storage needs, and design preferences',
      },
      {
        step: 2,
        title: 'Space Analysis & Design',
        description: 'Detailed measurements and 3D design concepts with multiple layout options',
      },
      {
        step: 3,
        title: 'Material Selection',
        description: 'Guided selection of cabinets, countertops, hardware, and finishes',
      },
      {
        step: 4,
        title: 'Manufacturing & Installation',
        description: 'Precision manufacturing and expert installation with minimal disruption',
      },
      {
        step: 5,
        title: 'Final Touches & Handover',
        description: 'Quality check, final adjustments, and comprehensive warranty documentation',
      },
    ],
    relatedProjects: ['3', '8'],
  },
  {
    slug: 'residential',
    title: 'Residential Interiors',
    shortDescription: 'Create your dream home with bespoke interior design that reflects your personality and lifestyle.',
    fullDescription: 'From contemporary apartments to luxurious villas, we design residential spaces that are both beautiful and functional. Our approach combines aesthetic excellence with practical living, ensuring every room tells your story. We handle everything from concept to completion, including furniture selection, lighting design, and decorative elements.',
    icon: 'home',
    heroImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
    included: [
      'Complete interior design and space planning',
      'Customized furniture design and selection',
      'Color palette and material coordination',
      'Lighting design and electrical planning',
      'False ceiling and wall treatments',
      'Window treatments and soft furnishings',
      'Project management and quality supervision',
      'Warranty on all work and materials',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Understanding your lifestyle, preferences, and budget requirements',
      },
      {
        step: 2,
        title: 'Concept Development',
        description: 'Mood boards, color schemes, and initial design concepts',
      },
      {
        step: 3,
        title: 'Detailed Design',
        description: '3D renders, floor plans, and detailed specifications',
      },
      {
        step: 4,
        title: 'Execution',
        description: 'Phased implementation with regular quality checks and updates',
      },
      {
        step: 5,
        title: 'Styling & Handover',
        description: 'Final styling with accessories, art, and complete home walkthrough',
      },
    ],
    relatedProjects: ['1', '5', '7'],
  },
  {
    slug: 'commercial',
    title: 'Commercial Interiors',
    shortDescription: 'Design inspiring workspaces that enhance productivity and reflect your brand identity.',
    fullDescription: 'We create commercial spaces that work as hard as your team does. From corporate offices to retail environments, our designs balance functionality, brand identity, and employee wellbeing. We understand that great workplace design directly impacts productivity, collaboration, and talent retention. Our solutions are scalable, sustainable, and designed for the future of work.',
    icon: 'building',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    included: [
      'Workplace strategy and space planning',
      'Brand integration and identity design',
      'Ergonomic furniture selection',
      'Collaborative zones and meeting spaces',
      'Technology integration and AV solutions',
      'Sustainable and eco-friendly materials',
      'Compliance with safety and building codes',
      'Phased execution to minimize business disruption',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Analysis',
        description: 'Understanding your business, culture, and workspace requirements',
      },
      {
        step: 2,
        title: 'Space Programming',
        description: 'Functional layout planning based on headcount and workflow',
      },
      {
        step: 3,
        title: 'Design Development',
        description: 'Detailed designs integrating brand, technology, and ergonomics',
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Coordinated execution with minimal operational disruption',
      },
      {
        step: 5,
        title: 'Move-in Support',
        description: 'Post-installation support and warranty documentation',
      },
    ],
    relatedProjects: ['2', '6'],
  },
  {
    slug: 'complete-home',
    title: 'Complete Home Solutions',
    shortDescription: 'End-to-end interior design for your entire home, delivered seamlessly under one roof.',
    fullDescription: 'Our Complete Home Solutions service takes care of everything from planning to execution across your entire property. This comprehensive approach ensures design consistency, better budget management, and a single point of contact throughout the project. Whether you\'re moving into a new home or completely renovating your existing space, we handle it all.',
    icon: 'house',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    included: [
      'All-rooms interior design and coordination',
      'Modular kitchen and wardrobes',
      'Living, dining, and bedroom furniture',
      'False ceiling and wall treatments',
      'Complete electrical and lighting design',
      'Flooring and tile selection',
      'Painting and wall finishes',
      'Plumbing and hardware fixtures',
      'Soft furnishings and accessories',
      'Single-point project management',
      'Extended warranty across all elements',
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Planning',
        description: 'Detailed discussions covering all rooms and requirements',
      },
      {
        step: 2,
        title: 'Unified Design Concept',
        description: 'Creating a cohesive design language across your entire home',
      },
      {
        step: 3,
        title: 'Consolidated Material Selection',
        description: 'Efficient selection process with bulk procurement benefits',
      },
      {
        step: 4,
        title: 'Phased Execution',
        description: 'Room-by-room implementation for livable progress',
      },
      {
        step: 5,
        title: 'Complete Handover',
        description: 'Final walkthrough of entire home with comprehensive documentation',
      },
    ],
    relatedProjects: ['1', '7'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
