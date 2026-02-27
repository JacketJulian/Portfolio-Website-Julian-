import React from 'react';

const ExperienceSkills = ({ techStack }) => {
  return (
    <div className="experience-tech-stack">
      {techStack.map((tech, techIndex) => (
        <span key={techIndex} className="tech-bubble">{tech}</span>
      ))}
    </div>
  );
};

export default ExperienceSkills;
