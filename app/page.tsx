import Hero from '@/components/sections/Hero';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import { getFeaturedProjects } from '@/lib/data/projects';
import { getAllServices } from '@/lib/data/services';
import { getAllTestimonials } from '@/lib/data/testimonials';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const services = getAllServices();
  const testimonials = getAllTestimonials();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Our Expertise Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-light mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Specialised Services
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto leading-relaxed">
              From intimate residential spaces to expansive commercial projects, we deliver excellence across every domain
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modular Kitchen',
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
                link: '/services/modular-kitchen',
                description: 'Functional elegance designed for modern living'
              },
              {
                title: 'Residential',
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
                link: '/services/residential',
                description: 'Homes that reflect your personal style'
              },
              {
                title: 'Commercial',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
                link: '/services/commercial',
                description: 'Spaces that inspire productivity and creativity'
              },
            ].map((category) => (
              <Link key={category.title} href={category.link} className="group">
                <div className="relative aspect-[3/4] bg-soft-gray overflow-hidden mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-light text-charcoal mb-3 group-hover:text-accent-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed font-light">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Portfolio Showcase */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-light mb-4 block">
              Portfolio
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-4">
                  Featured Projects
                </h2>
                <p className="text-muted-text text-lg max-w-xl leading-relaxed">
                  Each project tells a unique story of transformation and refined aesthetics
                </p>
              </div>
              <Link
                href="/portfolio"
                className="group inline-flex items-center text-accent-primary hover:text-accent-dark transition-colors"
              >
                <span className="text-sm uppercase tracking-wider mr-2">View All</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group"
              >
                <div className="relative bg-soft-gray overflow-hidden aspect-[4/5]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-[0.15em] mb-2 text-accent-secondary">
                        {project.category.replace('-', ' ')}
                      </p>
                      <h3 className="text-2xl font-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {project.location} • {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-light mb-4 block">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-8">
                Design Process
              </h2>
              <p className="text-muted-text text-lg leading-relaxed mb-12">
                We believe in a collaborative approach that brings your vision to life through careful planning, expert execution, and meticulous attention to detail.
              </p>

              {/* Process Steps */}
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
                  { num: '02', title: 'Concept Design', desc: '3D visualisation and mood boards' },
                  { num: '03', title: 'Material Selection', desc: 'Curating finishes and furnishings' },
                  { num: '04', title: 'Execution', desc: 'Professional installation and styling' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 group">
                    <div className="text-accent-primary/30 text-4xl font-light group-hover:text-accent-primary transition-colors">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-charcoal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-text text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/process"
                className="inline-flex items-center mt-12 text-accent-primary hover:text-accent-dark transition-colors group"
              >
                <span className="text-sm uppercase tracking-wider mr-2">Learn More</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-soft-gray overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                  alt="Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-accent-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Interactive Carousel */}
      <section className="py-24 md:py-32 bg-charcoal text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-light mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Client Stories
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Hear from clients who trusted us to transform their spaces
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section - Elegant Split Layout */}
      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="py-24 md:py-32 px-6 md:px-16 lg:px-24 flex items-center">
              <div className="max-w-lg">
                <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-light mb-4 block">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
                  Start Your<br />Design Journey
                </h2>
                <p className="text-muted-text text-lg leading-relaxed mb-12 font-light">
                  Transform your space into something extraordinary. Book a complimentary consultation with our design experts to bring your vision to life.
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-charcoal font-light">Free design consultation & site visit</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-charcoal font-light">3D visualization before execution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-charcoal font-light">On-time delivery guaranteed</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/917304340533?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-charcoal/20 text-charcoal text-sm uppercase tracking-wider font-medium hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative min-h-[500px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                alt="Interior Design Consultation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-transparent lg:from-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
