import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="logo" style={{ fontSize: '1.2rem' }}>
        Abdulmojeed <span>Ibrahim</span>
      </div>
      
      <div className="footer-nav">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
      
      <p style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>
        © 2024 ABDULMOJEED IBRAHIM. BUILT WITH REACT.
      </p>
    </footer>
  );
};

export default Footer;
