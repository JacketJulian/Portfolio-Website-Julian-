import React, { useState, useEffect } from 'react';
import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects';

const Projects = () => {
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

  return isMobile ? <MobileProjects /> : <DesktopProjects />;
};

export default Projects;
