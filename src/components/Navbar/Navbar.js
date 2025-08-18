import React, { useState, useEffect, useRef } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { useScroll } from '../../hooks/useScroll';
import { portfolioData } from '../../data';
import './Navbar.css';
import { theme } from '../../theme';

const Navbar = () => {
  const isScrolled = useScroll();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [activeLink, setActiveLink] = useState('about');
  const navRefs = useRef({});
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      // console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      if (navRefs.current[activeLink]) {
        const activeElement = navRefs.current[activeLink];
        // console.log(`Active Link: ${activeLink}`);
        // console.log(`OffsetLeft: ${activeElement.offsetLeft}, OffsetWidth: ${activeElement.offsetWidth}`);
        setIndicatorStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        });
      } else {
        // console.log(`Element for ${activeLink} not found in navRefs.current`);
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    window.addEventListener('scroll', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
      window.removeEventListener('scroll', updateIndicator);
    };
  }, [activeLink]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) { // Assuming 768px is breakpoint for mobile
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleSetActive = (to) => {
    // console.log(`Setting active link to: ${to}`);
    setActiveLink(to);
    setIsOpen(false); // Close menu on link click
  };

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i> {/* Font Awesome icons */}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <div className="nav-indicator" style={indicatorStyle}></div>
          {portfolioData.navLinks.map((link, index) => (
            <li className="nav-item" key={index} ref={(el) => (navRefs.current[link.url] = el)}>
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                className="nav-links"
                onSetActive={handleSetActive}
                spy={true}
                hashSpy={true}
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

export default Navbar;