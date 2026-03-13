import React from 'react';
import './TGT_Project.css';
import TGT_Button from '../tgt_button/tgt_button';

const TGT_Project = ({
  title = 'Target Project',
  description = 'Placeholder project description.',
  imageUrl = '',
}) => {
  return (
    <div className="tgt-project" data-testid="tgt-project">
        <div className="tgt-project-container">
      {imageUrl ? (
        <img className="tgt-project-image" src={imageUrl} alt={title} loading="lazy" />
      ) : (
        <div className="tgt-project-image" aria-hidden="true" />
      )}
      <div className="tgt-project-body">
        <div className="tgt-project-text">
          <h3 className="tgt-project-title">{title}</h3>
          <p className="tgt-project-description">{description}</p>
        </div>
        <TGT_Button className="tgt-project-button">View Project</TGT_Button>
        </div>
      </div>
    </div>
  );
};

export default TGT_Project;
