import React from 'react';
import { portfolioData } from '../../data';
import './DesktopAbout.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const DesktopAbout = () => {
  const [ref, inView] = useInView();

  const introNameStyle = {
    color: theme.colors.primary,
  };

  const introTitleStyle = {
    color: theme.colors.secondary,
  };

  const aboutTextStyle = {
    color: theme.colors.primary,
  };

  const aboutImagePlaceholderStyle = {
    backgroundColor: theme.colors.white,
    border: `5px solid ${theme.colors.white}`,
  };

  return (
    <div ref={ref} className={`about-container fade-in-section ${inView ? 'is-visible' : ''}`} id="about" data-testid="about-section">
      <div className="about-content">
        <div className="about-image-placeholder" style={aboutImagePlaceholderStyle}>
          <img src={portfolioData.profileImage} alt="Your Profile" />
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-content">
            <h1 style={{ fontSize: '36px', marginBottom: '10px', color: theme.colors.white, fontWeight: 'bold' }}>👋 Hi, I'm</h1>
            <h1 className="intro-name" style={{ color: theme.colors.white }}>{portfolioData.name}</h1>
            <p className="intro-title" style={{ color: theme.colors.white }}>{portfolioData.title}</p>
            <p style={{ color: theme.colors.white }}>{portfolioData.about.description}</p>
          </div>
          <a href={portfolioData.about.resumeLink} className="about-resume-button" style={{ padding: '10px 20px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'normal', marginTop: '20px', display: 'inline-block' }}>{portfolioData.about.downloadText}</a>
        </div>
      </div>
      <div className="scroll-indicator">
        ⬇️
      </div>
    </div>
  );
};

export default DesktopAbout;
