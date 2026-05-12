import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="HomeShine Interior Studio"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Crafting Spaces,<br />Creating Experiences
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            With over 8 years of excellence in interior design, we transform houses into homes and spaces into experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
                Designing Dreams Since 2016
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  HomeShine Interior was founded with a simple yet powerful vision: to create spaces that inspire, comfort, and elevate everyday living. What started as a small studio in Pune has grown into a trusted name in premium interior design across Maharashtra.
                </p>
                <p>
                  Our journey has been shaped by our clients' dreams and our team's dedication to excellence. We believe that great design isn't just about aesthetics—it's about understanding how people live, work, and connect with their spaces.
                </p>
                <p>
                  Today, with over 150 completed projects and countless satisfied clients, we continue to push boundaries, embrace innovation, and create interiors that stand the test of time.
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                alt="Interior Design Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-light">
              Our core values guide every decision we make and every design we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Client-Centric Approach',
                description: 'Your vision is our priority. We listen, understand, and translate your aspirations into beautifully designed spaces that reflect your unique personality.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Quality Craftsmanship',
                description: 'We never compromise on quality. From premium materials to expert execution, every detail is carefully crafted to ensure lasting beauty and durability.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Timeless Design',
                description: 'Trends fade, but good design endures. We create interiors that remain relevant and beautiful for years to come, balancing contemporary style with timeless elegance.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Transparent Process',
                description: 'No surprises, no hidden costs. We maintain clear communication throughout the project, keeping you informed at every stage with detailed documentation.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Sustainable Solutions',
                description: 'We are committed to responsible design. Our approach emphasizes sustainable materials, energy efficiency, and minimal environmental impact.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Innovation & Excellence',
                description: 'We stay ahead of industry trends, continuously learning and adapting to bring you the best in design innovation and technology.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 text-accent-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-4">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              The Creative Minds Behind HomeShine
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-light">
              A passionate team of designers, architects, and craftsmen dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Priya Sharma',
                role: 'Founder & Principal Designer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
                description: 'With over 12 years of experience, Priya leads our design vision with a perfect blend of creativity and technical expertise.',
              },
              {
                name: 'Rajesh Kumar',
                role: 'Senior Interior Architect',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
                description: 'Rajesh specializes in spatial planning and brings innovative solutions to complex design challenges.',
              },
              {
                name: 'Ananya Desai',
                role: 'Project Manager',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
                description: 'Ananya ensures every project is delivered on time and exceeds client expectations through meticulous coordination.',
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-soft-gray">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-medium text-charcoal mb-2">{member.name}</h3>
                <p className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-charcoal/70 leading-relaxed font-light">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '8+', label: 'Years of Excellence' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Design Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto font-light">
            Ready to transform your space? Get in touch with us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
