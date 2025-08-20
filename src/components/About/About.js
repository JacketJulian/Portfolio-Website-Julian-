import React, { useState, useEffect } from 'react';
import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileAbout /> : <DesktopAbout />;
};

export default About;
