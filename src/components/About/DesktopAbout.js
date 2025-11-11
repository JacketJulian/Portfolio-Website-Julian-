import React, { useState } from 'react';
import { portfolioData } from '../../data';
import './DesktopAbout.css';
import { theme } from '../../theme';
import ModalWindow from '../ModalWindow/ModalWindow';

const DesktopAbout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const aboutImagePlaceholderStyle = {
    backgroundColor: theme.colors.white,
    border: `5px solid ${theme.colors.white}`,
  };

  return (
    <div className="about-container" id="about" data-testid="about-section">
      <div className="about-content">
        <div className="about-image-placeholder" style={aboutImagePlaceholderStyle}>
          <img src={portfolioData.profileImage} alt="Your Profile" loading="lazy" />
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-content">
            <h1 style={{ fontSize: '36px', marginBottom: '10px', color: theme.colors.white, fontWeight: 'bold' }}>👋 Hi, I'm</h1>
            <h1 className="intro-name" style={{ color: theme.colors.white }}>{portfolioData.name}</h1>
            <p className="intro-title" style={{ color: theme.colors.white }}>{portfolioData.title}</p>
            <p style={{ color: theme.colors.white }}>{portfolioData.about.description}</p>
          </div>
          <div className="about-buttons">
            <a href={portfolioData.about.resumeLink} className="about-action-button about-resume-button">{portfolioData.about.downloadText}</a>
            <button className="about-action-button" onClick={handleShow}>Open Modal</button>
            <div className="social-links-about">
              {portfolioData.socialLinks.map((link, index) => (
                <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className="about-action-button social-button">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalWindow show={showModal} handleClose={handleClose} title="My Modal Title">
        <p>This is the content of the modal window.</p>
        <p>You can put any React components or HTML elements here.</p>
      </ModalWindow>
    </div>
  );
};

export default DesktopAbout;
