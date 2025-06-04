import React from 'react'
import '../App.css';
import './Experience.css';
import MyWebsite from '../images/my-website.png';
import vossie from '../images/SW.PNG';
import HouseParty from '../images/Capture.PNG';
import MiniML from '../images/miniML.PNG';
import BTCM from '../images/BTCM.PNG';
import MRI from '../images/MRI.jpeg';
import Automated_desktop_cleaner from '../images/file-organizer.jpg';     
import FlappyBird from '../images/FlappyBird.jpg';

function Project() {


  return (
    <div className="project-container">
        <div className="project-center-container">
            <h1 className='project-h1' data-aos="fade-up">
                Noteworthy Projects:  
            </h1>

            <div className="project-table" data-aos="fade-up">
                <li>
                    <a href="https://github.com/ShyneChikwapulo/Flappy-Bird-AI" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={FlappyBird} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Flappy Bird AI
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Flappy-Bird-AI" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python&emsp;NEAT&emsp;Pygame
                            </div>
                            <div className="project-card-description">
                                The AI learns to control the bird using a neural network that evolves over generations. It gets better at avoiding pipes through natural selection and fitness scoring.
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ShyneChikwapulo/Brain-Tumor-classificaion-model" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MRI} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    🧠 Brain Tumor Classification AI Model 
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Brain-Tumor-classificaion-model" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                TensorFlow&emsp;Python&emsp;Convolutional Neural Network
                            </div>
                            <div className="project-card-description">
                                This project uses a Convolutional Neural Network (CNN) built with TensorFlow and Keras to classify brain MRI images as tumor or no tumor. It includes a full training pipeline.
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/ShyneChikwapulo/Advanced-Brain-Tumor-Classification-with-Django-frontend" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={BTCM} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    🧠Advanced AI Brain Tumor Classification
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Advanced-Brain-Tumor-Classification-with-Django-frontend" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                TensorFlow&emsp;Python&emsp;Convolutional Neural Network&emsp;Django frontend 
                            </div>
                            <div className="project-card-description">
                                This project implements a binary image classifier using deep learning (CNN) to detect brain tumors from MRI scans. It uses TensorFlow/Keras for model building, training, and evaluation. 
                                The model achieves ~99% accuracy on the test set and demonstrates strong generalization with low false positives and false negatives 
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/ShyneChikwapulo/Automated-desktop-cleaner/blob/main/cleandesk.py" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={Automated_desktop_cleaner} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    📁 Auto File Organizer
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Automated-desktop-cleaner/blob/main/cleandesk.py" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python
                            </div>
                            <div className="project-card-description">
                                Auto File Organizer is a Python script that continuously monitors a specified folder (e.g., your desktop) and automatically organizes files based on their extensions. It moves files into structured subdirectories, sorted by file type and date (year/month), creating an organized digital workspace with zero manual effort.
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/ShyneChikwapulo/My-portfolio-website" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MyWebsite} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Personal Website
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/My-portfolio-website" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                React.js&emsp;CSS&emsp;MongoDB&emsp;Netlify
                            </div>
                            <div className="project-card-description">
                                Designed and Built Shine Chikwapulo — Welcome to my personal website!
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/ShyneChikwapulo/Pass-the-aux-app/tree/main" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={HouseParty} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Pass the Aux App/House Party
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Pass-the-aux-app/tree/main" target="_blank" rel="noreferrer">
                                            <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Django&emsp;React.js&emsp;Django REST Framework&emsp;Spotify Web AP&emsp;OAuth2
                            </div>
                            <div className="project-card-description">
                                 A full-stack web application that lets users create or join music rooms where they can listen to and control music together in real-time. The host connects their Spotify account, and guests can vote to skip songs, depending on the room's settings.
                            
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ShyneChikwapulo/Social_Media_App" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={vossie} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                   vossie-social-platform
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/Social_Media_App" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python&emsp;Django &emsp;HTML &emsp;JavaScript &emsp; CSS&emsp;WebSockets &emsp;API's&emsp; RESTful API endpoints
                            </div>
                            <div className="project-card-description">
                                 Vossie is a full-stack social media platform built with Django, offering a rich set of features for an interactive user experience. It includes user authentication, customizable profiles with bio and location, image-based post creation with captions, a like and comment system, and real-time messaging powered by WebSockets.
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ShyneChikwapulo/C2C-E-commerce-website" target="_blank" rel="noreferrer" className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MiniML} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                   E-commere Full-stack App
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/ShyneChikwapulo/C2C-E-commerce-website" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Php&emsp;MySql&emsp;HTML&emsp;CSS&emsp;JavaScript &emsp;API's
                            </div>
                            <div className="project-card-description">
                                Designed for seamless user interaction and secure transactions, this C2C e-commerce platform features Google Authentication for quick and secure sign-ins and integrates PayPal Sandbox for streamlined payment processing. It offers user-friendly interfaces for listing, browsing, and purchasing products, along with a dynamic, responsive front-end design for an optimal user experience across devices.
                            </div>
                        </div>
                    </a>
                </li>

            </div>
        </div>
    </div>
  )
}

export default Project