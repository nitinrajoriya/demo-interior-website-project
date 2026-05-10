'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : 'border-b border-border-color'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/logos/homeshine-new-logo.jpeg"
              alt="HomeShine Interior Solution"
              width={200}
              height={80}
              className="h-16 w-auto object-contain group-hover:opacity-80 transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8">
          {NAVIGATION_LINKS.filter(link => !link.submenu).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-wider font-light transition-colors ${
                  isActive(link.href)
                    ? 'text-accent-primary'
                    : 'text-charcoal hover:text-accent-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="text-sm uppercase tracking-wider font-light text-charcoal hover:text-accent-primary transition-colors flex items-center gap-1">
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-border-color">
              <ul className="py-4">
                {NAVIGATION_LINKS.find(link => link.submenu)?.submenu?.map((sublink) => (
                  <li key={sublink.href}>
                    <Link
                      href={sublink.href}
                      className="block px-6 py-3 text-sm font-light text-charcoal hover:text-accent-primary hover:bg-cream transition-colors"
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-8 py-3 bg-accent-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-accent-dark transition-all duration-300"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-charcoal p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-soft-gray">
          <ul className="px-6 py-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                {link.submenu ? (
                  <div>
                    <div className="font-medium text-charcoal mb-2">{link.label}</div>
                    <ul className="pl-4 space-y-2">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className="block text-muted-text hover:text-accent-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block font-medium transition-colors ${
                      isActive(link.href) ? 'text-accent-primary' : 'text-charcoal hover:text-accent-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
