import React from "react";
import '../App.css';
import './Contact.css';


function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-center-container" data-aos="fade-up">
                <div className="contact-h1">
                    What's next?
                </div>
                <div className="contact-h2">
                    Let's connect!
                </div>
                <div className="contact-p">
                    I'm currently looking for openings for winter 2025 and Summer 2026. <br />
                    If you have opportunities related to software, machine learning, or if you'd like to chat about other things, 
                    please feel free to reach out!
                </div>
                <div className="contact-email-button" onClick={() => window.location = 'mailto:chikwapuloshine@gmail.com'}>
                    <span className="email-text">Say Hi</span>
                </div>

                <div className="contact-socials">
                    <a className="contact-social-button" href="https://github.com/ShyneChikwapulo" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github contact-social-icon"></i>
                    </a>
                    <a className="contact-social-button" href="https://za.linkedin.com/in/shine-chikwapulo-741b20265" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin contact-social-icon"></i>
                    </a>
                    <a className="contact-social-button" href="https://www.instagram.com/yves_memoirs/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram contact-social-icon"></i>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;