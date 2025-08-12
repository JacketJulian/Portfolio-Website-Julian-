import React from 'react';
import { portfolioData } from '../../data';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container" id="resume" data-testid="resume-section">
      <div className="resume-content">
        <h2>{portfolioData.resume.title}</h2>
        <p>{portfolioData.resume.description}</p>
        <a href={portfolioData.resume.resumeLink} className="resume-button">Download Resume</a>
      </div>
    </div>
  );
};

export default Resume;