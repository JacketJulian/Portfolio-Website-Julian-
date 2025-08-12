import React from 'react';
import { portfolioData } from '../../data';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact" data-testid="contact-section">
      <div className="contact-content">
        <h2>{portfolioData.contact.title}</h2>
        <p>{portfolioData.contact.description}</p>
        <div className="contact-info">
          <a href={`mailto:${portfolioData.contact.email}`} className="contact-email">{portfolioData.contact.email}</a>
          <div className="social-links">
            {portfolioData.contact.socialLinks.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;