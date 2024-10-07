import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AccurateCommodity.css'; 
import { Link } from 'react-router-dom'; // Import custom CSS

const Header = () => {
  return (
    <div className="sticky">
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center p-2">
        <p className="mb-0">India’s No.1 Commodity Signals Provider</p>
        <div className="d-flex">
          <div className="contact-info mx-3"><i className="bi bi-whatsapp"></i> Whatsapp: 8267907171</div>
          <div className="contact-info mx-3"><i className="bi bi-phone"></i> Phone: 8267907171</div>
          <div className="contact-info mx-3"><i className="bi bi-envelope"></i> Email: Lead@nextleveltraders.in</div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white custom-nav">
        <a className="navbar-brand" href="/">
          <img src="path-to-logo.png" alt="Accurate Commodity" className="logo logooo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/accurate">Accurate AI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/getfreetrial">Get Free Trial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav></div>
  );
};

export default Header;