import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AccurateCommodity.css'; 
import { Link } from 'react-router-dom'; // Import custom CSS

const Banner1 = ()=> {
return (
<div className="banner-section" style={{ backgroundImage: "url('path-to-background-image.jpg')" }}>
<div className="container banner-content">
  <h1 className="display-4">Get Free Commodity Tips</h1>
  <p className="lead">Expert commodity tips in gold, silver, crude oil, and more. Reliable insights for traders.</p>

  <div className="row justify-content-end">
  <div className="col-md-3 d-flex flex-column align-items-end">
    <input type="text" className="form-control mb-3 input-style" placeholder="Your Name" />
    <input type="text" className="form-control mb-3 input-style" placeholder="Your Mobile" />
    <select className="form-control mb-3 input-style">
      <option>Choose Services</option>
      <option>Gold Tips</option>
      <option>Silver Tips</option>
      <option>Crude Oil Tips</option>
    </select>
    <button className="btn btn-primary btn-submit">Submit</button>
  </div>
</div>
</div>
</div>
);
};

export default Banner1;