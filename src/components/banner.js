import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'; 
import { Link } from 'react-router-dom'; // Import custom CSS

const Banner1 = ()=> {
return (
<div className="banner-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx3b21lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
<div className="container banner-content">
  <h1 className="display-4">Get Free Commodity Tips</h1>
  <p className="lead">We offers expert commodity tips in gold, silver, crude oil, natural gas, crude oil options, and base metals, empowering traders with reliable insights for trading in the commodities market.</p>
</div>
<div className="container banner7-content">
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
    <button className="btn btn-primary btn1-submit">Submit</button>
  </div>
</div>
</div>
</div>
);
};

export default Banner1;