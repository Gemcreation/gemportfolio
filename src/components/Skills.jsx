import React from 'react';
import checkmarkIcon from '../assets/images/checkmark.png';

const skillsFrontend = [
  { name: 'HTML5', level: 'Experienced' },
  { name: 'CSS3', level: 'Experienced' },
  { name: 'JavaScript', level: 'Experienced' },
  { name: 'React.js', level: 'Intermediate' },
  { name: 'SASS', level: 'Intermediate' },
  { name: 'GitHub', level: 'Experienced' }
];

const skillsOther = [
  { name: 'Git', level: 'Advanced' },
  { name: 'C Languages', level: 'Basic' },
  { name: 'Matlab', level: 'Intermediate' },
  { name: 'CorelDraw', level: 'Advanced' },
  { name: 'Adobe Suite', level: 'Intermediate' },
  { name: 'Illustrator', level: 'Intermediate' }
];

const Skills = () => {
  return (
    <section id="experience">
      <div className="section-title-container">
        <p className="section-subtitle">TECHNICAL PROWESS</p>
        <h2 className="section-title">Skills & Tools</h2>
      </div>
      
      <div className="skills-container">
        <div className="skills-box">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            {skillsFrontend.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img src={checkmarkIcon} alt="Checkmark" className="icon" />
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-box">
          <h3>Other Tools & Tech</h3>
          <div className="skills-grid">
            {skillsOther.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img src={checkmarkIcon} alt="Checkmark" className="icon" />
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
