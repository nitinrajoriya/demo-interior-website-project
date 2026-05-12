import React from 'react';
import Link from 'next/link';

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We begin with a detailed discussion to understand your vision, lifestyle, functional requirements, and budget. This can be done at our studio or your site.',
      duration: '1-2 hours',
      deliverables: ['Requirement documentation', 'Preliminary concept discussion', 'Project timeline overview'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: 'Site Survey & Measurement',
      description: 'Our team visits your space to take precise measurements, assess structural elements, and document existing conditions with photographs and notes.',
      duration: '2-3 hours',
      deliverables: ['Detailed floor plan', 'Site condition report', 'Technical measurements', 'Photo documentation'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: 'Concept Design',
      description: 'We develop initial design concepts with mood boards, color schemes, and layout options. This phase explores different creative directions for your space.',
      duration: '1-2 weeks',
      deliverables: ['Mood boards and style direction', '2-3 layout options', 'Color palette proposals', 'Material samples'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      step: 4,
      title: 'Design Development',
      description: 'Once the concept is approved, we create detailed 3D renders, working drawings, and comprehensive specifications for all elements of your interior.',
      duration: '2-3 weeks',
      deliverables: ['Photorealistic 3D renders', 'Detailed working drawings', 'Complete material specifications', 'Lighting and electrical plans'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      step: 5,
      title: 'Material Selection',
      description: 'We guide you through selecting materials, finishes, furniture, fixtures, and fittings. You will have access to our extensive supplier network and design library.',
      duration: '1-2 weeks',
      deliverables: ['Finalized material selections', 'Furniture and fixture list', 'Cost breakdown', 'Procurement schedule'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 6,
      title: 'Project Execution',
      description: 'Our team manages the entire implementation process, coordinating with contractors, vendors, and craftsmen. We conduct regular site inspections to ensure quality.',
      duration: '6-12 weeks',
      deliverables: ['Phased implementation', 'Regular progress updates', 'Quality inspections', 'Site coordination'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      step: 7,
      title: 'Styling & Handover',
      description: 'We add the finishing touches with art, accessories, plants, and soft furnishings. After a thorough walkthrough, we hand over your completed space with warranty documentation.',
      duration: '1 week',
      deliverables: ['Final styling and decoration', 'Complete project walkthrough', 'Maintenance guidelines', 'Warranty documentation'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
            alt="Our Design Process"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
            Our Process
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            From Vision<br />to Reality
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            A transparent, collaborative approach that transforms your ideas into beautifully designed spaces.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl font-light text-charcoal mb-6">
            A Proven Process, Tailored to You
          </h2>
          <p className="text-xl text-charcoal/70 leading-relaxed font-light">
            Every project is unique, but our systematic approach ensures quality, transparency, and exceptional results.
            We've refined this 7-step process over years of experience to deliver spaces that exceed expectations while
            staying on schedule and within budget.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={step.step} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Icon and Title */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="sticky top-32">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-accent-primary/10 text-accent-primary mb-6">
                      {step.icon}
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-primary text-white flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-3xl font-light text-charcoal">{step.title}</h3>
                    </div>
                    <p className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-6">
                      Duration: {step.duration}
                    </p>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-white p-8 md:p-12">
                    <p className="text-lg text-charcoal/80 leading-relaxed font-light mb-8">
                      {step.description}
                    </p>
                    <h4 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-4">
                      What You Get:
                    </h4>
                    <ul className="space-y-3">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-charcoal/70 font-light">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Why Our Process Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Transparent Communication',
                description: 'You are involved at every stage with regular updates, approvals, and clear documentation. No surprises, just clarity.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                title: 'Single Point of Contact',
                description: 'Your dedicated project manager coordinates all aspects, so you do not have to juggle multiple contractors and vendors.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: 'Quality Assurance',
                description: 'Regular site inspections and quality checks at each phase ensure the highest standards of craftsmanship and materials.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 text-accent-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Typical Project Timeline
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light">
            Most residential projects are completed in 10-16 weeks from concept to handover.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="border border-white/20 p-8">
              <div className="text-4xl font-bold text-accent-primary mb-3">2-4</div>
              <div className="text-sm uppercase tracking-wider">Weeks</div>
              <div className="mt-4 text-white/70 font-light">Design Phase</div>
            </div>
            <div className="border border-white/20 p-8">
              <div className="text-4xl font-bold text-accent-primary mb-3">6-10</div>
              <div className="text-sm uppercase tracking-wider">Weeks</div>
              <div className="mt-4 text-white/70 font-light">Execution Phase</div>
            </div>
            <div className="border border-white/20 p-8">
              <div className="text-4xl font-bold text-accent-primary mb-3">1-2</div>
              <div className="text-sm uppercase tracking-wider">Weeks</div>
              <div className="mt-4 text-white/70 font-light">Styling & Handover</div>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/60 font-light">
            *Timelines vary based on project scope and complexity
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto font-light">
            Schedule a free consultation and let's discuss how we can bring your vision to life.
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
