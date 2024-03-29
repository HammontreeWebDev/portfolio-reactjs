import React from 'react';
import './aboutme.css';
import { FlipInXSection } from '../../utils/Animations';
import avatar from '../../assets/img/avatar.webp';

function AboutMe(props) {

    return (
        <>
        <main className='about-me-body main-bg'>
            <FlipInXSection className=' custom-card'>
                <h2 className='custom-card-header'>
                    About Me
                </h2>
                <div className='custom-card-body'>
                    <div className='name-container'>
                        <img className='avatar' src={avatar} alt='avatar of Kaileb Hammontree' />
                        <h5 className='card-title'><span className='card-name'>Kaileb Hammontree</span> | <span className='text-pink'>Full-Stack Developer</span></h5>
                    </div>
                    <p className='card-text'>
                        First of all, I want to thank you for taking the time out of your day to visit my website. We live in a society where most people turn to technology to make their lives easier. Sitting behind every application, website, gadget, or tool, there is someone who spent hours, days, months, or even years planning, developing, and debugging the very pieces of technology that we have all come to love and enjoy. My goal as a Full-Stack Web Developer is to do that for you.
                        <br />
                        <br />
                        My journey began in 2021 when I graduated from The University of Central Florida's Cyber Defense Professional Certificate Program. We spent 10 months learning several things from Computer Networking/Network Security all the way to Ethical Hacking and Game Theory. While I did enjoy the education I had received, I realized that cybersecurity was not what I actually wanted to do. The course that we took in Python opened up my eyes to all the cool things that programming had to offer, and so I began building silly text-based games that only worked in the CLI and unashamedly began showing them to all my friends and family.
                        <br />
                        <br />
                        In 2022, I decided to join the Full-Stack Web Development Bootcamp with UCF so that I could gain the knowledge and skills necessary to fuel my creative nature. I graduated with an A+ in December 2022. Now, I can build full-stack websites and applications! Every group project that I have been a part of has received high praise from my peers and leaders.
                        <br />
                        <br />
                        In June 2023, I founded Hammontree Full-Stack Solutions LLC, so that I could share my passion with you.
                        There is no doubt that my work ethic, practical experience, and knowledge will allow me to tackle any project that comes my way.
                        <br />
                        <br />
                        Feel free to navigate to the portfolio tab and check out various projects that I have completed. Hover over the preview of the project for more details on the technology that was used to build it, and click on the preview icon to be redirected to the application itself.
                        <br />
                        <br />
                        Again, thank you for being here. I am looking forward to hearing from you!
                    </p>
                </div>
            </FlipInXSection>
        </main>
        </>
    )
}

export default AboutMe;