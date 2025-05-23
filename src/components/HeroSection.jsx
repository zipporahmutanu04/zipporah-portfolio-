import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/realme.jpg';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-image-container floating">
          <div className="image-glow"></div>
          <img 
            ref={imageRef}
            src={heroImage} 
            alt="Portrait of Zipporah Mutanu" 
            className="hero-image"
          />
          <div className="year-badge">
            <span>2024</span>
          </div>
        </div>
        
        <div className="hero-text">
          <div className="welcome-badge">Welcome to my digital space</div>
          <h1>I'm <span className="gradient-text">Zipporah Mutanu</span></h1>
          <p>Software Developer | Creative Problem Solver | Tech Enthusiast</p>
          
          <div className="hero-buttons">
            <a href="#projects" className="button primary-button">Explore My Work</a>
            <a href="/resume.pdf" download className="button secondary-button">Download Resume</a>
          </div>
          
          <div className="social-links">
            <a 
              href="https://github.com/zipporahmutanu04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/mutanu-zippy-05a24a35b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:mutanuzippy04@gmail.com" 
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
