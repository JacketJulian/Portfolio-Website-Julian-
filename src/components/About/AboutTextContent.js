import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const AboutTextContent = ({ name, title, description, animationsEnabled = true }) => {
  const MotionSpan = animationsEnabled ? motion.span : 'span';
  return (
    <div className="about-text-content">
      <h1 style={{ fontSize: '36px', marginBottom: '10px', color: theme.colors.white, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        <MotionSpan
          style={{ display: 'inline-block', marginRight: '0.5rem' }}
          {...(animationsEnabled
            ? {
                initial: { scale: 1 },
                animate: {
                  scale: [1, 8, 1.2, 1],
                  rotate: [0, 20, -10, 20, -5, 0],
                },
                transition: {
                  scale: { times: [0, 0.2, 0.5, 1], duration: 2, ease: "easeInOut" },
                  rotate: { duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }
                },
              }
            : {})}
          role="img"
          aria-label="waving hand"
        >
          👋
        </MotionSpan>
        Hi, I'm
      </h1>
      <h1 className="intro-name" style={{ color: theme.colors.white }}>{name}</h1>
      <p className="intro-title" style={{ color: theme.colors.white }}>{title}</p>
      <p style={{ color: theme.colors.white }}>{description}</p>
    </div>
  );
};

export default AboutTextContent;