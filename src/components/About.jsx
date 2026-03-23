import React from 'react';
import experienceIcon from '../assets/images/experience.png';
import educationIcon from '../assets/images/education.png';

const About = () => {
  return (
    <section id="about">
      <div className="section-title-container">
        <p className="section-subtitle">GET TO KNOW MORE</p>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-cards">
          <div className="about-card">
            <img src={experienceIcon} alt="Experience" className="icon" />
            <h3>Experience</h3>
            <p>2+ years</p>
            <p>Frontend Development</p>
          </div>
          
          <div className="about-card">
            <img src={educationIcon} alt="Education" className="icon" />
            <h3>Education</h3>
            <p>B.Tech</p>
            <p>Computer Engineering</p>
          </div>
        </div>
        
        <div className="about-text">
          <div className="about-quote">
            "I believe that code is a form of digital craftsmanship. My goal is to bridge the gap between complex logic and seamless aesthetics."
          </div>
          <p>
            As a passionate Frontend Developer, I specialize in creating clean, functional, and visually engaging digital experiences. My journey in technology is driven by a curiosity for how things work and a commitment to delivering high-quality user interfaces that solve real-world problems.
          </p>
          <p>
            With a background in Computer Engineering, I bring a structured analytical approach to creative frontend challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
