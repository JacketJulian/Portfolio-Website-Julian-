import React, { useState, useEffect } from 'react';
import DesktopContact from './DesktopContact';
import MobileContact from './MobileContact';

const Contact = () => {
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

  return isMobile ? <MobileContact /> : <DesktopContact />;
};

export default Contact;
