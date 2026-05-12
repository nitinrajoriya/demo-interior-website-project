import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServices } from '@/lib/data/services';
import { getProjectBySlug } from '@/lib/data/projects';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = service.relatedProjects
    .map(projectId => getProjectBySlug(projectId))
    .filter((project): project is NonNullable<typeof project> => project !== undefined);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] bg-charcoal">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Service Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pb-12">
            <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-3 block">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-light text-charcoal mb-6">About This Service</h2>
              <p className="text-lg text-charcoal/80 leading-relaxed font-light">
                {service.fullDescription}
              </p>
            </div>
            <div className="bg-cream p-8">
              <h3 className="text-lg font-medium text-charcoal mb-6 uppercase tracking-wider">
                Quick Info
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-2">Service Type</p>
                  <p className="text-charcoal font-light">{service.title}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-2">Typical Duration</p>
                  <p className="text-charcoal font-light">
                    {service.slug === 'modular-kitchen' ? '4-6 weeks' :
                     service.slug === 'commercial' ? '8-12 weeks' :
                     service.slug === 'complete-home' ? '10-16 weeks' : '6-10 weeks'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-2">Warranty</p>
                  <p className="text-charcoal font-light">5-10 years</p>
                </div>
                <div className="pt-4 border-t border-charcoal/10">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-3xl font-light text-charcoal mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.included.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6">
                <svg className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-charcoal/80 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-charcoal mb-4">How We Work</h2>
            <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
              Our systematic approach ensures quality results and a smooth experience from start to finish.
            </p>
          </div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-light text-charcoal mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-accent-primary text-sm uppercase tracking-wider font-medium hover:gap-3 transition-all"
            >
              View Complete Process
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-charcoal mb-4">Featured Projects</h2>
              <p className="text-lg text-charcoal/70 font-light">
                See how we've brought similar projects to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
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
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-10 py-4 border border-charcoal text-charcoal text-sm uppercase tracking-wider font-medium hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Let's discuss your {service.title.toLowerCase()} project and create a space you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
            >
              Request Consultation
            </Link>
            <Link
              href={`https://wa.me/917304340533?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#25D366] text-white text-sm uppercase tracking-wider font-medium hover:bg-[#20BA5A] transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
