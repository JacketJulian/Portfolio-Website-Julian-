import React, { useState, useEffect, useRef } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { useScroll } from '../../hooks/useScroll';
import { portfolioData } from '../../data';
import './DesktopNavbar.css';
import trackEvent from '../../utils/analytics';

const DesktopNavbar = () => {
  const isScrolled = useScroll();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [activeLink, setActiveLink] = useState('about');
  const navRefs = useRef({});
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollVelocity = useRef(0);
  const targetPosition = useRef({ left: 0, width: 0, height: 0 });
  const currentPosition = useRef({ left: 0, width: 0, height: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {});
    Events.scrollEvent.register('end', function (to, element) {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const updateTargetPosition = () => {
      if (navRefs.current[activeLink]) {
        const activeElement = navRefs.current[activeLink];
        targetPosition.current = {
          left: activeElement.offsetLeft - 10,
          width: activeElement.offsetWidth + 15,
          height: activeElement.offsetHeight + 20,
        };
      }
    };

    const calculateScrollVelocity = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      const timeDelta = currentTime - lastScrollTime.current;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      if (timeDelta > 0) {
        scrollVelocity.current = scrollDelta / timeDelta;
      }
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    const animateIndicator = () => {
      const target = targetPosition.current;
      const current = currentPosition.current;
      
      // Base lerp factor - higher = faster transition
      const baseLerpFactor = 0.15;
      // Velocity multiplier - scroll faster = indicator moves faster
      const velocityMultiplier = Math.min(scrollVelocity.current * 2, 1);
      // Combined lerp factor with velocity influence
      const lerpFactor = baseLerpFactor + (velocityMultiplier * 0.15);
      
      // Smoothly interpolate current position toward target
      current.left += (target.left - current.left) * lerpFactor;
      current.width += (target.width - current.width) * lerpFactor;
      current.height += (target.height - current.height) * lerpFactor;
      
      // Decay velocity
      scrollVelocity.current *= 0.9;
      
      setIndicatorStyle({
        left: current.left,
        width: current.width,
        height: current.height,
      });
      
      // Continue animation loop
      animationFrameId.current = requestAnimationFrame(animateIndicator);
    };

    const handleScroll = () => {
      calculateScrollVelocity();
      updateTargetPosition();
    };

    const handleResize = () => {
      updateTargetPosition();
      // Snap immediately on resize
      currentPosition.current = { ...targetPosition.current };
      setIndicatorStyle(targetPosition.current);
    };

    // Initialize positions
    updateTargetPosition();
    currentPosition.current = { ...targetPosition.current };
    setIndicatorStyle(targetPosition.current);

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animateIndicator);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [activeLink]);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <ul className='nav-menu'>
          <div className="nav-indicator" style={indicatorStyle}></div>
          {portfolioData.navLinks.map((link, index) => (
            <li className="nav-item" key={index} ref={(el) => (navRefs.current[link.url] = el)} onClick={() => trackEvent('Navbar Click', { link: link.name })}>
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                className="nav-links"
                onSetActive={handleSetActive}
                spy={true}
                hashSpy={true}
                offset={-500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
