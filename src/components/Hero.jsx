import React from 'react';
import profilePic from '../assets/images/profile-pic.png';
import resumePDF from '../assets/ibrahim-resume.pdf';

const Hero = () => {
  return (
    <section id="profile">
      <div className="hero-text">
        <p className="subtitle">FRONTEND DEVELOPER</p>
        <h1>
          Crafting <span>Digital</span><br />
          <span>Experiences</span> with<br />
          Precision.
        </h1>
        <p className="description">
          I am Abdulmojeed Ibrahim, a specialist in building high-performance, visually stunning interfaces that blend code with artistic craftsmanship.
        </p>
        <div className="btn-container">
          <a
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
            className="btn btn-yellow"
            download
          >
            My Resume
          </a>
          <button 
            className="btn btn-outline" 
            onClick={() => window.location.href = '#contact'}
          >
            Contact Info
          </button>
        </div>
      </div>
      
      <div className="hero-image-container">
        <img 
          src={profilePic} 
          alt="Abdulmojeed Ibrahim profile" 
          className="hero-image" 
          loading="lazy"
          decoding="async"
        />
        <div className="experience-badge">
          <span className="badge-number">2+</span>
          <span className="badge-text">YEARS OF EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
