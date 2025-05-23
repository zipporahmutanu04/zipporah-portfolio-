import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contacts from './components/Contact';
import Navigation from './components/Navigation';-[]

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useState(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
      
      <main className={`main-content ${menuOpen ? 'menu-open' : ''}`}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
