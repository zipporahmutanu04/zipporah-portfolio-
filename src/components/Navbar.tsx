
import { FaFile, FaGraduationCap, FaHome, FaMailBulk, FaTools, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[180px] bg-white border-r shadow-lg p-6 space-y-8 z-50">
      <div className="text-1xl font-bold text-blue-600">
        My Portfolio
      </div>
      <nav className="flex flex-col gap-4 text-gray-700 text-lg">
        <Link to="/" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaHome className="w-5 h-5" /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaUser className="w-5 h-5" /> About
        </Link>
        <Link to="/education" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaGraduationCap className="w-5 h-5" /> Education
        </Link>
        <Link to="/skills" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaTools className="w-5 h-5" /> Skills
        </Link>
        <Link to="/projects" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaFile className="w-5 h-5" /> Projects
        </Link>
        <Link to="/contact" className="flex items-center gap-3 hover:text-blue-600 transition">
          <FaMailBulk className="w-5 h-5" /> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
