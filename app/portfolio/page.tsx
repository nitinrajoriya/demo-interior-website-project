'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'modular-kitchen', label: 'Modular Kitchen' },
    { value: 'hospitality', label: 'Hospitality' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt="HomeShine Portfolio"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Transforming Spaces,<br />Creating Stories
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Explore our portfolio of beautifully designed interiors across Pune and beyond.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-soft-gray sticky top-20 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-accent-primary text-white'
                    : 'bg-cream text-charcoal hover:bg-accent-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-charcoal/60 font-light">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group"
              >
                <div className="relative bg-soft-gray overflow-hidden aspect-[4/5]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent-primary text-xs uppercase tracking-wider font-semibold mb-2 block">
                      {project.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-charcoal/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-xl text-charcoal/60 font-light">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Let's create a space that reflects your vision and exceeds your expectations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
