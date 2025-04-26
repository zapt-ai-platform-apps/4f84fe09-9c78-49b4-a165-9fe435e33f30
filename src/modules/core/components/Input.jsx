import React from 'react';

export function Input({ 
  label, 
  id, 
  type = 'text', 
  className = '', 
  error,
  ...props 
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-secondary-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`input ${error ? 'border-danger-500 focus:ring-danger-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-danger-500">{error}</p>}
    </div>
  );
}