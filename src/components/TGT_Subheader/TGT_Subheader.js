import React from 'react';
import './TGT_Subheader.css';

const TGT_Subheader = ({ text = 'Welcome to my portfolio!', categories = ['About', 'Projects', 'Experience', 'Education'], onLogoClick }) => {
  const scrollToSection = (category) => {
    const sectionId = category.toLowerCase();
    const section = document.getElementById(sectionId);

    if (!section) return;

    const offset = 130;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div className="tgt-subheader" data-testid="tgt-subheader">
      <div className="tgt-subheader-inner">
        <button
          type="button"
          className="tgt-subheader-logo-button"
          onClick={onLogoClick}
          aria-label="Switch to default theme"
        >
          <img
            src="/assets/TGT_Julian_Logo.svg"
            alt="Julian logo"
            className="tgt-subheader-logo"
          />
        </button>
        <div className="tgt-subheader-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className="tgt-subheader-category"
            onClick={() => scrollToSection(cat)}
            aria-label={`Scroll to ${cat}`}
          >
            <span>{cat}</span>
            <svg
              className="tgt-subheader-caret"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
        </div>
        <div className="tgt-search-container">
          {text}
        </div>
      </div>
    </div>
  );
};

export default TGT_Subheader;
