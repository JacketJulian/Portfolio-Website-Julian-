import React from 'react';
import './Footer.css';
import { portfolioData } from '../../data';

const Footer = () => {
  return (
    <footer id="ac-globalfooter" className="footer" data-testid="footer-section">
      <div className="footer-inner">
        <p className="footer-text">{portfolioData.footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;