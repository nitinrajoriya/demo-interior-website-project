'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/lib/types';

interface ServicesOverviewProps {
  services: Service[];
}

export default function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <div className="space-y-24">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <Link
            href={`/services/${service.slug}`}
            className="group block"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden bg-charcoal">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 to-transparent"></div>

                {/* Number */}
                <div className="absolute top-8 left-8 text-white/80 text-6xl md:text-8xl font-bold leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-accent-gold text-xs uppercase tracking-[0.3em] mb-4"
                  >
                    Service
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight group-hover:text-accent-gold transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-sage leading-relaxed"
                >
                  {service.shortDescription}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <span className="text-charcoal font-medium group-hover:text-accent-gold transition-colors">
                    Explore Service
                  </span>
                  <svg
                    className="w-8 h-8 text-charcoal group-hover:text-accent-gold group-hover:translate-x-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
