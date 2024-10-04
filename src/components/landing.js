import React from "react";
import './LandingPage.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* 50% Background Image and Text Section */}
      <section className="half-background-section">
        <div className="text-side">
          <h2>Welcome to Accur AI</h2>
          <p>
            Accur AI leverages the power of machine learning to deliver highly accurate market predictions. Our system processes vast amounts of data to help you make informed trading decisions.
          </p>
        </div>
        <div className="background-side" />
      </section>

      {/* Image Left, Text Right Section */}
      <section className="image-text-section">
        <div className="image-container">
          <img src='' alt="AI and Market Analysis" />
        </div>
        <div className="text-container">
          <h2>Accurate Predictions Powered by AI</h2>
          <p>
            By analyzing extensive market data, Accur AI identifies trends that traditional analysis might miss. It’s your go-to tool for making smarter trading decisions.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;