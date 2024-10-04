import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img
          src="path-to-image.jpg"
          alt="Person"
          className="profile-image"
        />
      </div>

      <div className="text-section">
        <div className="row">
          <div className="feature-container">
            <h2 className="feature-title">Accuracy</h2>
            <p className="feature-description">
              We pride ourselves on the precision of our recommendations...
            </p>
          </div>

          <div className="feature-container">
            <h2 className="feature-title">Expertise</h2>
            <p className="feature-description">
              Our team of seasoned market analysts brings years of experience...
            </p>
          </div>
        </div>

        <div className="row">
          <div className="feature-container">
            <h2 className="feature-title">Timeliness</h2>
            <p className="feature-description">
              In the fast-paced world of trading, timing is crucial...
            </p>
          </div>

          <div className="feature-container">
            <h2 className="feature-title">Comprehensive Coverage</h2>
            <p className="feature-description">
              We offer a wide range of tips covering various commodities...
            </p>
          </div>
        </div>

        {/* Add another row of content */}
        <div className="row">
          <div className="feature-container">
            <h2 className="feature-title">Customer Support</h2>
            <p className="feature-description">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
          </div>

          <div className="feature-container">
            <h2 className="feature-title">Innovation</h2>
            <p className="feature-description">
              We stay ahead of the curve by constantly innovating and adapting to market changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;