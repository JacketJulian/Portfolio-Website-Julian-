import { useState, useEffect, useCallback } from 'react';

export const useScroll = (scrollThreshold = 60) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= scrollThreshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isScrolled;
};