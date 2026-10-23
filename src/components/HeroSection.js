import React from 'react';
import './HeroSection.css';
import bridgeImage from '../images/bridge.jpeg';
import { RESUME_URL, RESUME_FILENAME } from '../config';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-center-container">
        <img className="heroImage hero-animate" src={bridgeImage} alt="Shine Chikwapulo" width="150" height="150" />
        <p className="hero-eyebrow hero-animate" style={{ animationDelay: '0.1s' }}>Hello world, my name is</p>
        <h1 className="hero-name hero-animate" style={{ animationDelay: '0.2s' }}>Shine Chikwapulo</h1>
        <p className="hero-role hero-animate" style={{ animationDelay: '0.3s' }}>
          Software engineering graduate · Cape Town
        </p>
        <p className="hero-summary hero-animate" style={{ animationDelay: '0.4s' }}>
          I build full-stack web and mobile apps, mostly with C#/.NET, Python, Flutter and TypeScript.
          I like turning a real-world problem into something that works end to end: data model, API, UI,
          tests and deployment. I'm looking for graduate and junior software engineering roles in South Africa.
        </p>

        <div className="hero-actions hero-animate" style={{ animationDelay: '0.5s' }}>
          <a className="hero-btn hero-btn--primary" href="#work">View my work</a>
          <a className="hero-btn hero-btn--ghost" href={RESUME_URL} download={RESUME_FILENAME}>
            <i className="fa-solid fa-download" aria-hidden="true"></i>&nbsp; Download resume
          </a>
          <a className="hero-btn hero-btn--ghost" href="#contact">Get in touch</a>
        </div>

        <div className="hero-now hero-animate" style={{ animationDelay: '0.6s' }}>
          <div className="hero-now-title">Currently learning</div>
          <ul>
            <li>Automating builds and tests with GitHub Actions</li>
            <li>Deploying .NET applications to Azure</li>
            <li>PostgreSQL and production-grade database migrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;