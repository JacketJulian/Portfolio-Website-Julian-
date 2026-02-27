import React from 'react';
import { portfolioData } from '../../data';
import './MobileAbout.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import AboutTextContent from '../../components/About/AboutTextContent';
import ResumeButton from '../../components/About/ResumeButton';
import { theme } from '../../theme';

const MobileAbout = () => {
  return (
    <div className="about-container" id="about" data-testid="about-section">
      <div className="about-content">
        <ProfileImage 
          src={portfolioData.profileImage}
          alt="Your Profile"
          showStatus={!!portfolioData.about.status}
          statusText={portfolioData.about.status}
          containerStyle={{
            backgroundColor: theme.colors.white,
            border: `5px solid ${theme.colors.white}`,
          }}
          whileHoverRotation={10}
        />
        <div className="about-text-wrapper">
          <AboutTextContent 
            name={portfolioData.name}
            title={portfolioData.title}
            description={portfolioData.about.description}
          />
          <ResumeButton 
            href={portfolioData.about.resumeLink}
            text={portfolioData.about.downloadText}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;