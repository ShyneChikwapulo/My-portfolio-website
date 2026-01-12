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
        <h1 className="hero-h1">Hello world, my name is</h1> 
        <p>Shine Chikwapulo</p>
        <div className="pp">
        I’m a university graduate in Information Technology (Software Engineering) based in Cape Town, with a strong focus on backend development, full-stack web applications, and machine learning. I’m passionate about using technology to build impactful, scalable solutions that solve real-world problems and improve access to information and opportunities.
        <br /><br />

        I’ve built and deployed production-style applications using Python, Django, Django REST Framework, and React, alongside data-driven systems powered by TensorFlow and PyTorch. My work spans backend APIs, real-time systems, and machine-learning-powered applications, with an emphasis on clean code, performance, and maintainability.
        <br /><br />

        Beyond technical execution, I care deeply about clarity, problem-solving, and continuous learning. I enjoy breaking down complex concepts, collaborating with others, and growing through challenging projects that push my technical and analytical thinking. I’m currently focused on deepening my backend expertise while building systems that blend software engineering with intelligent, data-driven decision-making.
        <br /><br />

        <strong>Currently, I’m working on:</strong>
        </div>

        <div className="pp-points-container">
            <div className="pp-points"> 
                Software Engineering personal projects, improving data security, training AI models.
                    &nbsp; <i class="fa-solid fa-user-shield"></i>
            </div>
            <div className="pp-points"> 
                Creating sites for small businesses in my City.
                    &nbsp; <i class="fa-solid fa-user-shield"></i>
            </div>
            <div className="pp-points"> 
                Machine Learning research & SWE studies at Eduvos.
                    &nbsp; <i class="fa-solid fa-brain"></i>
            </div>
            <div className="pp-points">
                Working on finding an internship.
                     
            </div>
            <div className="pp-points"> 
                Tutoring students at my college.
                    &nbsp; <i class="fa-solid fa-computer"></i>
            </div>
        </div>
        </div>
    </div>

  )
}

export default HeroSection