import React from 'react';
import './TGT_Footer.css';

const TGT_Footer = () => {
  return (
    <footer className="tgt-footer" data-testid="tgt-footer">
      <div className="tgt-footer-inner">
        <div className="tgt-footer-image">
          <p className="tgt-footer-text">Build More. Get Rejected Less.</p>
          <img src="/assets/TGT_Footer_Img.svg" alt="Target footer" />
        </div>
      </div>
      <div className="tgt-subfooter">
      </div>
    </footer>
  );
};

export default TGT_Footer;
