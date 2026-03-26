import React from 'react';
import emailIcon from '../assets/images/email.png';
import linkedinIcon from '../assets/images/linkedin.png';
import threadIcon from '../assets/images/thread.png';
import xIcon from '../assets/images/x.png';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-title-container">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-info-links">
            <a href="mailto:mojeedibrahim13@gmail.com" target="_blank" className="contact-info-item">
              <div className="icon-wrapper">
                <img src={emailIcon} alt="Email" className="icon" />
              </div>
              <h4>Email</h4>
              <p>mojeedibrahim13@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/ibrahim-abdulmojeed-aaa769222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="contact-info-item">
              <div className="icon-wrapper">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <p>Abdulmojeed Ibrahim</p>
            </a>

            <a href="https://www.threads.com/@kolawole_gemcreation" target="_blank"  className="contact-info-item">
              <div className="icon-wrapper">
                <img src={threadIcon} alt="threadIcon" className="icon" />
              </div>
              <h4>Threads</h4>
              <p>@ibrahim_abdulmojeed</p>
            </a>

            <a href="https://x.com/Abdulmojee31730" target="_blank"  className="contact-info-item">
              <div className="icon-wrapper">
                <img src={xIcon} alt="xIcon" className="icon" />
              </div>
              <h4>Twitter</h4>
              <p>@ibrahim_abdul</p>
            </a>
{/* 
            <a href="https://www.threads.net/@ibrahim_abdulmojeed" target="_blank" rel="noreferrer" className="contact-info-item">
              <div className="icon-wrapper simple-icon">
                <img src={threadIcon} alt="LinkedIn" className="icon" />
              </div>
              <h4>Threads</h4>
              <p>@ibrahim_abdulmojeed</p>
            </a>

            <a href="https://twitter.com/ibrahim_abdul" target="_blank" rel="noreferrer" className="contact-info-item">
              <div className="icon-wrapper simple-icon">
                <img src={xIcon} alt="LinkedIn" className="icon" />
              </div>
              <h4>Twitter</h4>
              <p>@ibrahim_abdul</p>
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
