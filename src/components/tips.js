import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './tips.css'// Link to the CSS file

const Tips = () => {
  return (
    <div className="container1">
      {/* Image Section */}
      <div className="image-section">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzd29tYW58ZW58MHx8MHx8fDA%3D" alt="Financial Expert" />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1>Get Free Commodity Tips</h1>
        <p>
          Welcome to nextleveltraders, your trusted partner in the financial
          markets. We specialize in providing precise commodity tips, stock market tips, and
          options tips to help you make informed trading decisions. Our mission is to empower
          traders and investors with reliable, timely, and actionable insights.
        </p>
        <p>
          Our team of experienced market analysts is dedicated to delivering accurate
          recommendations based on thorough research and market analysis. We cover a
          wide range of commodities, stocks, and options, ensuring you have the best
          strategies to maximize your returns.
        </p>
        <p>
          At nextleveltraders, we pride ourselves on our commitment to accuracy,
          expertise, and customer satisfaction. Our timely tips allow you to act quickly
          and seize market opportunities. Join our community and elevate your trading
          success with our expert guidance.
        </p>
      </div>
    </div>
  );
};

export default Tips;