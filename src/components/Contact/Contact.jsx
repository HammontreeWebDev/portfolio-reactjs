import React from 'react';
import './contact.css';
import { RotateInUpRightMain } from '../../utils/Animations'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// const REACT_APP_SERVICE_ID = process.env(REACT_APP_SERVICE_ID);
// const REACT_APP_TEMPLATE_ID = process.env(REACT_APP_TEMPLATE_ID);
// const REACT_APP_USER_ID = process.env(REACT_APP_USER_ID);


function Contact() {

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    // when the form is submitted, send email to emailjs server so it can be forwarded to my email
    const handleOnSubmit = (e) => {

        const nameInput = document.querySelector('#nameInput');
        const emailInput = document.querySelector('#emailInput');
        const messageInput = document.querySelector('#messageInput');

        e.preventDefault();
        if (nameInput.value && emailInput.value && messageInput.value !== '') {
            emailjs.sendForm(serviceID, templateID, e.target, userID)
                .then((response) => {
                    console.log(response.text);
                    Swal.fire({
                        icon: `success`,
                        title: `Your Message Was Sent Successfully. Please Allow 24-72 Business Hours For Kaileb To Respond.`
                    })
                }, (error) => {
                    Swal.fire({
                        icon: `error`,
                        title: `Uh Oh! There was an error processing your request`,
                        text: 'I apologize, please send me an email directly at hammontreewebdevelopment@gmail.com',
                    })
                    console.log(error);
                });
            e.target.reset()
        }
        else {
            Swal.fire({
                icon: `error`,
                title: `Uh Oh! There was an error processing your request`,
                text: 'Hello, please make sure that you have filled out all of the required fields before your request can be processed.',
            })
        }
    };

    return (
        <RotateInUpRightMain className='contact-main'>
            <section className='form-card'>
                <h2 className='form-header'>Contact</h2>
                <form className='form-card-body' onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="nameInput" name='from_name' placeholder="First Name Last Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="emailInput" name='from_email' placeholder="myemail@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='messageInput' className="form-label">Message:</label>
                        <textarea className="form-control" id="messageInput" rows="6" name='message'></textarea>
                    </div>
                    <button className='custom-btn hvr-shrink' type='submit'>Submit</button>
                </form>
            </section>
        </RotateInUpRightMain>
    )
}

export default Contact;