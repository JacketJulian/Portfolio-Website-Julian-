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
    const updateIndicator = () => {
      if (navRefs.current[activeLink]) {
        const activeElement = navRefs.current[activeLink];
        setIndicatorStyle({
          left: activeElement.offsetLeft - 10,
          width: activeElement.offsetWidth + 15,
          height: activeElement.offsetHeight + 20,
        });
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
