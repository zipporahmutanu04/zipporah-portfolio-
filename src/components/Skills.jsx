import { useState } from 'react';
import '../styles/Skills.css';

const technicalSkills = [
  { name: 'HTML5', level: 85 },
  { name: 'CSS3 / Tailwind CSS', level: 80 },
  { name: 'JavaScript (ES6+)', level: 75 },
  { name: 'React.js', level: 70 },
  { name: 'Node.js / Express', level: 65 },
  { name: 'REST APIs', level: 75 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'SQL / NoSQL Databases', level: 60 },
];

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
];

const SkillBar = ({ name, level }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <div 
      className="skill-item" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className={`skill-percentage ${hover ? 'active' : ''}`}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${hover ? 'active' : ''}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section section">
      <div className="container">
        <div className="section-title">
          <span>What I'm good at</span>
          <h2>Technical Proficiency</h2>
          <p>
            I leverage a versatile toolkit of technologies and interpersonal abilities to build
            cutting-edge web applications and collaborate effectively within diverse teams.
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-card technical">
            <h3 className="skills-card-title">
              <span className="skills-card-number">01</span>
              Technical Skills
            </h3>
            <div className="skills-list">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="skills-card soft">
            <h3 className="skills-card-title">
              <span className="skills-card-number">02</span>
              Soft Skills
            </h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill} className="soft-skill">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
