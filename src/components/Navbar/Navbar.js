import React from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../../hooks/useScroll';
import { portfolioData } from '../../data';
import './Navbar.css';
import { theme } from '../../theme';

const Navbar = () => {
  const isScrolled = useScroll();

  const navbarStyle = {
    background: isScrolled ? theme.colors.skyBlue : 'transparent',
  };

  const navbarLogoStyle = {
    color: theme.colors.primary,
  };

  const navLinksStyle = {
    color: theme.colors.primary,
  };

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'} style={navbarStyle}>
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo" data-testid="navbar-logo-link" style={navbarLogoStyle}>
          {portfolioData.name}
        </Link>
        <ul className="nav-menu">
          {portfolioData.navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link to={link.url} smooth={true} duration={500} className="nav-links" style={navLinksStyle}>
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