import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <h2 className="logo">Portfolio</h2>
        <nav>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
          >
            Education
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className={activeSection === 'certificates' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}
          >
            Certificates
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certificates">
          <Certificates />
        </div>
      </main>
    </div>
  );
}

export default App;