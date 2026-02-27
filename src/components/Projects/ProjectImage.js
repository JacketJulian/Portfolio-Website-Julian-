import React from 'react';

const ProjectImage = ({ src, alt, onClick }) => {
  return (
    <div className="project-image-container" onClick={onClick}>
      <img src={src} alt={alt} className="project-image" loading="lazy" />
    </div>
  );
};

export default ProjectImage;
