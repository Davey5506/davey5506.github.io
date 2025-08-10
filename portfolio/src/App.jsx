import { useState } from 'react'
import Header from './sections/Header.jsx'
import Menu from './sections/Menu.jsx';
import About from './sections/About.jsx';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Education", path: "#education" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

  return (
    <>
      <Header sections={sections} windowWidth={windowWidth} setWindowWidth={setWindowWidth} setMenuOpen={setMenuOpen}/>
      <Menu sections={sections} menuOpen={menuOpen} setMenuOpen={setMenuOpen} windowWidth={windowWidth}/>
      <About />
    </>
  )
}

export default App
