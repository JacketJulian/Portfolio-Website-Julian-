import React, { useState, useEffect } from 'react';
import DesktopEducation from './DesktopEducation';
import MobileEducation from './MobileEducation';

const Education = () => {
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

  return isMobile ? <MobileEducation /> : <DesktopEducation />;
};

export default Education;
