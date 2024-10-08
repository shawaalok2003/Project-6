// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './banner.css'; 
// import { Link } from 'react-router-dom'; // Import custom CSS

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm('service_jvrgc5e', 'template_oj4o7gq', form.current, 'HKKZMI3nv_iPdZtI9')
//     .then(
//       () => {
//         toast.success('Message sent successfully!', {
//           position: 'top-center',
//           autoClose: 1000, 
//         });
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       },
//       (error) => {
//         toast.error('Failed to send message, please try again.', {
//           position: 'top-center',
//           autoClose: 1000,
//         });
//         console.log('FAILED...', error.text);
//       }
//     );
// };

// const Banner1 = ()=> {
// return (
// <div className="banner-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx3b21lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
// <div className="container banner-content">
//   <h1 className="display-4">Get Free Commodity Tips</h1>
//   <p className="lead">We offers expert commodity tips in gold, silver, crude oil, natural gas, crude oil options, and base metals, empowering traders with reliable insights for trading in the commodities market.</p>
// </div>
// <div className="container banner7-content">
//   <div className="row justify-content-end">
//   <div className="col-md-3 d-flex flex-column align-items-end">
//     <input type="text" className="form-control mb-3 input-style" placeholder="Your Name" />
//     <input type="text" className="form-control mb-3 input-style" placeholder="Your Mobile" />
//     <input type="text" className="form-control mb-3 input-style" placeholder="Your Email" />
//     <select className="form-control mb-3 input-style">
//       <option>Choose Services</option>
//       <option>Gold Tips</option>
//       <option>Silver Tips</option>
//       <option>Crude Oil Tips</option>
//     </select>
//     <button className="btn btn-primary btn1-submit">Submit</button>
//   </div>
// </div>
// </div>
// </div>
// );
// };

// export default Banner1;




import React, { useState } from "react";
import emailjs from 'emailjs-com'; // Import emailjs for sending emails
import { toast } from 'react-toastify'; // Assuming you have react-toastify for notifications
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'; 

const Banner1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '' // Added service field
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Send form data including the selected service
    emailjs.sendForm('service_fdwm55x', 'template_lnzogh9', e.target, '0dEyKCtoBNMzKF9oi')
      .then(() => {
        window.alert("Message sent succesfully");
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 1000,
        });
        setFormData({
          name: '',
          mobile: '',
          email: '',
          service: ''
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

  return (
    <div className="banner-section" style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}>
      <div className="container banner-content">
        <h1 className="display-4">Get Free Commodity Tips</h1>
        <p className="lead">We offer expert commodity tips in gold, silver, crude oil, natural gas, crude oil options, and base metals, empowering traders with reliable insights for trading in the commodities market.</p>
      </div>
      <div className="container banner7-content">
        <div className="row justify-content-end">
          <div className="col-md-3 d-flex flex-column align-items-end">
            <form onSubmit={sendEmail}>
              <input type="text" className="form-control mb-3 input-style" placeholder="Your Name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="text" className="form-control mb-3 input-style" placeholder="Your Mobile" name="mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
              <input type="text" className="form-control mb-3 input-style" placeholder="Your Email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <select className="form-control mb-3 input-style" name="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                <option value="">Choose Service</option>
                <option value="Gold Tips">Bullion Accurate Lavel</option>
                <option value="Silver Tips">Basement super package </option>
                <option value="Crude Oil Tips">Energy blaster package </option>
                <option value="Crude Oil Tips">Next lavel All commodity package </option>
              </select>
              <button type="submit" className="btn btn-primary btn1-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
