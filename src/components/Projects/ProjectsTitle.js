import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const ProjectsTitle = ({ title, className = 'projects-heading section-title-bubble' }) => {
  return (
    <SectionTitle className={className}>
      {title}
    </SectionTitle>
  );
};

export default ProjectsTitle;
