import React, { useState } from 'react';
import './contact.css';
import { FadeInDiv, RotateInUpRightSection } from '../../utils/Animations'
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
        if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.target.value)) {
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

            <FadeInDiv id='interest-container'>
                <iframe ref={ref} id='myIframe' src="https://app.hellobonsai.com/f/a14a29cd17402aa?embed=true" width='100%' height={height} onLoad={adjustHeight} onLoadedData={adjustHeight} style={{ border: 'none'}}></iframe>
            </FadeInDiv>
        </main>
    );
};

export default Contact;