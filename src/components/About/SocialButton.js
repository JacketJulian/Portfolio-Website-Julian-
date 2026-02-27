import React from 'react';

const SocialButton = ({ href, name }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="about-action-button social-button"
    >
      {name}
    </a>
  );
};

export default SocialButton;