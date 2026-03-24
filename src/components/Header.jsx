import React, { useState } from 'react';
import resumePDF from '../assets/ibrahim-resume.pdf';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-content">
      <nav id="desktop-nav">
        {/* my name serving as the logo with scoll function to the top */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          Abdulmojeed <span>Ibrahim</span>
        </div>
        
        {/* <div className="logo" onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>
          Abdulmojeed <span>Ibrahim</span>
        </div> this is use to reload the page afresh */}
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="btn btn-yellow" style={{color: '#1a1a1a', textDecoration: 'none'}} >
              Resume
            </a>
            {/* <a href={resumePDF} target="_blank" rel="noreferrer" className="btn btn-yellow" style={{color: '#1a1a1a', textDecoration: 'none'}} download>
              Resume
            </a> this is the resume button that helps to activate download button when clikc on. BUt i just want them to view the resume straight */}
          </li>
        </ul>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          Abdulmojeed <span>Ibrahim</span>
        </div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li>
              <a href={resumePDF} target="_blank" rel="noreferrer" onClick={toggleMenu} style={{color: '#ffc107'}} >
                Resume
              </a>
              {/* <a href={resumePDF} target="_blank" rel="noreferrer" onClick={toggleMenu} style={{color: '#ffc107'}} download>
                Resume
              </a> */}
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
