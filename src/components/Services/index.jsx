import React from "react";
import './services.css';
import { Icon } from '@iconify/react';

function Services() {
    return (
        <main className="services-main">
            <h1>Web Development <Icon icon="icon-park-solid:locking-web"/></h1>
            <div className="sub-container">

                <section className="service-column">
                    <h2>Full-Stack</h2>
                    <p>For websites and applications that need dynamic and flexible data retrieval</p>
                    <ul>
                        <li><Icon className="service-icon" icon="devicon:mongodb" />MongoDB</li>
                        <li><Icon className="service-icon" icon="skill-icons:expressjs-light" />Express.js</li>
                        <li><Icon className="service-icon" icon="logos:react" />React.js</li>
                        <li><Icon className="service-icon" icon="devicon:nodejs" />Node.js</li>
                        <li><Icon className="service-icon" icon="skill-icons:apollo" />Apollo</li>
                        <li><Icon className="service-icon" icon="skill-icons:graphql-dark" />GraphQL</li>
                    </ul>
                </section>

                <section className="service-column">
                    <h2>Front-End</h2>
                    <p>For landing pages, portfolios, and other websites that don't require a server to be set up</p>
                    <ul>
                        <li><Icon className="service-icon" icon="devicon:html5" />HTML5</li>
                        <li><Icon className="service-icon" icon="devicon:css3" />CSS3</li>
                        <li><Icon className="service-icon" icon="logos:react" />React.js</li>
                        <li><Icon className="service-icon" icon="devicon:javascript" />JavaScript</li>
                        <li><Icon className="service-icon" icon="devicon:jquery" />jQuery</li>
                    </ul>
                </section>

                <section className="service-column">
                    <h2>Back-End</h2>
                    <p>Additional back-end technology to suit your needs</p>
                    <ul>
                        <li><Icon className="service-icon" icon="devicon:mysql" />MySQL</li>
                        <li><Icon className="service-icon" icon="vscode-icons:file-type-sql" />SQL</li>
                    </ul>
                </section>

            </div>
        </main>
    )
}

export default Services;