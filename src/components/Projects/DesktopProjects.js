import React from 'react';
import { portfolioData } from '../../data';
import './DesktopProjects.css';
import { useInView } from '../../hooks/useInView';

const DesktopProjects = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`projects-container fade-in-section ${inView ? 'is-visible' : ''}`} id="projects" data-testid="projects-section">
      <h1 className="projects-heading section-title-bubble">{portfolioData.projects.title}</h1>
      <div className="projects-grid">
        {portfolioData.projects.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.liveDemoText}</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopProjects;
