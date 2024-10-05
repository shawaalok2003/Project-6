import React from 'react';
import './Service.css';
const Service = () => {
  return (
    <div className="features-container">
      <div className="left-column">
        <img 
          src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
      <div className="right-column">
        <div className="feature-item">
          <h2>Accuracy</h2>
          <p>We pride ourselves on the precision of our recommendations. Our commitment to accuracy means you get dependable advice, helping you make informed decisions and maximize your returns. Trust Accurate Commodity for tips that are timely, relevant, and profitable.</p>
        </div>
        <div className="feature-item">
          <h2>Timeliness</h2>
          <p>In the fast-paced world of trading, timing is crucial. We deliver our tips promptly, allowing you to act quickly and capitalize on market opportunities. Stay ahead of the curve with Accurate Commodity’s timely and actionable insights.</p>
        </div>
        <div className="feature-item">
          <h2>Expertise</h2>
          <p>Our team of seasoned market analysts brings years of experience and deep market knowledge to the table. Their insights are based on thorough research and a keen understanding of market dynamics, ensuring you receive the most reliable and effective trading tips.</p>
        </div>
        <div className="feature-item">
          <h2>Comprehensive Coverage</h2>
          <p>We offer a wide range of tips covering various commodities, stocks, and options. Whether you’re trading gold, crude oil, or looking for the best stock picks, our comprehensive coverage ensures you have the best strategies for diverse market scenarios.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;