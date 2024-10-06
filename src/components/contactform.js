import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          type="tel"
          name="phone"
          placeholder="Phone No: +1-202-555-0183"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <textarea
          name="message"
          placeholder="Type Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-row captcha-row">
        <input
          type="text"
          name="captcha"
          placeholder="10 + 11 ="
          value={formData.captcha}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactForm;