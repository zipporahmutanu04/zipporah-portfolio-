

const educationList = [
  {
    institution: 'Waita Progressive Academy',
    degree: 'Primary Education',
    period: '2010 – 2018',
    details: 'Completed KCPE examinations in 2018.',
  },
  {
    institution: "St. Angela’s Girls High School",
    degree: 'Secondary Education',
    period: '2019 – 2022',
    details: 'Sat for KCSE exams and graduated in 2022.',
  },
  {
    institution: 'Meru University of Science and Technology',
    degree: 'BSc in Information Technology (ongoing)',
    period: '2023 – Present',
    details: 'Currently pursuing my degree.',
  },
  {
    institution: 'Swahilipot Hub, Mombasa',
    degree: 'Industrial Attachment (Internship)',
    period: 'May 2025 – August 2025',
    details: 'Hands-on experience working on real-world IT projects as part of my university industrial attachment.',
  },
];

const Education = () => {
  return (
    <section className="px-6 py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Education & Attachment
        </h2>

        {/* Introductory paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
          Here’s a summary of my academic journey and current industrial attachment:
        </p>

        {/* Education & Attachment List */}
        <ul className="space-y-8">
          {educationList.map((edu) => (
            <li
              key={edu.institution}
              className="bg-gray-50 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-medium text-gray-900">
                {edu.institution}
              </h3>
              <p className="text-gray-700">
                <span className="font-medium">{edu.degree}</span> &middot;{' '}
                {edu.period}
              </p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
