import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>nextleveltraders</h3>
          <p className="footer-description">
            We provide expert trading signals in gold, silver, crude oil, and stocks to help you make better trading decisions.
          </p>
          <ul className="footer-links">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 nextleveltraders. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;