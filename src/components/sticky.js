import React from 'react';
import './StickyButton.css'; // Import the CSS for the button

const StickyButton = () => {
  const handleScrollToEnquiry = () => {
    // Logic to scroll to the enquiry section
    const enquirySection = document.getElementById('enquiry'); // Ensure you have an element with this ID in your enquiry section
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="sticky-button" onClick={handleScrollToEnquiry}>
      Enquire Now
    </button>
  );
};

export default StickyButton;