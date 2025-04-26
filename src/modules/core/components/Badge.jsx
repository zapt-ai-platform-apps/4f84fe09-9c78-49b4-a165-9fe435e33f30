import React from 'react';

const VARIANTS = {
  blue: 'badge-blue',
  gray: 'badge-gray',
  green: 'badge-green',
  red: 'badge-red',
  yellow: 'badge-yellow'
};

export function Badge({ children, variant = 'blue', className = '' }) {
  const badgeClass = VARIANTS[variant] || VARIANTS.blue;
  
  return (
    <span className={`${badgeClass} ${className}`}>
      {children}
    </span>
  );
}