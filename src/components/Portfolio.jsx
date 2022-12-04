import React from 'react';
import { RollInDiv } from './Animations';

function Project() {
    return (
        <RollInDiv className='figure'>
            <img src="..." className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
        </RollInDiv>
    )
}

export default Project;