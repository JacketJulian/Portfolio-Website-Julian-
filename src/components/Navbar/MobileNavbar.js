import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { portfolioData } from '../../data';
import './MobileNavbar.css';

const BurgerIcon = () => (
  <svg width="40px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="40px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Menu / Close_MD">
      <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`mobile-navbar ${isOpen ? 'active' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <BurgerIcon />}
        </div>
      </div>
      <div className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-items">
          {portfolioData.navLinks.map((link, index) => (
            <li className="mobile-nav-item" key={index}>
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                className="mobile-nav-links"
                onClick={toggleMenu} // Close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
