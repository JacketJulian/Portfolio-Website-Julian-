import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import { useInView } from '../../hooks/useInView';
import { theme } from '../../theme';

const Projects = () => {
  const [ref, inView] = useInView();
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerPage = 3;

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

  const totalPages = Math.ceil(portfolioData.projects.projects.length / projectsPerPage);

  const handleNextPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
      setIsTransitioning(false);
    }, 300);
  };

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  let currentProjects = portfolioData.projects.projects.slice(startIndex, endIndex);

  if (currentProjects.length < projectsPerPage) {
    const placeholders = Array(projectsPerPage - currentProjects.length).fill(null);
    currentProjects = [...currentProjects, ...placeholders];
  }

  return (
    <div ref={ref} className={`projects-container fade-in-section ${inView ? 'is-visible' : ''}`} id="projects" data-testid="projects-section">
      <h1 className="projects-heading section-title-bubble">{portfolioData.projects.title}</h1>
      <div className="projects-grid-container">
        <div className={`projects-grid ${isTransitioning ? 'transitioning' : ''}`}>
          {currentProjects.map((project, index) => (
            project ? (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h1 style={titleStyle}>{project.title}</h1>
                <p style={descriptionStyle}>{project.description}</p>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.liveDemoText}</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubText}</a>
                </div>
              </div>
            ) : (
              <div className="project-card-placeholder" key={index}></div>
            )
          ))}
        </div>
      </div>
      <div className="pagination-container">
        <button onClick={handlePrevPage} disabled={currentPage === 0} className="pagination-button">{'<'}</button>
        <span className="page-indicator">{`Page ${currentPage + 1} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className="pagination-button">{'>'}</button>
      </div>
    </div>
  );
};

export default Projects;