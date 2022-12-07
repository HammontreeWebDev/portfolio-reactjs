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
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: `success`,
              title: `Message Sent Successfully`
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: `error`,
              title: `Ooops, something went wrong`,
              text: error.text,
            })
          });
        e.target.reset()
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