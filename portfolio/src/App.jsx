import { useState } from 'react'
import Header from './sections/Header.jsx'
import Menu from './sections/Menu.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Awards from './sections/Awards.jsx';
import './sections/Footer.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Education", path: "#education" },
        { name: "Awards", path: "#Awards" }
      ];

  return (
    <>
      <Header sections={sections} windowWidth={windowWidth} setWindowWidth={setWindowWidth} setMenuOpen={setMenuOpen}/>
      <Menu sections={sections} menuOpen={menuOpen} setMenuOpen={setMenuOpen} windowWidth={windowWidth}/>
      <About />
      <Skills />
      <Education />
      <Awards />
      <Footer />
    </>
  )
}

export default App
