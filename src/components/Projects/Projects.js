import React from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const Projects = () => {
  const [ref, inView] = useInView();

  const titleStyle = {
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    backgroundColor: theme.colors.bubbleBlue,
    borderRadius: '20px',
    padding: '15px',
    paddingTop: '5px',
    color: theme.colors.white,
    textAlign: 'left',
  };

  return (
    <div ref={ref} className={`projects-container fade-in-section ${inView ? 'is-visible' : ''}`} id="projects" data-testid="projects-section">
      <h1 className="projects-heading section-title-bubble">{portfolioData.projects.title}</h1>
      <div className="projects-grid">
        {portfolioData.projects.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h1 style={titleStyle}>{project.title}</h1>
            <p style={descriptionStyle}>{project.description}</p>
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

export default Projects;