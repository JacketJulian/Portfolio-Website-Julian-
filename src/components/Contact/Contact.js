import React from 'react';
import { portfolioData } from '../../data';
import './Contact.css';
import { theme } from '../../theme';

const Contact = () => {
  const descriptionStyle = {
    color: theme.colors.primary,
  };

  return (
    <div className="contact-container" id="contact" data-testid="contact-section">
      <div className="contact-content">
        <h1 className="section-title-bubble">{portfolioData.contact.title}</h1>
        <p style={descriptionStyle}>{portfolioData.contact.description}</p>
        <div className="contact-info">
          <div className="social-links">
            {portfolioData.contact.socialLinks.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className="social-button">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;