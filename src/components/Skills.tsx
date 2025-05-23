

const technicalSkills = [
  'HTML5',
  'CSS3 / Tailwind CSS',
  'JavaScript (ES6+)',
  'React.js',
  'Node.js / Express',
  'REST APIs',
  'Git & GitHub',
  'SQL / NoSQL Databases',
];

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Skills</h2>

        {/* Introductory paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          I’m skilled in a wide range of technologies and interpersonal abilities that allow me to build
          robust web applications and collaborate effectively with diverse teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {technicalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
