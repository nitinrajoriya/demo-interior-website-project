import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt="Our Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Comprehensive Interior<br />Design Solutions
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            From concept to completion, we offer end-to-end interior design services tailored to your unique vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl font-light text-charcoal mb-4 group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed font-light mb-6">
                    {service.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-2 text-accent-primary text-sm uppercase tracking-wider font-medium">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">
              Why Choose HomeShine
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Experienced Team',
                description: '8+ years of expertise with a portfolio of 150+ successfully completed projects across Pune.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Premium Materials',
                description: 'We source the finest materials and work with trusted suppliers to ensure lasting quality.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Timely Delivery',
                description: 'Systematic project management ensures on-time completion without compromising quality.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Customized Designs',
                description: 'Every project is unique, tailored specifically to your lifestyle, preferences, and budget.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear quotations with no hidden costs. You will know exactly what you are paying for.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'After-Sales Support',
                description: 'Comprehensive warranty and ongoing support to ensure your satisfaction long after completion.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 text-accent-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-4">{feature.title}</h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Schedule a free consultation to explore how our services can transform your space.
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
