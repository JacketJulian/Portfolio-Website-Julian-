import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import AnalyticsAlert from './components/AnalyticsAlert/AnalyticsAlert';
import './App.css';
import { theme } from './theme';
import trackEvent from './utils/analytics';

function App() {
  useEffect(() => {
    document.body.style.background = `linear-gradient(to right, ${theme.colors.lavender}, ${theme.colors.lightBlue})`;
    trackEvent('Page View', { page: window.location.pathname });
  }, []);

  return (
    <div className="App app-fade-in">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Education />
      <AnalyticsAlert />
    </div>
  );
}

export default App;
