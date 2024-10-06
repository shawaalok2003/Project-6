import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Get In Touch!</h2>
      <p>
        At Accurate Commodity, we value your feedback and are here to assist you with any questions or concerns.
      </p>
      <div className="contact-methods">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Call Us:</p>
          <a href="tel:+918267907171">+91 8267907171</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Whatsapp</p>
          <a href="https://wa.me/918267907171">+91 8267907171</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email Us:</p>
          <a href="mailto:support@accurcommo.com">support@accurcommo.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;