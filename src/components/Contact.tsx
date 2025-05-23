

const Contacts = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contact Me
        </h2>

        {/* Static Contact Info */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-700">
            <strong>Email:</strong> 
            <a href="mailto:mutanuzippy04@gmail.com">
            mutanuzippy04@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> 0719 168 367
          </p>
          <p className="text-gray-700">
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/ZazimaZazima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ZazimaZazima
            </a>
          </p>
          <p className="text-gray-700">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/mutanu-zippy-05a24a35b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              mutanu-zippy
            </a>
          </p>
          <p className="text-gray-700">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/zipporahmutanu04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              zipporahmutanu04
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;