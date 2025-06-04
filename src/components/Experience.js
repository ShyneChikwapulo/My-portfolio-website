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
                </div>

                <div className="experience-content-container">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Intern
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://cabc.org.za/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Dialogue Department
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Jul 2023 - Aug 2023 (2 months)
                        </div>
                        <div className="experience-content-description">
                            Facilitated online dialogues and contributed to weekly deliverables.
                        </div>
                        <div className="experience-content-description"> 
                            Engaged for 20 hours per week.
                        </div>
                        <div className="experience-content-description">
                            Slack communication platform.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience