import React from 'react';

const ResumeButton = ({ href, text }) => {
  return (
    <a href={href} className="about-action-button about-resume-button">
      {text}
    </a>
  );
};

export default ResumeButton;