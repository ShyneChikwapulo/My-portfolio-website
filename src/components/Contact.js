import React from 'react';
import '../App.css';
import './Contact.css';
import { EMAIL, RESUME_URL, RESUME_FILENAME } from '../config';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-center-container" data-aos="fade-up">
        <div className="contact-h1">What's next?</div>
        <div className="contact-h2">Let's connect!</div>
        <div className="contact-p">
          I'm looking for graduate and junior software engineering roles in South Africa. <br />
          If you have an opening, a project to talk through, or just want to chat, please reach out.
        </div>

        <div className="contact-actions">
          <a className="contact-email-button" href={`mailto:${EMAIL}`}>
            <span className="email-text">Say Hi</span>
          </a>
          <a className="contact-email-button" href={RESUME_URL} download={RESUME_FILENAME}>
            <span className="email-text">Download resume</span>
          </a>
        </div>

        <div className="contact-socials">
          <a className="contact-social-button" href="https://github.com/ShyneChikwapulo" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github contact-social-icon" aria-hidden="true"></i>
          </a>
          <a className="contact-social-button" href="https://www.linkedin.com/in/shine-chikwapulo-741b20265/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin contact-social-icon" aria-hidden="true"></i>
          </a>
          <a className="contact-social-button" href="https://www.instagram.com/yves_memoirs/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram contact-social-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;