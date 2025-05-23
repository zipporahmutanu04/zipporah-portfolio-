import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaGraduationCap, FaTools, FaFile, FaEnvelope } from 'react-icons/fa';
import '../styles/Navigation.css';

const Navigation = ({ menuOpen, toggleMenu }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">Z<span className="accent">.</span></span>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
              Education
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaUser /> About
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaGraduationCap /> Education
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaTools /> Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaFile /> Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
            <FaEnvelope /> Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
