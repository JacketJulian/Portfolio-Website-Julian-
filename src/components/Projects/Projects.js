import React from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import { useInView } from '../../hooks/useInView';

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`projects-container fade-in-section ${inView ? 'is-visible' : ''}`} id="projects" data-testid="projects-section">
      <h1 className="projects-heading">{portfolioData.projects.title}</h1>
      <div className="projects-grid">
        {portfolioData.projects.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;