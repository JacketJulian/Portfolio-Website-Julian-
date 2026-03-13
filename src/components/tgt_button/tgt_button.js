import React from 'react';
import './tgt_button.css';

const TGT_Button = ({ children = 'Target Button', onClick, className = '', variant = 'primary', ...props }) => {
  const variantClass = variant === 'secondary' ? 'tgt-button--secondary' : '';

  return (
    <button
      type="button"
      className={`tgt-button ${variantClass} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default TGT_Button;
