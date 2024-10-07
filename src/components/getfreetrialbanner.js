import React from 'react';
import './GetFreeCommodityTips.css';

const GetFreeCommodityTips = () => {
  return (
    <div className="commodity-container">
      <div className="commodity-content">
        <h1>Get Free Commodity Tips</h1>
        <p>
          We offer expert commodity tips in gold, silver, crude oil, natural gas,
          crude oil options, and base metals, empowering traders with reliable
          insights for trading in the commodities market.
        </p>
        <form className="commodity-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="tel" placeholder="Phone" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <select className="input-field">
            <option>Choose Services</option>
            <option>Gold</option>
            <option>Silver</option>
            <option>Crude Oil</option>
            <option>Natural Gas</option>
            <option>Base Metals</option>
          </select>
          <button type="submit" className="trial-btn">Get Free Trial</button>
        </form>
      </div>
    </div>
  );
};

export default GetFreeCommodityTips;