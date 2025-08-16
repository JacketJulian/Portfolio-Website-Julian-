import React from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../../hooks/useScroll';
import { portfolioData } from '../../data';
import './Navbar.css';
import { theme } from '../../theme';

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo" data-testid="navbar-logo-link">
          {portfolioData.name}
        </Link>
        <ul className="nav-menu">
          {portfolioData.navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link to={link.url} smooth={true} duration={500} className="nav-links">
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