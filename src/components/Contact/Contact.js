import React from 'react';
import { portfolioData } from '../../data';
import './Contact.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const Contact = () => {
  const [ref, inView] = useInView();

  const titleStyle = {
    color: theme.colors.primary,
  };

  const descriptionStyle = {
    color: theme.colors.primary,
  };

  const emailStyle = {
    color: theme.colors.secondary,
  };

  const socialLinkStyle = {
    color: theme.colors.primary,
  };

  return (
    <div ref={ref} className={`contact-container fade-in-section ${inView ? 'is-visible' : ''}`} id="contact" data-testid="contact-section">
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