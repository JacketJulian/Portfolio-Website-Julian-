import React from 'react';
import { portfolioData } from '../../data';
import './MobileContact.css';
import { useInView } from '../../hooks/useInView';

const MobileContact = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`contact-container fade-in-section ${inView ? 'is-visible' : ''}`} id="contact" data-testid="contact-section">
      <div className="contact-content">
        <h1 className="section-title-bubble">{portfolioData.contact.title}</h1>
        <p>{portfolioData.contact.description}</p>
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

export default MobileContact;
