import React from 'react';
import './TGT_Project_Full.css';
import TgtButton from '../../components/tgt_button/tgt_button';

const TGT_Project_Full = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <section className="tgt-project-full" data-testid="tgt-project-full">
      <div className="tgt-project-full-inner">
        <TgtButton className="tgt-project-full-back" variant="secondary" onClick={onBack}>
          Back to Projects
        </TgtButton>

        <div className="tgt-project-full-hero">
          {project.image ? (
            <img
              className="tgt-project-full-image"
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
          ) : null}

          <div className="tgt-project-full-content">
            <h1 className="tgt-project-full-title">{project.title}</h1>

            <div className="tgt-project-full-title-divider" aria-hidden="true">
              <svg viewBox="0 0 100 2" preserveAspectRatio="none">
                <line x1="0" y1="1" x2="100" y2="1" />
              </svg>
            </div>

            <p className="tgt-project-full-description">{project.description}</p>

            <div className="tgt-project-full-actions">
              {project.demoLink ? (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="tgt-project-full-link tgt-project-full-link--live">
                  {project.liveDemoText || 'Live Demo'}
                </a>
              ) : null}
              {project.githubLink ? (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="tgt-project-full-link tgt-project-full-link--non-live">
                  {project.githubText || 'GitHub'}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TGT_Project_Full;
