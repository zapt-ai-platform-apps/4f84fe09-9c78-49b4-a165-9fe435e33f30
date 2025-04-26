import React from 'react';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  danger: 'btn-danger',
  outline: 'btn-outline'
};

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  disabled = false,
  onClick,
  ...props 
}) {
  const buttonClass = VARIANTS[variant] || VARIANTS.primary;
  
  return (
    <button
      type={type}
      className={`${buttonClass} cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}