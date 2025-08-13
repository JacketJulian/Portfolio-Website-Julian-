import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './App.css';
import { theme } from './theme';

function App() {
  useEffect(() => {
    document.body.style.background = `linear-gradient(to right, ${theme.colors.lavender}, ${theme.colors.lightBlue})`;
  }, []);

  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;