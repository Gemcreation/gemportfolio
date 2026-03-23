import React from 'react';
import emailIcon from '../assets/images/email.png';
import linkedinIcon from '../assets/images/linkedin.png';

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
            <a href="mailto:mojeedibrahim13@gmail.com" target="_blank" rel="noreferrer" className="contact-info-item">
              <div className="icon-wrapper">
                <img src={emailIcon} alt="Email" className="icon" />
              </div>
              <h4>Email</h4>
              <p>mojeedibrahim13@gmail.com</p>
            </a>
            
            <a href="https://www.linkedin.com/in/ibrahim-abdulmojeed-aaa769222" target="_blank" rel="noreferrer" className="contact-info-item">
              <div className="icon-wrapper">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <p>Abdulmojeed Ibrahim</p>
            </a>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" placeholder="info@example.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" placeholder="Tell me about your project..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn" onClick={() => alert('Form submitted!')}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
