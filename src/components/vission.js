import React from 'react';
import './vission.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      {/* Header Section */}
      <div className="header-section">
        <h2 className="header-title">Who We Are?</h2>
        <p className="header-subtitle">
          We offer expert trading signals in gold, silver, crude oil, and stocks
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="left-content">
          <h3 className="highlight-title">nextleveltraders Tips</h3>
          <h1 className="main-title">Trade Smarter, Profit More with nextleveltraders</h1>
        </div>

        <div className="right-content">
          <div className="mission-vision-container">
            <h3 className="section-title">Our Mission:</h3>
            <p className="section-description">
              Our mission at <strong>nextleveltraders</strong> is to deliver precise, timely, and comprehensive market tips that enable our clients to make informed trading decisions. We are committed to providing unparalleled expertise, fostering long-term client relationships, and continuously enhancing our services to meet the evolving needs of the financial markets. Through our dedication to accuracy, integrity, and innovation, we aim to support our clients' journey to financial success.
            </p>
          </div>

          <div className="mission-vision-container">
            <h3 className="section-title">Our Vision:</h3>
            <p className="section-description">
              Our vision is to be the leading provider of accurate and actionable financial market insights, empowering our clients to confidently navigate the complexities of global markets while achieving their financial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;