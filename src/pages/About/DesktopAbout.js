import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../../data';
import './DesktopAbout.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import AboutTextContent from '../../components/About/AboutTextContent';
import ResumeButton from '../../components/About/ResumeButton';
import SocialButton from '../../components/About/SocialButton';
import { theme } from '../../theme';

const DesktopAbout = ({ animationsEnabled }) => {
  const aboutRef = useRef(null);
  const isInViewValue = useInView(aboutRef, { amount: 0.35 });
  const isInView = animationsEnabled ? isInViewValue : true;

  const MotionDiv = animationsEnabled ? motion.div : 'div';

  const profileVariants = {
    in: { x: 0 },
    out: { x: '-120%' },
  };

  const textVariants = {
    in: { x: 0 },
    out: { x: '120%' },
  };

  const resumeVariants = {
    in: { x: 0 },
    out: { x: '120%' },
  };

  const socialVariants = {
    in: { x: 0 },
    out: { x: '120%' },
  };

  return (
    <div className="about-container" id="about" data-testid="about-section">
      <div className="about-content" ref={aboutRef}>
        <MotionDiv
          {...(animationsEnabled
            ? {
                variants: profileVariants,
                initial: 'out',
                animate: isInView ? 'in' : 'out',
                transition: { duration: isInView ? 0.7 : 0.4, ease: 'easeOut' },
              }
            : {})}
        >
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
            animationsEnabled={animationsEnabled}
          />
        </MotionDiv>
        <div className="about-text-wrapper">
          <MotionDiv
            {...(animationsEnabled
              ? {
                  variants: textVariants,
                  initial: 'out',
                  animate: isInView ? 'in' : 'out',
                  transition: { duration: isInView ? 0.7 : 0.4, ease: 'easeOut', delay: isInView ? 0.15 : 0 },
                }
              : {})}
          >
            <AboutTextContent 
              name={portfolioData.name}
              title={portfolioData.title}
              description={portfolioData.about.description}
              animationsEnabled={animationsEnabled}
            />
          </MotionDiv>
          <div className="about-buttons">
            <MotionDiv
              {...(animationsEnabled
                ? {
                    variants: resumeVariants,
                    initial: 'out',
                    animate: isInView ? 'in' : 'out',
                    transition: { duration: isInView ? 0.7 : 0.4, ease: 'easeOut', delay: isInView ? 0.25 : 0 },
                  }
                : {})}
            >
              <ResumeButton 
                href={portfolioData.about.resumeLink}
                text={portfolioData.about.downloadText}
              />
            </MotionDiv>
            <MotionDiv
              className="social-links-about"
              {...(animationsEnabled
                ? {
                    variants: socialVariants,
                    initial: 'out',
                    animate: isInView ? 'in' : 'out',
                    transition: { duration: isInView ? 0.7 : 0.4, ease: 'easeOut', delay: isInView ? 0.55 : 0 },
                  }
                : {})}
            >
              {portfolioData.socialLinks.map((link, index) => (
                <SocialButton 
                  key={index}
                  href={link.url}
                  name={link.name}
                />
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAbout;