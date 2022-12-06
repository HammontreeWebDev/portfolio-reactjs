import React from 'react';
import './resume.css';
import { RollInSection } from '../../utils/Animations'

// we copied the about me card here, so it is inheriting some of the custom card classes from that css file
function Resume() {
    return (
        <main className='about-me-body'>
            <RollInSection className=' custom-card'>
                <div className='resume-card-header'>
                    <h2> Resume </h2>
                    <button className='resume-btn hvr-skew hvr-pulse-grow'>Download My Official Resume Here</button>
                </div>
                <div className='custom-card-body resume-body'>
                    <h5 className='skill-title'>Front-End Skills:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>CSS (Flexbox / Custom)</li>
                            <li>CSS Framework (Bulma, Bootstrap)</li>
                        </div>

                        <div className='skill-item'>
                            <li>Local Storage/Session Storage</li>
                            <li>jQuery</li>
                            <li>API (JSON, AJAX, REST, Web, 3rd party)</li>
                            <li>ReactJS</li>
                            <li>Handlebars</li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>Back-End Skills:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                            <li>SQL / MySQL (DBeaver)</li>
                            <li>Node.js</li>
                            <li>Express.js (Insomnia)</li>
                            <li>MongoDB (Mongoose)</li>
                        </div>

                        <div className='skill-item'>
                            <li>Server-Side API Development</li>
                            <li>MERN Stack</li>
                            <li>GraphQL</li>
                            <li>Apollo Server</li>
                        </div>

                        <div className='skill-item'>
                            <li>C# (in progress)</li>
                            <li>Python (advanced concepts in progress)</li>
                            <li>Java (in progress)</li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>General Skills & Technology:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                            <li>Babeljs</li>
                            <li>Git (version control)</li>
                            <li>GitHub / GitHub Pages</li>
                            <li>Heroku</li>
                        </div>

                        <div className='skill-item'>
                            <li>Progressive Web Applications</li>
                            <li>Algorithms</li>
                            <li>Agile Methodology</li>
                            <li></li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>Cyber Security Knowledge:</h5>
                    <ul className='skill-container'>
                    <div className='skill-item'>
                            <li>Linux Security</li>
                            <li>Microsoft Security</li>
                            <li>Network Security</li>
                            <li>Cloud Security</li>
                            <li>Ethical Hacking</li>
                        </div>

                        <div className='skill-item'>
                            <li>Computer Networking</li>
                            <li>Cyber Infrastructure & Technology</li>
                            <li>Digital Forensics And Incident Response</li>
                            <li>Game Theory</li>
                            <li>Amazon Web Services</li>
                        </div>
                    </ul >

                </div>
            </RollInSection>
        </main>
    )
}

export default Resume;