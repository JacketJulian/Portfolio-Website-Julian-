import React from 'react';
import './TGT_Projects.css';
import { portfolioData } from '../../data';
import TGT_Project from '../../components/TGT_Project/TGT_Project';

const TGT_Projects = () => {
  return (
    <section className="tgt-projects" data-testid="tgt-projects">
      <div className="tgt-projects-inner">
        <h2 className="tgt-projects-title">Some of my Projects</h2>
        <div className="tgt-projects-list">
          {portfolioData.projects.projects.map((project, index) => (
            <TGT_Project
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TGT_Projects;
