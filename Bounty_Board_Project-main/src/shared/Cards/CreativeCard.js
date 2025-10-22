/** @format */

import React from 'react';
import '../../styles/design-system.css';

/**
 * Creative Card Component
 * Beautiful card with hover effects and animations
 * 
 * @param {string} variant - default, gradient-border, glass
 * @param {ReactNode} children - card content
 * @param {string} className - additional classes
 * @param {function} onClick - click handler (makes card clickable)
 * @param {boolean} hoverable - enable hover effects
 */

export const CreativeCard = ({
  variant = 'default',
  children,
  className = '',
  onClick,
  hoverable = true,
  ...props
}) => {
  const baseClass = variant === 'gradient-border' ? '' : 
                    variant === 'glass' ? 'card-glass' : 'card-creative';
  
  const hoverClass = hoverable ? 'hover-lift' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  
  const classes = `
    ${baseClass}
    ${hoverClass}
    ${clickableClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (variant === 'gradient-border') {
    return (
      <div className={`card-gradient-border ${clickableClass} ${className}`} onClick={onClick} {...props}>
        <div className="card-gradient-border-inner">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default CreativeCard;

