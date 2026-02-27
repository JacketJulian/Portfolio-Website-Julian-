import React from 'react';
import { portfolioData } from '../../data';
import './DesktopAbout.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import AboutTextContent from '../../components/About/AboutTextContent';
import ResumeButton from '../../components/About/ResumeButton';
import SocialButton from '../../components/About/SocialButton';
import { theme } from '../../theme';

const DesktopAbout = () => {
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
          <div className="about-buttons">
            <ResumeButton 
              href={portfolioData.about.resumeLink}
              text={portfolioData.about.downloadText}
            />
            <div className="social-links-about">
              {portfolioData.socialLinks.map((link, index) => (
                <SocialButton 
                  key={index}
                  href={link.url}
                  name={link.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAbout;