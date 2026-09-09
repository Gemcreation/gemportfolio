import React from 'react';
//some of the images to preview on the portfolio website
import proj1 from '../assets/images/proj-1.png';
import proj2 from '../assets/images/proj-2.png';
import proj3 from '../assets/images/proj-3.png';
//addition image after rebuildng into react
import project7 from '../assets/images/project-7.PNG';
import project8 from '../assets/images/project-8.PNG';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
// import project5 from '../assets/images/project-5.jpg';
//import project6 from '../assets/images/project-6.jpg';

const projectsList = [
  
  {
    image: project8,
    title: 'Food Ordering',
    github: 'https://github.com/Gemcreation/eatwithoyin.git',
    live: 'https://eatwithoyin.vercel.app/'
  },
  {
    image: proj1,
    title: 'Room Slider',
    github: 'https://github.com/Gemcreation/geeg-new-room',
    live: 'https://roomslider.vercel.app/'
  },
  {
    image: project7,
    title: 'Halal Checker',
    github: 'https://github.com/Gemcreation/kulhalal.git',
    live: 'https://kulhalal.vercel.app/'
  },
  {
    image: proj2,
    title: 'URL Shortener',
    github: 'https://github.com/Gemcreation/urlproject1',
    live: 'https://gemurlshorten.vercel.app/'
  },
  {
    image: proj3,
    title: 'Interior & Exterior',
    github: 'https://github.com/Gemcreation/wealthwebsite',
    live: 'https://wealthwebsite-nine.vercel.app//'
  },
  {
    image: project1,
    title: 'Hijab Wears',
    github: 'https://github.com/Gemcreation/umie-garment',
    live: 'https://umie-garment.vercel.app/'
  },
  {
    image: project2,
    title: 'Restaurant',
    github: 'https://github.com/Gemcreation/oyin-website',
    live: 'https://oyin-foodies.vercel.app/'
  },
  {
    image: project3,
    title: 'Boutique',
    github: 'https://github.com/Gemcreation/honeystore',
    live: 'https://honeystore-wears.vercel.app/'
  },
  {
    image: project4,
    title: 'Job Listing',
    github: 'https://github.com/Gemcreation/gem-static-job-web',
    live: 'https://gem-front-job.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title-container">
        <p className="section-subtitle">PORTFOLIO</p>
        <h2 className="section-title">Recent Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="github">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="live">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
