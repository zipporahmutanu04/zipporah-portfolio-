

const projects = [
  {
    title: 'School Management System',
    description: 'A full-stack PHP & MySQL system for managing students, teachers, fees, and attendance with role-based dashboards.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    link: 'https://github.com/zipporahmutanu/school-management',
  },
  {
    title: 'Personal Portfolio',
    description: 'My own React/Vite portfolio website showcasing my work, skills, and contact form, deployed on GitHub Pages.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/zipporahmutanu/zipporah-portfolio',
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Projects & Work
        </h2>

        {/* Introductory paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
          I’ve worked on several projects that showcase my abilities in full-stack development, user-centric design, and problem-solving. Below are a few examples of my most recent work:
        </p>

        <div className="space-y-10">
          {projects.map(({ title, description, tech, link }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-700 mb-2">{description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Tech:</span> {tech.join(', ')}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View on GitHub / Live
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
