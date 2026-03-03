import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = ({ animationsEnabled, onToggleAnimations }) => {
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

  return isMobile
    ? <MobileNavbar />
    : <DesktopNavbar animationsEnabled={animationsEnabled} onToggleAnimations={onToggleAnimations} />;
};

export default Navbar;
