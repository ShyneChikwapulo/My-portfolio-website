import React from 'react'
import '../App.css';
import './Project.css';
import { useState } from 'react';

function Experience() {

    const [toggleState, setToggleState] = useState(7);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='experience-container'>
        <div className='experience-center-container'>
            
            <h1 className='experience-h1' data-aos="fade-up">
                Experience: 
            </h1>

            <div className="experience-table" data-aos="fade-up">
                <div className="experience-tabs-container">
                    <div 
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>
                        The Centre for Analytics and Behavioral Change
                    </div>

                    <div 
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>
                        Korbistat / GhostDraft
                    </div>
                </div>

 

                <div className="experience-content-container">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div className="experience-content-title">
                        Intern
                        <span className="experience-content-company">
                        &nbsp;@&nbsp;
                        <a 
                            href="https://cabc.org.za/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="experience-content-company-link">
                            The Centre for Analytics and Behavioural Change – Dialogue Department
                        </a>
                        </span>
                    </div>

                    <div className="experience-content-date">
                        Jul 2023 – Sep 2023 (20 hours per week)
                    </div>

                    <div className="experience-content-description">
                        Served as an intern within the Dialogue Department at the Centre for Analytics and Behavioural Change (CABC),
                        facilitating structured online dialogues and contributing to weekly deliverables in a remote,
                        collaborative environment.
                    </div>

                    <div className="experience-content-description">
                        Supported the planning, execution, and moderation of digital dialogue sessions, ensuring clear
                        communication, participant engagement, and alignment with programme objectives.
                    </div>

                    <div className="experience-content-description">
                        Collaborated with team members using Slack and structured workflows, gaining exposure to
                        analytics-informed processes, stakeholder communication, and professional remote work practices.
                    </div>
                    </div>

                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div className="experience-content-title">
                        Job Shadowing Program Participant
                        <span className="experience-content-company">
                        &nbsp;@&nbsp;
                        <a 
                            href="https://korbistat.com/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="experience-content-company-link">
                            Korbistat / GhostDraft South Africa
                        </a>
                        </span>
                    </div>

                    <div className="experience-content-date">
                        2 Jul 2024 – 3 Jul 2024
                    </div>

                    <div className="experience-content-description">
                        Participated in a two-day job shadowing programme, gaining exposure to real-world
                        software development and technology operations within the GhostDraft South Africa team.
                    </div>

                    <div className="experience-content-description">
                        Observed cross-functional roles including Software Engineering, DevOps, Quality Assurance,
                        Product Ownership, Business Analysis, Technical Writing, and Agile/Scrum workflows.
                    </div>

                    <div className="experience-content-description">
                        Gained insights into backend systems, DevOps practices, QA processes, and the use of AI
                        to improve internal business workflows, reinforcing the importance of adaptability,
                        collaboration, and continuous learning in professional software environments.
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience