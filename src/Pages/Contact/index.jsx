import React, { useState } from 'react';
import './contact.css';
import { RotateInUpRightSection } from '../../utils/Animations'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// const REACT_APP_SERVICE_ID = process.env(REACT_APP_SERVICE_ID);
// const REACT_APP_TEMPLATE_ID = process.env(REACT_APP_TEMPLATE_ID);
// const REACT_APP_USER_ID = process.env(REACT_APP_USER_ID);


function Contact(props) {

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    // when the form is submitted, send email to emailjs server so it can be forwarded to my email
    const handleOnSubmit = (e) => {
        const nameInput = document.querySelector('#nameInput');
        const emailInput = document.querySelector('#emailInput');
        const messageInput = document.querySelector('#messageInput');

        e.preventDefault();

        if (nameInput.value && emailInput.value && messageInput.value) {
            if (!isValidEmail(emailInput.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Email',
                    text: 'Please enter a valid email address.',
                });
                return;
            }

            emailjs
                .sendForm(serviceID, templateID, e.target, userID)
                .then((response) => {
                    console.log(response.text);
                    Swal.fire({
                        icon: 'success',
                        title:
                            'Your Message Was Sent Successfully. Please Allow 24-72 Business Hours For Kaileb To Respond.',
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Uh Oh! There was an error processing your request',
                        text:
                            'I apologize, please send me an email directly at hammontreewebdevelopment@gmail.com',
                    });
                    console.log(error);
                });

            e.target.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Uh Oh! There was an error processing your request',
                text:
                    'Hello, please make sure that you have filled out all of the required fields before your request can be processed.',
            });
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // use state changes / ternarys / if statements to evaluate onChange / mouseLeave and e.target.values to determine whether the information the user has put in is acceptable, if it is no message is shown, if it is not then the user will recieve a warning message.
    const [nameRequired, setNameRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [messageRequired, setMessageRequired] = useState(false);

    const blankName = (e) => {
        if (e.target.value === '') {
            setNameRequired(true);
        }
    };
    const blankEmail = (e) => {
        if (e.target.value === '') {
            setEmailRequired(true);
        }
    };
    const blankMessage = (e) => {
        if (e.target.value === '') {
            setMessageRequired(true);
        }
    };
    const validName = () => {
        setNameRequired(false);
    }
    const validEmail = (e) => {
        setEmailRequired(false);
        if (/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
            setCheckEmail(false);
        }
        else {
            setCheckEmail(true);
        }
    }
    const validMessage = () => {
        setMessageRequired(false);
    }

    const isNameRequired = nameRequired ? <span className='text-danger'> * required</span> : null;
    const isEmailRequired = emailRequired ? <span className='text-danger'> * required</span> : null;
    const isEmailValid = checkEmail ? <span className='text-danger'> * please enter a valid email address</span> : null;
    const isMessageRequired = messageRequired ? <span className='text-danger'> * required</span> : null;

    // border: none; min-height: 600px

    // adjust height of iframe
    const iframe = document.querySelector('#myIframe');
    const [height, setHeight] = useState('0px');
    const ref = React.useRef();
    const adjustHeight = () => {
        // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px');
    }

    return (
        <>
            <main className='contact-main'>

                <RotateInUpRightSection className='form-card'>
                    <h2 className='form-header'>General Inquiry Form</h2>
                    <form className='form-card-body' onSubmit={handleOnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name:{isNameRequired} </label>
                            <input type="text" className="form-control" id="nameInput" name='from_name' placeholder="First Name Last Name" onMouseLeave={blankName} onChange={validName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email address:{isEmailRequired}{isEmailValid}</label>
                            <input type="email" className="form-control" id="emailInput" name='from_email' placeholder="myemail@example.com" onMouseLeave={blankEmail} onChange={validEmail} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='messageInput' className="form-label">Message:{isMessageRequired}</label>
                            <textarea className="form-control" id="messageInput" rows="6" name='message' onMouseLeave={blankMessage} onChange={validMessage}></textarea>
                        </div>
                        <button className='custom-btn hvr-shrink' type='submit'>Submit</button>
                    </form>
                </RotateInUpRightSection>

                <RotateInUpRightSection className='form-card interest-form'>
                    <h2 className='form-header'>Start Your Project 
                    <br />
                    <span className='consult-text'>
                        Book Now For A&nbsp;
                    <a id="consult" href='https://app.hellobonsai.com/s/kaileb-hammontree-1/consultation' target='_blank' rel="noopener noreferrer" className='consult-link'>Free Consultation</a>
                    </span>
                    </h2>
                    {/* <button className='custom-btn'>Get Started</button> */}
                    <iframe title='interest-form' id='interest-iframe' src="https://app.hellobonsai.com/f/a14a29cd17402aa?embed=true" width="100%" height="100%" style={{ border: 'none' }}></iframe>
                </RotateInUpRightSection>
            </main>
        </>
    );
};

export default Contact;