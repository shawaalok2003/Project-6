// import React, { useState } from 'react';
// import './ContactForm.css';


// const sendEmail = (e) => {
//   e.preventDefault();

//   // Send form data including the selected service
//   emailjs.sendForm('service_fdwm55x', 'template_lnzogh9', e.target, '0dEyKCtoBNMzKF9oi')
//     .then(() => {
//       window.alert("Message sent succesfully");
//       toast.success('Message sent successfully!', {
//         position: 'top-right',
//         autoClose: 1000,
//       });
//       setFormData({
//         name: '',
//         mobile: '',
//         email: '',
//         service: ''
//       });
//     })
//     .catch((error) => {
//       toast.error('Failed to send message, please try again.', {
//         position: 'top-center',
//         autoClose: 1000,
//       });
//       console.error('Email send error:', error);
//     });
// };


// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     message: '',
//     captcha: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <form className="contact-form" onSubmit={handleSubmit}>
//       <div className="form-row">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="form-row">
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone No: +1-202-555-0183"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="form-row">
//         <textarea
//           name="message"
//           placeholder="Type Your Message"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea>
//       </div>

//       <div className="form-row captcha-row">
//         <input
//           type="text"
//           name="captcha"
//           placeholder="10 + 11 ="
//           value={formData.captcha}
//           onChange={handleChange}
//         />
//         <button type="submit">SUBMIT</button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;







import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs for sending emails
import { toast } from 'react-toastify'; // For toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast CSS
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  });

  // Handle input change to update form state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fdwm55x', 'template_slhp2mf', e.target, '0dEyKCtoBNMzKF9oi')
      .then(() => {
        window.alert("Message sent succesfully");
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 1000,
        });
        // Reset form fields after success
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
          captcha: ''
        });
      })
      .catch((error) => {
        toast.error('Failed to send message, please try again.', {
          position: 'top-center',
          autoClose: 1000,
        });
        console.error('Email send error:', error);
      });
  };

  // Submit handler
  const handleSubmit = (e) => {
    sendEmail(e); // Call the sendEmail function on form submission
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
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <input
          type="tel"
          name="phone"
          placeholder="Phone No: +1-202-555-0183"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <textarea
          name="message"
          placeholder="Type Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-row captcha-row">
        <input
          type="text"
          name="captcha"
          placeholder="10 + 11 ="
          value={formData.captcha}
          onChange={handleChange}
          required
        />
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactForm;
