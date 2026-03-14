import React from 'react';
import './TGT_Education.css';
import { portfolioData } from '../../data';

const TGT_Education = () => {
  return (
    <section className="tgt-education" id="education" data-testid="tgt-education">
      <div className="tgt-education-inner">
        <div className="tgt-education-row">
          {portfolioData.education.degrees.map((degree) => (
            <div className="tgt-education-item" key={`${degree.institutionName}-${degree.degree}`}>
              <div className="tgt-education-content">
                <span className="tgt-education-name">{degree.institutionName}</span>
                <span className="tgt-education-degree">{degree.degree}</span>
                <span className="tgt-education-date">{degree.date}</span>
                <span className="tgt-education-location">{degree.location}</span>
              </div>
              <div className="tgt-education-logo-wrapper">
                <img
                  src={degree.logo}
                  alt={degree.institutionName}
                  className="tgt-education-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TGT_Education;
