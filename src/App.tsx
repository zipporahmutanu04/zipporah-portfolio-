import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contacts from './components/Contact'
import Sidebar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import'./App.css';
function App() {

  return (
    <>
      <Sidebar />
      <div className="ml-[180px] p-6 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>

        </Routes>
      </div>
    </>
  )
}

export default App
