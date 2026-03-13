import React from 'react';
import './TGT_MobileSubheader.css';

const TGT_MobileSubheader = ({ onLogoClick }) => {
  return (
    <div className="tgt-mobile-subheader-shell" data-testid="tgt-mobile-subheader">
      <div className="tgt-mobile-subheader">
        <button
          type="button"
          className="tgt-mobile-subheader-logo-button"
          onClick={onLogoClick}
          aria-label="Switch to default theme"
        >
          <img
            src="/assets/TGT_Julian_Logo.svg"
            alt="Julian logo"
            className="tgt-mobile-subheader-logo"
          />
        </button>
        <div className="tgt-mobile-search-container">Welcome to my portfolio!</div>
      </div>
      <div className="tgt-mobile-subheader-spacer" aria-hidden="true" />
    </div>
  );
};

export default TGT_MobileSubheader;
