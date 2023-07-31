import React from 'react';
import './ContactForm.css';
import contactImage from '../../img/contac-us.svg'

const ContacForm = () => {
  return(
    <section id="contact-form" className="vertical-align">
      <div className="wrapper row vertical-align">


        <div className="form-container col-md-6">

          <div className="form-title">
            <h2>Get a Free Consultancy</h2>
            <p>Let me know what you need and I'll call you back for a free consultancy!</p>
          </div>

          <form id="contactForm">
            
            {/* <!-- Name input --> */}
            <div className="mb-3">
              <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
            </div>

            {/* <!-- Email address input --> */}
            <div className="mb-3">
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
              <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
              <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>

            {/* <!-- Message input --> */}
            <div className="message mb-3">
              <textarea className="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required"></textarea>
              <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
            </div>

            {/* <!-- Form subcontacForms success message --> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">Form subcontacForm successful!</div>
            </div>

            {/* <!-- Form subcontacForms error message --> */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>

            {/* <!-- Form submit button --> */}
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          
          </form>
        </div>

        <div className="contacForm-content-wrapper col-md-6">
          <img src={contactImage}></img>
        </div>


      </div>
    </section>
  )
}

export default ContacForm;