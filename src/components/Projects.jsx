import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
  {
    title: 'School Management System',
    description: 'A full-stack PHP & MySQL system for managing students, teachers, fees, and attendance with role-based dashboards.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    link: 'https://github.com/zipporahmutanu04',
    image: '/project-placeholder-1.jpg'
  },
  {
    title: 'Personal Portfolio',
    description: 'My own React/Vite portfolio website showcasing my work, skills, and contact form, deployed on GitHub Pages.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/zipporahmutanu/zipporah-portfolio',
    image: '/project-placeholder-2.jpg',
    live: 'https://zipporahmutanu.github.io/zipporah-portfolio-/'
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard interface for an online store with sales analytics, inventory management, and customer insights.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: 'https://github.com/zipporahmutanu04',
    image: '/project-placeholder-3.jpg'
  },
];

const Projects = () => {
  return (
    <section className="projects-section section">
      <div className="container">
        <div className="section-title">
          <span>My work</span>
          <h2>Featured Projects</h2>
          <p>
            Explore my portfolio of projects showcasing my expertise in full-stack development, 
            UI design, and problem-solving across various domains.
          </p>
        </div>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.title} className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="project-number">0{index + 1}</div>
              
              <div className="project-content">
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-placeholder">
                    <FaCode className="placeholder-icon" />
                  </div>
                </div>
                
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a 
            href="https://github.com/zipporahmutanu04" 
            target="_blank"
            rel="noopener noreferrer" 
            className="more-link"
          >
            <span>View more projects on GitHub</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
