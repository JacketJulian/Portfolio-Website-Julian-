import React from 'react';
import { portfolioData } from '../../data';
import './About.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const About = () => {
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
        <div className="about-text-content">
          <h1 className="intro-name" style={introNameStyle}>{portfolioData.name}</h1>
          <p className="intro-title" style={introTitleStyle}>{portfolioData.title}</p>
          <p style={aboutTextStyle}>{portfolioData.about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;