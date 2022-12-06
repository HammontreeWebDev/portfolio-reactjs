import React from 'react';
import './contact.css';
import { RotateInUpRightMain } from '../../utils/Animations'

function Contact() {
    return (
        <RotateInUpRightMain className='contact-main'>
            <section className='form-card'>
                <h2 className='form-header'>Contact</h2>
                <div className='form-card-body'>
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="First Name Last Name" />
                </div>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="myemail@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor='messageInput' className="form-label">Message:</label>
                    <textarea className="form-control" id="messageInput" rows="6"></textarea>
                </div>
                <button className='custom-btn hvr-shrink' type='submit'>Submit</button>
                </div>
            </section>
        </RotateInUpRightMain>
    )
}

export default Contact;