import React from 'react';
import { portfolioData } from '../../data';
import './About.css';
import { useInView } from '../../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`about-container fade-in-section ${inView ? 'is-visible' : ''}`} id="about" data-testid="about-section">
      <div className="about-content">
        <div className="about-image-placeholder">
          <img src={portfolioData.profileImage} alt="Your Profile" />
        </div>
        <div className="about-text-content">
          <h1 className="intro-name">{portfolioData.name}</h1>
          <p className="intro-title">{portfolioData.title}</p>
          <p>{portfolioData.about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;