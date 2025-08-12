import React from 'react';
import { portfolioData } from '../../data';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" id="home" data-testid="home-section">
      <div className="home-content">
        <h1>{portfolioData.name}</h1>
        <p>{portfolioData.title}</p>
      </div>
    </div>
  );
};

export default Home;