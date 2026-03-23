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
        <div className="logo">Abdulmojeed <span>Ibrahim</span></div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="btn btn-yellow" style={{color: '#1a1a1a', textDecoration: 'none'}} download>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Abdulmojeed <span>Ibrahim</span></div>
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
              <a href={resumePDF} target="_blank" rel="noreferrer" onClick={toggleMenu} style={{color: '#ffc107'}} download>
                Resume
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
