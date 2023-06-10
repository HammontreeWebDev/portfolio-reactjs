import React from 'react';
import './resume.css';
import { RollInSection } from '../../utils/Animations';
import resume from './Technical-Resume.pdf';
import { Icon } from '@iconify/react';

// we copied the about me card here, so it is inheriting some of the custom card classes from that css file
function Resume() {

    return (
        <main className='about-me-body'>
            <RollInSection className=' custom-card'>
                <div className='resume-card-header'>
                    <h2> Resume </h2>
                    <a className='resume-btn hvr-skew hvr-pulse-grow' href={resume} download='Kaileb_Hammontree_Resume' target='blank'><Icon icon='material-symbols:arrow-forward-rounded'/> <Icon icon='icon-park-solid:folder-download'/></a>
                </div>
                <div className='custom-card-body resume-body'>
                    <h5 className='skill-title'>Front-End Skills:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>CSS (Flexbox / Custom)</li>
                            <li>CSS Framework (Bulma, Bootstrap)</li>
                            <li>Apollo Client</li>
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
                            <li>Server-Side API Development</li>
                        </div>

                        <div className='skill-item'>
                            <li>GraphQL</li>
                            <li>Apollo Server</li>
                            <li>C# (in progress)</li>
                            <li>Python (advanced concepts in progress)</li>
                            <li>Java (in progress)</li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>General Skills & Technology:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                            <li>MERN Stack</li>
                            <li>Babeljs</li>
                            <li>Git (version control)</li>
                            <li>GitHub / GitHub Pages</li>
                        </div>

                        <div className='skill-item'>
                            <li>Heroku</li>
                            <li>Progressive Web Applications</li>
                            <li>Algorithms</li>
                            <li>Agile Methodology</li>
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