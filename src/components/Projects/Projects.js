import React from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const Projects = () => {
  const [ref, inView] = useInView();

  const headingStyle = {
    color: theme.colors.primary,
  };

  const cardStyle = {
    background: theme.colors.white,
  };

  const titleStyle = {
    color: theme.colors.primary,
  };

  const descriptionStyle = {
    color: theme.colors.primary,
  };

  const linkStyle = {
    color: theme.colors.secondary,
  };

  return (
    <div ref={ref} className={`projects-container fade-in-section ${inView ? 'is-visible' : ''}`} id="projects" data-testid="projects-section">
      <h1 className="projects-heading" style={headingStyle}>{portfolioData.projects.title}</h1>
      <div className="projects-grid">
        {portfolioData.projects.projects.map((project, index) => (
          <div className="project-card" key={index} style={cardStyle}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descriptionStyle}>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>{project.liveDemoText}</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>{project.githubText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;