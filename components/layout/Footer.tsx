import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.8fr] gap-12 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 tracking-tight text-warm-white">
                HomeShine
              </h3>
              <p className="text-xs text-soft-gray uppercase tracking-[0.2em] font-light">
                Interior Design
              </p>
            </div>
            <p className="text-sm text-soft-gray mb-4 leading-relaxed font-light">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-soft-gray/80 leading-relaxed font-light">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-5 text-warm-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.filter(link => !link.submenu).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-gray hover:text-white transition-colors leading-relaxed block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-5 text-warm-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/modular-kitchen"
                  className="text-sm text-soft-gray hover:text-white transition-colors leading-relaxed block"
                >
                  Modular Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/services/residential"
                  className="text-sm text-soft-gray hover:text-white transition-colors leading-relaxed block"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-sm text-soft-gray hover:text-white transition-colors leading-relaxed block"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/services/complete-home"
                  className="text-sm text-soft-gray hover:text-white transition-colors leading-relaxed block"
                >
                  Complete Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-5 text-warm-white">Contact</h4>
            <address className="not-italic text-sm text-soft-gray space-y-4 leading-relaxed font-light">
              {/* Address */}
              <div>
                <p className="text-white/90 font-medium mb-1">Visit Our Studio</p>
                <p>
                  {SITE_CONFIG.address.building}, {SITE_CONFIG.address.floor}
                  <br />
                  {SITE_CONFIG.address.officeNumber}
                  <br />
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_CONFIG.address.building}, ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent-primary hover:text-accent-dark transition-colors mt-2 text-xs uppercase tracking-wider font-medium"
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Phone */}
              <div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-accent-primary transition-colors block"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-accent-primary transition-colors block"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-white/70 text-xs">{SITE_CONFIG.businessHours}</p>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {SITE_CONFIG.socialLinks.instagram !== '#' && (
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-accent-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {SITE_CONFIG.socialLinks.facebook !== '#' && (
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-accent-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-soft-gray">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with care in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
