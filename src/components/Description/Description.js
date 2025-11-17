import React from 'react';
import './Description.css';
import { theme } from '../../theme';

const Description = ({ 
  children, 
  variant = 'bubble',
  className = '',
  color = theme.colors.white,
  backgroundColor = theme.colors.bubbleBlue,
  ...props 
}) => {
  const descriptionClass = `ui-description ui-description-${variant} ${className}`;

  return (
    <p 
      className={descriptionClass}
      style={{ color, backgroundColor: variant === 'bubble' ? backgroundColor : 'transparent' }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Description;
