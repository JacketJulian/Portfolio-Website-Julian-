import React from 'react';
import { portfolioData } from '../../data';
import './Resume.css';
import { useInView } from '../../hooks/useInView';

const Resume = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`resume-container fade-in-section ${inView ? 'is-visible' : ''}`} id="resume" data-testid="resume-section">
      <div className="resume-content">
        <h1>{portfolioData.resume.title}</h1>
        <p>{portfolioData.resume.description}</p>
        <a href={portfolioData.resume.resumeLink} className="resume-button">Download Resume</a>
      </div>
    </div>
  );
};

export default Resume;