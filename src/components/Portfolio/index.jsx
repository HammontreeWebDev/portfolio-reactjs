import React from 'react';
import { ZoomInRightDiv } from '../../utils/Animations';
import './portfolio.css';
import { Icon, enableCache } from '@iconify/react';

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

function Project(props) {
    return (
        <ZoomInRightDiv className='custom-figure'>
            <img src={props.src} className="custom-figure-img" alt={props.alt} />
            <div className='custom-figure-content'>
                <h1 className='project-title'>{props.appTitle}</h1>
                <p className='project-content'> <strong>Built With: </strong><span className='alt-color'>{props.content}</span></p>
                <div className='project-icon-container'>
                    <a className='project-links' href={props.repository} target='_blank' onClick={props.click}><Icon icon="uim:github-alt" /></a>
                    <a className='project-links' href={props.deployment} target='_blank'><Icon icon="eos-icons:application-instance" /></a>
                </div>
            </div>
        </ZoomInRightDiv>
    )
}

export default Project;