import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = ({ animationsEnabled, onToggleAnimations, theme, onThemeChange }) => {
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
    ? <MobileNavbar theme={theme} onThemeChange={onThemeChange} />
    : <DesktopNavbar animationsEnabled={animationsEnabled} onToggleAnimations={onToggleAnimations} theme={theme} onThemeChange={onThemeChange} />;
};

export default Navbar;
