import React, { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import AnalyticsAlert from './components/AnalyticsAlert/AnalyticsAlert';
import Footer from './components/Footer/Footer';
import TGT_Header from './components/TGT_Header/TGT_Header';
import TGT_Subheader from './components/TGT_Subheader/TGT_Subheader';
import TGT_MobileSubheader from './components/TGT_Subheader/TGT_MobileSubheader';
import TGT_About from './pages/TGT_About/TGT_About';
import TGT_Projects from './pages/TGT_Projects/TGT_Projects';
import TGT_Footer from './pages/TGT_Footer/TGT_Footer';
import TGT_Experience from './pages/TGT_Experience/TGT_Experience';
import TGT_Education from './pages/TGT_Education/TGT_Education';
import './App.css';
import trackEvent from './utils/analytics';

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [theme, setTheme] = useState('apple');
  const [showTgtHeader, setShowTgtHeader] = useState(true);
  const [isWiping, setIsWiping] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const isFirstThemeChange = useRef(true);

  useEffect(() => {
    document.body.style.background = '#f5f5f7';
    trackEvent('Page View', { page: window.location.pathname });
  }, []);

  useEffect(() => {
    if (theme !== 'target') return undefined;

    const handleScroll = () => {
      setShowTgtHeader(window.scrollY < 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  useEffect(() => {
    if (isFirstThemeChange.current) {
      isFirstThemeChange.current = false;
      return;
    }

    setIsWiping(true);
    const timeoutId = setTimeout(() => setIsWiping(false), 450);
    return () => clearTimeout(timeoutId);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MotionConfig reducedMotion={animationsEnabled ? 'never' : 'always'}>
      <div className={`App app-fade-in ${isWiping ? 'theme-wipe-active' : ''}`}>
        {isWiping && <div className="theme-wipe" aria-hidden="true" />}
        {theme === 'apple' && (
          <Navbar
            animationsEnabled={animationsEnabled}
            onToggleAnimations={() => setAnimationsEnabled((prev) => !prev)}
            theme={theme}
            onThemeChange={setTheme}
          />
        )}
        {theme === 'apple' && (
          <>
            <About animationsEnabled={animationsEnabled} />
            <Experience />
            <Education />
            <AnalyticsAlert />
            <Projects />
            <Footer />
          </>
        )}
        {theme === 'target' && (
          <>
            {showTgtHeader && <TGT_Header />}
            {isMobileView ? (
              <TGT_MobileSubheader onLogoClick={() => setTheme('apple')} />
            ) : (
              <TGT_Subheader onLogoClick={() => setTheme('apple')} />
            )}
            <TGT_About />
            <TGT_Projects />
            <TGT_Experience />
            <TGT_Education />
            <TGT_Footer />
          </>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
