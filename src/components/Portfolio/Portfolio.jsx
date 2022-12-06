import React from 'react';
import { ZoomInRightATag } from '../../utils/Animations';
import './portfolio.css';

function Project(props) {
    return (
        <ZoomInRightATag className='custom-figure' href={props.href}>
            <img src={props.src} className="custom-figure-img" alt={props.alt} />
            <div className='custom-figure-content'>
                <h1 className='project-title'>{props.appTitle}</h1>
                <p className='project-content'> <strong>Built With: </strong><span className='alt-color'>{props.content}</span></p>
            </div>
        </ZoomInRightATag>
    )
}

export default Project;