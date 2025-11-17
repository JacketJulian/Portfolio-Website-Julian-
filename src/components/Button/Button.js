import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  disabled = false, 
  onClick, 
  href,
  className = '',
  ...props 
}) => {
  const buttonClass = `ui-button ui-button-${variant} ${disabled ? 'ui-button-disabled' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
