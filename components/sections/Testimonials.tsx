'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white p-8 md:p-10 relative"
        >
          {/* Quote Mark */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote */}
          <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
            "{testimonial.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-soft-gray pt-6">
            <div>
              <p className="text-lg font-semibold text-charcoal mb-1">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-sage">
                {testimonial.projectType}
              </p>
            </div>

            {/* Star Rating */}
            {testimonial.rating && (
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-accent-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
