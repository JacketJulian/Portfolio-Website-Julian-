import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import AnalyticsAlert from './components/AnalyticsAlert/AnalyticsAlert';
import Footer from './components/Footer/Footer';
import './App.css';
import trackEvent from './utils/analytics';

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    document.body.style.background = '#f5f5f7';
    trackEvent('Page View', { page: window.location.pathname });
  }, []);

  return (
    <MotionConfig reducedMotion={animationsEnabled ? 'never' : 'always'}>
      <div className="App app-fade-in">
        <Navbar
          animationsEnabled={animationsEnabled}
          onToggleAnimations={() => setAnimationsEnabled((prev) => !prev)}
        />
        <About animationsEnabled={animationsEnabled} />
        <Projects />
        <Experience />
        <Education />
        <AnalyticsAlert />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
