import React from 'react';
import '../App.css';
import './AboutMe.css';
import formalImage from '../images/formal.jpeg';
import { RESUME_URL, RESUME_FILENAME } from '../config';

const SKILLS = [
  { title: 'Languages', items: 'C#, Python, TypeScript, Dart, SQL, HTML/CSS' },
  { title: 'Backend', items: '.NET 10 / ASP.NET Core, EF Core, FastAPI, Django & DRF, Node/Express' },
  { title: 'Frontend & mobile', items: 'Blazor, React, Flutter, Tailwind CSS' },
  { title: 'Data & tooling', items: 'SQL Server, SQLite, Firebase, Docker, Git/GitHub, xUnit, Render' },
];

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-center-container">
        <h1 className="aboutMe-h1" data-aos="fade-up">About Me: </h1>
        <div className="about-content">
          <div className="aboutMeImage-wrapper-container" data-aos="fade-up">
            <div
              className="aboutMeImage-wrapper"
              role="img"
              aria-label="Shine Chikwapulo"
              style={{ backgroundImage: `url(${formalImage})` }}
            />
          </div>

          <div className="aboutMe-p" data-aos="fade-up">
            <p>
              Hi, I'm Shine. I'm studying for a BSc IT in Software Engineering at Eduvos in Cape Town
              (graduating November 2026). Recently I've been building booking and restaurant sites in
              .NET 10 and Blazor, and I led a team of four on a Flutter, Firebase and FastAPI capstone.
            </p>
            <p>
              Besides problem solving and building things, I enjoy hiking, photography and board games,
              and I like tutoring and breaking complex ideas into simple ones.
            </p>
            <p>
              The full list is on my{' '}
              <a className="about-resume-link" href={RESUME_URL} download={RESUME_FILENAME}>resume</a>.
              These are what I use most:
            </p>

            <div className="about-skills">
              {SKILLS.map((group) => (
                <div key={group.title}>
                  <div className="skill-group-title">{group.title}</div>
                  <div className="skill-group-items">{group.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;