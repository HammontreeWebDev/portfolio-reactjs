import React from 'react';
import { RollInDiv } from './Animations';

function Project(props) {
    return (
        <RollInDiv className='figure'>
            <img src={props.src} className="figure-img img-fluid rounded" alt={props.alt} />
                <figcaption className="figure-caption text-end">{props.caption}</figcaption>
        </RollInDiv>
    )
}

export default Project;