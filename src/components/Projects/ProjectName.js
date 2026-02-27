import React from 'react';

const ProjectName = ({ title, onClick, style }) => {
  return (
    <h1 style={style} onClick={onClick}>
      {title}
    </h1>
  );
};

export default ProjectName;
