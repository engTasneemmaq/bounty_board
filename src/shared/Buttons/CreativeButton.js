/** @format */

import React from 'react';
import '../../styles/design-system.css';

/**
 * Creative Button Component
 * Modern, animated button with gradient backgrounds
 * 
 * @param {string} variant - primary, success, error, warning, info, outline
 * @param {string} size - sm, md, lg
 * @param {boolean} icon - render as icon button
 * @param {ReactNode} children - button content
 * @param {function} onClick - click handler
 * @param {boolean} disabled - disabled state
 * @param {boolean} loading - loading state
 * @param {string} className - additional classes
 */

export const CreativeButton = ({
  variant = 'primary',
  size = 'md',
  icon = false,
  children,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClass = 'btn-creative';
  const variantClass = variant === 'outline' ? 'btn-outline' : `btn-${variant}`;
  const sizeClass = {
    sm: 'text-[15px] px-5 py-2.5',
    md: 'text-[16px] px-6 py-3',
    lg: 'text-[17px] px-8 py-4',
  }[size];
  const iconClass = icon ? 'btn-icon' : '';
  
  const classes = `
    ${baseClass} 
    ${variantClass} 
    ${sizeClass} 
    ${iconClass}
    ${disabled || loading ? 'disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CreativeButton;

