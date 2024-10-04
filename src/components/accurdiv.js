import React from 'react';
import './accurdiv.css'; // Importing CSS file for styling

const Accurdiv = () => {
  return (
    <div className="accurAI-section2">
      <div className="accurAI-row">
        <div className="accurAI-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt="AI Image"
        />
        </div>
        <div className="accurAI-text">
          <h3>Applications in Commodity and Stock Markets</h3>
          <p>
            Accur AI’s capabilities have a profound impact on trading strategies in the commodity and stock markets. 
            In commodities, Accur AI can predict price movements for assets like gold, silver, and crude oil, helping traders make informed decisions. 
            In the stock market, Accur AI analyzes various factors such as stock performance, market sentiment, and economic indicators to provide accurate buy and sell calls.
          </p>
        </div>
      </div>
      
      <div className="accurAI-row">
        <div className="accurAI-text">
          <h3>The Future of Trading with Accur AI</h3>
          <p>
            As the financial markets generate more data at an unprecedented rate, the need for advanced analysis tools like Accur AI becomes increasingly critical. 
            By leveraging machine learning, Accur AI not only manages and interprets large datasets but also provides actionable insights that drive profitable trading decisions.
          </p>
        </div>
        <div className="accurAI-image">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt="teamImage"
        />
        </div>
      </div>
    </div>
  );
};

export default Accurdiv;
