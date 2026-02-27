import React from 'react';

const ProjectDescription = ({ description, isExpanded, onClick, style }) => {
  return (
    <p
      style={style}
      className={isExpanded ? 'expanded' : ''}
      onClick={onClick}
    >
      {description}
    </p>
  );
};

export default ProjectDescription;
