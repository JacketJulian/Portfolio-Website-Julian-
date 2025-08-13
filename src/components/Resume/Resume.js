import React from 'react';
import { portfolioData } from '../../data';
import './Resume.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const Resume = () => {
  const [ref, inView] = useInView();

  const titleStyle = {
    color: theme.colors.primary,
  };

  const descriptionStyle = {
    color: theme.colors.primary,
  };

  const buttonStyle = {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
  };

  return (
    <div ref={ref} className={`resume-container fade-in-section ${inView ? 'is-visible' : ''}`} id="resume" data-testid="resume-section">
      <div className="resume-content">
        <h1 style={titleStyle}>{portfolioData.resume.title}</h1>
        <p style={descriptionStyle}>{portfolioData.resume.description}</p>
        <a href={portfolioData.resume.resumeLink} className="resume-button" style={buttonStyle}>{portfolioData.resume.downloadText}</a>
      </div>
    </div>
  );
};

export default Resume;