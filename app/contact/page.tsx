import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
            alt="Contact HomeShine Interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="text-accent-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Let's Bring Your Vision to Life
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Schedule a free consultation and discover how we can transform your space.
          </p>
        </div>
      </section>

      {/* Contact Information + Form Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-8">
                Visit Our Studio
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal mb-2">Office Address</h3>
                      <address className="not-italic text-charcoal/70 leading-relaxed font-light">
                        {SITE_CONFIG.address.building}<br />
                        {SITE_CONFIG.address.floor}, {SITE_CONFIG.address.officeNumber}<br />
                        {SITE_CONFIG.address.street}<br />
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                      </address>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_CONFIG.address.building}, ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-dark transition-colors mt-3 text-sm uppercase tracking-wider font-medium"
                      >
                        Get Directions
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal mb-2">Phone</h3>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-charcoal/70 hover:text-accent-primary transition-colors font-light text-lg"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal mb-2">Email</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-charcoal/70 hover:text-accent-primary transition-colors font-light"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal mb-2">Business Hours</h3>
                      <p className="text-charcoal/70 font-light">{SITE_CONFIG.businessHours}</p>
                      <p className="text-charcoal/50 font-light text-sm mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-white border border-accent-primary/20">
                <h3 className="text-lg font-medium text-charcoal mb-3">Prefer WhatsApp?</h3>
                <p className="text-charcoal/70 font-light mb-4 text-sm">
                  Get instant responses to your queries on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white text-sm uppercase tracking-wider font-medium hover:bg-[#20BA5A] transition-all duration-300 w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-3">
                  Request a Consultation
                </h2>
                <p className="text-charcoal/70 font-light mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Interior Design</option>
                      <option value="commercial">Commercial Interior Design</option>
                      <option value="modular-kitchen">Modular Kitchen Design</option>
                      <option value="complete-home">Complete Home Solution</option>
                      <option value="consultation">Just Looking for Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors"
                      placeholder="City or Area"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                      Approximate Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="5-10">₹5 - 10 Lakhs</option>
                      <option value="10-20">₹10 - 20 Lakhs</option>
                      <option value="20-35">₹20 - 35 Lakhs</option>
                      <option value="35+">₹35 Lakhs+</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-soft-gray focus:border-accent-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific ideas you have..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className="text-sm text-charcoal/70 font-light">
                      I agree to receive communication from HomeShine Interior regarding my inquiry. Your information will be kept confidential and not shared with third parties.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-soft-gray">
        <iframe
          src="https://www.google.com/maps?q=VTP+Altitude,+4th+Floor,+Office+434,+Aundh-Ravet+BRTS+Road,+Pune,+Maharashtra&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HomeShine Interior - VTP Altitude, Aundh"
        />
      </section>
    </div>
  );
}
