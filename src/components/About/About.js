import React from 'react';
import { portfolioData } from '../../data';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about" data-testid="about-section">
      <div className="about-content">
        <h2>{portfolioData.about.title}</h2>
        <p>{portfolioData.about.description}</p>
      </div>
    </div>
  );
};

export default About;