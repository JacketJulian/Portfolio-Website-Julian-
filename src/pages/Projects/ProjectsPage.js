import React, { useState } from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import { theme } from '../../theme';
import trackEvent from '../../utils/analytics';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectImage from '../../components/Projects/ProjectImage';
import ProjectName from '../../components/Projects/ProjectName';
import ProjectDescription from '../../components/Projects/ProjectDescription';

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [expandedBubbles, setExpandedBubbles] = useState(new Set());

  const minSwipeDistance = 50;

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


  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleBubbleClick = (e, projectIndex) => {
    e.stopPropagation();
    const newExpandedBubbles = new Set(expandedBubbles);
    const bubbleKey = `all-${projectIndex}`;

    if (newExpandedBubbles.has(bubbleKey)) {
      newExpandedBubbles.delete(bubbleKey);
    } else {
      newExpandedBubbles.add(bubbleKey);
    }

    setExpandedBubbles(newExpandedBubbles);
  };

  const handleCardClick = (project) => {
    handleShowModal(project);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
  };

  const renderProjectsGrid = (projects) => (
    projects.map((project, index) => (
      project ? (
        <div
          className="project-card"
          key={index}
        >
          <ProjectImage
            src={project.image}
            alt={project.title}
            onClick={() => handleCardClick(project)}
          />
          <ProjectName
            title={project.title}
            style={titleStyle}
            onClick={() => handleCardClick(project)}
          />
          <ProjectDescription
            description={project.description}
            style={descriptionStyle}
            isExpanded={expandedBubbles.has(`all-${index}`)}
            onClick={(e) => handleBubbleClick(e, index)}
          />
        </div>
      ) : (
        <div
          className="project-card-placeholder"
          key={index}
        >
          <div className="placeholder-image"></div>
          <div className="placeholder-title"></div>
          <div className="placeholder-description"></div>
        </div>
      )
    ))
  );

  return (
    <div className="projects-container" id="projects" data-testid="projects-section">
      <SectionTitle className="projects-heading section-title-bubble">{portfolioData.projects.title}</SectionTitle>
      <div className="projects-grid-container" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="projects-grid">
          {renderProjectsGrid(portfolioData.projects.projects)}
        </div>
      </div>

      <ModalWindow show={showModal} handleClose={handleCloseModal} title={selectedProject ? selectedProject.title : ''}>
        {selectedProject && (
          <div>
            {selectedProject.videoUrl && (
              <div className="modal-video-container">
                <video
                  controls
                  className="modal-video"
                  preload="metadata"
                >
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <p>{selectedProject.description}</p>
            <div className="modal-project-links" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.stopPropagation(); trackEvent('Project Demo Click', { project: selectedProject.title }); }}
                style={{
                  textDecoration: 'none',
                  margin: '0 0.625rem',
                  fontWeight: 'normal',
                  display: 'inline-block',
                  backgroundColor: '#2294fb',
                  color: '#fff',
                  padding: '0.3125rem 1.25rem',
                  borderRadius: '1.25rem',
                  border: '1px solid #2294fb',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
                {selectedProject.liveDemoText}
              </a>
            </div>
          </div>
        )}
      </ModalWindow>
    </div>
  );
};

export default ProjectsPage;
