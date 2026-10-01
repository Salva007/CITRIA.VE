import React from 'react';

export default function CitrusBadge({ children, variant = 'pink', size = 'sm', className = '' }) {
  const variants = {
    pink: 'bg-citria-pink-light text-citria-pink-dark border border-citria-pink/20',
    hotpink: 'bg-citria-pink text-white shadow-sm',
    orange: 'bg-orange-50 text-citria-orange border border-citria-orange/20',
    yellow: 'bg-amber-50 text-amber-800 border border-amber-200',
    dark: 'bg-citria-cocoa text-white',
    outline: 'border border-citria-cocoa/20 text-citria-cocoa hover:border-citria-pink'
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold',
    sm: 'px-2.5 py-1 text-xs font-medium',
    md: 'px-3.5 py-1.5 text-sm font-medium'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${variants[variant] || variants.pink} ${sizes[size] || sizes.sm} ${className}`}>
      {children}
    </span>
  );
}
