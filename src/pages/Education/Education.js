import React from 'react';
import { portfolioData } from '../../data';
import './Education.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionIcon from '../../components/SectionIcon/SectionIcon';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import RelevantCoursework from '../../components/Education/RelevantCoursework';

const Education = () => {
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
    <div className="education-container" id="education" data-testid="education-section">
      <SectionTitle className="education-heading section-title-bubble">{portfolioData.education.title}</SectionTitle>
      <RelevantCoursework
        title={portfolioData.education.coursesTitle}
        courses={portfolioData.education.courses}
      />
      <div className="education-list">
        {sortedDegrees.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-header">
              <SectionIcon src={edu.logo} alt={edu.institutionName} className="education-logo" />
              <SectionDescription
                title={edu.institutionName}
                subtitle={edu.degree}
                date={edu.date}
                location={edu.location}
                className="education-details"
                dateClassName="education-date"
                locationClassName="education-location"
              />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;