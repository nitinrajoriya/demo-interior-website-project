'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Large Background Image - Full Screen with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
            alt="Elegant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-32">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] brightness-110">
                Pune's Premier Interior Design Studio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight"
            >
              <span className="text-white">Elegant Spaces,</span><br />
              <span className="text-accent-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] brightness-110">Timeless Design</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-12 leading-relaxed font-light max-w-xl"
            >
              Where sophistication meets functionality. We craft bespoke interiors that reflect your unique vision and elevate your lifestyle.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center px-10 py-5 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
              >
                View Portfolio
                <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-charcoal text-sm uppercase tracking-wider font-medium hover:bg-white/90 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-2xl border-t border-white/20 pt-8"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-white/90 uppercase tracking-wider font-semibold">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-sm text-white/90 uppercase tracking-wider font-semibold">Years</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/90 uppercase tracking-wider font-semibold">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
