import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './StickyButton.css'; // Import the CSS for the button

const StickyButton = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    // Navigate to the contact page when the button is clicked
    navigate('/contact');
  };

  return (
    <div className='sticky'>
      <button className="sticky-button" onClick={handleClick}>
        Enquire Now
      </button>
    </div>
  );
};

export default StickyButton;