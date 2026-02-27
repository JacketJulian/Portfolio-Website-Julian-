import React from 'react';
import SectionDescription from '../SectionDescription/SectionDescription';

const ExperienceDescription = ({ companyName, jobTitle, date, location }) => {
  return (
    <SectionDescription
      title={companyName}
      subtitle={jobTitle}
      date={date}
      location={location}
      className="experience-details"
      dateClassName="experience-date"
      locationClassName="experience-location"
    />
  );
};

export default ExperienceDescription;
