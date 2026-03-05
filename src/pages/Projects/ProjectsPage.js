import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data';
import './Projects.css';
import trackEvent from '../../utils/analytics';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectImage from '../../components/Projects/ProjectImage';
import ProjectName from '../../components/Projects/ProjectName';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';

const ProjectsPage = () => {
  const projects = portfolioData.projects.projects;
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [activeDot, setActiveDot] = useState(Math.min(2, Math.max((portfolioData.projects.projects || []).length - 1, 0)));
  const gridContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);
  const ignoreScrollRef = useRef(false);
  const ignoreScrollTimeoutRef = useRef(null);

  const titleStyle = {
    fontWeight: 'bold',
  };



  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };


  const handleCardClick = (project, index) => {
    if (index !== activeDot) {
      setActiveDot(index);
      return;
    }
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

  const getClosestIndex = () => {
    const container = gridContainerRef.current;
    if (!container) return activeDot;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = activeDot;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const handleScroll = () => {
    if (ignoreScrollRef.current) return;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const closestIndex = getClosestIndex();
      if (closestIndex !== activeDot) {
        setActiveDot(closestIndex);
      } else {
        scrollToIndex(closestIndex);
      }
    }, 50);
  };

  const scrollToIndex = (index, behavior = 'smooth') => {
    const container = gridContainerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    const containerWidth = container.clientWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.clientWidth;
    const targetLeft = cardLeft - (containerWidth - cardWidth) / 2;
    container.scrollTo({ left: targetLeft, behavior });
  };

  useEffect(() => {
    ignoreScrollRef.current = true;
    if (ignoreScrollTimeoutRef.current) {
      clearTimeout(ignoreScrollTimeoutRef.current);
    }
    ignoreScrollTimeoutRef.current = setTimeout(() => {
      ignoreScrollRef.current = false;
    }, 250);
    scrollToIndex(activeDot);
  }, [activeDot]);

  useEffect(() => {
    scrollToIndex(activeDot, 'auto');
    const handleResize = () => scrollToIndex(activeDot, 'auto');
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (ignoreScrollTimeoutRef.current) {
        clearTimeout(ignoreScrollTimeoutRef.current);
      }
    };
  }, [activeDot]);

  const renderProjectsGrid = (projectsList) => (
    projectsList.map((project, index) => (
      project ? (
        <div
          className={`project-card${activeDot === index ? ' current-view' : ''}`}
          key={index}
          ref={(el) => { cardRefs.current[index] = el; }}
          onClick={() => setActiveDot(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDot(index);
            }
          }}
        >
          <ProjectImage
            src={project.image}
            alt={project.title}
            onClick={() => handleCardClick(project, index)}
          />
          <div className="project-card-action">
            <Button
              variant="secondary"
              className="project-learn-more"
              onClick={(e) => {
                e.stopPropagation();
                setActiveDot(index);
                handleShowModal(project);
              }}
            >
              Learn more
            </Button>
          </div>
          <ProjectName
            title={project.title}
            style={titleStyle}
            onClick={() => handleCardClick(project, index)}
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
      <div
        className="projects-grid-container"
        ref={gridContainerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onScroll={handleScroll}
      >
        <div className="projects-grid">
          {renderProjectsGrid(projects)}
        </div>
      </div>

      <div className="projects-pagination">
        <Pagination
          count={projects.length}
          activeIndex={activeDot}
          onSelect={setActiveDot}
          ariaLabel="Projects pagination"
        />
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
