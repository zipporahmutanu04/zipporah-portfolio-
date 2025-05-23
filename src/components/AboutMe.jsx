import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="section-title">
          <span>Who I Am</span>
          <h2>About Me</h2>
          <p>
            Get to know me beyond the code
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Zipporah Mutanu, a passionate software developer based in Meru, Kenya.
              I'm currently pursuing my BSc in Information Technology at Meru University of Science 
              and Technology, where I'm developing a strong foundation in various programming 
              languages and technologies.
            </p>
            
            <p>
              My journey in tech started with a curiosity about how applications work,
              which quickly evolved into a passion for creating them myself. I enjoy 
              solving complex problems and turning ideas into functional applications
              that provide value to users.
            </p>
            
            <p>
              Outside of coding, I'm an avid learner who enjoys keeping up with the latest
              tech trends and continuously improving my skills. I believe in the power of 
              technology to transform lives and communities, which motivates me to grow as
              a developer every day.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Zipporah Mutanu</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Meru, Kenya</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">BSc in Information Technology (ongoing)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">
                  <a href="mailto:mutanuzippy04@gmail.com">mutanuzippy04@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>My Vision</h3>
              <p>
                To become a versatile full-stack developer capable of creating innovative and 
                user-centered applications that solve real-world problems.
              </p>
            </div>
            
            <div className="highlight-card">
              <h3>My Approach</h3>
              <p>
                I approach each project with attention to detail, clean code practices, and 
                user-centered design thinking to ensure the best possible outcomes.
              </p>
            </div>
            
            <div className="highlight-card">
              <h3>My Goals</h3>
              <p>
                To continuously expand my knowledge, contribute to meaningful projects, and eventually 
                mentor other aspiring developers in their tech journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
