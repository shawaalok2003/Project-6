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
    <div className="banner-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx3b21lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
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
                <option value="Gold Tips">Gold Tips</option>
                <option value="Silver Tips">Silver Tips</option>
                <option value="Crude Oil Tips">Crude Oil Tips</option>
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
