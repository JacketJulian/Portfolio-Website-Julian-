import React from 'react';
import { portfolioData } from '../../data';
import './Education.css';
import { theme } from '../../theme';
import { useInView } from '../../hooks/useInView';

const Education = () => {
  const [ref, inView] = useInView();

  // Sort degrees by date in descending order (most recent first)
  const sortedDegrees = [...portfolioData.education.degrees].sort((a, b) => {
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
    <div ref={ref} className={`education-container fade-in-section ${inView ? 'is-visible' : ''}`} id="education" data-testid="education-section">
      <h1 className="education-heading section-title-bubble">{portfolioData.education.title}</h1>
      <div className="education-speech-bubble">
        <h3>{portfolioData.education.coursesTitle}</h3>
        <ul>
          {portfolioData.education.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <div className="education-list">
        {sortedDegrees.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-header">
              <img src={edu.logo} alt={edu.institutionName} className="education-logo" />
              <div className="education-details">
                <h2>{edu.institutionName}</h2>
                <h3>{edu.degree}</h3>
                <p className="education-date">{edu.date}</p>
                <p className="education-location">{edu.location}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;