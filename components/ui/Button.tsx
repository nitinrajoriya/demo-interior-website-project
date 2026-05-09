import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm';

  const variantStyles = {
    primary: 'bg-accent-gold text-white hover:bg-opacity-90 hover:shadow-lg',
    secondary: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white',
    ghost: 'text-charcoal hover:text-accent-gold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
