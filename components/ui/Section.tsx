import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'contrast';
  contained?: boolean;
}

export default function Section({
  children,
  className = '',
  background = 'default',
  contained = true,
}: SectionProps) {
  const bgClass = background === 'contrast' ? 'bg-soft-gray' : 'bg-warm-white';
  const containerClass = contained ? 'max-w-[1400px] mx-auto px-6 md:px-12' : '';

  return (
    <section className={`py-12 md:py-20 ${bgClass} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}
