import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverable = false,
}: CardProps) {
  const hoverClass = hoverable
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div className={`bg-white rounded-sm ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
