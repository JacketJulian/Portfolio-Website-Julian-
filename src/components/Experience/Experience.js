import React from 'react';
import { portfolioData } from '../../data';
import './Experience.css';
import { theme } from '../../theme';
import { useInView } from '../../hooks/useInView';

const Experience = () => {
  const [ref, inView] = useInView();

  // Sort jobs by date in descending order (most recent first)
  const sortedJobs = [...portfolioData.experience.jobs].sort((a, b) => {
    // Assuming date format is "YYYY - YYYY" or "YYYY"
    // Extract the end year for comparison
    const getEndYear = (dateString) => {
      const parts = dateString.split(' - ');
      return parseInt(parts[parts.length - 1]);
    };

    const yearA = getEndYear(a.date);
    const yearB = getEndYear(b.date);

    return yearB - yearA; // Descending order
  });

  return (
    <div ref={ref} className={`experience-container fade-in-section ${inView ? 'is-visible' : ''}`} id="experience" data-testid="experience-section">
      <h1 className="experience-heading section-title-bubble">{portfolioData.experience.title}</h1>
      <div className="experience-list">
        {sortedJobs.map((job, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <img src={job.logo} alt={job.companyName} className="experience-logo" />
              <div className="experience-details">
                <h2>{job.companyName}</h2>
                <h3>{job.jobTitle}</h3>
                <p className="experience-date">{job.date}</p>
                <p className="experience-location">{job.location}</p>
              </div>
            </div>
            <div className="experience-tech-stack">
              {job.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-bubble">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;