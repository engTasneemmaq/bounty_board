/** @format */

import React from 'react';
import { X } from 'lucide-react';
import '../../styles/design-system.css';

/**
 * Creative Badge Component
 * Colorful badge with gradients and animations
 * 
 * @param {string} variant - primary, success, error, warning, info
 * @param {ReactNode} children - badge content
 * @param {ReactNode} icon - optional icon
 * @param {boolean} closable - show close button
 * @param {function} onClose - close handler
 * @param {string} className - additional classes
 */

export const CreativeBadge = ({
  variant = 'primary',
  children,
  icon,
  closable = false,
  onClose,
  className = '',
  ...props
}) => {
  const variantClass = variant === 'primary' ? '' : `badge-${variant}`;
  
  const classes = `
    badge-creative
    ${variantClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  return (
    <span className={classes} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {closable && (
        <button
          onClick={handleClose}
          className="ml-2 hover:scale-110 transition-transform inline-flex items-center justify-center"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <X size={14} />
        </button>
      )}
    </span>
  );
};

export default CreativeBadge;

