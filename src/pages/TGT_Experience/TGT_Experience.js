import React from 'react';
import './TGT_Experience.css';
import { portfolioData } from '../../data';

const TGT_Experience = () => {
  const logoMap = {
    'Target Corporation': '/assets/TGT_Experience.svg',
    'The Dev Effect': '/assets/TDE_Experience.svg',
    'Southern Connecticut State University': '/assets/SCSU_Experience.svg',
  };

  return (
    <section className="tgt-experience" data-testid="tgt-experience">
      <div className="tgt-experience-inner">
        <h2 className="tgt-experience-title">Places I've worked at</h2>
        <div className="tgt-experience-row">
          {portfolioData.experience.jobs.map((job) => (
            <div className="tgt-experience-item" key={job.companyName}>
              <img
                src={logoMap[job.companyName]}
                alt={job.companyName}
                className="tgt-experience-logo"
              />
              <span className="tgt-experience-name">{job.companyName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TGT_Experience;
