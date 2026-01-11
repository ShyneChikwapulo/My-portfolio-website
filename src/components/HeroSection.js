import React from 'react'
import '../App.css';
import './HeroSection.css';
import bridgeImage from '../images/bridge.jpeg';

function HeroSection() {
  return (
    <div className='hero-container' id="/">
        <div className='hero-center-container'>
        <div className="heroImage-wrapper" data-aos="fade-up">
            <img className="heroImage" src={bridgeImage} alt="Shine Chikwapulo"  />
        </div>
        <h1 className="hero-h1">Hello World, my name iss</h1> 
        <p>Shine Chikwapulo</p>
        <div className="pp">
            I'm a first-gen college student studying Bsc in Information Technology at Eduvos. 
            I'm passionate about leveraging technology to improve the lives of others. 
            Currently, I'm working on: 
        </div>
        <div className="pp-points-container">
            <div className="pp-points"> 
                Software Engineering Personal projects, improving data security, training AI models.
                    &nbsp; <i class="fa-solid fa-user-shield"></i>
            </div>
            <div className="pp-points"> 
                Machine Learning research & SWE studies at Eduvos.
                    &nbsp; <i class="fa-solid fa-brain"></i>
            </div>
            <div className="pp-points">
                working on finding an internship
                     
            </div>
            <div className="pp-points"> 
                Tutoring students at my college
                    &nbsp; <i class="fa-solid fa-computer"></i>
            </div>
        </div>
        </div>
    </div>

  )
}

export default HeroSection