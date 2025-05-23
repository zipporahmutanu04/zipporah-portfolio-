import '../styles/Education.css';

const educationList = [
  {
    institution: 'Meru University of Science and Technology',
    degree: 'BSc in Information Technology (ongoing)',
    period: '2023 – Present',
    details: 'Currently pursuing my degree with focus on software development and web technologies.',
    icon: '🎓',
  },
  {
    institution: 'Swahilipot Hub, Mombasa',
    degree: 'Industrial Attachment (Internship)',
    period: 'May 2025 – August 2025',
    details: 'Hands-on experience working on real-world IT projects as part of my university industrial attachment.',
    icon: '💼',
  },
  {
    institution: "St. Angela's Girls High School",
    degree: 'Secondary Education',
    period: '2019 – 2022',
    details: 'Sat for KCSE exams and graduated in 2022.',
    icon: '🏫',
  },
  {
    institution: 'Waita Progressive Academy',
    degree: 'Primary Education',
    period: '2010 – 2018',
    details: 'Completed KCPE examinations in 2018.',
    icon: '📚',
  },
];

const Education = () => {
  return (
    <section className="education-section section">
      <div className="container">
        <div className="section-title">
          <span>My background</span>
          <h2>Education & Training</h2>
          <p>
            A timeline of my academic journey and professional development
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-items">
            {educationList.map((edu, index) => (
              <div key={edu.institution} className={`timeline-item ${index % 2 === 0 ? 'right' : 'left'}`}>
                <div className="timeline-dot">
                  <span>{edu.icon}</span>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-date">{edu.period}</div>
                  <h3 className="timeline-title">{edu.institution}</h3>
                  <p className="timeline-degree">{edu.degree}</p>
                  <p className="timeline-details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
