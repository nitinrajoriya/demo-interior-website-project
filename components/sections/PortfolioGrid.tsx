'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';

interface PortfolioGridProps {
  projects: Project[];
  showAll?: boolean;
}

export default function PortfolioGrid({ projects, showAll = false }: PortfolioGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 5);

  // Asymmetric layout patterns - different sizes for visual interest
  const layouts = [
    'lg:col-span-2 lg:row-span-2', // Large
    'lg:col-span-1 lg:row-span-1', // Small
    'lg:col-span-1 lg:row-span-2', // Tall
    'lg:col-span-2 lg:row-span-1', // Wide
    'lg:col-span-1 lg:row-span-1', // Small
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[400px] gap-4 md:gap-6">
      {displayProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={layouts[index % layouts.length]}
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="group relative block w-full h-full overflow-hidden bg-charcoal"
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
              />
            </div>

            {/* Number Badge - Simon Holm Style */}
            <div className="absolute top-6 left-6 text-white/80 text-sm font-medium tracking-[0.3em] z-20">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Minimal Info - Always Visible */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-accent-gold text-xs md:text-sm font-medium mb-2 uppercase tracking-[0.2em]">
                  {project.category.replace('-', ' ')}
                </p>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </motion.div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-6 right-6 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/60 to-transparent z-10"></div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
