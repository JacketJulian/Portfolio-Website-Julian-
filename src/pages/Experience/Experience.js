import React from 'react';
import { portfolioData } from '../../data';
import './Experience.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionIcon from '../../components/SectionIcon/SectionIcon';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import ExperienceSkills from '../../components/Experience/ExperienceSkills';

const Experience = () => {
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
    <div className="experience-container" id="experience" data-testid="experience-section">
      <SectionTitle className="experience-heading">{portfolioData.headings.experience}</SectionTitle>
      <div className="experience-list">
        {sortedJobs.map((job, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <SectionIcon src={job.logo} alt={job.companyName} className="experience-logo" />
              <SectionDescription
                title={job.companyName}
                subtitle={job.jobTitle}
                date={job.date}
                location={job.location}
                className="experience-details"
                dateClassName="experience-date"
                locationClassName="experience-location"
              />
            </div>
            <ExperienceSkills techStack={job.techStack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;