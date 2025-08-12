import React from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../../hooks/useScroll';
import './Navbar.css';

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <nav className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo" data-testid="navbar-logo-link">
          Julian Mangual
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="resume" smooth={true} duration={500} className="nav-links">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;