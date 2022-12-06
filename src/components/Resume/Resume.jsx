import React from 'react';
import './resume.css';

// we copied the about me card here, so it is inheriting the custom card classes from that css file
function Resume() {
    return (
        <main className='about-me-body'>
            <section className=' custom-card'>
                <h2 className='custom-card-header'>
                    Resume
                </h2>
                <div className='custom-card-body'>
                    <h5 className='skill-title'>Front-End Skills:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>

                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>Back-End Skills:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>

                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>
                    </ul >

                    <h5 className='skill-title'>Other Skills & Technology:</h5>
                    <ul className='skill-container'>
                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>

                        <div className='skill-item'>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS (Custom, Bootstrap, Bulma)</li>
                        <li>Node.js</li>
                        </div>
                    </ul >
                    <button>Download My Official Resume Here</button>
                </div>
            </section>
        </main>
    )
}

export default Resume;