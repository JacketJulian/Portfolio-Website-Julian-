import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../data';
import './DesktopAbout.css';
import { theme } from '../../theme';
import { createEmojiClickHandler, DEFAULT_EMOJI } from '../../utils/emojiStatusHandler';
import '../../components/EmojiStatus/EmojiStatus.css';

const DesktopAbout = () => {
  const [isStatusExpanded, setIsStatusExpanded] = useState(true);
  const [currentEmoji, setCurrentEmoji] = useState(DEFAULT_EMOJI);
  const [isAnimating, setIsAnimating] = useState(null);
  const timeoutRef = useRef(null);
  const handleEmojiClick = createEmojiClickHandler(setCurrentEmoji, setIsAnimating, timeoutRef);

  useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    
  const handleStatusClick = (e) => {
    if (!e.target.classList.contains('emoji-status')) {
      setIsStatusExpanded(!isStatusExpanded);
    }
  };

  const aboutImagePlaceholderStyle = {
    backgroundColor: theme.colors.white,
    border: `5px solid ${theme.colors.white}`,
  };

  return (
    <div className="about-container" id="about" data-testid="about-section">
      <div className="about-content">
        <div className="about-image-placeholder" style={aboutImagePlaceholderStyle}>
          <img src={portfolioData.profileImage} alt="Your Profile" loading="lazy" />
          {portfolioData.about.status && (
            <div className={`status-indicator ${isStatusExpanded ? 'expanded' : ''}`}
              onClick={handleStatusClick}>
              <div 
                className={`emoji-status ${isAnimating || ''}`}
                onClick={() => handleEmojiClick(currentEmoji)}
                style={{ fontSize: '1.2em', marginRight: '0.3em' }}
              >
                {currentEmoji}
              </div>
              <span className="status-text">{portfolioData.about.status}</span>
            </div>
          )}
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-content">
            <h1 style={{ fontSize: '36px', marginBottom: '10px', color: theme.colors.white, fontWeight: 'bold' }}>👋 Hi, I'm</h1>
            <h1 className="intro-name" style={{ color: theme.colors.white }}>{portfolioData.name}</h1>
            <p className="intro-title" style={{ color: theme.colors.white }}>{portfolioData.title}</p>
            <p style={{ color: theme.colors.white }}>{portfolioData.about.description}</p>
          </div>
          <div className="about-buttons">
            <a href={portfolioData.about.resumeLink} className="about-action-button about-resume-button">{portfolioData.about.downloadText}</a>
            <div className="social-links-about">
              {portfolioData.socialLinks.map((link, index) => (
                <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className="about-action-button social-button">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAbout;
