import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AccurateCommodity.css'; 
import { Link } from 'react-router-dom'; // Import custom CSS

const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center p-2">
        <p className="mb-0">India’s No.1 Commodity Signals Provider</p>
        <div className="d-flex">
          <div className="contact-info mx-3"><i className="bi bi-whatsapp"></i> Whatsapp: 8267907171</div>
          <div className="contact-info mx-3"><i className="bi bi-phone"></i> Phone: 8267907171</div>
          <div className="contact-info mx-3"><i className="bi bi-envelope"></i> Email: info@accurcommo.com</div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white custom-nav">
        <a className="navbar-brand" href="/">
          <img src="path-to-logo.png" alt="Accurate Commodity" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>A
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ai">Accurate AI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trial">Get Free Trial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="banner-section" style={{ backgroundImage: "url('path-to-background-image.jpg')" }}>
        <div className="container banner-content">
          <h1 className="display-4">Get Free Commodity Tips</h1>
          <p className="lead">Expert commodity tips in gold, silver, crude oil, and more. Reliable insights for traders.</p>

          {/* Form */}
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
    </div>
  );
};

export default Header;