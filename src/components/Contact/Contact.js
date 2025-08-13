import React from 'react';
import { portfolioData } from '../../data';
import './Contact.css';
import { useInView } from '../../hooks/useInView';

const Contact = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`contact-container fade-in-section ${inView ? 'is-visible' : ''}`} id="contact" data-testid="contact-section">
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