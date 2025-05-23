
import heroImage from '../assets/realme.jpg'; 

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-white px-6">
      <img 
        src={heroImage} 
        alt="Portrait of Zipporah Mutanu" 
        className="w-40 h-40 rounded-full shadow-lg mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800">I&#39;m Zipporah Mutanu</h1>
      <p className="text-lg text-gray-600 mt-2">Aspiring Software Developer | Creative Problem Solver</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
