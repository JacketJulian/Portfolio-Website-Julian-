import React from 'react';
import './TGT_About.css';
import TgtButton from '../../components/tgt_button/tgt_button';

const TGT_About = () => {
  return (
    <section className="tgt-about" id="about" data-testid="tgt-about">
      <div
        className="tgt-about-inner"
        style={{
          '--tgt-about-bg-desktop': `url(${process.env.PUBLIC_URL}/assets/TGT_Banner.png)`,
          '--tgt-about-bg-mobile': `url(${process.env.PUBLIC_URL}/assets/TGT_About_Mobile.png)`,
        }}
      >
        <h1 className="tgt-about-title">Julian Mangual</h1>
        <p className="tgt-about-text">Software Engineer | Data | Infrastructure</p>
        <TgtButton variant="secondary">Download Resume</TgtButton>
      </div>
    </section>
  );
};

export default TGT_About;
