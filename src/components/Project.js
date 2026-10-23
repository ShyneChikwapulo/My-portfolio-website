import React, { useState } from 'react';
import '../App.css';
import './Project.css';
import { featuredProjects, moreProjects } from '../data/projects';

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { title, status, wip, description, tech, image, links } = project;

  return (
    <li className="project-card">
      <div className="project-card-media">
        {image && !imageFailed ? (
          <img src={image} alt={`${title} preview`} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="project-card-fallback" aria-hidden="true">{'</>'}</div>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <span className={wip ? 'project-badge project-badge--wip' : 'project-badge'}>{status}</span>
        <p className="project-card-description">{description}</p>

        <ul className="project-tech">
          {tech.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.href}
              className="project-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title}: ${link.label}`}
            >
              <i
                className={link.type === 'github' ? 'fa-brands fa-github' : 'fa-solid fa-arrow-up-right-from-square'}
                aria-hidden="true"
              ></i>
              &nbsp;{link.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}

function Project() {
  return (
    <div className="project-container">
      <div className="project-center-container">
        <h1 className="project-h1" data-aos="fade-up">Noteworthy Projects:</h1>
        <p className="project-note" data-aos="fade-up">
          Live demos run on a free tier and can take about a minute to wake up.
        </p>

        <ul className="project-grid project-grid--featured" data-aos="fade-up">
          {featuredProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </ul>

        <h2 className="project-subheading" data-aos="fade-up">More projects</h2>
        <ul className="project-grid" data-aos="fade-up">
          {moreProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </ul>
      </div>
    </div>
  );
}

export default Project;