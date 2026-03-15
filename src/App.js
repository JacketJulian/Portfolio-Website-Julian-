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
import TgtHeader from './components/TGT_Header/TGT_Header';
import TgtSubheader from './components/TGT_Subheader/TGT_Subheader';
import TgtMobileSubheader from './components/TGT_Subheader/TGT_MobileSubheader';
import TgtAbout from './pages/TGT_About/TGT_About';
import TgtProjects from './pages/TGT_Projects/TGT_Projects';
import TgtFooter from './pages/TGT_Footer/TGT_Footer';
import TgtExperience from './pages/TGT_Experience/TGT_Experience';
import TgtEducation from './pages/TGT_Education/TGT_Education';
import TgtProjectFull from './pages/TGT_Project_Full/TGT_Project_Full';
import { portfolioData } from './data';
import './App.css';
import trackEvent from './utils/analytics';

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [theme, setTheme] = useState('apple');
  const [showTgtHeader, setShowTgtHeader] = useState(true);
  const [isWiping, setIsWiping] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [targetProjectParam, setTargetProjectParam] = useState(() => new URLSearchParams(window.location.search).get('project') || '');
  const isFirstThemeChange = useRef(true);

  const toProjectParam = (value) => value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  const setProjectQueryParam = (title) => {
    const params = new URLSearchParams(window.location.search);
    params.set('project', toProjectParam(title));
    const queryString = params.toString();
    window.history.pushState({}, '', queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname);
    setTargetProjectParam(params.get('project') || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearProjectQueryParam = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('project');
    const queryString = params.toString();
    window.history.pushState({}, '', queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname);
    setTargetProjectParam('');
  };

  const selectedTargetProject = portfolioData.projects.projects.find(
    (project) => toProjectParam(project.title) === targetProjectParam,
  );

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

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setTargetProjectParam(params.get('project') || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
            {showTgtHeader && <TgtHeader />}
            {isMobileView ? (
              <TgtMobileSubheader onLogoClick={() => setTheme('apple')} />
            ) : (
              <TgtSubheader onLogoClick={() => setTheme('apple')} />
            )}
            {selectedTargetProject ? (
              <>
                <TgtProjectFull project={selectedTargetProject} onBack={clearProjectQueryParam} />
                <TgtFooter />
              </>
            ) : (
              <>
                <TgtAbout />
                <TgtProjects onViewProject={setProjectQueryParam} />
                <TgtExperience />
                <TgtEducation />
                <TgtFooter />
              </>
            )}
          </>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
