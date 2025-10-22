/** @format */

import React, { useState } from 'react';
import '../../styles/design-system.css';

/**
 * Creative Input Component
 * Modern input with beautiful focus states
 * 
 * @param {string} type - input type
 * @param {string} placeholder - placeholder text
 * @param {string} value - input value
 * @param {function} onChange - change handler
 * @param {string} label - input label
 * @param {string} error - error message
 * @param {string} icon - icon component
 * @param {boolean} gradient - use gradient border on focus
 * @param {string} className - additional classes
 */

export const CreativeInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  icon,
  gradient = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = `
    input-creative
    ${error ? 'border-red-400' : ''}
    ${icon ? 'pl-12' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const InputWrapper = gradient ? 'div' : React.Fragment;
  const wrapperProps = gradient ? { className: 'input-gradient' } : {};

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <InputWrapper {...wrapperProps}>
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClasses}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </div>
      </InputWrapper>

      {error && (
        <p className="mt-2 text-sm text-red-500 animate-slide-in-bottom">
          {error}
        </p>
      )}
    </div>
  );
};

export default CreativeInput;

