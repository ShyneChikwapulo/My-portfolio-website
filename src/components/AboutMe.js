import React from 'react'
import '../App.css';
import './AboutMe.css';
import lakeImage from '../images/formal.jpeg';
import "aos/dist/aos.css";

function AboutMe() {

  return (
    <div className='about-container'>
        <div className='about-center-container'>
            <h1 className='aboutMe-h1' data-aos="fade-up">About Me: </h1>
            <div className='about-content'>
                    <div className="aboutMeImage-wrapper-container" data-aos="fade-up">
                        <div className="aboutMeImage-wrapper" style={{ backgroundImage: "url(" + lakeImage + ")"}}>
                    </div>
                </div>
                <div className='aboutMe-p' data-aos="fade-up">
                    Hello! I'm a rising Senior at Eduvos from cape town, WC. 
                    Besides problem solving, learning new things, and building cool stuff, I enjoy hiking, photography, and board games. 

                    <br/><br/>
                    You can checkout my resume for a more-complete skillset. Here are some I used recently: 
                    <br />
                    <ul class="technology-list">
                        <li className="tech-li">
                            Project Management (Agile, technical, and research)
                        </li>
                        <li className="tech-li">
                            Deep Learning (TensorFlow, PyTorch)
                        </li>
                        <li className="tech-li">
                            Backend Development (Java, Python, C++)
                        </li>
                        <li className="tech-li">
                            Cloud infrastructure (AWS, Docker, Kubernetes)
                        </li>
                        
                    </ul>

                </div>
            </div>
            
        </div>
    </div>

  )
}

export default AboutMe